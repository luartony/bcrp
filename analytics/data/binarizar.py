#!/usr/bin/env python2

from PIL import Image
from PIL import ImageFilter
import numpy
import argparse
import os


def remove_gradient(pi, w, h, threshold):
	a1, a2, b1, b2 = pi[0][0], pi[h-1][0], pi[0][w-1], pi[h-1][w-1]

	def compute_noise(r, c):
		t = a1 - ((a1 - b1)/(w - 1.0))*c
		b = a2 - ((a2 - b2)/(w - 1.0))*c
		ans = t + (b-t)*r/(h - 1.0)
		return int(ans)

	ans = numpy.array(pi)
	for r in range(h):
		for c in range(w):
			if abs(pi[r,c] - compute_noise(r, c)) < threshold:
				ans[r, c] = 0

	return ans


def remove_line(pi, w, h, threshold):
	ans = numpy.array(pi)

	for r in range(h):
		for c in range(w):
			if pi[r, c] > threshold:
				ans[r, c] = 0

	return ans


def to_binary(source, dest, threshold=10):
	im = Image.open(source)
	bim = im.convert('L').point(lambda x: 255 - x)
	pi = numpy.array(bim)
	w, h = bim.size

	#pi = remove_gradient(pi, w, h, threshold)
	#pi = remove_line(pi, w, h, 220)

	# for r in range(h):
	# 	for c in range(w):
	# 		pi[r,c] = 255 if pi[r,c] > 127 else 0

	bim = Image.fromarray(pi, 'L')
	bim.save(dest)


def main(source, dest):
	if not os.path.isdir(source):
		print('Incorrect source folder')
		return
	if not os.path.isdir(dest):
		print('Incorrect targer folder')
		return

	for fname in os.listdir(source):
		to_binary(os.path.join(source, fname), os.path.join(dest, fname))
		print('Converted ' + fname)


def load_arguments():
	parser = argparse.ArgumentParser()
	parser.add_argument('source', type=str)
	parser.add_argument('dest', type=str)
	return parser.parse_args()


if __name__ == "__main__":
	args = load_arguments()
	main(args.source, args.dest)
import numpy
from keras.datasets import mnist
from keras.models import Sequential
from keras.layers import Dense
from keras.layers import Dropout
from keras.layers import Flatten
from keras.layers.convolutional import Conv2D
from keras.layers.convolutional import MaxPooling2D
from keras.utils import np_utils
from keras import backend as K
K.set_image_dim_ordering('th')
seed = 7
numpy.random.seed(seed)
# load data
(X_train, y_train), (X_test, y_test) = mnist.load_data()
# entrenamiento
X_train = X_train.reshape(X_train.shape[0], 1, 28, 28).astype('float32')
X_test = X_test.reshape(X_test.shape[0], 1, 28, 28).astype('float32')
# binarizacionad
y_train = X_train / 255
y_test = X_test / 255
# Entrenamiento para cada digito y calculo de rendimiento
y_model1 = np_utils.getNeuralNetworks (y_train,0)
y_model2 = np_utils.getNeuralNetworks(y_train,1)
y_model3 = np_utils.getNeuralNetworks(y_train,2)
y_model3 = np_utils.getNeuralNetworks(y_train,3)
y_model4 = np_utils.getNeuralNetworks(y_train,4)
y_model5 = np_utils.getNeuralNetworks(y_train,5)
y_model6 = np_utils.getNeuralNetworks(y_train,6)
y_model7 = np_utils.getNeuralNetworks(y_train,7)
y_model8 = np_utils.getNeuralNetworks(y_train,8)
y_model9 = np_utils.getNeuralNetworks(y_train,9)

#imprimiendo el rendimiento
print np_utils.evaluate(y_test0)
print np_utils.evaluate(y_test1)
print np_utils.evaluate(y_test2)
print np_utils.evaluate(y_test3)
print np_utils.evaluate(y_test4)
print np_utils.evaluate(y_test5)
print np_utils.evaluate(y_test6)
print np_utils.evaluate(y_test7)
print np_utils.evaluate(y_test8)
print np_utils.evaluate(y_test9)
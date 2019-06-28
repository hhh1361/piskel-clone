import canvasFunctions from './components/canvas-creation-functions';
import { instrumentsFunction, penSizeFunction } from './components/instruments-functions';
import testFunc from './components/test';
import fullscreenFunction from './components/fullscreen-function';
import canvasInformationFunction from './components/canvas-information-function';
import drawingFunctionPen from './components/drawing-function-pen';
import drawingFunctionVerticalMirrorPen from './components/drawing-function-vertical-mirror-pen';
import drawingFunctionEraser from './components/drawing-function-eraser';
import drawingFunctionPixels from './components/drawing-function-paint-all-pixels-of-the-same-color';


canvasFunctions();
instrumentsFunction();
penSizeFunction();
testFunc();
fullscreenFunction();
canvasInformationFunction();
drawingFunctionPen();
drawingFunctionVerticalMirrorPen();
drawingFunctionEraser();
drawingFunctionPixels();

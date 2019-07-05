import canvasFunctions from './components/canvas-creation-functions';
import { instrumentsFunction, penSizeFunction } from './components/instruments-functions';
import testFunc from './components/test';
import fullscreenFunction from './components/fullscreen-function';
import canvasInformationFunction from './components/canvas-information-function';
import drawingFunctionPen from './components/drawing-function-pen';
import drawingFunctionVerticalMirrorPen from './components/drawing-function-vertical-mirror-pen';
import drawingFunctionHorizontalMirrorPen from './components/drawing-function-horizontal-mirror-pen';
import drawingFunctionEraser from './components/drawing-function-eraser';
import drawingFunctionPixels from './components/drawing-function-paint-all-pixels-of-the-same-color';
import drawingFunctionColorPicker from './components/drawing-function-color-picker';
import drawingFunctionStroke from './components/drawing-function-stroke';
import drawingFunctionRectangle from './components/drawing-function-rectangle';
import drawingFunctionLighten from './components/drawing-function-lighten';
import frameManagement from './components/frame-management-functions';
import keysFunction from './components/keys-functions';

canvasFunctions();
instrumentsFunction();
penSizeFunction();
testFunc();
fullscreenFunction();
canvasInformationFunction();
drawingFunctionPen();
drawingFunctionVerticalMirrorPen();
drawingFunctionHorizontalMirrorPen();
drawingFunctionEraser();
drawingFunctionPixels();
drawingFunctionColorPicker();
drawingFunctionStroke();
drawingFunctionRectangle();
drawingFunctionLighten();
frameManagement();
keysFunction();

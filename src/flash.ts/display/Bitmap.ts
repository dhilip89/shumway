/**
 * Copyright 2013 Mozilla Foundation
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Class: Bitmap
module Shumway.AVM2.AS.flash.display {
  import notImplemented = Shumway.Debug.notImplemented;
  export class Bitmap extends flash.display.DisplayObject {
    
    // Called whenever the class is initialized.
    static classInitializer: any = null;
    
    // Called whenever an instance of the class is initialized.
    static initializer: any = null;
    
    // List of static symbols to link.
    static staticBindings: string [] = null; // [];
    
    // List of instance symbols to link.
    static bindings: string [] = null; // [];
    
    constructor (bitmapData: flash.display.BitmapData = null, pixelSnapping: string = "auto", smoothing: boolean = false) {
      bitmapData = bitmapData; pixelSnapping = "" + pixelSnapping; smoothing = !!smoothing;
      false && super();
      notImplemented("Dummy Constructor: public flash.display.Bitmap");
    }
    
    // JS -> AS Bindings
    
    
    // AS -> JS Bindings
    
    _pixelSnapping: string;
    _smoothing: boolean;
    _bitmapData: flash.display.BitmapData;

    get pixelSnapping(): string {
      return this._pixelSnapping;
    }

    set pixelSnapping(value: string) {
      this._pixelSnapping = "" + value;
    }

    get smoothing(): boolean {
      return this._smoothing;
    }

    set smoothing(value: boolean) {
      this._smoothing = !!value;
    }

    get bitmapData(): flash.display.BitmapData {
      return this._bitmapData;
    }

    set bitmapData(value: flash.display.BitmapData) {
      //value = value;
      this._bitmapData = value;
      this._invalidate();
    }

    ctor(bitmapData: flash.display.BitmapData, pixelSnapping: string, smoothing: boolean): void {
      //bitmapData = bitmapData;
      this._bitmapData = bitmapData;
      this._pixelSnapping = "" + pixelSnapping;
      this._smoothing = !!smoothing;
    }
  }
}
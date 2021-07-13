
function body(bodytype) {
    var table = '';
    if (bodytype == 'J72A') {
        table = ` <tr>
        <td rowspan="4">Cửa trước và cửa sau</td>
        <td rowspan="2">09</td>
        <td>Gap</td>
        <td>3.6+1.0/-0.7</td>
        <td>2.9~4.6</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="09GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        
        <tr>
        <td>Step</td>
        <td>0.1±1.0</td>
        <td>-0.9~+1.1</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="09StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        
        
        <tr>
        <td rowspan="2">10</td>
        <td>Gap</td>
        <td>3.5+1.0/-0.7 </td>
        <td>2.8~4.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="10GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        
        <tr>
        
        <td>Step</td>
        <td>-0.4±1.0</td>
        <td>-0.6~+1.4</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="10StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        
        <tr>
        <td rowspan="4">Cửa sau và mảng hông</td>
        <td rowspan="2">11</td>
        <td>Gap</td>
        <td>3.8±1.0</td>
        <td>-2.8~4.8</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="11GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        
        <tr>
        <td>Step</td>
        <td>0.5±1.0</td>
        <td>-0.5~+1.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="11StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        
        <tr>
        <td rowspan="2">12</td>
        <td>Gap</td>
        <td>4.0±1.0</td>
        <td>3.0~5.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="12GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        
        <tr>
        <td>Step</td>
        <td>-0.4±1.0</td>
        <td>-1.4~+0.6</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="12StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="6">Cốp sau và mảng hông</td>
        <td rowspan="2">13</td>
        <td>Gap</td>
        <td>5.3+1.0</td>
        <td>4.3~6.3</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="13GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
    
        <tr>
        <td>Step</td>
        <td>-0.9±1.0 </td>
        <td>-1.9~0.1</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="13StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
    
        <tr>
        <td rowspan="2">14</td>
        <td>Gap</td>
        <td>3.0±1.5</td>
        <td>1.5~4.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="14GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step</td>
        <td>0±1.5</td>
        <td>-1.5~+1.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="14StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">15</td>
        <td>Gap</td>
        <td>3.0±1.5</td>
        <td>1.5~4.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="15GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step</td>
        <td>0±1.5</td>
        <td>-1.5~+1.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="15StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        
        <tr>
        <td rowspan="6">Cốp sau và mảng hông</td>
        <td rowspan="2">13</td>
        <td>Gap</td>
        <td>5.3±1.0 </td>
        <td>4.3~6.3</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="13GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step</td>
        <td>-0.9±1.0 </td>
        <td>-1.9~+0.1</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="13StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="2">14</td>
        <td>Gap</td>
        <td>3.0±1.5</td>
        <td>1.5~4.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="14GapLH" style="width: 80px;" placeholder="Sai số"/></td>       
        </tr>

        <tr>
        <td>Step</td>
        <td>0±1.5</td>
        <td>-1.5~+1.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="14StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        
        <tr>
        <td rowspan="2">15</td>
        <td>Gap</td>
        <td>3.0±1.5</td>
        <td>1.5~4.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="15GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step</td>
        <td>0±1.5</td>
        <td>-1.5~+1.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="15StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="4">Cửa sau và mảng hông</td>
        <td rowspan="2">11</td>
        <td>Gap</td>
        <td>3.8±1.0</td>
        <td>2.8~4.8</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="11GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step</td>
        <td>0.5±1.0</td>
        <td>-0.5~+1.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="11StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">12</td>
        <td>Gap</td>
        <td>4.0±1.0</td>
        <td>3.0~5.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="12GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step</td>
        <td>-0.4±1.0 </td>
        <td>-1.4~+0.6</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="12StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="4">Cửa trước và cửa sau</td>
        <td rowspan="2">09</td>
        <td>Gap</td>
        <td>3.6+1.0/-0.7</td>
        <td>2.9~4.6</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="09GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step</td>
        <td>0.1±1.0</td>
        <td>-0.9~+1.1</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="09StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        
        <tr>
        <td rowspan="2">10</td>
        <td>Gap</td>
        <td>3.5+1.0/-0.7 </td>
        <td>2.8~4.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="10GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        
        <tr>
        <td>Step</td>
        <td>-0.4±1.0</td>
        <td>-0.6 ~+1.4</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="10StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        
        <tr>
        <td rowspan="4">Gò má và cửa trước</td>
        <td rowspan="2">07</td>
        <td>Gap</td>
        <td>3.7+1.0/-0.8</td>
        <td>2.9~4.7</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="07GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step</td>
        <td>-0.4±1.0 </td>
        <td>-1.4~+0.6</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="07StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">08</td>
        <td>Gap</td>
        <td>4.0+1.0/-0.8</td>
        <td>3.3~5.1</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="08GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        
        <tr>
        <td>Step</td>
        <td>0.2±1.0 </td>
        <td>-0.8~+1.2</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="08StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">Gò má và trụ kính</td>
        <td>05</td>
        <td>Gap</td>
        <td>2.6±1.6 </td>
        <td>1.0~4.2</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="05GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>06</td>
        <td>Gap</td>
        <td>2.4±1.6 </td>
        <td>0.8~4.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="06GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="8">Capo và Gò Má</td>
        <td rowspan="2">01</td>
        <td>Gap</td>
        <td>3.7±1.0</td>
        <td>2.7~4.7</td>
        <td>LH: <input type="number"  step="0.01" class="form-control" id="01GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step (cử)</td>
        <td>3.0±1.0 </td>
        <td>2.0~4.0</td>
        <td>LH: <input type="number"  step="0.01" class="form-control" id="01StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">02</td>
        <td>Gap</td>
        <td>3.6±1.0 </td>
        <td>2.6~4.6</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="02GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <td>Step (cử)</td>
        <td>3.0±1.0 </td>
        <td>2.0~4.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="02StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">03</td>
        <td>Gap</td>
        <td>3.5±1.0 </td>
        <td>2.5~4.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="03GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <td>Step (cử)</td>
        <td>3.0±1.0</td>
        <td>2.0~4.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="03StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>  
        <td rowspan="2">04</td>
        <td>Gap</td>
        <td>4.3+1.0/-0.7</td>
        <td>3.6~5.3</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="04GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step (cử)</td>
        <td>3.0±1.0</td>
        <td>2.0~4.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="04StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="8">Capo và Gò Má</td>
        <td rowspan="2">01</td>
        <td>Gap</td>
        <td>3.7±1.0</td>
        <td>2.7~4.7</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="01GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step (cử)</td>
        <td>3.0±1.0 </td>
        <td>2.0~4.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="01StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">02</td>
        <td>Gap</td>
        <td>3.6±1.0 </td>
        <td>2.6~4.6</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="02GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step (cử)</td>
        <td>3.0±1.0 </td>
        <td>2.0~4.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="02StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">03</td>
        <td>Gap</td>
        <td>3.5±1.0 </td>
        <td>2.5~4.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="03GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step (cử)</td>
        <td>3.0±1.0</td>
        <td>2.0~4.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="03StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">04</td>
        <td>Gap</td>
        <td>4.3+1.0/-0.7</td>
        <td>3.6~5.3</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="04GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step (cử)</td>
        <td>3.0±1.0</td>
        <td>2.0~4.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="04StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">Gò má và trụ kính</td>
        <td>05</td>
        <td>Gap</td>
        <td>2.6±1.6 </td>
        <td>1.0~4.2</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="05GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>06</td>
        <td>Gap</td>
        <td>2.4±1.6 </td>
        <td>0.8~4.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="06GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="4">Gò má và cửa trước</td>
        <td rowspan="2">07</td>
        <td>Gap</td>
        <td>3.7+1.0/-0.8</td>
        <td>2.9~4.7</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="07GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step</td>
        <td>-0.4±1.0 </td>
        <td>-1.4~+0.6</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="07StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">08</td>
        <td>Gap</td>
        <td>4.0+1.0/-0.8</td>
        <td>3.3~5.1</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="08GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step</td>
        <td>0.2±1.0 </td>
        <td>-0.8~+1.2</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="08StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        `;
    }
    else if (bodytype == 'J72K') {
        table = ` <tr>
        <td rowspan="4">Cửa trước và cửa sau</td>
        <td rowspan="2">09</td>
        <td>Gap</td>
        <td>3.4+1.0/-0.7</td>
        <td>2.7~4.4</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="09GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        
        <tr>
        <td>Step</td>
        <td>0.3±1.0</td>
        <td>-0.7~+1.3</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="09StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        
        
        <tr>
        <td rowspan="2">10</td>
        <td>Gap</td>
        <td>3.6+1.0/-0.7 </td>
        <td>2.9~4.6</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="10GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        
        <tr>
        <td>Step</td>
        <td>-0.3±1.0</td>
        <td>-1.3~+0.7</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="10StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        
        <tr>
        <td rowspan="4">Cửa sau và mảng hông</td>
        <td rowspan="2">11</td>
        <td>Gap</td>
        <td>4.0±1.0</td>
        <td>3.0~5.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="11GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        
        <tr>
        <td>Step</td>
        <td>0.8±1.0</td>
        <td>-0.2~+1.8</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="11StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        
        <tr>
        <td rowspan="2">12</td>
        <td>Gap</td>
        <td>4.1±1.0</td>
        <td>3.1~5.1</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="12GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        
        <tr>
        <td>Step</td>
        <td>-0.5±1.0 </td>
        <td>-1.5~+0.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="12StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="6">Cốp sau và mảng hông</td>
        <td rowspan="2">13</td>
        <td>Gap</td>
        <td>5.7+0.5/-1.5 </td>
        <td>4.2~6.2</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="13GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step</td>
        <td>-0.2±1.0 </td>
        <td>-1.2~+0.8</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="13StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="2">14</td>
        <td>Gap</td>
        <td>3.0±1.5 </td>
        <td>1.5~4.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="14GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step</td>
        <td>0±1.5</td>
        <td>-1.5~+1.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="14StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">15</td>
        <td>Gap</td>
        <td>3.0±1.5</td>
        <td>1.5~4.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="15GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step</td>
        <td>0±1.5</td>
        <td>-1.5~+1.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="15StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="6">Cốp sau và mảng hông</td>
        <td rowspan="2">13</td>
        <td>Gap</td>
        <td>5.7+0.5/-1.5 </td>
        <td>4.2~6.2</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="13GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step</td>
        <td>-0.2±1.0 </td>
        <td>-1.2~+0.8</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="13StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="2">14</td>
        <td>Gap</td>
        <td>3.0±1.5 </td>
        <td>1.5~4.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="14GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step</td>
        <td>0±1.5</td>
        <td>-1.5~+1.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="14StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">15</td>
        <td>Gap</td>
        <td>3.0±1.5</td>
        <td>1.5~4.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="15GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        
        <tr>
        <td>Step</td>
        <td>0±1.5</td>
        <td>-1.5~+1.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="15StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="4">Cửa sau và mảng hông</td>
        <td rowspan="2">11</td>
        <td>Gap</td>
        <td>4.0±1.0</td>
        <td>3.0~5.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="11GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step</td>
        <td>0.8±1.0</td>
        <td>-0.2~+1.8</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="11StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">12</td>
        <td>Gap</td>
        <td>4.1±1.0</td>
        <td>3.1~5.1</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="12GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step</td>
        <td>-0.5±1.0 </td>
        <td>-1.5~+0.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="12StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="4">Cửa trước và cửa sau</td>
        <td rowspan="2">09</td>
        <td>Gap</td>
        <td>3.4+1.0/-0.7</td>
        <td>2.7~4.4</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="09GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        
        </tr>
        <tr>
        <td>Step</td>
        <td>0.3±1.0</td>
        <td>-0.7~+1.3</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="09StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        
        <tr>
        <td rowspan="2">10</td>
        <td>Gap</td>
        <td>3.6+1.0/-0.7 </td>
        <td>2.9~4.6</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="10GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        
        <tr>
        <td>Step</td>
        <td>-0.3±1.0</td>
        <td>-1.3~+0.7</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="10StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        
        <tr>
        <td rowspan="4">Gò má và cửa trước</td>
        <td rowspan="2">07</td>
        <td>Gap</td>
        <td>3.7+1.0/-0.8</td>
        <td>2.5~4.7</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="07GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step</td>
        <td>-0.4±1.0 </td>
        <td>-1.4~+0.6</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="07StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">08</td>
        <td>Gap</td>
        <td>4.0+1.0/-0.8</td>
        <td>3.2~5.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="08GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step</td>
        <td>0.2±1.0 </td>
        <td>-0.8~+1.2</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="08StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">Gò má và trụ kính</td>
        <td>05</td>
        <td>Gap</td>
        <td>2.6±1.6 </td>
        <td>1.0~4.2</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="05GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>06</td>
        <td>Gap</td>
        <td>2.4±1.6 </td>
        <td>0.8~4.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="06GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="8">Capo và Gò Má</td>
        <td rowspan="2">01</td>
        <td>Gap</td>
        <td>3.7±1.0</td>
        <td>2.7~4.7</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="01GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step (cử)</td>
        <td>3.0±1.0 </td>
        <td>2.0~4.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="01StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">02</td>
        <td>Gap</td>
        <td>3.6±1.0 </td>
        <td>2.6~4.6</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="02GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step (cử)</td>
        <td>3.0±1.0 </td>
        <td>2.0~4.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="02StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">03</td>
        <td>Gap</td>
        <td>3.5±1.0 </td>
        <td>2.5~4.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="03GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <td>Step (cử)</td>
        <td>3.0±1.0</td>
        <td>2.0~4.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="03StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">04</td>
        <td>Gap</td>
        <td>4.3+1.0/-0.7</td>
        <td>3.6~5.3</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="04GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step (cử)</td>
        <td>3.0±1.0</td>
        <td>2.0~4.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="04StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="8">Capo và Gò Má</td>
        <td rowspan="2">01</td>
        <td>Gap</td>
        <td>3.7±1.0</td>
        <td>2.7~4.7</td>
        <td>RH: <input type="number"step="0.01" class="form-control" id="01GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step (cử)</td>
        <td>3.0±1.0 </td>
        <td>2.0~4.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="01StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">02</td>
        <td>Gap</td>
        <td>3.6±1.0 </td>
        <td>2.6~4.6</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="02GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        
        <tr>
        <td>Step (cử)</td>
        <td>3.0±1.0 </td>
        <td>2.0~4.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="02StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">03</td>
        <td>Gap</td>
        <td>3.5±1.0 </td>
        <td>2.5~4.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="03GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step (cử)</td>
        <td>3.0±1.0</td>
        <td>2.0~4.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="03StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">04</td>
        <td>Gap</td>
        <td>4.3+1.0/-0.7</td>
        <td>3.6~5.3</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="04GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step (cử)</td>
        <td>3.0±1.0</td>
        <td>2.0~4.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="04StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">Gò má và trụ kính</td>
        <td>05</td>
        <td>Gap</td>
        <td>2.6±1.6 </td>
        <td>1.0~4.2</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="05GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>06</td>
        <td>Gap</td>
        <td>2.4±1.6 </td>
        <td>0.8~4.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="06GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="4">Gò má và cửa trước</td>
        <td rowspan="2">07</td>
        <td>Gap</td>
        <td>3.7+1.0/-0.8</td>
        <td>2.5~4.7</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="07GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step</td>
        <td>-0.4±1.0 </td>
        <td>-1.4~+0.6</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="07StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">08</td>
        <td>Gap</td>
        <td>4.0+1.0/-0.8</td>
        <td>3.2~5.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="08GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step</td>
        <td>0.2±1.0 </td>
        <td>-0.8~+1.2</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="08StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        `;
    }

    else if (bodytype == 'J71E') {
        table = ` <tr>
        <td>Cửa trước và mảng hông</td>
        <td>07</td>
        <td>Gap</td>
        <td>5.7+1.0</td>
        <td>4.7 ~ 6.7</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="07GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="4">Cửa trước và cửa sau</td>
        <td rowspan="2">08</td>
        <td>Gap</td>
        <td>3.8+1.0</td>
        <td>2.8 ~ 4.8</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="08GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.8+1.0</td>
        <td>-0.2 ~ 1.8</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="08StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">09</td>
        <td>Gap</td>
        <td>3.7+1.0</td>
        <td>2.7 ~ 4.7</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="09GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.3+1.0</td>
        <td>-0.7 ~ 1.3</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="09StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="4">Cửa sau và mảng hông</td>
        <td rowspan="2">10</td>
        <td>Gap</td>
        <td>3.3+1.0</td>
        <td>2.3 ~ 4.3</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="10GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.6+1.0</td>
        <td>-0.4 ~ 1.6</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="10StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">11</td>
        <td>Gap</td>
        <td>4.1+1.0</td>
        <td>3.1 ~ 5.1</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="11GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>-0.3+1.0</td>
        <td>-1.3 ~ 0.7</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="11StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="4">Cốp sau và mảng hông</td>
        <td rowspan="2">12</td>
        <td>Gap</td>
        <td>3.6+1.0</td>
        <td>2.6 ~ 4.6</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="12GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>3.0+1.0</td>
        <td>2.0 ~ 4.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="12StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">13</td>
        <td>Gap</td>
        <td>3.4+1.0</td>
        <td>2.4 ~ 4.4</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="13GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>3.0+1.0</td>
        <td>2.0 ~ 4.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="13StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Cốp sau và mảng hông</td>
        <td>14</td>
        <td>Step</td>
        <td>-2.0+0.5</td>
        <td>-2.5 ~ -1.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="14StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="4">Cốp sau và mảng hông</td>
        <td rowspan="2">12</td>
        <td>Gap</td>
        <td>3.6+1.0</td>
        <td>2.6 ~ 4.6</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="12GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>3.0+1.0</td>
        <td>2.0 ~ 4.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="12StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">13</td>
        <td>Gap</td>
        <td>3.4+1.0</td>
        <td>2.4 ~ 4.4</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="13GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>3.0+1.0</td>
        <td>2.0 ~ 4.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="13StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Cốp sau và mảng hông</td>
        <td>14</td>
        <td>Step</td>
        <td>-2.0+0.5</td>
        <td>-2.5 ~ -1.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="14StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="4">Cửa sau và mảng hông</td>
        <td rowspan="2">10</td>
        <td>Gap</td>
        <td>3.3+1.0</td>
        <td>2.3 ~ 4.3</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="10GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.6+1.0</td>
        <td>-0.4 ~ 1.6</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="10StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">11</td>
        <td>Gap</td>
        <td>4.1+1.0</td>
        <td>3.1 ~ 5.1</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="11GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>-0.3+1.0</td>
        <td>-1.3 ~ 0.7</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="11StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="4">Cửa trước và cửa sau</td>
        <td rowspan="2">08</td>
        <td>Gap</td>
        <td>3.8+1.0</td>
        <td>2.8 ~ 4.8</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="08GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.8+1.0</td>
        <td>-0.2 ~ 1.8</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="08StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">09</td>
        <td>Gap</td>
        <td>3.7+1.0</td>
        <td>2.7 ~ 4.7</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="09GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.3+1.0</td>
        <td>-0.7 ~ 1.3</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="09StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Cửa trước và mảng hông</td>
        <td>07</td>
        <td>Gap</td>
        <td>5.7+1.0</td>
        <td>4.7 ~ 6.7</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="07GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="4">Gò má và cửa trước</td>
        <td rowspan="2">04</td>
        <td>Gap</td>
        <td>3.7+1.0</td>
        <td>2.7 ~ 4.7</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="04GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.0+1.0</td>
        <td>-1.0 ~ 1.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="04StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">05</td>
        <td>Gap</td>
        <td>4.1+1.0</td>
        <td>3.1 ~ 5.1</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="05GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.0+1.0</td>
        <td>-1.0 ~ 1.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="05StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="4">Gò má và trụ kính</td>
        <td rowspan="4">06</td>
        <td>Gap</td>
        <td>2.3+1.2</td>
        <td>1.1 ~ 3.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="06GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.0+1.5</td>
        <td>-1.5 ~ 1.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="06StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Up BL diff.</td>
        <td>0.0+1.5</td>
        <td>-1.5 ~ 1.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="06UpLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Low BL diff.</td>
        <td>0.0+1.0</td>
        <td>-1.0 ~ 1.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="06SLowLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="6">Capo và gò má</td>
        <td rowspan="2">01</td>
        <td>Gap</td>
        <td>3.7+1.0</td>
        <td>2.7 ~ 4.7</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="01GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step (cử)</td>
        <td>3.1+1.0</td>
        <td>2.1 ~ 4.1</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="01StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="2">02</td>
        <td>Gap</td>
        <td>3.5+1.0</td>
        <td>2.5 ~ 4.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="02GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step (cử)</td>
        <td>3.5+1.0</td>
        <td>2.5 ~ 4.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="02StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">03</td>
        <td>Gap</td>
        <td>3.5+1.0</td>
        <td>2.5 ~ 4.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="03GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step (cử)</td>
        <td>3.8+1.0</td>
        <td>2.8 ~ 4.8</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="03StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="6">Capo và gò má</td>
        <td rowspan="2">01</td>
        <td>Gap</td>
        <td>3.7+1.0</td>
        <td>2.7 ~ 4.7</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="01GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step (cử)</td>
        <td>3.1+1.0</td>
        <td>2.1 ~ 4.1</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="01StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="2">02</td>
        <td>Gap</td>
        <td>3.5+1.0</td>
        <td>2.5 ~ 4.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="02GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step (cử)</td>
        <td>3.5+1.0</td>
        <td>2.5 ~ 4.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="02StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">03</td>
        <td>Gap</td>
        <td>3.5+1.0</td>
        <td>2.5 ~ 4.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="03GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step (cử)</td>
        <td>3.8+1.0</td>
        <td>2.8 ~ 4.8</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="03StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="4">Gò má và trụ kính</td>
        <td rowspan="4">06</td>
        <td>Gap</td>
        <td>2.3+1.2</td>
        <td>1.1 ~ 3.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="06GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.0+1.5</td>
        <td>-1.5 ~ 1.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="06StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Up BL diff.</td>
        <td>0.0+1.5</td>
        <td>-1.5 ~ 1.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="06UpRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Low BL diff.</td>
        <td>0.0+1.0</td>
        <td>-1.0 ~ 1.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="06SLowRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        

        <tr>
        <td rowspan="4">Gò má và cửa trước</td>
        <td rowspan="2">04</td>
        <td>Gap</td>
        <td>3.7+1.0</td>
        <td>2.7 ~ 4.7</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="04GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.0+1.0</td>
        <td>-1.0 ~ 1.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="04StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td rowspan="2">05</td>
        <td>Gap</td>
        <td>4.1+1.0</td>
        <td>3.1 ~ 5.1</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="05GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.0+1.0</td>
        <td>-1.0 ~ 1.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="05StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
              `;
    }
    else if (bodytype == 'J59C_SD') {
        table = ` <tr>
        <td rowspan="4">Cửa trước và cửa sau</td>
        <td rowspan="2">09<br>(11.4WL)</td>
        <td>Gap</td>
        <td>3.9+1.0/-0.8</td>
        <td>3.1~4.9</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="09GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>1.0±1.0</td>
        <td>0.0~2.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="09StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
  
  
        <tr>
        <td rowspan="2">10 <br> (5.4WL)</td>
        <td>Gap</td>
        <td>4.0+1.0/-0.8 </td>
        <td>3.2~5.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="10GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.1±1.0</td>
        <td>-0.9~+1.1</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="10StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
  

        <tr>
        <td rowspan="6">Cửa sau và mảng hông</td>
        <td rowspan="2">11 <br> (12.28WL)</td>
        <td>Gap</td>
        <td>4.0±1.0</td>
        <td>3.0 ~ 5.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="11GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.1±1.0</td>
        <td>-0.9~+1.1</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="11StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
  

        <tr>
        <td rowspan="2">12 <br>(11.6WL)</td>
        <td>Gap</td>
        <td>3.9±1.0</td>
        <td>2.9~4.9</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="12GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.2±1.0</td>
        <td>-0.8~1.2</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="12StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>  
        <td rowspan="2">13 <br> (6.2WL)</td>
        <td>Gap</td>
        <td>3.3±1.0</td>
        <td>2.3~4.3</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="13GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.4±1.0</td>
        <td>-0.6~1.4</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="13StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="6">Cốp sau và mảng hông</td>
        <td rowspan="2">14 <br> (49.8TL)</td>
        <td>Gap</td>
        <td>3.2±1.0</td>
        <td>2.2~4.2</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="14GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>2.6±1.0</td>
        <td>1.6~3.6</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="14StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="2">15 <br> (52.1TL)</td>
        <td>Gap</td>
        <td>3.0±0.8</td>
        <td>2.2~3.8</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="15GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>2.9±1.0</td>
        <td>1.9~3.9</td>  
        <td>RH: <input type="number" step="0.01" class="form-control" id="15StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="2">16 <br> (11.35TL)</td>
        <td>Gap</td>
        <td>2.7±0.8</td>
        <td>1.9~3.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="15GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>3.3±1.0</td>
        <td>2.3~4.3</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="15StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        

        <tr>
        <td rowspan="6">Cốp sau và mảng hông</td>
        <td rowspan="2">14<br>(49.8TL)</td>
        <td>Gap</td>
        <td>3.2±1.0</td>
        <td>2.2~4.2</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="14GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>2.6±1.0</td>
        <td>1.6~3.6</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="14StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="2">15<br>(52.1TL)</td>
        <td>Gap</td>
        <td>3.0±0.8</td>
        <td>2.2~3.8</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="15GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>2.9±1.0</td>
        <td>1.9~+3.9</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="15StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="2">16<br>(11.5TL)</td>
        <td>Gap</td>
        <td>2.7±0.8</td>
        <td>1.9~3.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="15GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>3.3±1.0</td>
        <td>2.3~4.3</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="15StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="6">Cửa sau và mảng hông</td>
        <td rowspan="2">11<br>(12.28WL)</td>
        <td>Gap</td>
        <td>4.0±1.0</td>
        <td>3.0~5.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="11GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.1±1.0</td>
        <td>-0.9~1.1</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="11StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="2">12<br>(11.6WL)<br></td>
        <td>Gap</td>
        <td>3.9±1.0</td>
        <td>2.9~4.9</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="12GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.2±1.0 </td>
        <td>-0.8~1.2</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="12StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="2">13<br>(6.2WL)</td>
        <td>Gap</td>
        <td>3.3+1.0</td>
        <td>2.3~4.3</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="13GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.4±1.0</td>
        <td>-0.6~+1.4</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="13StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="4">Cửa trước và cửa sau</td>
        <td rowspan="2">09<br>(11.4WL)</td>
        <td>Gap</td>
        <td>3.9+1.0/-0.8</td>
        <td>3.1~4.9</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="09GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>1.0±1.0</td>
        <td>0.0~2.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="09StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
  

        <tr>
        <td rowspan="2">10<br>(5.4WL)</td>
        <td>Gap</td>
        <td>4.0+1.0/-0.8</td>
        <td>3.2~5.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="10GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.1±1.0</td>
        <td>-0.9~+1.1</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="10StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
  

        <tr>
        <td rowspan="4">Gò má và cửa trước</td>
        <td rowspan="2">07<br>(10.35WL)</td>
        <td>Gap</td>
        <td>3.1+1.0/-0.7</td>
        <td>2.4~4.1</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="07GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>-0.1 +1.0/-0.7</td>
        <td>-0.8~+0.9</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="07StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        

        <tr>
        <td rowspan="2">08<br>(4.95WL)</td>
        <td>Gap</td>
        <td>3.7+1.0/-0.7</td>
        <td>3.0~4.7</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="08GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>-1.6 +0.7/-1.0</td>
        <td>-2.6~-0.9</td>  
        <td>LH: <input type="number" step="0.01" class="form-control" id="08StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td rowspan="2">Mảng hông và trụ A</td>
        <td rowspan="2">17(*1)</td>
        <td>Up BL diff.</td>
        <td>0.0±1.0</td>
        <td>-1.0~+1.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="17up" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="2">18(*1)</td>
        <td>Low BL diff.</td>
        <td>0.0±1.0</td>
        <td>-1.0~+1.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="18low" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        

        <tr>
        <td rowspan="4">Gò má và trụ kính</td>
        <td rowspan="2">05<br>(7.42BL)</td>
        <td>Gap</td>
        <td>2.6±1.6</td>
        <td>0.6~3.8</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="05GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.0±1.5</td>
        <td>-1.5~+1.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="05StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="2">06<br>(11.6WL)</td>
        <td>Gap</td>
        <td>2.2±1.6</td>
        <td>0.6~3.8</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="06GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.0±1.5</td>
        <td>-1.5~+1.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="06StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td rowspan="8">Capo và Gò Má</td>
        <td rowspan="2">01<br>(4.7BL)</td>
        <td>Gap</td>
        <td>3.0±1.0</td>
        <td>2.0~4.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="01GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step (cử)</td>
        <td>0.3±1.2</td>
        <td>-0.9~+1.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="01StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td rowspan="2">02<br>(12.6TL)</td>
        <td>Gap</td>
        <td>3.2±1.0</td>
        <td>2.2~4.2</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="02GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <td>Step (cử)</td>
        <td>3.0±1.0 </td>
        <td>2.0~4.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="02StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td rowspan="2">03<br>(18.9TL)</td>
        <td>Gap</td>
        <td>3.0±1.0 </td>
        <td>2.0~4.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="03GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <td>Step (cử)</td>
        <td>3.0±1.0</td>
        <td>2.0~4.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="03StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td rowspan="2">04<br>(21.2TL)</td>
        <td>Gap</td>
        <td>3.4+1.0</td>
        <td>2.4~4.4</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="04GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step (cử)</td>
        <td>3.0±1.0</td>
        <td>2.0~4.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="04StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td rowspan="8">Capo và Gò Má</td>
        <td rowspan="2">01<br>(4.7BL)</td>
        <td>Gap</td>
        <td>3.0±1.0</td>
        <td>2.0~4.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="01GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step (cử)</td>
        <td>0.3±1.2</td>
        <td>-0.9~+1.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="01StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td rowspan="2">02<br>(12.6TL)</td>
        <td>Gap</td>
        <td>3.2±1.0</td>
        <td>2.2~4.2</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="02GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <td>Step (cử)</td>
        <td>3.0±1.0</td>
        <td>2.0~4.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="02StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td rowspan="2">03<br>(18.9TL)</td>
        <td>Gap</td>
        <td>3.0±1.0</td>
        <td>2.0~4.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="03GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <td>Step (cử)</td>
        <td>3.0±1.0</td>
        <td>2.0~4.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="03StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td rowspan="2">04<br>(21.2TL)</td>
        <td>Gap</td>
        <td>3.4±1.0</td>
        <td>2.4~4.4</td> 
        <td>RH: <input type="number" step="0.01" class="form-control" id="04GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step (cử)</td>
        <td>3.0±1.0</td>
        <td>2.0~4.0</td>       
        <td>RH: <input type="number" step="0.01" class="form-control" id="04StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td rowspan="4">Gò má và trụ kính</td>
        <td rowspan="2">05<br>(7.42BL)</td>
        <td>Gap</td>
        <td>2.2±1.6</td>
        <td>0.6~3.8</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="05GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.0±1.5</td>
        <td>-1.5~+1.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="05StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="2">06<br>(11.6WL)</td>
        <td>Gap</td>
        <td>2.2±1.6</td>
        <td>0.6~3.8</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="06GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.0±1.5</td>
        <td>-1.5~+1.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="06StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td rowspan="2">Mảng hông và trụ A</td>
        <td>17(*1)</td>
        <td>Up BL diff.</td>
        <td>0.0+1.0</td>
        <td>-1.0~+1.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="17up" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td>18(*1)</td>
        <td>Low BL diff.</td>
        <td>0.0+1.0</td>
        <td>-1.0~+1.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="18low" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



    <tr>
        <td rowspan="4">Gò má và cửa trước</td>
        <td rowspan="2">07<br>(10.35WL)</td>
        <td>Gap</td>
        <td>3.1+1.0/-0.7</td>
        <td>2.4~4.1</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="07GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>-0.1 +1.0/-0.7</td>
        <td>-0.8~+0.9</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="07StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        

        <tr>
        <td rowspan="2">08<br>(4.95WL)</td>
        <td>Gap</td>
        <td>3.7+1.0/-0.7</td>
        <td>3.0~4.7</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="08GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>-1.6 +0.7/-1.0</td>
        <td>-2.6~-0.9</td>  
        <td>RH: <input type="number" step="0.01" class="form-control" id="08StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        `;
    }
    else if (bodytype == 'J59C_HB') {
        table = ` <tr>
        <td rowspan="4">Cửa trước và cửa sau</td>
        <td rowspan="2">09 <br> (11.4WL)</td>
        <td>Gap</td>
        <td>3.9+1.0/-0.8</td>
        <td>3.1~4.9</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="09GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>1.1±1.0</td>
        <td>0.1~2.1</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="09StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
  
  
        <tr>
        <td rowspan="2">10<br> (5.35WL)</td>
        <td>Gap</td>
        <td>4.1+1.0/-0.8</td>
        <td>3.3~5.1</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="10GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step</td>
        <td>-0.1±1.0</td>
        <td>-1.1~+0.9</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="10StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
  

        <tr>
        <td rowspan="6">Cửa sau và mảng hông</td>
        <td rowspan="2">11 <br> (13.3WL)</td>
        <td>Gap</td>
        <td>2.6±1.0</td>
        <td>1.6~3.6</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="11GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step</td>
        <td>-0.1±1.0</td>
        <td>-1.1~+0.9</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="11StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
  

        <tr>
        <td rowspan="2">12 <br>(11.8WL)</td>
        <td>Gap</td>
        <td>3.9±1.0</td>
        <td>2.9~4.9</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="12GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        <tr>
        <td>Step</td>
        <td>0.0±1.0 </td>
        <td>-1.0~+1.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="12StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>  
        <td rowspan="2">13 <br> (6.2WL)</td>
        <td>Gap</td>
        <td>3.3+1.0</td>
        <td>2.3~4.3</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="13GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.3±1.0 </td>
        <td>-0.7~+1.3</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="13StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="6">Cốp sau và mảng hông</td>
        <td rowspan="2">14 <br> (14.8WL)</td>
        <td>Gap</td>
        <td>4.2±1.4 </td>
        <td>2.8~5.6</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="14GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>-1.3±1.5</td>
        <td>-2.8~0.2</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="14StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="2">15 <br> (12.3WL)</td>
        <td>Gap</td>
        <td>4.2±0.7/-1.3</td>
        <td>2.9~4.9</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="15GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>3.0±1.0</td>
        <td>2.0~+4.0</td>  
        <td>RH: <input type="number" step="0.01" class="form-control" id="15StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="2">16 <br> (11.6WL)</td>
        <td>Gap</td>
        <td>4.1±0.7/-1.3</td>
        <td>2.8~4.8</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="15GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>3.0±1.0</td>
        <td>2.0~4.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="15StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>git 

        

        <tr>
        <td rowspan="6">Cốp sau và mảng hông</td>
        <td rowspan="2">14<br>(14.8WL)</td>
        <td>Gap</td>
        <td>4.2±1.4</td>
        <td>2.8~5.6</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="14GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>-1.3±1.5</td>
        <td>-2.8~0.2</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="14StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="2">15<br>(12.3WL)</td>
        <td>Gap</td>
        <td>4.2±0.7/-1.3</td>
        <td>2.9~4.9</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="15GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>3.0±1.0</td>
        <td>2.0~+4.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="15StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="2">16<br>(11.6WL)</td>
        <td>Gap</td>
        <td>4.1±0.7/-1.3</td>
        <td>2.8~4.8</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="15GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>3.0±1.0</td>
        <td>2.0~+4.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="15StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="6">Cửa sau và mảng hông</td>
        <td rowspan="2">11<br>(13.3WL)</td>
        <td>Gap</td>
        <td>2.6±1.0</td>
        <td>1.6~3.6</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="11GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>-0.1±1.0</td>
        <td>-1.1~+0.9</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="11StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="2">12<br>(11.8WL)</td>
        <td>Gap</td>
        <td>3.9±1.0</td>
        <td>2.9~4.9</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="12GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.0±1.0 </td>
        <td>-1.0~+1.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="12StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="2">13<br>(6.2WL)</td>
        <td>Gap</td>
        <td>3.3±1.0</td>
        <td>2.3~4.3</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="13GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.3±1.0 </td>
        <td>-0.7~+1.3</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="13StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="4">Cửa trước và cửa sau</td>
        <td rowspan="2">09<br>(11.4WL)</td>
        <td>Gap</td>
        <td>3.9+1.0/-0.8</td>
        <td>3.1~ 4.9</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="09GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>1.1±1.0</td>
        <td>0.1~2.1</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="09StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
  

        <tr>
        <td rowspan="2">10<br>(5.35WL)</td>
        <td>Gap</td>
        <td>4.1+1.0/-0.8</td>
        <td>3.3~5.1</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="10GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>-0.1±1.0</td>
        <td>-1.1~0.9</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="10StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
  

        <tr>
        <td rowspan="4">Gò má và cửa trước</td>
        <td rowspan="2">07<br>(10.2WL)</td>
        <td>Gap</td>
        <td>3.2+1.0/-0.7</td>
        <td>2.5~4.2</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="07GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>-0.1+1.0/0.7 </td>
        <td>-0.8~0.9</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="07StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        

        <tr>
        <td rowspan="2">08<br>(4.95WL)</td>
        <td>Gap</td>
        <td>3.7+1.0/-0.7</td>
        <td>3.0~4.7</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="08GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>-1.6+0.7/-1.0</td>
        <td>-2.6~-0.9</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="08StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td rowspan="2">Mảng hông và trụ A</td>
        <td >17(*1)</td>
        <td>Up BL diff.</td>
        <td>0.0±1.0</td>
        <td>-1.0~1.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="17up" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td>18(*1)</td>
        <td>Low BL diff.</td>
        <td>0.0±1.0</td>
        <td>-1.0~1.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="18low" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>

        

        <tr>
        <td rowspan="4">Gò má và trụ kính</td>
        <td rowspan="2">05<br>(7.42BL)</td>
        <td>Gap</td>
        <td>2.2±1.6 </td>
        <td>0.6~3.8</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="05GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.0±1.5</td>
        <td>-1.5~1.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="05StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="2">06<br>(11.6WL)</td>
        <td>Gap</td>
        <td>2.2±1.6</td>
        <td>0.6~3.8</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="06GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.0±1.5</td>
        <td>-1.5~1.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="06StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td rowspan="8">Capo và Gò Má</td>
        <td rowspan="2">01<br>(4.7BL)</td>
        <td>Gap</td>
        <td>3.0±1.0</td>
        <td>2.0~4.0</td>
        <td>LH: <input type="number step="0.01" class="form-control" id="01GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step (cử)</td>
        <td>0.3±1.2 </td>
        <td>-0.9~+1.5</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="01StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td rowspan="2">02<br>(12.6TL)</td>
        <td>Gap</td>
        <td>3.2±1.0 </td>
        <td>2.2~4.2</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="02GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <td>Step (cử)</td>
        <td>3.0±1.0 </td>
        <td>2.0~4.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="02StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td rowspan="2">03<br>(18.9TL)</td>
        <td>Gap</td>
        <td>3.2±1.0 </td>
        <td>2.2~4.2</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="03GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <td>Step (cử)</td>
        <td>3.0±1.0</td>
        <td>2.0~4.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="03StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td rowspan="2">04<br>(21.2TL)</td>
        <td>Gap</td>
        <td>3.4+1.0</td>
        <td>2.4~4,4</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="04GapLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step (cử)</td>
        <td>3.0±1.0</td>
        <td>2.0~4.0</td>
        <td>LH: <input type="number" step="0.01" class="form-control" id="04StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td rowspan="8">Capo và Gò Má</td>
        <td rowspan="2">01<br>(4.7BL)</td>
        <td>Gap</td>
        <td>3.0±1.0</td>
        <td>2.0~4.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="01GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step (cử)</td>
        <td>0.3±1.2</td>
        <td>-0.9~+1.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="01StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td rowspan="2">02<br>(12.6TL))</td>
        <td>Gap</td>
        <td>3.2±1.0 </td>
        <td>2.2~4.2</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="02GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <td>Step (cử)</td>
        <td>3.0±1.0 </td>
        <td>2.0~4.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="02StepLH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td rowspan="2">03<br>(18.9TL)</td>
        <td>Gap</td>
        <td>3.2±1.0 </td>
        <td>2.2~4.2</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="03GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <td>Step (cử)</td>
        <td>3.0±1.0</td>
        <td>2.0~4.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="03StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td rowspan="2">04<br>(21.2TL)</td>
        <td>Gap</td>
        <td>3.4+1.0</td>
        <td>2.4~4.4</td> 
        <td>RH: <input type="number" step="0.01" class="form-control" id="04GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step (cử)</td>
        <td>3.0±1.0</td>
        <td>2.0~4.0</td>       
        <td>RH: <input type="number" step="0.01" class="form-control" id="04StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td rowspan="4">Gò má và trụ kính</td>
        <td rowspan="2">05<br>(7.42BL)</td>
        <td>Gap</td>
        <td>2.2±1.6</td>
        <td>0.6~3.8</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="05GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.0±1.5</td>
        <td>-1.5~+1.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="05StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>


        <tr>
        <td rowspan="2">06<br>(11.6WL)</td>
        <td>Gap</td>
        <td>2.2±1.6</td>
        <td>0.6~3.8</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="06GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>0.0±1.5</td>
        <td>-1.5~+1.5</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="06StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td rowspan="2">Mảng hông và trụ A</td>
        <td>17(*1)</td>
        <td>Up BL diff.</td>
        <td>0.0+1.0</td>
        <td>-1.0~+1.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="17up" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td>18</td>
        <td>Low BL diff.</td>
        <td>0.0+1.0</td>
        <td>-1.0~+1.0</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="18low" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td rowspan="4">Gò má và cửa trước</td>
        <td rowspan="2">07<br>(10.2WL)</td>
        <td>Gap</td>
        <td>3.2+1.0/-0.7</td>
        <td>2.5~4.2</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="07GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>-0.1±1.0/-0.7 </td>
        <td>-0.8~0.9</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="07StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>



        <tr>
        <td rowspan="2">08<br>(4.95WL)</td>
        <td>Gap</td>
        <td>3.7+1.0/-0.7</td>
        <td>3.0~4.7</td>
        <td>RH: <input type="number" step="0.01" class="form-control" id="08GapRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        <tr>
        <td>Step</td>
        <td>-1.6+0.7/-1.0 </td>
        <td>-2.6~-0.9</td>       
        <td>RH: <input type="number" step="0.01" class="form-control" id="08StepRH" style="width: 80px;" placeholder="Sai số"/></td>
        </tr>
        `;}

    return table;
}


// console.clear()
    function getRangeValue(range, asGrid) {
        var result = '';
                      
        var ranVal = rapi.getRange(range, asGrid);
        if (!Object.keys(ranVal).length) return result;
                    
        result = ranVal[Object.keys(ranVal)[0]].toString();
        return result;
    }
                
    function getJSAttr (JSArray,address,attr) {
        address = address.toLowerCase().replace('#','');
        attr    = attr.toLowerCase();
        var result = null;
        for (var j=0; j<JSArray.length; j++) {
             if (JSArray[j].Address && JSArray[j].Address.toLowerCase() == address || JSArray[j].address && JSArray[j].address.toLowerCase() == address) { 
                 for (var prop in JSArray[j]) {
                      if (prop.toLowerCase() == attr) {
                          result = JSArray[j][prop];
                          break;
                      }
                 }
             }
        }
        return result;
    }


    function xlCoords(addr) {
          var patt_rc = /#?R(\d+)C(\d*)/gi;
          var patt_a1 = /^[$]?([a-z]+)[$]?(\d+)$/gi;
          var result_rc = patt_rc.exec(addr);
          var result_a1 = patt_a1.exec(addr);
          if (!result_rc && !result_a1) {
              return false;
          }

          var results = {};
          results.format = (result_rc) ? 'RC' : 'A1';
          results.col    = (result_rc) ? result_rc[2]: lettersToCol(result_a1[1]);   // numeric
          results.row    = (result_rc) ? result_rc[1] : result_a1[2];                // numeric
          results.xaxis  = (result_rc) ? colToLetters(result_rc[2]) : result_a1[1];  // string
          results.yaxis  = (result_rc) ? result_rc[1] : result_a1[2];                // numeric
          results.rc     = (result_rc) ? 'R' + result_rc[1] + 'C' + result_rc[2]   : 'R' + result_a1[2] + 'C' + lettersToCol(result_a1[1]);
          results.a1     = (result_rc) ? colToLetters(result_rc[2]) + result_rc[1] : result_a1[1] + result_a1[2];
          return results;

                function colToLetters(col) {
                     var temp=0, letters = '';
                     while (col > 0) {
                       temp = (col - 1) % 26;
                       letters = String.fromCharCode(temp + 65) + letters;
                       col = (col - temp - 1) / 26;
                     }
                     return letters;
                }

                function lettersToCol(letters) {
                     var col = 0;
                     for (var j = 0; j < letters.length; j++) {
                          col += (letters.toUpperCase().charCodeAt(j) - 64) * Math.pow(26, letters.length - j - 1);
                     }
                     return col;
                }

    }   // eof xlCoords
    
                var fred = [{"Address":"Z31","MaxLength":28,"Color":"Red","Size":"Large"},{"Address":"R12C44","MaxLength":12,"Color":"Blue","Size":"Med"}];
            var maxLen = getJSAttr (fred,'Z31','maxLength').toString();
            
            
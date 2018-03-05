
// 引入fs模块
var fs = require('fs');

var jsonfile = require('jsonfile');

var pathString = '../../words/';

var writePathString = './data.json';

var errorPathString = './error_data.json';


fs.readdir(pathString, function (err, files) {
    if (err) {
        console.log('读取文件失败');

    } else {
        var jsonFiles = [];
        for (var i = 0; i < files.length; i++) {
            jsonFiles.push(files[i]);
        }
        var jsonList = [];
        var errorFiles = [];
        for (var i = 0; i < jsonFiles.length; i++) {
            try {
                var content = jsonfile.readFileSync(pathString + jsonFiles[i]);
                jsonList.push(content);

            } catch (err) {
                errorFiles.push(jsonFiles[i]);
                jsonfile.writeFile(errorPathString, errorFiles);
            }
            jsonfile.writeFileSync(writePathString, jsonList);



        }
    }
});

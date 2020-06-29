const fs = require('fs');
const path = require('path');
const formConf = require('../src/template/pageConf').formConf;
const tableConf = require('../src/template/pageConf').tableConf;

const argv = process.argv;
const dirName = argv[2]; // 文件生成目录
const toPath = '../src/views/' + (dirName || 'test');
const fromPath = '../src/template';
const copyFileList = [
  {
    dir: '/components/SearchForm.vue',
    handleFn: handleSearchForm
  },
  {
    dir: '/components/tableList.vue',
    handleFn: handleTable
  },
  {
    dir: '/index.vue',
  }
];
fs.mkdirSync(_resolve(toPath + '/components'), { recursive: true });
copyFileList.forEach(copy => {
  copyFile(_resolve(fromPath + copy.dir), _resolve(toPath + copy.dir), copy.handleFn);
});

function copyFile(from, to, handleFn) {
  fs.readFile(from, 'utf-8', (err, data) => {
    if (err) { console.log('copy error: ' + err); return; }
    let handleData;
    handleFn && (handleData = handleFn(data));
    fs.writeFile(to, handleData || data, (err) => {
      if (err ) console.log('write error: ' + err);
    })
  });
}

function _resolve(dir) {
  return path.resolve(__dirname, dir);
}

function handleSearchForm(str) {
  let htmlArr = [];
  formConf.forEach(item => {
    switch (item.type) {
      case 'input':
        htmlArr.push(`    <el-form-item label="${item.label}">
      <el-input v-model="formData.${item.model}"></el-input>
    </el-form-item>`);
        break;
      case 'select':
        htmlArr.push(`    <el-form-item label="${item.label}">
      <el-select v-model="formData.${item.model}">
        <el-option label="label1" value="value1"></el-option>
      </el-select>
    </el-form-item>`);
        break;
      case 'datetimerange':
        htmlArr.push(`<el-date-picker
      v-model="formData.${item.model}"
      type="datetimerange"
      :default-time="['00:00:00', '23:59:59']">
    </el-date-picker>`);
        break;
    }
  });
  return str.replace(/slot/, htmlArr.join('\n'));
}

function handleTable(str) {
  let htmlArr = [];
  tableConf.forEach(item => {
    htmlArr.push(`    <el-table-column label="${item.label}" prop="${item.prop}">
    </el-table-column>`)
  });
  return str.replace(/slot/, htmlArr.join('\n'));
}


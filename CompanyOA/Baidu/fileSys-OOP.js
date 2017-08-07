// I am using tree structure. a  {a: {b:{c: {d: 'hello world!'} }}}
// key is file or directory name.
// if key is directory, value is subtree object, otherwise value is the content string.

function FileSystem() {
  this.root = {};
}

function File(name, content) {
  this.type = 'File';
  this.name = name;
  this.content = content;
}

function Folder(name) {
  this.type = 'Folder';
  this.name = name;
  this.subFolder = {};
  this.file = ''
}

//
FileSystem.prototype.ls = function (path) {
  if (path == '/') {
    return Object.keys(this.root);
  }

  var path = path.split('/').slice(1);
  var dir = this.root;
  path.forEach(function (p) {
    if (p.constructor == Folder) {
      p = p.subFolder
    } else if (p.constructor == File){
      return Object.keys(p)
    } else if (p.constructor == Object){
      p = dir[p]
    }
  });

  console.log('aaa', dir);

};

FileSystem.prototype.mkdirP = function (dirPath) {
  var path = dirPath.split('/').slice(1);
  var dir = this.root;
  path.forEach(function (p) {
    if (dir[p] == null) {
      dir[p] = new Folder(p)
    } else if (dir[p].constructor = File) {
      throw new Error('It is a file.');
    }
    dir = dir[p].subFolder;

  });


};

FileSystem.prototype.addFileWithContent = function (filePath, content) {
  var path = filePath.split('/').slice(1);
  var dir = this.root;
  for (var i = 0; i < path.length - 1; i++) {
    if (dir[path[i]].constructor == Folder) {
      dir = dir[path[i]].subFolder;
    } else {
      dir = dir[path[i]]
    }
  }

  dir[path[path.length - 1]] = new File(path[path.length - 1]);
  dir[path[path.length - 1]].content = content;

};

FileSystem.prototype.fileContent = function (filePath) {


};

function main() {
  // assumption: all path starts with / and not ending with /
  var fs = new FileSystem();

  // should print []
  console.log(fs.ls('/'));

  fs.mkdirP("/a/b/c");
  fs.addFileWithContent("/a/b/c/d", "hello world");

  // should print ['a']
  console.log(fs.ls('/'));

  // should print ['d']
  console.log(fs.ls('/a/b/c'));

  // should also print ['d']
  console.log(fs.ls('/a/b/c/d'));

  //should print "hello world"
  console.log(fs.fileContent("/a/b/c/d"));
}

main();

// Please do not modify the following line.
var module = module || {};
module.exports = FileSystem;
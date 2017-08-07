// I am using tree structure. a  {a: {b:{c: {d: 'hello world!'} }}}
// key is file or directory name.
// if key is directory, value is subtree object, otherwise value is the content string.

function FileSystem() {
  this.root = {};
}

//
FileSystem.prototype.ls = function (path) {
  if (path == '/') {
    return Object.keys(this.root);
  }
  var pathArray = path.split('/').slice(1);
  var current = this.root;
  for (var i = 0; i < pathArray.length; i++) {
    current = current[pathArray[i]];
    if (current == null) {
      throw new Error('not exist.');
    }
  }

  if (typeof current == 'string') {
    return [pathArray[pathArray.length - 1]];
  }
  return Object.keys(current);

};

FileSystem.prototype.mkdirP = function (dirPath) {
  var pathArray = dirPath.split('/').slice(1);
  var dir = this.root;
  for (var i = 0; i < pathArray.length; i++) {
    if (dir[pathArray[i]] == null) {
      dir[pathArray[i]] = {};
    } else if(typeof dir[pathArray[i]] == 'string') {
      // If it's a content, throw error.
      throw new Error('It is a file.');
    }

    dir = dir[pathArray[i]];
  }

};

FileSystem.prototype.addFileWithContent = function (filePath, content) {

  var pathArray = filePath.split('/').slice(1);
  var dir = this.root;
  for (var i = 0; i < pathArray.length - 1; i++) {
    dir = dir[pathArray[i]];
    if (dir == null) {
      throw new Error('not exist.');
    } else if(typeof dir == 'string') {
      // If it's a content, throw error.
      throw new Error('It is a file.');
    }

  }
  dir[pathArray[pathArray.length - 1]] = content;
};

FileSystem.prototype.fileContent = function (filePath) {

  var pathArray = filePath.split('/').slice(1);
  var current = this.root;
  for (var i = 0; i < pathArray.length; i++) {
    current = current[pathArray[i]];
    if (current == null) {
      throw new Error('not exist.');
    }
  }

  return current;
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
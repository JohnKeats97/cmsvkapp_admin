const _get = function(source, path) {
    if (path.length === 0) return source;
    return _get(source[path[0]], path.slice(1, path.length));
};

const GetObjectValue = function (source, path, sep) {
    return _get(source, path.split(sep));
};

const SetObjectValue = function(source, path, sep, value) {
    path = path.split(sep);
    const prop = path[path.length - 1];
    const prop2 = path[path.length - 2];
    path.length = path.length -1;
    _get(source, path.slice(0,path.length - 1))[prop2] = {};
    return _get(source, path)[prop] = value;
};

export {GetObjectValue, SetObjectValue};

"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 ||= {})
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/@runno/wasi/dist/wasi.js
var lt = Object.defineProperty;
var dt = (e, t, i) => t in e ? lt(e, t, { enumerable: true, configurable: true, writable: true, value: i }) : e[t] = i;
var m = (e, t, i) => (dt(e, typeof t != "symbol" ? t + "" : t, i), i);
var c;
(function(e) {
  e[e.SUCCESS = 0] = "SUCCESS", e[e.E2BIG = 1] = "E2BIG", e[e.EACCESS = 2] = "EACCESS", e[e.EADDRINUSE = 3] = "EADDRINUSE", e[e.EADDRNOTAVAIL = 4] = "EADDRNOTAVAIL", e[e.EAFNOSUPPORT = 5] = "EAFNOSUPPORT", e[e.EAGAIN = 6] = "EAGAIN", e[e.EALREADY = 7] = "EALREADY", e[e.EBADF = 8] = "EBADF", e[e.EBADMSG = 9] = "EBADMSG", e[e.EBUSY = 10] = "EBUSY", e[e.ECANCELED = 11] = "ECANCELED", e[e.ECHILD = 12] = "ECHILD", e[e.ECONNABORTED = 13] = "ECONNABORTED", e[e.ECONNREFUSED = 14] = "ECONNREFUSED", e[e.ECONNRESET = 15] = "ECONNRESET", e[e.EDEADLK = 16] = "EDEADLK", e[e.EDESTADDRREQ = 17] = "EDESTADDRREQ", e[e.EDOM = 18] = "EDOM", e[e.EDQUOT = 19] = "EDQUOT", e[e.EEXIST = 20] = "EEXIST", e[e.EFAULT = 21] = "EFAULT", e[e.EFBIG = 22] = "EFBIG", e[e.EHOSTUNREACH = 23] = "EHOSTUNREACH", e[e.EIDRM = 24] = "EIDRM", e[e.EILSEQ = 25] = "EILSEQ", e[e.EINPROGRESS = 26] = "EINPROGRESS", e[e.EINTR = 27] = "EINTR", e[e.EINVAL = 28] = "EINVAL", e[e.EIO = 29] = "EIO", e[e.EISCONN = 30] = "EISCONN", e[e.EISDIR = 31] = "EISDIR", e[e.ELOOP = 32] = "ELOOP", e[e.EMFILE = 33] = "EMFILE", e[e.EMLINK = 34] = "EMLINK", e[e.EMSGSIZE = 35] = "EMSGSIZE", e[e.EMULTIHOP = 36] = "EMULTIHOP", e[e.ENAMETOOLONG = 37] = "ENAMETOOLONG", e[e.ENETDOWN = 38] = "ENETDOWN", e[e.ENETRESET = 39] = "ENETRESET", e[e.ENETUNREACH = 40] = "ENETUNREACH", e[e.ENFILE = 41] = "ENFILE", e[e.ENOBUFS = 42] = "ENOBUFS", e[e.ENODEV = 43] = "ENODEV", e[e.ENOENT = 44] = "ENOENT", e[e.ENOEXEC = 45] = "ENOEXEC", e[e.ENOLCK = 46] = "ENOLCK", e[e.ENOLINK = 47] = "ENOLINK", e[e.ENOMEM = 48] = "ENOMEM", e[e.ENOMSG = 49] = "ENOMSG", e[e.ENOPROTOOPT = 50] = "ENOPROTOOPT", e[e.ENOSPC = 51] = "ENOSPC", e[e.ENOSYS = 52] = "ENOSYS", e[e.ENOTCONN = 53] = "ENOTCONN", e[e.ENOTDIR = 54] = "ENOTDIR", e[e.ENOTEMPTY = 55] = "ENOTEMPTY", e[e.ENOTRECOVERABLE = 56] = "ENOTRECOVERABLE", e[e.ENOTSOCK = 57] = "ENOTSOCK", e[e.ENOTSUP = 58] = "ENOTSUP", e[e.ENOTTY = 59] = "ENOTTY", e[e.ENXIO = 60] = "ENXIO", e[e.EOVERFLOW = 61] = "EOVERFLOW", e[e.EOWNERDEAD = 62] = "EOWNERDEAD", e[e.EPERM = 63] = "EPERM", e[e.EPIPE = 64] = "EPIPE", e[e.EPROTO = 65] = "EPROTO", e[e.EPROTONOSUPPORT = 66] = "EPROTONOSUPPORT", e[e.EPROTOTYPE = 67] = "EPROTOTYPE", e[e.ERANGE = 68] = "ERANGE", e[e.EROFS = 69] = "EROFS", e[e.ESPIPE = 70] = "ESPIPE", e[e.ESRCH = 71] = "ESRCH", e[e.ESTALE = 72] = "ESTALE", e[e.ETIMEDOUT = 73] = "ETIMEDOUT", e[e.ETXTBSY = 74] = "ETXTBSY", e[e.EXDEV = 75] = "EXDEV", e[e.ENOTCAPABLE = 76] = "ENOTCAPABLE";
})(c || (c = {}));
var G;
(function(e) {
  e[e.REALTIME = 0] = "REALTIME", e[e.MONOTONIC = 1] = "MONOTONIC", e[e.PROCESS_CPUTIME_ID = 2] = "PROCESS_CPUTIME_ID", e[e.THREAD_CPUTIME_ID = 3] = "THREAD_CPUTIME_ID";
})(G || (G = {}));
var y;
(function(e) {
  e[e.SET = 0] = "SET", e[e.CUR = 1] = "CUR", e[e.END = 2] = "END";
})(y || (y = {}));
var R;
(function(e) {
  e[e.UNKNOWN = 0] = "UNKNOWN", e[e.BLOCK_DEVICE = 1] = "BLOCK_DEVICE", e[e.CHARACTER_DEVICE = 2] = "CHARACTER_DEVICE", e[e.DIRECTORY = 3] = "DIRECTORY", e[e.REGULAR_FILE = 4] = "REGULAR_FILE", e[e.SOCKET_DGRAM = 5] = "SOCKET_DGRAM", e[e.SOCKET_STREAM = 6] = "SOCKET_STREAM", e[e.SYMBOLIC_LINK = 7] = "SYMBOLIC_LINK";
})(R || (R = {}));
var Q;
(function(e) {
  e[e.DIR = 0] = "DIR";
})(Q || (Q = {}));
var p;
(function(e) {
  e[e.CLOCK = 0] = "CLOCK", e[e.FD_READ = 1] = "FD_READ", e[e.FD_WRITE = 2] = "FD_WRITE";
})(p || (p = {}));
var T = {
  CREAT: 1,
  DIRECTORY: 2,
  EXCL: 4,
  TRUNC: 8
  // Truncate file to size 0.
};
var E = {
  APPEND: 1,
  DSYNC: 2,
  NONBLOCK: 4,
  RSYNC: 8,
  SYNC: 16
  // Write according to synchronized I/O file integrity completion. In addition to synchronizing the data stored in the file, the implementation may also synchronously update the file's metadata.
};
var o = {
  FD_DATASYNC: BigInt(1) << BigInt(0),
  FD_READ: BigInt(1) << BigInt(1),
  FD_SEEK: BigInt(1) << BigInt(2),
  FD_FDSTAT_SET_FLAGS: BigInt(1) << BigInt(3),
  FD_SYNC: BigInt(1) << BigInt(4),
  FD_TELL: BigInt(1) << BigInt(5),
  FD_WRITE: BigInt(1) << BigInt(6),
  FD_ADVISE: BigInt(1) << BigInt(7),
  FD_ALLOCATE: BigInt(1) << BigInt(8),
  PATH_CREATE_DIRECTORY: BigInt(1) << BigInt(9),
  PATH_CREATE_FILE: BigInt(1) << BigInt(10),
  PATH_LINK_SOURCE: BigInt(1) << BigInt(11),
  PATH_LINK_TARGET: BigInt(1) << BigInt(12),
  PATH_OPEN: BigInt(1) << BigInt(13),
  FD_READDIR: BigInt(1) << BigInt(14),
  PATH_READLINK: BigInt(1) << BigInt(15),
  PATH_RENAME_SOURCE: BigInt(1) << BigInt(16),
  PATH_RENAME_TARGET: BigInt(1) << BigInt(17),
  PATH_FILESTAT_GET: BigInt(1) << BigInt(18),
  PATH_FILESTAT_SET_SIZE: BigInt(1) << BigInt(19),
  PATH_FILESTAT_SET_TIMES: BigInt(1) << BigInt(20),
  FD_FILESTAT_GET: BigInt(1) << BigInt(21),
  FD_FILESTAT_SET_SIZE: BigInt(1) << BigInt(22),
  FD_FILESTAT_SET_TIMES: BigInt(1) << BigInt(23),
  PATH_SYMLINK: BigInt(1) << BigInt(24),
  PATH_REMOVE_DIRECTORY: BigInt(1) << BigInt(25),
  PATH_UNLINK_FILE: BigInt(1) << BigInt(26),
  POLL_FD_READWRITE: BigInt(1) << BigInt(27),
  SOCK_SHUTDOWN: BigInt(1) << BigInt(28),
  SOCK_ACCEPT: BigInt(1) << BigInt(29)
};
var U = {
  ATIM: 1,
  ATIM_NOW: 2,
  MTIM: 4,
  MTIM_NOW: 8
  // Adjust the last data modification timestamp to the time of clock clockid::realtime.
};
var et = {
  SUBSCRIPTION_CLOCK_ABSTIME: 1
  // If set, treat the timestamp provided in subscription_clock::timeout as an absolute timestamp of clock subscription_clock::id. If clear, treat the timestamp provided in subscription_clock::timeout relative to the current time value of clock subscription_clock::id.
};
var P = 64;
var x = 48;
var z = 32;
var C;
(function(e) {
  e[e.CUR = 0] = "CUR", e[e.END = 1] = "END", e[e.SET = 2] = "SET";
})(C || (C = {}));
var Zt = class {
  constructor(t) {
    m(this, "fs");
    m(this, "args");
    m(this, "env");
    m(this, "stdin");
    m(this, "stdout");
    m(this, "stderr");
    m(this, "debug");
    m(this, "isTTY");
    this.fs = (t == null ? void 0 : t.fs) ?? {}, this.args = (t == null ? void 0 : t.args) ?? [], this.env = (t == null ? void 0 : t.env) ?? {}, this.stdin = (t == null ? void 0 : t.stdin) ?? (() => null), this.stdout = (t == null ? void 0 : t.stdout) ?? (() => {
    }), this.stderr = (t == null ? void 0 : t.stderr) ?? (() => {
    }), this.debug = t == null ? void 0 : t.debug, this.isTTY = !!(t != null && t.isTTY);
  }
};
var ht = class {
  constructor(t) {
    m(this, "fs");
    m(this, "nextFD", 10);
    m(this, "openMap", /* @__PURE__ */ new Map());
    this.fs = { ...t }, this.openMap.set(3, new b(this.fs, "/"));
  }
  //
  // Helpers
  //
  openFile(t, i, n) {
    const s = new S(t, n);
    i && (s.buffer = new Uint8Array(new ArrayBuffer(1024), 0, 0));
    const l = this.nextFD;
    return this.openMap.set(l, s), this.nextFD++, [c.SUCCESS, l];
  }
  openDir(t, i) {
    const n = new b(t, i), s = this.nextFD;
    return this.openMap.set(s, n), this.nextFD++, [c.SUCCESS, s];
  }
  hasDir(t, i) {
    return i === "." ? true : t.containsDirectory(i);
  }
  //
  // Public Interface
  //
  open(t, i, n, s) {
    const l = !!(n & T.CREAT), d = !!(n & T.DIRECTORY), V = !!(n & T.EXCL), a = !!(n & T.TRUNC), Z = this.openMap.get(t);
    if (!(Z instanceof b))
      return [c.EBADF];
    if (Z.containsFile(i))
      return d ? [c.ENOTDIR] : V ? [c.EEXIST] : this.openFile(Z.get(i), a, s);
    if (this.hasDir(Z, i)) {
      if (i === ".")
        return this.openDir(this.fs, "/");
      const h = `/${i}/`, r = Object.entries(this.fs).filter(([u]) => u.startsWith(h));
      return this.openDir(Object.fromEntries(r), h);
    } else {
      if (l) {
        const h = Z.fullPath(i);
        return this.fs[h] = {
          path: h,
          mode: "binary",
          content: new Uint8Array(),
          timestamps: {
            access: /* @__PURE__ */ new Date(),
            modification: /* @__PURE__ */ new Date(),
            change: /* @__PURE__ */ new Date()
          }
        }, this.openFile(this.fs[h], a, s);
      }
      return [c.ENOTCAPABLE];
    }
  }
  close(t) {
    if (!this.openMap.has(t))
      return c.EBADF;
    const i = this.openMap.get(t);
    return i instanceof S && i.sync(), this.openMap.delete(t), c.SUCCESS;
  }
  read(t, i) {
    const n = this.openMap.get(t);
    return !n || n instanceof b ? [c.EBADF] : [c.SUCCESS, n.read(i)];
  }
  pread(t, i, n) {
    const s = this.openMap.get(t);
    return !s || s instanceof b ? [c.EBADF] : [c.SUCCESS, s.pread(i, n)];
  }
  write(t, i) {
    const n = this.openMap.get(t);
    return !n || n instanceof b ? c.EBADF : (n.write(i), c.SUCCESS);
  }
  pwrite(t, i, n) {
    const s = this.openMap.get(t);
    return !s || s instanceof b ? c.EBADF : (s.pwrite(i, n), c.SUCCESS);
  }
  sync(t) {
    const i = this.openMap.get(t);
    return !i || i instanceof b ? c.EBADF : (i.sync(), c.SUCCESS);
  }
  seek(t, i, n) {
    const s = this.openMap.get(t);
    return !s || s instanceof b ? [c.EBADF] : [c.SUCCESS, s.seek(i, n)];
  }
  tell(t) {
    const i = this.openMap.get(t);
    return !i || i instanceof b ? [c.EBADF] : [c.SUCCESS, i.tell()];
  }
  renumber(t, i) {
    return !this.exists(t) || !this.exists(i) ? c.EBADF : (t === i || (this.close(i), this.openMap.set(i, this.openMap.get(t))), c.SUCCESS);
  }
  unlink(t, i) {
    const n = this.openMap.get(t);
    if (!(n instanceof b))
      return c.EBADF;
    if (!n.contains(i))
      return c.ENOENT;
    for (const s of Object.keys(this.fs))
      (s === n.fullPath(i) || s.startsWith(`${n.fullPath(i)}/`)) && delete this.fs[s];
    return c.SUCCESS;
  }
  rename(t, i, n, s) {
    const l = this.openMap.get(t), d = this.openMap.get(n);
    if (!(l instanceof b) || !(d instanceof b))
      return c.EBADF;
    if (!l.contains(i))
      return c.ENOENT;
    if (d.contains(s))
      return c.EEXIST;
    const V = l.fullPath(i), a = d.fullPath(s);
    for (const Z of Object.keys(this.fs))
      if (Z.startsWith(V)) {
        const h = Z.replace(V, a);
        this.fs[h] = this.fs[Z], this.fs[h].path = h, delete this.fs[Z];
      }
    return c.SUCCESS;
  }
  list(t) {
    const i = this.openMap.get(t);
    return i instanceof b ? [c.SUCCESS, i.list()] : [c.EBADF];
  }
  stat(t) {
    const i = this.openMap.get(t);
    return i instanceof S ? [c.SUCCESS, i.stat()] : [c.EBADF];
  }
  pathStat(t, i) {
    const n = this.openMap.get(t);
    if (!(n instanceof b))
      return [c.EBADF];
    if (n.containsFile(i)) {
      const s = n.fullPath(i), l = new S(this.fs[s], 0).stat();
      return [c.SUCCESS, l];
    } else if (this.hasDir(n, i)) {
      if (i === ".")
        return [c.SUCCESS, new b(this.fs, "/").stat()];
      const s = `/${i}/`, l = Object.entries(this.fs).filter(([V]) => V.startsWith(s)), d = new b(Object.fromEntries(l), s).stat();
      return [c.SUCCESS, d];
    } else
      return [c.ENOTCAPABLE];
  }
  setFlags(t, i) {
    const n = this.openMap.get(t);
    return n instanceof S ? (n.setFlags(i), c.SUCCESS) : c.EBADF;
  }
  setSize(t, i) {
    const n = this.openMap.get(t);
    return n instanceof S ? (n.setSize(Number(i)), c.SUCCESS) : c.EBADF;
  }
  setAccessTime(t, i) {
    const n = this.openMap.get(t);
    return n instanceof S ? (n.setAccessTime(i), c.SUCCESS) : c.EBADF;
  }
  setModificationTime(t, i) {
    const n = this.openMap.get(t);
    return n instanceof S ? (n.setModificationTime(i), c.SUCCESS) : c.EBADF;
  }
  pathSetAccessTime(t, i, n) {
    const s = this.openMap.get(t);
    if (!(s instanceof b))
      return c.EBADF;
    const l = s.get(i);
    if (!l)
      return c.ENOTCAPABLE;
    const d = new S(l, 0);
    return d.setAccessTime(n), d.sync(), c.SUCCESS;
  }
  pathSetModificationTime(t, i, n) {
    const s = this.openMap.get(t);
    if (!(s instanceof b))
      return c.EBADF;
    const l = s.get(i);
    if (!l)
      return c.ENOTCAPABLE;
    const d = new S(l, 0);
    return d.setModificationTime(n), d.sync(), c.SUCCESS;
  }
  pathCreateDir(t, i) {
    const n = this.openMap.get(t);
    if (!(n instanceof b))
      return c.EBADF;
    if (n.contains(i))
      return c.ENOTCAPABLE;
    const s = `${n.fullPath(i)}/.runno`;
    return this.fs[s] = {
      path: s,
      timestamps: {
        access: /* @__PURE__ */ new Date(),
        modification: /* @__PURE__ */ new Date(),
        change: /* @__PURE__ */ new Date()
      },
      mode: "string",
      content: ""
    }, c.SUCCESS;
  }
  //
  // Public Helpers
  //
  exists(t) {
    return this.openMap.has(t);
  }
  fileType(t) {
    const i = this.openMap.get(t);
    return i ? i instanceof S ? R.REGULAR_FILE : R.DIRECTORY : R.UNKNOWN;
  }
  fileFdflags(t) {
    const i = this.openMap.get(t);
    return i instanceof S ? i.fdflags : 0;
  }
};
var S = class {
  constructor(t, i) {
    m(this, "file");
    m(this, "buffer");
    m(this, "_offset", BigInt(0));
    m(this, "isDirty", false);
    m(this, "fdflags");
    m(this, "flagAppend");
    m(this, "flagDSync");
    m(this, "flagNonBlock");
    m(this, "flagRSync");
    m(this, "flagSync");
    if (this.file = t, this.file.mode === "string") {
      const n = new TextEncoder();
      this.buffer = n.encode(this.file.content);
    } else
      this.buffer = this.file.content;
    this.fdflags = i, this.flagAppend = !!(i & E.APPEND), this.flagDSync = !!(i & E.DSYNC), this.flagNonBlock = !!(i & E.NONBLOCK), this.flagRSync = !!(i & E.RSYNC), this.flagSync = !!(i & E.SYNC);
  }
  get offset() {
    return Number(this._offset);
  }
  read(t) {
    const i = this.buffer.subarray(this.offset, this.offset + t);
    return this._offset += BigInt(i.length), i;
  }
  pread(t, i) {
    return this.buffer.subarray(i, i + t);
  }
  write(t) {
    if (this.isDirty = true, this.flagAppend) {
      const i = this.buffer.length;
      this.resize(i + t.byteLength), this.buffer.set(t, i);
    } else {
      const i = Math.max(this.offset + t.byteLength, this.buffer.byteLength);
      this.resize(i), this.buffer.set(t, this.offset), this._offset += BigInt(t.byteLength);
    }
    (this.flagDSync || this.flagSync) && this.sync();
  }
  pwrite(t, i) {
    if (this.isDirty = true, this.flagAppend) {
      const n = this.buffer.length;
      this.resize(n + t.byteLength), this.buffer.set(t, n);
    } else {
      const n = Math.max(i + t.byteLength, this.buffer.byteLength);
      this.resize(n), this.buffer.set(t, i);
    }
    (this.flagDSync || this.flagSync) && this.sync();
  }
  sync() {
    if (!this.isDirty)
      return;
    if (this.isDirty = false, this.file.mode === "binary") {
      this.file.content = new Uint8Array(this.buffer);
      return;
    }
    const t = new TextDecoder();
    this.file.content = t.decode(this.buffer);
  }
  seek(t, i) {
    switch (i) {
      case y.SET:
        this._offset = t;
        break;
      case y.CUR:
        this._offset += t;
        break;
      case y.END:
        this._offset = BigInt(this.buffer.length) + t;
        break;
    }
    return this._offset;
  }
  tell() {
    return this._offset;
  }
  stat() {
    return {
      path: this.file.path,
      timestamps: this.file.timestamps,
      type: R.REGULAR_FILE,
      byteLength: this.buffer.length
    };
  }
  setFlags(t) {
    this.fdflags = t;
  }
  setSize(t) {
    this.resize(t);
  }
  setAccessTime(t) {
    this.file.timestamps.access = t;
  }
  setModificationTime(t) {
    this.file.timestamps.modification = t;
  }
  /**
   * Resizes the buffer to be exactly requiredBytes length, while resizing the
   * underlying buffer to be larger if necessary.
   *
   * Resizing will internally double the buffer size to reduce the need for
   * resizing often.
   *
   * @param requiredBytes how many bytes the buffer needs to have available
   */
  resize(t) {
    if (t <= this.buffer.buffer.byteLength) {
      this.buffer = new Uint8Array(this.buffer.buffer, 0, t);
      return;
    }
    let i;
    this.buffer.buffer.byteLength === 0 ? i = new ArrayBuffer(t < 1024 ? 1024 : t * 2) : t > this.buffer.buffer.byteLength * 2 ? i = new ArrayBuffer(t * 2) : i = new ArrayBuffer(this.buffer.buffer.byteLength * 2);
    const n = new Uint8Array(i, 0, t);
    n.set(this.buffer), this.buffer = n;
  }
};
function Y(e, t) {
  const i = t.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&"), n = new RegExp(`^${i}`);
  return e.replace(n, "");
}
var b = class {
  // full folder path including /
  constructor(t, i) {
    m(this, "dir");
    m(this, "prefix");
    this.dir = t, this.prefix = i;
  }
  containsFile(t) {
    for (const i of Object.keys(this.dir))
      if (Y(i, this.prefix) === t)
        return true;
    return false;
  }
  containsDirectory(t) {
    for (const i of Object.keys(this.dir))
      if (Y(i, this.prefix).startsWith(`${t}/`))
        return true;
    return false;
  }
  contains(t) {
    for (const i of Object.keys(this.dir)) {
      const n = Y(i, this.prefix);
      if (n === t || n.startsWith(`${t}/`))
        return true;
    }
    return false;
  }
  get(t) {
    return this.dir[this.fullPath(t)];
  }
  fullPath(t) {
    return `${this.prefix}${t}`;
  }
  list() {
    const t = [], i = /* @__PURE__ */ new Set();
    for (const n of Object.keys(this.dir)) {
      const s = Y(n, this.prefix);
      if (s.includes("/")) {
        const l = s.split("/")[0];
        if (i.has(l))
          continue;
        i.add(l), t.push({ name: l, type: R.DIRECTORY });
      } else
        t.push({
          name: s,
          type: R.REGULAR_FILE
        });
    }
    return t;
  }
  stat() {
    return {
      path: this.prefix,
      timestamps: {
        access: /* @__PURE__ */ new Date(),
        modification: /* @__PURE__ */ new Date(),
        change: /* @__PURE__ */ new Date()
      },
      type: R.DIRECTORY,
      byteLength: 0
    };
  }
};
var D = [];
function f(e) {
  D.push(e);
}
function rt() {
  const e = D;
  return D = [], e;
}
var J = class extends Error {
};
var A = class extends Error {
};
var H = class {
  constructor(t) {
    m(this, "instance");
    m(this, "module");
    m(this, "memory");
    m(this, "context");
    m(this, "drive");
    m(this, "hasBeenInitialized", false);
    this.context = new Zt(t), this.drive = new ht(this.context.fs);
  }
  /**
   * Start a WASI command.
   *
   */
  static async start(t, i = {}) {
    const n = new H(i), s = await WebAssembly.instantiateStreaming(t, n.getImportObject());
    return n.start(s);
  }
  /**
   * Initialize a WASI reactor.
   *
   * Returns the WebAssembly instance exports.
   */
  static async initialize(t, i = {}) {
    const n = new H(i), s = await WebAssembly.instantiateStreaming(t, n.getImportObject());
    return n.initialize(s), s.instance.exports;
  }
  getImportObject() {
    return {
      wasi_snapshot_preview1: this.getImports("preview1", this.context.debug),
      wasi_unstable: this.getImports("unstable", this.context.debug)
    };
  }
  /**
   * Start a WASI command.
   *
   * See: https://github.com/WebAssembly/WASI/blob/main/legacy/application-abi.md
   */
  start(t, i = {}) {
    if (this.hasBeenInitialized)
      throw new A("This instance has already been initialized");
    if (this.hasBeenInitialized = true, this.instance = t.instance, this.module = t.module, this.memory = i.memory ?? this.instance.exports.memory, "_initialize" in this.instance.exports)
      throw new J("WebAssembly instance is a reactor and should be started with initialize.");
    if (!("_start" in this.instance.exports))
      throw new J("WebAssembly instance doesn't export _start, it may not be WASI or may be a Reactor.");
    const n = this.instance.exports._start;
    try {
      n();
    } catch (s) {
      if (s instanceof v)
        return {
          exitCode: s.code,
          fs: this.drive.fs
        };
      if (s instanceof WebAssembly.RuntimeError)
        return {
          exitCode: 134,
          fs: this.drive.fs
        };
      throw s;
    }
    return {
      exitCode: 0,
      fs: this.drive.fs
    };
  }
  /**
   * Initialize a WASI Reactor.
   *
   * See: https://github.com/WebAssembly/WASI/blob/main/legacy/application-abi.md
   */
  initialize(t, i = {}) {
    if (this.hasBeenInitialized)
      throw new A("This instance has already been initialized");
    if (this.hasBeenInitialized = true, this.instance = t.instance, this.module = t.module, this.memory = i.memory ?? this.instance.exports.memory, "_start" in this.instance.exports)
      throw new J("WebAssembly instance is a command and should be started with start.");
    if ("_initialize" in this.instance.exports) {
      const n = this.instance.exports._initialize;
      n();
    }
  }
  getImports(t, i) {
    const n = {
      args_get: this.args_get.bind(this),
      args_sizes_get: this.args_sizes_get.bind(this),
      clock_res_get: this.clock_res_get.bind(this),
      clock_time_get: this.clock_time_get.bind(this),
      environ_get: this.environ_get.bind(this),
      environ_sizes_get: this.environ_sizes_get.bind(this),
      proc_exit: this.proc_exit.bind(this),
      random_get: this.random_get.bind(this),
      sched_yield: this.sched_yield.bind(this),
      // File Descriptors
      fd_advise: this.fd_advise.bind(this),
      fd_allocate: this.fd_allocate.bind(this),
      fd_close: this.fd_close.bind(this),
      fd_datasync: this.fd_datasync.bind(this),
      fd_fdstat_get: this.fd_fdstat_get.bind(this),
      fd_fdstat_set_flags: this.fd_fdstat_set_flags.bind(this),
      fd_fdstat_set_rights: this.fd_fdstat_set_rights.bind(this),
      fd_filestat_get: this.fd_filestat_get.bind(this),
      fd_filestat_set_size: this.fd_filestat_set_size.bind(this),
      fd_filestat_set_times: this.fd_filestat_set_times.bind(this),
      fd_pread: this.fd_pread.bind(this),
      fd_prestat_dir_name: this.fd_prestat_dir_name.bind(this),
      fd_prestat_get: this.fd_prestat_get.bind(this),
      fd_pwrite: this.fd_pwrite.bind(this),
      fd_read: this.fd_read.bind(this),
      fd_readdir: this.fd_readdir.bind(this),
      fd_renumber: this.fd_renumber.bind(this),
      fd_seek: this.fd_seek.bind(this),
      fd_sync: this.fd_sync.bind(this),
      fd_tell: this.fd_tell.bind(this),
      fd_write: this.fd_write.bind(this),
      // Paths
      path_filestat_get: this.path_filestat_get.bind(this),
      path_filestat_set_times: this.path_filestat_set_times.bind(this),
      path_open: this.path_open.bind(this),
      path_rename: this.path_rename.bind(this),
      path_unlink_file: this.path_unlink_file.bind(this),
      path_create_directory: this.path_create_directory.bind(this),
      // Unimplemented
      path_link: this.path_link.bind(this),
      path_readlink: this.path_readlink.bind(this),
      path_remove_directory: this.path_remove_directory.bind(this),
      path_symlink: this.path_symlink.bind(this),
      poll_oneoff: this.poll_oneoff.bind(this),
      proc_raise: this.proc_raise.bind(this),
      sock_accept: this.sock_accept.bind(this),
      sock_recv: this.sock_recv.bind(this),
      sock_send: this.sock_send.bind(this),
      sock_shutdown: this.sock_shutdown.bind(this),
      // Unimplemented - WASMEdge compatibility
      sock_open: this.sock_open.bind(this),
      sock_listen: this.sock_listen.bind(this),
      sock_connect: this.sock_connect.bind(this),
      sock_setsockopt: this.sock_setsockopt.bind(this),
      sock_bind: this.sock_bind.bind(this),
      sock_getlocaladdr: this.sock_getlocaladdr.bind(this),
      sock_getpeeraddr: this.sock_getpeeraddr.bind(this),
      sock_getaddrinfo: this.sock_getaddrinfo.bind(this)
    };
    t === "unstable" && (n.path_filestat_get = this.unstable_path_filestat_get.bind(this), n.fd_filestat_get = this.unstable_fd_filestat_get.bind(this), n.fd_seek = this.unstable_fd_seek.bind(this));
    for (const [s, l] of Object.entries(n))
      n[s] = function() {
        let d = l.apply(this, arguments);
        if (i) {
          const V = rt();
          d = i(s, [...arguments], d, V) ?? d;
        }
        return d;
      };
    return n;
  }
  //
  // Helpers
  //
  get envArray() {
    return Object.entries(this.context.env).map(([t, i]) => `${t}=${i}`);
  }
  //
  // WASI Implementation
  //
  /**
   * Read command-line argument data. The size of the array should match that
   * returned by args_sizes_get. Each argument is expected to be \0 terminated.
   */
  args_get(t, i) {
    const n = new DataView(this.memory.buffer);
    for (const s of this.context.args) {
      n.setUint32(t, i, true), t += 4;
      const l = new TextEncoder().encode(`${s}\0`);
      new Uint8Array(this.memory.buffer, i, l.byteLength).set(l), i += l.byteLength;
    }
    return c.SUCCESS;
  }
  /**
   * Return command-line argument data sizes.
   */
  args_sizes_get(t, i) {
    const n = this.context.args, s = n.reduce((d, V) => d + new TextEncoder().encode(`${V}\0`).byteLength, 0), l = new DataView(this.memory.buffer);
    return l.setUint32(t, n.length, true), l.setUint32(i, s, true), c.SUCCESS;
  }
  /**
   * Return the resolution of a clock. Implementations are required to provide a
   * non-zero value for supported clocks. For unsupported clocks, return
   * errno::inval. Note: This is similar to clock_getres in POSIX.
   */
  clock_res_get(t, i) {
    switch (t) {
      case G.REALTIME:
      case G.MONOTONIC:
      case G.PROCESS_CPUTIME_ID:
      case G.THREAD_CPUTIME_ID:
        return new DataView(this.memory.buffer).setBigUint64(i, BigInt(1e6), true), c.SUCCESS;
    }
    return c.EINVAL;
  }
  /**
   * Return the time value of a clock.
   * Note: This is similar to clock_gettime in POSIX.
   */
  clock_time_get(t, i, n) {
    switch (t) {
      case G.REALTIME:
      case G.MONOTONIC:
      case G.PROCESS_CPUTIME_ID:
      case G.THREAD_CPUTIME_ID:
        return new DataView(this.memory.buffer).setBigUint64(n, W(/* @__PURE__ */ new Date()), true), c.SUCCESS;
    }
    return c.EINVAL;
  }
  /**
   * Read environment variable data. The sizes of the buffers should match that
   * returned by environ_sizes_get. Key/value pairs are expected to be joined
   * with =s, and terminated with \0s.
   */
  environ_get(t, i) {
    const n = new DataView(this.memory.buffer);
    for (const s of this.envArray) {
      n.setUint32(t, i, true), t += 4;
      const l = new TextEncoder().encode(`${s}\0`);
      new Uint8Array(this.memory.buffer, i, l.byteLength).set(l), i += l.byteLength;
    }
    return c.SUCCESS;
  }
  /**
   * Return environment variable data sizes.
   */
  environ_sizes_get(t, i) {
    const n = this.envArray.reduce((l, d) => l + new TextEncoder().encode(`${d}\0`).byteLength, 0), s = new DataView(this.memory.buffer);
    return s.setUint32(t, this.envArray.length, true), s.setUint32(i, n, true), c.SUCCESS;
  }
  /**
   * Terminate the process normally. An exit code of 0 indicates successful
   * termination of the program. The meanings of other values is dependent on
   * the environment.
   */
  proc_exit(t) {
    throw new v(t);
  }
  /**
   * Write high-quality random data into a buffer. This function blocks when the
   * implementation is unable to immediately provide sufficient high-quality
   * random data. This function may execute slowly, so when large mounts of
   * random data are required, it's advisable to use this function to seed a
   * pseudo-random number generator, rather than to provide the random data
   * directly.
   */
  random_get(t, i) {
    const n = new Uint8Array(this.memory.buffer, t, i);
    return globalThis.crypto.getRandomValues(n), c.SUCCESS;
  }
  /**
   * Temporarily yield execution of the calling thread.
   * Note: This is similar to sched_yield in POSIX.
   */
  sched_yield() {
    return c.SUCCESS;
  }
  //
  // File Descriptors
  //
  /**
   * Read from a file descriptor. Note: This is similar to readv in POSIX.
   */
  fd_read(t, i, n, s) {
    if (t === 1 || t === 2)
      return c.ENOTSUP;
    const l = new DataView(this.memory.buffer), d = K(l, i, n), V = new TextEncoder();
    let a = 0, Z = c.SUCCESS;
    for (const h of d) {
      let r;
      if (t === 0) {
        const X = this.context.stdin(h.byteLength);
        if (!X)
          break;
        r = V.encode(X);
      } else {
        const [X, L] = this.drive.read(t, h.byteLength);
        if (X) {
          Z = X;
          break;
        } else
          r = L;
      }
      const u = Math.min(h.byteLength, r.byteLength);
      h.set(r.subarray(0, u)), a += u;
    }
    return f({ bytesRead: a }), l.setUint32(s, a, true), Z;
  }
  /**
   * Write to a file descriptor. Note: This is similar to writev in POSIX.
   */
  fd_write(t, i, n, s) {
    if (t === 0)
      return c.ENOTSUP;
    const l = new DataView(this.memory.buffer), d = K(l, i, n), V = new TextDecoder();
    let a = 0, Z = c.SUCCESS;
    for (const h of d)
      if (h.byteLength !== 0) {
        if (t === 1 || t === 2) {
          const r = t === 1 ? this.context.stdout : this.context.stderr, u = V.decode(h);
          r(u), f({ output: u });
        } else if (Z = this.drive.write(t, h), Z != c.SUCCESS)
          break;
        a += h.byteLength;
      }
    return l.setUint32(s, a, true), Z;
  }
  /**
   * Provide file advisory information on a file descriptor.
   * Note: This is similar to posix_fadvise in POSIX.
   */
  fd_advise() {
    return c.SUCCESS;
  }
  /**
   * Force the allocation of space in a file.
   * Note: This is similar to posix_fallocate in POSIX.
   */
  fd_allocate(t, i, n) {
    return this.drive.pwrite(t, new Uint8Array(Number(n)), Number(i));
  }
  /**
   * Close a file descriptor.
   * Note: This is similar to close in POSIX.
   *
   * @param fd
   */
  fd_close(t) {
    return this.drive.close(t);
  }
  /**
   * Synchronize the data of a file to disk.
   * Note: This is similar to fdatasync in POSIX.
   *
   * @param fd
   */
  fd_datasync(t) {
    return this.drive.sync(t);
  }
  /**
   * Get the attributes of a file descriptor.
   * Note: This returns similar flags to fsync(fd, F_GETFL) in POSIX,
   * as well as additional fields.
   *
   * Returns fdstat - the buffer where the file descriptor's attributes
   * are stored.
   *
   * @returns Result<fdstat, errno>
   */
  fd_fdstat_get(t, i) {
    if (t < 3) {
      let V;
      if (this.context.isTTY) {
        const Z = O ^ o.FD_SEEK ^ o.FD_TELL;
        V = B(R.CHARACTER_DEVICE, 0, Z);
      } else
        V = B(R.CHARACTER_DEVICE, 0);
      return new Uint8Array(this.memory.buffer, i, V.byteLength).set(V), c.SUCCESS;
    }
    if (!this.drive.exists(t))
      return c.EBADF;
    const n = this.drive.fileType(t), s = this.drive.fileFdflags(t), l = B(n, s);
    return new Uint8Array(this.memory.buffer, i, l.byteLength).set(l), c.SUCCESS;
  }
  /**
   * Adjust the flags associated with a file descriptor.
   * Note: This is similar to fcntl(fd, F_SETFL, flags) in POSIX.
   */
  fd_fdstat_set_flags(t, i) {
    return this.drive.setFlags(t, i);
  }
  /**
   * Adjust the rights associated with a file descriptor. This can only be used
   * to remove rights, and returns errno::notcapable if called in a way that
   * would attempt to add rights
   */
  fd_fdstat_set_rights() {
    return c.SUCCESS;
  }
  /**
   * Return the attributes of an open file.
   */
  fd_filestat_get(t, i) {
    return this.shared_fd_filestat_get(t, i, "preview1");
  }
  /**
   * Return the attributes of an open file.
   * This version is used
   */
  unstable_fd_filestat_get(t, i) {
    return this.shared_fd_filestat_get(t, i, "unstable");
  }
  /**
   * Return the attributes of an open file.
   */
  shared_fd_filestat_get(t, i, n) {
    const s = n === "unstable" ? $ : j;
    if (t < 3) {
      let Z;
      switch (t) {
        case 0:
          Z = "/dev/stdin";
          break;
        case 1:
          Z = "/dev/stdout";
          break;
        case 2:
          Z = "/dev/stderr";
          break;
        default:
          Z = "/dev/undefined";
          break;
      }
      const h = s({
        path: Z,
        byteLength: 0,
        timestamps: {
          access: /* @__PURE__ */ new Date(),
          modification: /* @__PURE__ */ new Date(),
          change: /* @__PURE__ */ new Date()
        },
        type: R.CHARACTER_DEVICE
      });
      return new Uint8Array(this.memory.buffer, i, h.byteLength).set(h), c.SUCCESS;
    }
    const [l, d] = this.drive.stat(t);
    if (l != c.SUCCESS)
      return l;
    f({ resolvedPath: d.path, stat: d });
    const V = s(d);
    return new Uint8Array(this.memory.buffer, i, V.byteLength).set(V), c.SUCCESS;
  }
  /**
   * Adjust the size of an open file. If this increases the file's size, the
   * extra bytes are filled with zeros. Note: This is similar to ftruncate in
   * POSIX.
   */
  fd_filestat_set_size(t, i) {
    return this.drive.setSize(t, i);
  }
  /**
   * Adjust the timestamps of an open file or directory.
   * Note: This is similar to futimens in POSIX.
   */
  fd_filestat_set_times(t, i, n, s) {
    let l = null;
    s & U.ATIM && (l = k(i)), s & U.ATIM_NOW && (l = /* @__PURE__ */ new Date());
    let d = null;
    if (s & U.MTIM && (d = k(n)), s & U.MTIM_NOW && (d = /* @__PURE__ */ new Date()), l) {
      const V = this.drive.setAccessTime(t, l);
      if (V != c.SUCCESS)
        return V;
    }
    if (d) {
      const V = this.drive.setModificationTime(t, d);
      if (V != c.SUCCESS)
        return V;
    }
    return c.SUCCESS;
  }
  /**
   * Read from a file descriptor, without using and updating the file
   * descriptor's offset. Note: This is similar to preadv in POSIX.
   */
  fd_pread(t, i, n, s, l) {
    if (t === 1 || t === 2)
      return c.ENOTSUP;
    if (t === 0)
      return this.fd_read(t, i, n, l);
    const d = new DataView(this.memory.buffer), V = K(d, i, n);
    let a = 0, Z = c.SUCCESS;
    for (const h of V) {
      const [r, u] = this.drive.pread(t, h.byteLength, Number(s) + a);
      if (r !== c.SUCCESS) {
        Z = r;
        break;
      }
      const X = Math.min(h.byteLength, u.byteLength);
      h.set(u.subarray(0, X)), a += X;
    }
    return d.setUint32(l, a, true), Z;
  }
  /**
   * Return a description of the given preopened file descriptor.
   */
  fd_prestat_dir_name(t, i, n) {
    if (t !== 3)
      return c.EBADF;
    const s = new TextEncoder().encode("/");
    return new Uint8Array(this.memory.buffer, i, n).set(s.subarray(0, n)), c.SUCCESS;
  }
  /**
   * Return a description of the given preopened file descriptor.
   */
  fd_prestat_get(t, i) {
    if (t !== 3)
      return c.EBADF;
    const n = new TextEncoder().encode("."), s = new DataView(this.memory.buffer, i);
    return s.setUint8(0, Q.DIR), s.setUint32(4, n.byteLength, true), c.SUCCESS;
  }
  /**
   * Write to a file descriptor, without using and updating the file
   * descriptor's offset. Note: This is similar to pwritev in POSIX.
   */
  fd_pwrite(t, i, n, s, l) {
    if (t === 0)
      return c.ENOTSUP;
    if (t === 1 || t === 2)
      return this.fd_write(t, i, n, l);
    const d = new DataView(this.memory.buffer), V = K(d, i, n);
    let a = 0, Z = c.SUCCESS;
    for (const h of V)
      if (h.byteLength !== 0) {
        if (Z = this.drive.pwrite(t, h, Number(s)), Z != c.SUCCESS)
          break;
        a += h.byteLength;
      }
    return d.setUint32(l, a, true), Z;
  }
  /**
   * Read directory entries from a directory. When successful, the contents of
   * the output buffer consist of a sequence of directory entries. Each
   * directory entry consists of a dirent object, followed by dirent::d_namlen
   * bytes holding the name of the directory entry. This function fills the
   * output buffer as much as possible, potentially truncating the last
   * directory entry. This allows the caller to grow its read buffer size in
   * case it's too small to fit a single large directory entry, or skip the
   * oversized directory entry.
   */
  fd_readdir(t, i, n, s, l) {
    const [d, V] = this.drive.list(t);
    if (d != c.SUCCESS)
      return d;
    let a = [], Z = 0;
    for (const { name: N, type: F } of V) {
      const g = ot(N, F, Z);
      a.push(g), Z++;
    }
    a = a.slice(Number(s));
    const h = a.reduce((N, F) => N + F.byteLength, 0), r = new Uint8Array(h);
    let u = 0;
    for (const N of a)
      r.set(N, u), u += N.byteLength;
    const X = new Uint8Array(this.memory.buffer, i, n), L = r.subarray(0, n);
    return X.set(L), new DataView(this.memory.buffer).setUint32(l, L.byteLength, true), c.SUCCESS;
  }
  /**
   * Atomically replace a file descriptor by renumbering another file
   * descriptor. Due to the strong focus on thread safety, this environment does
   * not provide a mechanism to duplicate or renumber a file descriptor to an
   * arbitrary number, like dup2(). This would be prone to race conditions, as
   * an actual file descriptor with the same number could be allocated by a
   * different thread at the same time. This function provides a way to
   * atomically renumber file descriptors, which would disappear if dup2() were
   * to be removed entirely.
   */
  fd_renumber(t, i) {
    return this.drive.renumber(t, i);
  }
  /**
   * Move the offset of a file descriptor.
   *
   * The offset is specified as a bigint here
   * Note: This is similar to lseek in POSIX.
   *
   * The offset, and return type are FileSize (u64) which is represented by
   * bigint in JavaScript.
   */
  fd_seek(t, i, n, s) {
    const [l, d] = this.drive.seek(t, i, n);
    return l !== c.SUCCESS || (f({ newOffset: d.toString() }), new DataView(this.memory.buffer).setBigUint64(s, d, true)), l;
  }
  unstable_fd_seek(t, i, n, s) {
    const l = bt[n];
    return this.fd_seek(t, i, l, s);
  }
  /**
   * Synchronize the data and metadata of a file to disk.
   * Note: This is similar to fsync in POSIX.
   */
  fd_sync(t) {
    return this.drive.sync(t);
  }
  /**
   * Return the current offset of a file descriptor.
   * Note: This is similar to lseek(fd, 0, SEEK_CUR) in POSIX.
   *
   * The return type is FileSize (u64) which is represented by bigint in JS.
   *
   */
  fd_tell(t, i) {
    const [n, s] = this.drive.tell(t);
    return n !== c.SUCCESS || new DataView(this.memory.buffer).setBigUint64(i, s, true), n;
  }
  //
  // Paths
  //
  path_filestat_get(t, i, n, s, l) {
    return this.shared_path_filestat_get(t, i, n, s, l, "preview1");
  }
  unstable_path_filestat_get(t, i, n, s, l) {
    return this.shared_path_filestat_get(t, i, n, s, l, "unstable");
  }
  /**
   * Return the attributes of a file or directory.
   * Note: This is similar to stat in POSIX.
   */
  shared_path_filestat_get(t, i, n, s, l, d) {
    const V = d === "unstable" ? $ : j, a = new TextDecoder().decode(new Uint8Array(this.memory.buffer, n, s));
    f({ path: a });
    const [Z, h] = this.drive.pathStat(t, a);
    if (Z != c.SUCCESS)
      return Z;
    const r = V(h);
    return new Uint8Array(this.memory.buffer, l, r.byteLength).set(r), Z;
  }
  /**
   * Adjust the timestamps of a file or directory.
   * Note: This is similar to utimensat in POSIX.
   */
  path_filestat_set_times(t, i, n, s, l, d, V) {
    let a = null;
    V & U.ATIM && (a = k(l)), V & U.ATIM_NOW && (a = /* @__PURE__ */ new Date());
    let Z = null;
    V & U.MTIM && (Z = k(d)), V & U.MTIM_NOW && (Z = /* @__PURE__ */ new Date());
    const h = new TextDecoder().decode(new Uint8Array(this.memory.buffer, n, s));
    if (a) {
      const r = this.drive.pathSetAccessTime(t, h, a);
      if (r != c.SUCCESS)
        return r;
    }
    if (Z) {
      const r = this.drive.pathSetModificationTime(t, h, Z);
      if (r != c.SUCCESS)
        return r;
    }
    return c.SUCCESS;
  }
  /**
   * Open a file or directory. The returned file descriptor is not guaranteed to
   * be the lowest-numbered file descriptor not currently open; it is randomized
   * to prevent applications from depending on making assumptions about indexes,
   * since this is error-prone in multi-threaded contexts. The returned file
   * descriptor is guaranteed to be less than 2**31.
   * Note: This is similar to openat in POSIX.
   * @param fd: fd
   * @param dirflags: lookupflags Flags determining the method of how the path
   *                  is resolved. Not supported by Runno (symlinks)
   * @param path: string The relative path of the file or directory to open,
   *              relative to the path_open::fd directory.
   * @param oflags: oflags The method by which to open the file.
   * @param fs_rights_base: rights The initial rights of the newly created file
   *                        descriptor. The implementation is allowed to return
   *                        a file descriptor with fewer rights than specified,
   *                        if and only if those rights do not apply to the type
   *                        of file being opened. The base rights are rights
   *                        that will apply to operations using the file
   *                        descriptor itself, while the inheriting rights are
   *                        rights that apply to file descriptors derived from
   *                        it.
   * @param fs_rights_inheriting: rights
   * @param fdflags: fdflags
   *
   */
  path_open(t, i, n, s, l, d, V, a, Z) {
    const h = new DataView(this.memory.buffer), r = I(this.memory, n, s), u = !!(l & T.CREAT), X = !!(l & T.DIRECTORY), L = !!(l & T.EXCL), _ = !!(l & T.TRUNC), N = !!(a & E.APPEND), F = !!(a & E.DSYNC), g = !!(a & E.NONBLOCK), nt = !!(a & E.RSYNC), st = !!(a & E.SYNC);
    f({
      path: r,
      openFlags: {
        createFileIfNone: u,
        failIfNotDir: X,
        failIfFileExists: L,
        truncateFile: _
      },
      fileDescriptorFlags: {
        flagAppend: N,
        flagDSync: F,
        flagNonBlock: g,
        flagRSync: nt,
        flagSync: st
      }
    });
    const [M, ct] = this.drive.open(t, r, l, a);
    return M || (h.setUint32(Z, ct, true), M);
  }
  /**
   * Rename a file or directory. Note: This is similar to renameat in POSIX.
   */
  path_rename(t, i, n, s, l, d) {
    const V = I(this.memory, i, n), a = I(this.memory, l, d);
    return f({ oldPath: V, newPath: a }), this.drive.rename(t, V, s, a);
  }
  /**
   * Unlink a file. Return errno::isdir if the path refers to a directory.
   * Note: This is similar to unlinkat(fd, path, 0) in POSIX.
   */
  path_unlink_file(t, i, n) {
    const s = I(this.memory, i, n);
    return f({ path: s }), this.drive.unlink(t, s);
  }
  /**
   * Concurrently poll for the occurrence of a set of events.
   */
  poll_oneoff(t, i, n, s) {
    for (let d = 0; d < n; d++) {
      const V = new Uint8Array(this.memory.buffer, t + d * x, x), a = mt(V), Z = new Uint8Array(this.memory.buffer, i + d * z, z);
      let h = 0, r = c.SUCCESS;
      switch (a.type) {
        case p.CLOCK:
          for (; /* @__PURE__ */ new Date() < a.timeout; )
            ;
          Z.set(ut(a.userdata, c.SUCCESS));
          break;
        case p.FD_READ:
          if (a.fd < 3)
            a.fd === 0 ? (r = c.SUCCESS, h = 32) : r = c.EBADF;
          else {
            const [u, X] = this.drive.stat(a.fd);
            r = u, h = X ? X.byteLength : 0;
          }
          Z.set(q(a.userdata, r, p.FD_READ, BigInt(h)));
          break;
        case p.FD_WRITE:
          if (h = 0, r = c.SUCCESS, a.fd < 3)
            a.fd === 0 ? r = c.EBADF : (r = c.SUCCESS, h = 1024);
          else {
            const [u, X] = this.drive.stat(a.fd);
            r = u, h = X ? X.byteLength : 0;
          }
          Z.set(q(a.userdata, r, p.FD_READ, BigInt(h)));
          break;
      }
    }
    return new DataView(this.memory.buffer, s, 4).setUint32(0, n, true), c.SUCCESS;
  }
  /**
   * Create a directory. Note: This is similar to mkdirat in POSIX.
   */
  path_create_directory(t, i, n) {
    const s = I(this.memory, i, n);
    return this.drive.pathCreateDir(t, s);
  }
  //
  // Unimplemented - these operations are not supported by Runno
  //
  /**
   * Create a hard link. Note: This is similar to linkat in POSIX.
   */
  path_link() {
    return c.ENOSYS;
  }
  /**
   * Read the contents of a symbolic link.
   * Note: This is similar to readlinkat in POSIX.
   */
  path_readlink() {
    return c.ENOSYS;
  }
  /**
   * Remove a directory. Return errno::notempty if the directory is not empty.
   * Note: This is similar to unlinkat(fd, path, AT_REMOVEDIR) in POSIX.
   */
  path_remove_directory() {
    return c.ENOSYS;
  }
  /**
   * Create a symbolic link. Note: This is similar to symlinkat in POSIX.
   */
  path_symlink() {
    return c.ENOSYS;
  }
  /**
   * Send a signal to the process of the calling thread.
   * Note: This is similar to raise in POSIX.
   */
  proc_raise() {
    return c.ENOSYS;
  }
  /**
   * Accept a new incoming connection. Note: This is similar to accept in POSIX.
   */
  sock_accept() {
    return c.ENOSYS;
  }
  /**
   * Receive a message from a socket. Note: This is similar to recv in POSIX,
   * though it also supports reading the data into multiple buffers in the
   * manner of readv.
   */
  sock_recv() {
    return c.ENOSYS;
  }
  /**
   * Send a message on a socket. Note: This is similar to send in POSIX, though
   * it also supports writing the data from multiple buffers in the manner of
   * writev.
   */
  sock_send() {
    return c.ENOSYS;
  }
  /**
   * Shut down socket send and receive channels. Note: This is similar to
   * shutdown in POSIX.
   */
  sock_shutdown() {
    return c.ENOSYS;
  }
  //
  // Unimplemented - these are for compatibility with Wasmedge
  //
  sock_open() {
    return c.ENOSYS;
  }
  sock_listen() {
    return c.ENOSYS;
  }
  sock_connect() {
    return c.ENOSYS;
  }
  sock_setsockopt() {
    return c.ENOSYS;
  }
  sock_bind() {
    return c.ENOSYS;
  }
  sock_getlocaladdr() {
    return c.ENOSYS;
  }
  sock_getpeeraddr() {
    return c.ENOSYS;
  }
  sock_getaddrinfo() {
    return c.ENOSYS;
  }
};
var O = o.FD_DATASYNC | o.FD_READ | o.FD_SEEK | o.FD_FDSTAT_SET_FLAGS | o.FD_SYNC | o.FD_TELL | o.FD_WRITE | o.FD_ADVISE | o.FD_ALLOCATE | o.PATH_CREATE_DIRECTORY | o.PATH_CREATE_FILE | o.PATH_LINK_SOURCE | o.PATH_LINK_TARGET | o.PATH_OPEN | o.FD_READDIR | o.PATH_READLINK | o.PATH_RENAME_SOURCE | o.PATH_RENAME_TARGET | o.PATH_FILESTAT_GET | o.PATH_FILESTAT_SET_SIZE | o.PATH_FILESTAT_SET_TIMES | o.FD_FILESTAT_GET | o.FD_FILESTAT_SET_SIZE | o.FD_FILESTAT_SET_TIMES | o.PATH_SYMLINK | o.PATH_REMOVE_DIRECTORY | o.PATH_UNLINK_FILE | o.POLL_FD_READWRITE | o.SOCK_SHUTDOWN | o.SOCK_ACCEPT;
var v = class extends Error {
  constructor(i) {
    super();
    m(this, "code");
    this.code = i;
  }
};
function I(e, t, i) {
  return new TextDecoder().decode(new Uint8Array(e.buffer, t, i));
}
function K(e, t, i) {
  let n = Array(i);
  for (let s = 0; s < i; s++) {
    const l = e.getUint32(t, true);
    t += 4;
    const d = e.getUint32(t, true);
    t += 4, n[s] = new Uint8Array(e.buffer, l, d);
  }
  return n;
}
function mt(e) {
  const t = new Uint8Array(8);
  t.set(e.subarray(0, 8));
  const i = e[8], n = new DataView(e.buffer, e.byteOffset + 9);
  switch (i) {
    case p.FD_READ:
    case p.FD_WRITE:
      return {
        userdata: t,
        type: i,
        fd: n.getUint32(0, true)
      };
    case p.CLOCK:
      const s = n.getUint16(24, true), l = W(/* @__PURE__ */ new Date()), d = n.getBigUint64(8, true), V = n.getBigUint64(16, true), a = s & et.SUBSCRIPTION_CLOCK_ABSTIME ? d : l + d;
      return {
        userdata: t,
        type: i,
        id: n.getUint32(0, true),
        timeout: k(a),
        precision: k(a + V)
      };
  }
}
function j(e) {
  const t = new Uint8Array(P), i = new DataView(t.buffer);
  return i.setBigUint64(0, BigInt(0), true), i.setBigUint64(8, BigInt(w(e.path)), true), i.setUint8(16, e.type), i.setBigUint64(24, BigInt(1), true), i.setBigUint64(32, BigInt(e.byteLength), true), i.setBigUint64(40, W(e.timestamps.access), true), i.setBigUint64(48, W(e.timestamps.modification), true), i.setBigUint64(56, W(e.timestamps.change), true), t;
}
function $(e) {
  const t = new Uint8Array(P), i = new DataView(t.buffer);
  return i.setBigUint64(0, BigInt(0), true), i.setBigUint64(8, BigInt(w(e.path)), true), i.setUint8(16, e.type), i.setUint32(20, 1, true), i.setBigUint64(24, BigInt(e.byteLength), true), i.setBigUint64(32, W(e.timestamps.access), true), i.setBigUint64(40, W(e.timestamps.modification), true), i.setBigUint64(48, W(e.timestamps.change), true), t;
}
function B(e, t, i) {
  const n = i ?? O, s = i ?? O, l = new Uint8Array(24), d = new DataView(l.buffer, 0, 24);
  return d.setUint8(0, e), d.setUint32(2, t, true), d.setBigUint64(8, n, true), d.setBigUint64(16, s, true), l;
}
function ot(e, t, i) {
  const n = new TextEncoder().encode(e), s = 24 + n.byteLength, l = new Uint8Array(s), d = new DataView(l.buffer);
  return d.setBigUint64(0, BigInt(i + 1), true), d.setBigUint64(8, BigInt(w(e)), true), d.setUint32(16, n.length, true), d.setUint8(20, t), l.set(n, 24), l;
}
function ut(e, t) {
  const i = new Uint8Array(32);
  i.set(e, 0);
  const n = new DataView(i.buffer);
  return n.setUint16(8, t, true), n.setUint16(10, p.CLOCK, true), i;
}
function q(e, t, i, n) {
  const s = new Uint8Array(32);
  s.set(e, 0);
  const l = new DataView(s.buffer);
  return l.setUint16(8, t, true), l.setUint16(10, i, true), l.setBigUint64(16, n, true), s;
}
function w(e, t = 0) {
  let i = 3735928559 ^ t, n = 1103547991 ^ t;
  for (let s = 0, l; s < e.length; s++)
    l = e.charCodeAt(s), i = Math.imul(i ^ l, 2654435761), n = Math.imul(n ^ l, 1597334677);
  return i = Math.imul(i ^ i >>> 16, 2246822507) ^ Math.imul(n ^ n >>> 13, 3266489909), n = Math.imul(n ^ n >>> 16, 2246822507) ^ Math.imul(i ^ i >>> 13, 3266489909), 4294967296 * (2097151 & n) + (i >>> 0);
}
function W(e) {
  return BigInt(e.getTime()) * BigInt(1e6);
}
function k(e) {
  return new Date(Number(e / BigInt(1e6)));
}
var bt = {
  [C.CUR]: y.CUR,
  [C.END]: y.END,
  [C.SET]: y.SET
};
var it = "dmFyIFR0PU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgQ3Q9KHMsQyxiKT0+QyBpbiBzP1R0KHMsQyx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6Yn0pOnNbQ109Yjt2YXIgZD0ocyxDLGIpPT4oQ3Qocyx0eXBlb2YgQyE9InN5bWJvbCI/QysiIjpDLGIpLGIpOyhmdW5jdGlvbigpeyJ1c2Ugc3RyaWN0Ijt2YXIgcz0oZT0+KGVbZS5TVUNDRVNTPTBdPSJTVUNDRVNTIixlW2UuRTJCSUc9MV09IkUyQklHIixlW2UuRUFDQ0VTUz0yXT0iRUFDQ0VTUyIsZVtlLkVBRERSSU5VU0U9M109IkVBRERSSU5VU0UiLGVbZS5FQUREUk5PVEFWQUlMPTRdPSJFQUREUk5PVEFWQUlMIixlW2UuRUFGTk9TVVBQT1JUPTVdPSJFQUZOT1NVUFBPUlQiLGVbZS5FQUdBSU49Nl09IkVBR0FJTiIsZVtlLkVBTFJFQURZPTddPSJFQUxSRUFEWSIsZVtlLkVCQURGPThdPSJFQkFERiIsZVtlLkVCQURNU0c9OV09IkVCQURNU0ciLGVbZS5FQlVTWT0xMF09IkVCVVNZIixlW2UuRUNBTkNFTEVEPTExXT0iRUNBTkNFTEVEIixlW2UuRUNISUxEPTEyXT0iRUNISUxEIixlW2UuRUNPTk5BQk9SVEVEPTEzXT0iRUNPTk5BQk9SVEVEIixlW2UuRUNPTk5SRUZVU0VEPTE0XT0iRUNPTk5SRUZVU0VEIixlW2UuRUNPTk5SRVNFVD0xNV09IkVDT05OUkVTRVQiLGVbZS5FREVBRExLPTE2XT0iRURFQURMSyIsZVtlLkVERVNUQUREUlJFUT0xN109IkVERVNUQUREUlJFUSIsZVtlLkVET009MThdPSJFRE9NIixlW2UuRURRVU9UPTE5XT0iRURRVU9UIixlW2UuRUVYSVNUPTIwXT0iRUVYSVNUIixlW2UuRUZBVUxUPTIxXT0iRUZBVUxUIixlW2UuRUZCSUc9MjJdPSJFRkJJRyIsZVtlLkVIT1NUVU5SRUFDSD0yM109IkVIT1NUVU5SRUFDSCIsZVtlLkVJRFJNPTI0XT0iRUlEUk0iLGVbZS5FSUxTRVE9MjVdPSJFSUxTRVEiLGVbZS5FSU5QUk9HUkVTUz0yNl09IkVJTlBST0dSRVNTIixlW2UuRUlOVFI9MjddPSJFSU5UUiIsZVtlLkVJTlZBTD0yOF09IkVJTlZBTCIsZVtlLkVJTz0yOV09IkVJTyIsZVtlLkVJU0NPTk49MzBdPSJFSVNDT05OIixlW2UuRUlTRElSPTMxXT0iRUlTRElSIixlW2UuRUxPT1A9MzJdPSJFTE9PUCIsZVtlLkVNRklMRT0zM109IkVNRklMRSIsZVtlLkVNTElOSz0zNF09IkVNTElOSyIsZVtlLkVNU0dTSVpFPTM1XT0iRU1TR1NJWkUiLGVbZS5FTVVMVElIT1A9MzZdPSJFTVVMVElIT1AiLGVbZS5FTkFNRVRPT0xPTkc9MzddPSJFTkFNRVRPT0xPTkciLGVbZS5FTkVURE9XTj0zOF09IkVORVRET1dOIixlW2UuRU5FVFJFU0VUPTM5XT0iRU5FVFJFU0VUIixlW2UuRU5FVFVOUkVBQ0g9NDBdPSJFTkVUVU5SRUFDSCIsZVtlLkVORklMRT00MV09IkVORklMRSIsZVtlLkVOT0JVRlM9NDJdPSJFTk9CVUZTIixlW2UuRU5PREVWPTQzXT0iRU5PREVWIixlW2UuRU5PRU5UPTQ0XT0iRU5PRU5UIixlW2UuRU5PRVhFQz00NV09IkVOT0VYRUMiLGVbZS5FTk9MQ0s9NDZdPSJFTk9MQ0siLGVbZS5FTk9MSU5LPTQ3XT0iRU5PTElOSyIsZVtlLkVOT01FTT00OF09IkVOT01FTSIsZVtlLkVOT01TRz00OV09IkVOT01TRyIsZVtlLkVOT1BST1RPT1BUPTUwXT0iRU5PUFJPVE9PUFQiLGVbZS5FTk9TUEM9NTFdPSJFTk9TUEMiLGVbZS5FTk9TWVM9NTJdPSJFTk9TWVMiLGVbZS5FTk9UQ09OTj01M109IkVOT1RDT05OIixlW2UuRU5PVERJUj01NF09IkVOT1RESVIiLGVbZS5FTk9URU1QVFk9NTVdPSJFTk9URU1QVFkiLGVbZS5FTk9UUkVDT1ZFUkFCTEU9NTZdPSJFTk9UUkVDT1ZFUkFCTEUiLGVbZS5FTk9UU09DSz01N109IkVOT1RTT0NLIixlW2UuRU5PVFNVUD01OF09IkVOT1RTVVAiLGVbZS5FTk9UVFk9NTldPSJFTk9UVFkiLGVbZS5FTlhJTz02MF09IkVOWElPIixlW2UuRU9WRVJGTE9XPTYxXT0iRU9WRVJGTE9XIixlW2UuRU9XTkVSREVBRD02Ml09IkVPV05FUkRFQUQiLGVbZS5FUEVSTT02M109IkVQRVJNIixlW2UuRVBJUEU9NjRdPSJFUElQRSIsZVtlLkVQUk9UTz02NV09IkVQUk9UTyIsZVtlLkVQUk9UT05PU1VQUE9SVD02Nl09IkVQUk9UT05PU1VQUE9SVCIsZVtlLkVQUk9UT1RZUEU9NjddPSJFUFJPVE9UWVBFIixlW2UuRVJBTkdFPTY4XT0iRVJBTkdFIixlW2UuRVJPRlM9NjldPSJFUk9GUyIsZVtlLkVTUElQRT03MF09IkVTUElQRSIsZVtlLkVTUkNIPTcxXT0iRVNSQ0giLGVbZS5FU1RBTEU9NzJdPSJFU1RBTEUiLGVbZS5FVElNRURPVVQ9NzNdPSJFVElNRURPVVQiLGVbZS5FVFhUQlNZPTc0XT0iRVRYVEJTWSIsZVtlLkVYREVWPTc1XT0iRVhERVYiLGVbZS5FTk9UQ0FQQUJMRT03Nl09IkVOT1RDQVBBQkxFIixlKSkoc3x8e30pLEM9KGU9PihlW2UuUkVBTFRJTUU9MF09IlJFQUxUSU1FIixlW2UuTU9OT1RPTklDPTFdPSJNT05PVE9OSUMiLGVbZS5QUk9DRVNTX0NQVVRJTUVfSUQ9Ml09IlBST0NFU1NfQ1BVVElNRV9JRCIsZVtlLlRIUkVBRF9DUFVUSU1FX0lEPTNdPSJUSFJFQURfQ1BVVElNRV9JRCIsZSkpKEN8fHt9KSxiPShlPT4oZVtlLlNFVD0wXT0iU0VUIixlW2UuQ1VSPTFdPSJDVVIiLGVbZS5FTkQ9Ml09IkVORCIsZSkpKGJ8fHt9KSxEPShlPT4oZVtlLlVOS05PV049MF09IlVOS05PV04iLGVbZS5CTE9DS19ERVZJQ0U9MV09IkJMT0NLX0RFVklDRSIsZVtlLkNIQVJBQ1RFUl9ERVZJQ0U9Ml09IkNIQVJBQ1RFUl9ERVZJQ0UiLGVbZS5ESVJFQ1RPUlk9M109IkRJUkVDVE9SWSIsZVtlLlJFR1VMQVJfRklMRT00XT0iUkVHVUxBUl9GSUxFIixlW2UuU09DS0VUX0RHUkFNPTVdPSJTT0NLRVRfREdSQU0iLGVbZS5TT0NLRVRfU1RSRUFNPTZdPSJTT0NLRVRfU1RSRUFNIixlW2UuU1lNQk9MSUNfTElOSz03XT0iU1lNQk9MSUNfTElOSyIsZSkpKER8fHt9KSxHPShlPT4oZVtlLkRJUj0wXT0iRElSIixlKSkoR3x8e30pLEE9KGU9PihlW2UuQ0xPQ0s9MF09IkNMT0NLIixlW2UuRkRfUkVBRD0xXT0iRkRfUkVBRCIsZVtlLkZEX1dSSVRFPTJdPSJGRF9XUklURSIsZSkpKEF8fHt9KTtjb25zdCBPPXtDUkVBVDoxLERJUkVDVE9SWToyLEVYQ0w6NCxUUlVOQzo4fSxtPXtBUFBFTkQ6MSxEU1lOQzoyLE5PTkJMT0NLOjQsUlNZTkM6OCxTWU5DOjE2fSxfPXtGRF9EQVRBU1lOQzpCaWdJbnQoMSk8PEJpZ0ludCgwKSxGRF9SRUFEOkJpZ0ludCgxKTw8QmlnSW50KDEpLEZEX1NFRUs6QmlnSW50KDEpPDxCaWdJbnQoMiksRkRfRkRTVEFUX1NFVF9GTEFHUzpCaWdJbnQoMSk8PEJpZ0ludCgzKSxGRF9TWU5DOkJpZ0ludCgxKTw8QmlnSW50KDQpLEZEX1RFTEw6QmlnSW50KDEpPDxCaWdJbnQoNSksRkRfV1JJVEU6QmlnSW50KDEpPDxCaWdJbnQoNiksRkRfQURWSVNFOkJpZ0ludCgxKTw8QmlnSW50KDcpLEZEX0FMTE9DQVRFOkJpZ0ludCgxKTw8QmlnSW50KDgpLFBBVEhfQ1JFQVRFX0RJUkVDVE9SWTpCaWdJbnQoMSk8PEJpZ0ludCg5KSxQQVRIX0NSRUFURV9GSUxFOkJpZ0ludCgxKTw8QmlnSW50KDEwKSxQQVRIX0xJTktfU09VUkNFOkJpZ0ludCgxKTw8QmlnSW50KDExKSxQQVRIX0xJTktfVEFSR0VUOkJpZ0ludCgxKTw8QmlnSW50KDEyKSxQQVRIX09QRU46QmlnSW50KDEpPDxCaWdJbnQoMTMpLEZEX1JFQURESVI6QmlnSW50KDEpPDxCaWdJbnQoMTQpLFBBVEhfUkVBRExJTks6QmlnSW50KDEpPDxCaWdJbnQoMTUpLFBBVEhfUkVOQU1FX1NPVVJDRTpCaWdJbnQoMSk8PEJpZ0ludCgxNiksUEFUSF9SRU5BTUVfVEFSR0VUOkJpZ0ludCgxKTw8QmlnSW50KDE3KSxQQVRIX0ZJTEVTVEFUX0dFVDpCaWdJbnQoMSk8PEJpZ0ludCgxOCksUEFUSF9GSUxFU1RBVF9TRVRfU0laRTpCaWdJbnQoMSk8PEJpZ0ludCgxOSksUEFUSF9GSUxFU1RBVF9TRVRfVElNRVM6QmlnSW50KDEpPDxCaWdJbnQoMjApLEZEX0ZJTEVTVEFUX0dFVDpCaWdJbnQoMSk8PEJpZ0ludCgyMSksRkRfRklMRVNUQVRfU0VUX1NJWkU6QmlnSW50KDEpPDxCaWdJbnQoMjIpLEZEX0ZJTEVTVEFUX1NFVF9USU1FUzpCaWdJbnQoMSk8PEJpZ0ludCgyMyksUEFUSF9TWU1MSU5LOkJpZ0ludCgxKTw8QmlnSW50KDI0KSxQQVRIX1JFTU9WRV9ESVJFQ1RPUlk6QmlnSW50KDEpPDxCaWdJbnQoMjUpLFBBVEhfVU5MSU5LX0ZJTEU6QmlnSW50KDEpPDxCaWdJbnQoMjYpLFBPTExfRkRfUkVBRFdSSVRFOkJpZ0ludCgxKTw8QmlnSW50KDI3KSxTT0NLX1NIVVRET1dOOkJpZ0ludCgxKTw8QmlnSW50KDI4KSxTT0NLX0FDQ0VQVDpCaWdJbnQoMSk8PEJpZ0ludCgyOSl9LE49e0FUSU06MSxBVElNX05PVzoyLE1USU06NCxNVElNX05PVzo4fSxpdD17U1VCU0NSSVBUSU9OX0NMT0NLX0FCU1RJTUU6MX0sVz02NCwkPTQ4LGo9MzI7dmFyIE09KGU9PihlW2UuQ1VSPTBdPSJDVVIiLGVbZS5FTkQ9MV09IkVORCIsZVtlLlNFVD0yXT0iU0VUIixlKSkoTXx8e30pO2NsYXNzIFh7Y29uc3RydWN0b3IodCl7ZCh0aGlzLCJmcyIpO2QodGhpcywiYXJncyIpO2QodGhpcywiZW52Iik7ZCh0aGlzLCJzdGRpbiIpO2QodGhpcywic3Rkb3V0Iik7ZCh0aGlzLCJzdGRlcnIiKTtkKHRoaXMsImRlYnVnIik7ZCh0aGlzLCJpc1RUWSIpO3RoaXMuZnM9KHQ9PW51bGw/dm9pZCAwOnQuZnMpPz97fSx0aGlzLmFyZ3M9KHQ9PW51bGw/dm9pZCAwOnQuYXJncyk/P1tdLHRoaXMuZW52PSh0PT1udWxsP3ZvaWQgMDp0LmVudik/P3t9LHRoaXMuc3RkaW49KHQ9PW51bGw/dm9pZCAwOnQuc3RkaW4pPz8oKCk9Pm51bGwpLHRoaXMuc3Rkb3V0PSh0PT1udWxsP3ZvaWQgMDp0LnN0ZG91dCk/PygoKT0+e30pLHRoaXMuc3RkZXJyPSh0PT1udWxsP3ZvaWQgMDp0LnN0ZGVycik/PygoKT0+e30pLHRoaXMuZGVidWc9dD09bnVsbD92b2lkIDA6dC5kZWJ1Zyx0aGlzLmlzVFRZPSEhKHQhPW51bGwmJnQuaXNUVFkpfX1jbGFzcyBudHtjb25zdHJ1Y3Rvcih0KXtkKHRoaXMsImZzIik7ZCh0aGlzLCJuZXh0RkQiLDEwKTtkKHRoaXMsIm9wZW5NYXAiLG5ldyBNYXApO3RoaXMuZnM9ey4uLnR9LHRoaXMub3Blbk1hcC5zZXQoMyxuZXcgdSh0aGlzLmZzLCIvIikpfW9wZW5GaWxlKHQsaSxuKXtjb25zdCByPW5ldyBJKHQsbik7aSYmKHIuYnVmZmVyPW5ldyBVaW50OEFycmF5KG5ldyBBcnJheUJ1ZmZlcigxMDI0KSwwLDApKTtjb25zdCBhPXRoaXMubmV4dEZEO3JldHVybiB0aGlzLm9wZW5NYXAuc2V0KGEsciksdGhpcy5uZXh0RkQrKyxbcy5TVUNDRVNTLGFdfW9wZW5EaXIodCxpKXtjb25zdCBuPW5ldyB1KHQsaSkscj10aGlzLm5leHRGRDtyZXR1cm4gdGhpcy5vcGVuTWFwLnNldChyLG4pLHRoaXMubmV4dEZEKyssW3MuU1VDQ0VTUyxyXX1oYXNEaXIodCxpKXtyZXR1cm4gaT09PSIuIj8hMDp0LmNvbnRhaW5zRGlyZWN0b3J5KGkpfW9wZW4odCxpLG4scil7Y29uc3QgYT0hIShuJk8uQ1JFQVQpLGY9ISEobiZPLkRJUkVDVE9SWSksYz0hIShuJk8uRVhDTCksbz0hIShuJk8uVFJVTkMpLEU9dGhpcy5vcGVuTWFwLmdldCh0KTtpZighKEUgaW5zdGFuY2VvZiB1KSlyZXR1cm5bcy5FQkFERl07aWYoRS5jb250YWluc0ZpbGUoaSkpcmV0dXJuIGY/W3MuRU5PVERJUl06Yz9bcy5FRVhJU1RdOnRoaXMub3BlbkZpbGUoRS5nZXQoaSksbyxyKTtpZih0aGlzLmhhc0RpcihFLGkpKXtpZihpPT09Ii4iKXJldHVybiB0aGlzLm9wZW5EaXIodGhpcy5mcywiLyIpO2NvbnN0IGg9YC8ke2l9L2AsUz1PYmplY3QuZW50cmllcyh0aGlzLmZzKS5maWx0ZXIoKFtnXSk9Pmcuc3RhcnRzV2l0aChoKSk7cmV0dXJuIHRoaXMub3BlbkRpcihPYmplY3QuZnJvbUVudHJpZXMoUyksaCl9ZWxzZXtpZihhKXtjb25zdCBoPUUuZnVsbFBhdGgoaSk7cmV0dXJuIHRoaXMuZnNbaF09e3BhdGg6aCxtb2RlOiJiaW5hcnkiLGNvbnRlbnQ6bmV3IFVpbnQ4QXJyYXksdGltZXN0YW1wczp7YWNjZXNzOm5ldyBEYXRlLG1vZGlmaWNhdGlvbjpuZXcgRGF0ZSxjaGFuZ2U6bmV3IERhdGV9fSx0aGlzLm9wZW5GaWxlKHRoaXMuZnNbaF0sbyxyKX1yZXR1cm5bcy5FTk9UQ0FQQUJMRV19fWNsb3NlKHQpe2lmKCF0aGlzLm9wZW5NYXAuaGFzKHQpKXJldHVybiBzLkVCQURGO2NvbnN0IGk9dGhpcy5vcGVuTWFwLmdldCh0KTtyZXR1cm4gaSBpbnN0YW5jZW9mIEkmJmkuc3luYygpLHRoaXMub3Blbk1hcC5kZWxldGUodCkscy5TVUNDRVNTfXJlYWQodCxpKXtjb25zdCBuPXRoaXMub3Blbk1hcC5nZXQodCk7cmV0dXJuIW58fG4gaW5zdGFuY2VvZiB1P1tzLkVCQURGXTpbcy5TVUNDRVNTLG4ucmVhZChpKV19cHJlYWQodCxpLG4pe2NvbnN0IHI9dGhpcy5vcGVuTWFwLmdldCh0KTtyZXR1cm4hcnx8ciBpbnN0YW5jZW9mIHU/W3MuRUJBREZdOltzLlNVQ0NFU1Msci5wcmVhZChpLG4pXX13cml0ZSh0LGkpe2NvbnN0IG49dGhpcy5vcGVuTWFwLmdldCh0KTtyZXR1cm4hbnx8biBpbnN0YW5jZW9mIHU/cy5FQkFERjoobi53cml0ZShpKSxzLlNVQ0NFU1MpfXB3cml0ZSh0LGksbil7Y29uc3Qgcj10aGlzLm9wZW5NYXAuZ2V0KHQpO3JldHVybiFyfHxyIGluc3RhbmNlb2YgdT9zLkVCQURGOihyLnB3cml0ZShpLG4pLHMuU1VDQ0VTUyl9c3luYyh0KXtjb25zdCBpPXRoaXMub3Blbk1hcC5nZXQodCk7cmV0dXJuIWl8fGkgaW5zdGFuY2VvZiB1P3MuRUJBREY6KGkuc3luYygpLHMuU1VDQ0VTUyl9c2Vlayh0LGksbil7Y29uc3Qgcj10aGlzLm9wZW5NYXAuZ2V0KHQpO3JldHVybiFyfHxyIGluc3RhbmNlb2YgdT9bcy5FQkFERl06W3MuU1VDQ0VTUyxyLnNlZWsoaSxuKV19dGVsbCh0KXtjb25zdCBpPXRoaXMub3Blbk1hcC5nZXQodCk7cmV0dXJuIWl8fGkgaW5zdGFuY2VvZiB1P1tzLkVCQURGXTpbcy5TVUNDRVNTLGkudGVsbCgpXX1yZW51bWJlcih0LGkpe3JldHVybiF0aGlzLmV4aXN0cyh0KXx8IXRoaXMuZXhpc3RzKGkpP3MuRUJBREY6KHQ9PT1pfHwodGhpcy5jbG9zZShpKSx0aGlzLm9wZW5NYXAuc2V0KGksdGhpcy5vcGVuTWFwLmdldCh0KSkpLHMuU1VDQ0VTUyl9dW5saW5rKHQsaSl7Y29uc3Qgbj10aGlzLm9wZW5NYXAuZ2V0KHQpO2lmKCEobiBpbnN0YW5jZW9mIHUpKXJldHVybiBzLkVCQURGO2lmKCFuLmNvbnRhaW5zKGkpKXJldHVybiBzLkVOT0VOVDtmb3IoY29uc3QgciBvZiBPYmplY3Qua2V5cyh0aGlzLmZzKSkocj09PW4uZnVsbFBhdGgoaSl8fHIuc3RhcnRzV2l0aChgJHtuLmZ1bGxQYXRoKGkpfS9gKSkmJmRlbGV0ZSB0aGlzLmZzW3JdO3JldHVybiBzLlNVQ0NFU1N9cmVuYW1lKHQsaSxuLHIpe2NvbnN0IGE9dGhpcy5vcGVuTWFwLmdldCh0KSxmPXRoaXMub3Blbk1hcC5nZXQobik7aWYoIShhIGluc3RhbmNlb2YgdSl8fCEoZiBpbnN0YW5jZW9mIHUpKXJldHVybiBzLkVCQURGO2lmKCFhLmNvbnRhaW5zKGkpKXJldHVybiBzLkVOT0VOVDtpZihmLmNvbnRhaW5zKHIpKXJldHVybiBzLkVFWElTVDtjb25zdCBjPWEuZnVsbFBhdGgoaSksbz1mLmZ1bGxQYXRoKHIpO2Zvcihjb25zdCBFIG9mIE9iamVjdC5rZXlzKHRoaXMuZnMpKWlmKEUuc3RhcnRzV2l0aChjKSl7Y29uc3QgaD1FLnJlcGxhY2UoYyxvKTt0aGlzLmZzW2hdPXRoaXMuZnNbRV0sdGhpcy5mc1toXS5wYXRoPWgsZGVsZXRlIHRoaXMuZnNbRV19cmV0dXJuIHMuU1VDQ0VTU31saXN0KHQpe2NvbnN0IGk9dGhpcy5vcGVuTWFwLmdldCh0KTtyZXR1cm4gaSBpbnN0YW5jZW9mIHU/W3MuU1VDQ0VTUyxpLmxpc3QoKV06W3MuRUJBREZdfXN0YXQodCl7Y29uc3QgaT10aGlzLm9wZW5NYXAuZ2V0KHQpO3JldHVybiBpIGluc3RhbmNlb2YgST9bcy5TVUNDRVNTLGkuc3RhdCgpXTpbcy5FQkFERl19cGF0aFN0YXQodCxpKXtjb25zdCBuPXRoaXMub3Blbk1hcC5nZXQodCk7aWYoIShuIGluc3RhbmNlb2YgdSkpcmV0dXJuW3MuRUJBREZdO2lmKG4uY29udGFpbnNGaWxlKGkpKXtjb25zdCByPW4uZnVsbFBhdGgoaSksYT1uZXcgSSh0aGlzLmZzW3JdLDApLnN0YXQoKTtyZXR1cm5bcy5TVUNDRVNTLGFdfWVsc2UgaWYodGhpcy5oYXNEaXIobixpKSl7aWYoaT09PSIuIilyZXR1cm5bcy5TVUNDRVNTLG5ldyB1KHRoaXMuZnMsIi8iKS5zdGF0KCldO2NvbnN0IHI9YC8ke2l9L2AsYT1PYmplY3QuZW50cmllcyh0aGlzLmZzKS5maWx0ZXIoKFtjXSk9PmMuc3RhcnRzV2l0aChyKSksZj1uZXcgdShPYmplY3QuZnJvbUVudHJpZXMoYSkscikuc3RhdCgpO3JldHVybltzLlNVQ0NFU1MsZl19ZWxzZSByZXR1cm5bcy5FTk9UQ0FQQUJMRV19c2V0RmxhZ3ModCxpKXtjb25zdCBuPXRoaXMub3Blbk1hcC5nZXQodCk7cmV0dXJuIG4gaW5zdGFuY2VvZiBJPyhuLnNldEZsYWdzKGkpLHMuU1VDQ0VTUyk6cy5FQkFERn1zZXRTaXplKHQsaSl7Y29uc3Qgbj10aGlzLm9wZW5NYXAuZ2V0KHQpO3JldHVybiBuIGluc3RhbmNlb2YgST8obi5zZXRTaXplKE51bWJlcihpKSkscy5TVUNDRVNTKTpzLkVCQURGfXNldEFjY2Vzc1RpbWUodCxpKXtjb25zdCBuPXRoaXMub3Blbk1hcC5nZXQodCk7cmV0dXJuIG4gaW5zdGFuY2VvZiBJPyhuLnNldEFjY2Vzc1RpbWUoaSkscy5TVUNDRVNTKTpzLkVCQURGfXNldE1vZGlmaWNhdGlvblRpbWUodCxpKXtjb25zdCBuPXRoaXMub3Blbk1hcC5nZXQodCk7cmV0dXJuIG4gaW5zdGFuY2VvZiBJPyhuLnNldE1vZGlmaWNhdGlvblRpbWUoaSkscy5TVUNDRVNTKTpzLkVCQURGfXBhdGhTZXRBY2Nlc3NUaW1lKHQsaSxuKXtjb25zdCByPXRoaXMub3Blbk1hcC5nZXQodCk7aWYoIShyIGluc3RhbmNlb2YgdSkpcmV0dXJuIHMuRUJBREY7Y29uc3QgYT1yLmdldChpKTtpZighYSlyZXR1cm4gcy5FTk9UQ0FQQUJMRTtjb25zdCBmPW5ldyBJKGEsMCk7cmV0dXJuIGYuc2V0QWNjZXNzVGltZShuKSxmLnN5bmMoKSxzLlNVQ0NFU1N9cGF0aFNldE1vZGlmaWNhdGlvblRpbWUodCxpLG4pe2NvbnN0IHI9dGhpcy5vcGVuTWFwLmdldCh0KTtpZighKHIgaW5zdGFuY2VvZiB1KSlyZXR1cm4gcy5FQkFERjtjb25zdCBhPXIuZ2V0KGkpO2lmKCFhKXJldHVybiBzLkVOT1RDQVBBQkxFO2NvbnN0IGY9bmV3IEkoYSwwKTtyZXR1cm4gZi5zZXRNb2RpZmljYXRpb25UaW1lKG4pLGYuc3luYygpLHMuU1VDQ0VTU31wYXRoQ3JlYXRlRGlyKHQsaSl7Y29uc3Qgbj10aGlzLm9wZW5NYXAuZ2V0KHQpO2lmKCEobiBpbnN0YW5jZW9mIHUpKXJldHVybiBzLkVCQURGO2lmKG4uY29udGFpbnMoaSkpcmV0dXJuIHMuRU5PVENBUEFCTEU7Y29uc3Qgcj1gJHtuLmZ1bGxQYXRoKGkpfS8ucnVubm9gO3JldHVybiB0aGlzLmZzW3JdPXtwYXRoOnIsdGltZXN0YW1wczp7YWNjZXNzOm5ldyBEYXRlLG1vZGlmaWNhdGlvbjpuZXcgRGF0ZSxjaGFuZ2U6bmV3IERhdGV9LG1vZGU6InN0cmluZyIsY29udGVudDoiIn0scy5TVUNDRVNTfWV4aXN0cyh0KXtyZXR1cm4gdGhpcy5vcGVuTWFwLmhhcyh0KX1maWxlVHlwZSh0KXtjb25zdCBpPXRoaXMub3Blbk1hcC5nZXQodCk7cmV0dXJuIGk/aSBpbnN0YW5jZW9mIEk/RC5SRUdVTEFSX0ZJTEU6RC5ESVJFQ1RPUlk6RC5VTktOT1dOfWZpbGVGZGZsYWdzKHQpe2NvbnN0IGk9dGhpcy5vcGVuTWFwLmdldCh0KTtyZXR1cm4gaSBpbnN0YW5jZW9mIEk/aS5mZGZsYWdzOjB9fWNsYXNzIEl7Y29uc3RydWN0b3IodCxpKXtkKHRoaXMsImZpbGUiKTtkKHRoaXMsImJ1ZmZlciIpO2QodGhpcywiX29mZnNldCIsQmlnSW50KDApKTtkKHRoaXMsImlzRGlydHkiLCExKTtkKHRoaXMsImZkZmxhZ3MiKTtkKHRoaXMsImZsYWdBcHBlbmQiKTtkKHRoaXMsImZsYWdEU3luYyIpO2QodGhpcywiZmxhZ05vbkJsb2NrIik7ZCh0aGlzLCJmbGFnUlN5bmMiKTtkKHRoaXMsImZsYWdTeW5jIik7aWYodGhpcy5maWxlPXQsdGhpcy5maWxlLm1vZGU9PT0ic3RyaW5nIil7Y29uc3Qgbj1uZXcgVGV4dEVuY29kZXI7dGhpcy5idWZmZXI9bi5lbmNvZGUodGhpcy5maWxlLmNvbnRlbnQpfWVsc2UgdGhpcy5idWZmZXI9dGhpcy5maWxlLmNvbnRlbnQ7dGhpcy5mZGZsYWdzPWksdGhpcy5mbGFnQXBwZW5kPSEhKGkmbS5BUFBFTkQpLHRoaXMuZmxhZ0RTeW5jPSEhKGkmbS5EU1lOQyksdGhpcy5mbGFnTm9uQmxvY2s9ISEoaSZtLk5PTkJMT0NLKSx0aGlzLmZsYWdSU3luYz0hIShpJm0uUlNZTkMpLHRoaXMuZmxhZ1N5bmM9ISEoaSZtLlNZTkMpfWdldCBvZmZzZXQoKXtyZXR1cm4gTnVtYmVyKHRoaXMuX29mZnNldCl9cmVhZCh0KXtjb25zdCBpPXRoaXMuYnVmZmVyLnN1YmFycmF5KHRoaXMub2Zmc2V0LHRoaXMub2Zmc2V0K3QpO3JldHVybiB0aGlzLl9vZmZzZXQrPUJpZ0ludChpLmxlbmd0aCksaX1wcmVhZCh0LGkpe3JldHVybiB0aGlzLmJ1ZmZlci5zdWJhcnJheShpLGkrdCl9d3JpdGUodCl7aWYodGhpcy5pc0RpcnR5PSEwLHRoaXMuZmxhZ0FwcGVuZCl7Y29uc3QgaT10aGlzLmJ1ZmZlci5sZW5ndGg7dGhpcy5yZXNpemUoaSt0LmJ5dGVMZW5ndGgpLHRoaXMuYnVmZmVyLnNldCh0LGkpfWVsc2V7Y29uc3QgaT1NYXRoLm1heCh0aGlzLm9mZnNldCt0LmJ5dGVMZW5ndGgsdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7dGhpcy5yZXNpemUoaSksdGhpcy5idWZmZXIuc2V0KHQsdGhpcy5vZmZzZXQpLHRoaXMuX29mZnNldCs9QmlnSW50KHQuYnl0ZUxlbmd0aCl9KHRoaXMuZmxhZ0RTeW5jfHx0aGlzLmZsYWdTeW5jKSYmdGhpcy5zeW5jKCl9cHdyaXRlKHQsaSl7aWYodGhpcy5pc0RpcnR5PSEwLHRoaXMuZmxhZ0FwcGVuZCl7Y29uc3Qgbj10aGlzLmJ1ZmZlci5sZW5ndGg7dGhpcy5yZXNpemUobit0LmJ5dGVMZW5ndGgpLHRoaXMuYnVmZmVyLnNldCh0LG4pfWVsc2V7Y29uc3Qgbj1NYXRoLm1heChpK3QuYnl0ZUxlbmd0aCx0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKTt0aGlzLnJlc2l6ZShuKSx0aGlzLmJ1ZmZlci5zZXQodCxpKX0odGhpcy5mbGFnRFN5bmN8fHRoaXMuZmxhZ1N5bmMpJiZ0aGlzLnN5bmMoKX1zeW5jKCl7aWYoIXRoaXMuaXNEaXJ0eSlyZXR1cm47aWYodGhpcy5pc0RpcnR5PSExLHRoaXMuZmlsZS5tb2RlPT09ImJpbmFyeSIpe3RoaXMuZmlsZS5jb250ZW50PW5ldyBVaW50OEFycmF5KHRoaXMuYnVmZmVyKTtyZXR1cm59Y29uc3QgdD1uZXcgVGV4dERlY29kZXI7dGhpcy5maWxlLmNvbnRlbnQ9dC5kZWNvZGUodGhpcy5idWZmZXIpfXNlZWsodCxpKXtzd2l0Y2goaSl7Y2FzZSBiLlNFVDp0aGlzLl9vZmZzZXQ9dDticmVhaztjYXNlIGIuQ1VSOnRoaXMuX29mZnNldCs9dDticmVhaztjYXNlIGIuRU5EOnRoaXMuX29mZnNldD1CaWdJbnQodGhpcy5idWZmZXIubGVuZ3RoKSt0O2JyZWFrfXJldHVybiB0aGlzLl9vZmZzZXR9dGVsbCgpe3JldHVybiB0aGlzLl9vZmZzZXR9c3RhdCgpe3JldHVybntwYXRoOnRoaXMuZmlsZS5wYXRoLHRpbWVzdGFtcHM6dGhpcy5maWxlLnRpbWVzdGFtcHMsdHlwZTpELlJFR1VMQVJfRklMRSxieXRlTGVuZ3RoOnRoaXMuYnVmZmVyLmxlbmd0aH19c2V0RmxhZ3ModCl7dGhpcy5mZGZsYWdzPXR9c2V0U2l6ZSh0KXt0aGlzLnJlc2l6ZSh0KX1zZXRBY2Nlc3NUaW1lKHQpe3RoaXMuZmlsZS50aW1lc3RhbXBzLmFjY2Vzcz10fXNldE1vZGlmaWNhdGlvblRpbWUodCl7dGhpcy5maWxlLnRpbWVzdGFtcHMubW9kaWZpY2F0aW9uPXR9cmVzaXplKHQpe2lmKHQ8PXRoaXMuYnVmZmVyLmJ1ZmZlci5ieXRlTGVuZ3RoKXt0aGlzLmJ1ZmZlcj1uZXcgVWludDhBcnJheSh0aGlzLmJ1ZmZlci5idWZmZXIsMCx0KTtyZXR1cm59bGV0IGk7dGhpcy5idWZmZXIuYnVmZmVyLmJ5dGVMZW5ndGg9PT0wP2k9bmV3IEFycmF5QnVmZmVyKHQ8MTAyND8xMDI0OnQqMik6dD50aGlzLmJ1ZmZlci5idWZmZXIuYnl0ZUxlbmd0aCoyP2k9bmV3IEFycmF5QnVmZmVyKHQqMik6aT1uZXcgQXJyYXlCdWZmZXIodGhpcy5idWZmZXIuYnVmZmVyLmJ5dGVMZW5ndGgqMik7Y29uc3Qgbj1uZXcgVWludDhBcnJheShpLDAsdCk7bi5zZXQodGhpcy5idWZmZXIpLHRoaXMuYnVmZmVyPW59fWZ1bmN0aW9uIFAoZSx0KXtjb25zdCBpPXQucmVwbGFjZSgvWy9cLVxcXiQqKz8uKCl8W1xde31dL2csIlxcJCYiKSxuPW5ldyBSZWdFeHAoYF4ke2l9YCk7cmV0dXJuIGUucmVwbGFjZShuLCIiKX1jbGFzcyB1e2NvbnN0cnVjdG9yKHQsaSl7ZCh0aGlzLCJkaXIiKTtkKHRoaXMsInByZWZpeCIpO3RoaXMuZGlyPXQsdGhpcy5wcmVmaXg9aX1jb250YWluc0ZpbGUodCl7Zm9yKGNvbnN0IGkgb2YgT2JqZWN0LmtleXModGhpcy5kaXIpKWlmKFAoaSx0aGlzLnByZWZpeCk9PT10KXJldHVybiEwO3JldHVybiExfWNvbnRhaW5zRGlyZWN0b3J5KHQpe2Zvcihjb25zdCBpIG9mIE9iamVjdC5rZXlzKHRoaXMuZGlyKSlpZihQKGksdGhpcy5wcmVmaXgpLnN0YXJ0c1dpdGgoYCR7dH0vYCkpcmV0dXJuITA7cmV0dXJuITF9Y29udGFpbnModCl7Zm9yKGNvbnN0IGkgb2YgT2JqZWN0LmtleXModGhpcy5kaXIpKXtjb25zdCBuPVAoaSx0aGlzLnByZWZpeCk7aWYobj09PXR8fG4uc3RhcnRzV2l0aChgJHt0fS9gKSlyZXR1cm4hMH1yZXR1cm4hMX1nZXQodCl7cmV0dXJuIHRoaXMuZGlyW3RoaXMuZnVsbFBhdGgodCldfWZ1bGxQYXRoKHQpe3JldHVybmAke3RoaXMucHJlZml4fSR7dH1gfWxpc3QoKXtjb25zdCB0PVtdLGk9bmV3IFNldDtmb3IoY29uc3QgbiBvZiBPYmplY3Qua2V5cyh0aGlzLmRpcikpe2NvbnN0IHI9UChuLHRoaXMucHJlZml4KTtpZihyLmluY2x1ZGVzKCIvIikpe2NvbnN0IGE9ci5zcGxpdCgiLyIpWzBdO2lmKGkuaGFzKGEpKWNvbnRpbnVlO2kuYWRkKGEpLHQucHVzaCh7bmFtZTphLHR5cGU6RC5ESVJFQ1RPUll9KX1lbHNlIHQucHVzaCh7bmFtZTpyLHR5cGU6RC5SRUdVTEFSX0ZJTEV9KX1yZXR1cm4gdH1zdGF0KCl7cmV0dXJue3BhdGg6dGhpcy5wcmVmaXgsdGltZXN0YW1wczp7YWNjZXNzOm5ldyBEYXRlLG1vZGlmaWNhdGlvbjpuZXcgRGF0ZSxjaGFuZ2U6bmV3IERhdGV9LHR5cGU6RC5ESVJFQ1RPUlksYnl0ZUxlbmd0aDowfX19bGV0IHg9W107ZnVuY3Rpb24geShlKXt4LnB1c2goZSl9ZnVuY3Rpb24gcnQoKXtjb25zdCBlPXg7cmV0dXJuIHg9W10sZX1jbGFzcyBZIGV4dGVuZHMgRXJyb3J7fWNsYXNzIFogZXh0ZW5kcyBFcnJvcnt9Y2xhc3Mgdntjb25zdHJ1Y3Rvcih0KXtkKHRoaXMsImluc3RhbmNlIik7ZCh0aGlzLCJtb2R1bGUiKTtkKHRoaXMsIm1lbW9yeSIpO2QodGhpcywiY29udGV4dCIpO2QodGhpcywiZHJpdmUiKTtkKHRoaXMsImhhc0JlZW5Jbml0aWFsaXplZCIsITEpO3RoaXMuY29udGV4dD1uZXcgWCh0KSx0aGlzLmRyaXZlPW5ldyBudCh0aGlzLmNvbnRleHQuZnMpfXN0YXRpYyBhc3luYyBzdGFydCh0LGk9e30pe2NvbnN0IG49bmV3IHYoaSkscj1hd2FpdCBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyh0LG4uZ2V0SW1wb3J0T2JqZWN0KCkpO3JldHVybiBuLnN0YXJ0KHIpfXN0YXRpYyBhc3luYyBpbml0aWFsaXplKHQsaT17fSl7Y29uc3Qgbj1uZXcgdihpKSxyPWF3YWl0IFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKHQsbi5nZXRJbXBvcnRPYmplY3QoKSk7cmV0dXJuIG4uaW5pdGlhbGl6ZShyKSxyLmluc3RhbmNlLmV4cG9ydHN9Z2V0SW1wb3J0T2JqZWN0KCl7cmV0dXJue3dhc2lfc25hcHNob3RfcHJldmlldzE6dGhpcy5nZXRJbXBvcnRzKCJwcmV2aWV3MSIsdGhpcy5jb250ZXh0LmRlYnVnKSx3YXNpX3Vuc3RhYmxlOnRoaXMuZ2V0SW1wb3J0cygidW5zdGFibGUiLHRoaXMuY29udGV4dC5kZWJ1Zyl9fXN0YXJ0KHQsaT17fSl7aWYodGhpcy5oYXNCZWVuSW5pdGlhbGl6ZWQpdGhyb3cgbmV3IFooIlRoaXMgaW5zdGFuY2UgaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXplZCIpO2lmKHRoaXMuaGFzQmVlbkluaXRpYWxpemVkPSEwLHRoaXMuaW5zdGFuY2U9dC5pbnN0YW5jZSx0aGlzLm1vZHVsZT10Lm1vZHVsZSx0aGlzLm1lbW9yeT1pLm1lbW9yeT8/dGhpcy5pbnN0YW5jZS5leHBvcnRzLm1lbW9yeSwiX2luaXRpYWxpemUiaW4gdGhpcy5pbnN0YW5jZS5leHBvcnRzKXRocm93IG5ldyBZKCJXZWJBc3NlbWJseSBpbnN0YW5jZSBpcyBhIHJlYWN0b3IgYW5kIHNob3VsZCBiZSBzdGFydGVkIHdpdGggaW5pdGlhbGl6ZS4iKTtpZighKCJfc3RhcnQiaW4gdGhpcy5pbnN0YW5jZS5leHBvcnRzKSl0aHJvdyBuZXcgWSgiV2ViQXNzZW1ibHkgaW5zdGFuY2UgZG9lc24ndCBleHBvcnQgX3N0YXJ0LCBpdCBtYXkgbm90IGJlIFdBU0kgb3IgbWF5IGJlIGEgUmVhY3Rvci4iKTtjb25zdCBuPXRoaXMuaW5zdGFuY2UuZXhwb3J0cy5fc3RhcnQ7dHJ5e24oKX1jYXRjaChyKXtpZihyIGluc3RhbmNlb2YgUSlyZXR1cm57ZXhpdENvZGU6ci5jb2RlLGZzOnRoaXMuZHJpdmUuZnN9O2lmKHIgaW5zdGFuY2VvZiBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3IpcmV0dXJue2V4aXRDb2RlOjEzNCxmczp0aGlzLmRyaXZlLmZzfTt0aHJvdyByfXJldHVybntleGl0Q29kZTowLGZzOnRoaXMuZHJpdmUuZnN9fWluaXRpYWxpemUodCxpPXt9KXtpZih0aGlzLmhhc0JlZW5Jbml0aWFsaXplZCl0aHJvdyBuZXcgWigiVGhpcyBpbnN0YW5jZSBoYXMgYWxyZWFkeSBiZWVuIGluaXRpYWxpemVkIik7aWYodGhpcy5oYXNCZWVuSW5pdGlhbGl6ZWQ9ITAsdGhpcy5pbnN0YW5jZT10Lmluc3RhbmNlLHRoaXMubW9kdWxlPXQubW9kdWxlLHRoaXMubWVtb3J5PWkubWVtb3J5Pz90aGlzLmluc3RhbmNlLmV4cG9ydHMubWVtb3J5LCJfc3RhcnQiaW4gdGhpcy5pbnN0YW5jZS5leHBvcnRzKXRocm93IG5ldyBZKCJXZWJBc3NlbWJseSBpbnN0YW5jZSBpcyBhIGNvbW1hbmQgYW5kIHNob3VsZCBiZSBzdGFydGVkIHdpdGggc3RhcnQuIik7aWYoIl9pbml0aWFsaXplImluIHRoaXMuaW5zdGFuY2UuZXhwb3J0cyl7Y29uc3Qgbj10aGlzLmluc3RhbmNlLmV4cG9ydHMuX2luaXRpYWxpemU7bigpfX1nZXRJbXBvcnRzKHQsaSl7Y29uc3Qgbj17YXJnc19nZXQ6dGhpcy5hcmdzX2dldC5iaW5kKHRoaXMpLGFyZ3Nfc2l6ZXNfZ2V0OnRoaXMuYXJnc19zaXplc19nZXQuYmluZCh0aGlzKSxjbG9ja19yZXNfZ2V0OnRoaXMuY2xvY2tfcmVzX2dldC5iaW5kKHRoaXMpLGNsb2NrX3RpbWVfZ2V0OnRoaXMuY2xvY2tfdGltZV9nZXQuYmluZCh0aGlzKSxlbnZpcm9uX2dldDp0aGlzLmVudmlyb25fZ2V0LmJpbmQodGhpcyksZW52aXJvbl9zaXplc19nZXQ6dGhpcy5lbnZpcm9uX3NpemVzX2dldC5iaW5kKHRoaXMpLHByb2NfZXhpdDp0aGlzLnByb2NfZXhpdC5iaW5kKHRoaXMpLHJhbmRvbV9nZXQ6dGhpcy5yYW5kb21fZ2V0LmJpbmQodGhpcyksc2NoZWRfeWllbGQ6dGhpcy5zY2hlZF95aWVsZC5iaW5kKHRoaXMpLGZkX2FkdmlzZTp0aGlzLmZkX2FkdmlzZS5iaW5kKHRoaXMpLGZkX2FsbG9jYXRlOnRoaXMuZmRfYWxsb2NhdGUuYmluZCh0aGlzKSxmZF9jbG9zZTp0aGlzLmZkX2Nsb3NlLmJpbmQodGhpcyksZmRfZGF0YXN5bmM6dGhpcy5mZF9kYXRhc3luYy5iaW5kKHRoaXMpLGZkX2Zkc3RhdF9nZXQ6dGhpcy5mZF9mZHN0YXRfZ2V0LmJpbmQodGhpcyksZmRfZmRzdGF0X3NldF9mbGFnczp0aGlzLmZkX2Zkc3RhdF9zZXRfZmxhZ3MuYmluZCh0aGlzKSxmZF9mZHN0YXRfc2V0X3JpZ2h0czp0aGlzLmZkX2Zkc3RhdF9zZXRfcmlnaHRzLmJpbmQodGhpcyksZmRfZmlsZXN0YXRfZ2V0OnRoaXMuZmRfZmlsZXN0YXRfZ2V0LmJpbmQodGhpcyksZmRfZmlsZXN0YXRfc2V0X3NpemU6dGhpcy5mZF9maWxlc3RhdF9zZXRfc2l6ZS5iaW5kKHRoaXMpLGZkX2ZpbGVzdGF0X3NldF90aW1lczp0aGlzLmZkX2ZpbGVzdGF0X3NldF90aW1lcy5iaW5kKHRoaXMpLGZkX3ByZWFkOnRoaXMuZmRfcHJlYWQuYmluZCh0aGlzKSxmZF9wcmVzdGF0X2Rpcl9uYW1lOnRoaXMuZmRfcHJlc3RhdF9kaXJfbmFtZS5iaW5kKHRoaXMpLGZkX3ByZXN0YXRfZ2V0OnRoaXMuZmRfcHJlc3RhdF9nZXQuYmluZCh0aGlzKSxmZF9wd3JpdGU6dGhpcy5mZF9wd3JpdGUuYmluZCh0aGlzKSxmZF9yZWFkOnRoaXMuZmRfcmVhZC5iaW5kKHRoaXMpLGZkX3JlYWRkaXI6dGhpcy5mZF9yZWFkZGlyLmJpbmQodGhpcyksZmRfcmVudW1iZXI6dGhpcy5mZF9yZW51bWJlci5iaW5kKHRoaXMpLGZkX3NlZWs6dGhpcy5mZF9zZWVrLmJpbmQodGhpcyksZmRfc3luYzp0aGlzLmZkX3N5bmMuYmluZCh0aGlzKSxmZF90ZWxsOnRoaXMuZmRfdGVsbC5iaW5kKHRoaXMpLGZkX3dyaXRlOnRoaXMuZmRfd3JpdGUuYmluZCh0aGlzKSxwYXRoX2ZpbGVzdGF0X2dldDp0aGlzLnBhdGhfZmlsZXN0YXRfZ2V0LmJpbmQodGhpcykscGF0aF9maWxlc3RhdF9zZXRfdGltZXM6dGhpcy5wYXRoX2ZpbGVzdGF0X3NldF90aW1lcy5iaW5kKHRoaXMpLHBhdGhfb3Blbjp0aGlzLnBhdGhfb3Blbi5iaW5kKHRoaXMpLHBhdGhfcmVuYW1lOnRoaXMucGF0aF9yZW5hbWUuYmluZCh0aGlzKSxwYXRoX3VubGlua19maWxlOnRoaXMucGF0aF91bmxpbmtfZmlsZS5iaW5kKHRoaXMpLHBhdGhfY3JlYXRlX2RpcmVjdG9yeTp0aGlzLnBhdGhfY3JlYXRlX2RpcmVjdG9yeS5iaW5kKHRoaXMpLHBhdGhfbGluazp0aGlzLnBhdGhfbGluay5iaW5kKHRoaXMpLHBhdGhfcmVhZGxpbms6dGhpcy5wYXRoX3JlYWRsaW5rLmJpbmQodGhpcykscGF0aF9yZW1vdmVfZGlyZWN0b3J5OnRoaXMucGF0aF9yZW1vdmVfZGlyZWN0b3J5LmJpbmQodGhpcykscGF0aF9zeW1saW5rOnRoaXMucGF0aF9zeW1saW5rLmJpbmQodGhpcykscG9sbF9vbmVvZmY6dGhpcy5wb2xsX29uZW9mZi5iaW5kKHRoaXMpLHByb2NfcmFpc2U6dGhpcy5wcm9jX3JhaXNlLmJpbmQodGhpcyksc29ja19hY2NlcHQ6dGhpcy5zb2NrX2FjY2VwdC5iaW5kKHRoaXMpLHNvY2tfcmVjdjp0aGlzLnNvY2tfcmVjdi5iaW5kKHRoaXMpLHNvY2tfc2VuZDp0aGlzLnNvY2tfc2VuZC5iaW5kKHRoaXMpLHNvY2tfc2h1dGRvd246dGhpcy5zb2NrX3NodXRkb3duLmJpbmQodGhpcyksc29ja19vcGVuOnRoaXMuc29ja19vcGVuLmJpbmQodGhpcyksc29ja19saXN0ZW46dGhpcy5zb2NrX2xpc3Rlbi5iaW5kKHRoaXMpLHNvY2tfY29ubmVjdDp0aGlzLnNvY2tfY29ubmVjdC5iaW5kKHRoaXMpLHNvY2tfc2V0c29ja29wdDp0aGlzLnNvY2tfc2V0c29ja29wdC5iaW5kKHRoaXMpLHNvY2tfYmluZDp0aGlzLnNvY2tfYmluZC5iaW5kKHRoaXMpLHNvY2tfZ2V0bG9jYWxhZGRyOnRoaXMuc29ja19nZXRsb2NhbGFkZHIuYmluZCh0aGlzKSxzb2NrX2dldHBlZXJhZGRyOnRoaXMuc29ja19nZXRwZWVyYWRkci5iaW5kKHRoaXMpLHNvY2tfZ2V0YWRkcmluZm86dGhpcy5zb2NrX2dldGFkZHJpbmZvLmJpbmQodGhpcyl9O3Q9PT0idW5zdGFibGUiJiYobi5wYXRoX2ZpbGVzdGF0X2dldD10aGlzLnVuc3RhYmxlX3BhdGhfZmlsZXN0YXRfZ2V0LmJpbmQodGhpcyksbi5mZF9maWxlc3RhdF9nZXQ9dGhpcy51bnN0YWJsZV9mZF9maWxlc3RhdF9nZXQuYmluZCh0aGlzKSxuLmZkX3NlZWs9dGhpcy51bnN0YWJsZV9mZF9zZWVrLmJpbmQodGhpcykpO2Zvcihjb25zdFtyLGFdb2YgT2JqZWN0LmVudHJpZXMobikpbltyXT1mdW5jdGlvbigpe2xldCBmPWEuYXBwbHkodGhpcyxhcmd1bWVudHMpO2lmKGkpe2NvbnN0IGM9cnQoKTtmPWkocixbLi4uYXJndW1lbnRzXSxmLGMpPz9mfXJldHVybiBmfTtyZXR1cm4gbn1nZXQgZW52QXJyYXkoKXtyZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5jb250ZXh0LmVudikubWFwKChbdCxpXSk9PmAke3R9PSR7aX1gKX1hcmdzX2dldCh0LGkpe2NvbnN0IG49bmV3IERhdGFWaWV3KHRoaXMubWVtb3J5LmJ1ZmZlcik7Zm9yKGNvbnN0IHIgb2YgdGhpcy5jb250ZXh0LmFyZ3Mpe24uc2V0VWludDMyKHQsaSwhMCksdCs9NDtjb25zdCBhPW5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShgJHtyfVwwYCk7bmV3IFVpbnQ4QXJyYXkodGhpcy5tZW1vcnkuYnVmZmVyLGksYS5ieXRlTGVuZ3RoKS5zZXQoYSksaSs9YS5ieXRlTGVuZ3RofXJldHVybiBzLlNVQ0NFU1N9YXJnc19zaXplc19nZXQodCxpKXtjb25zdCBuPXRoaXMuY29udGV4dC5hcmdzLHI9bi5yZWR1Y2UoKGYsYyk9PmYrbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKGAke2N9XDBgKS5ieXRlTGVuZ3RoLDApLGE9bmV3IERhdGFWaWV3KHRoaXMubWVtb3J5LmJ1ZmZlcik7cmV0dXJuIGEuc2V0VWludDMyKHQsbi5sZW5ndGgsITApLGEuc2V0VWludDMyKGksciwhMCkscy5TVUNDRVNTfWNsb2NrX3Jlc19nZXQodCxpKXtzd2l0Y2godCl7Y2FzZSBDLlJFQUxUSU1FOmNhc2UgQy5NT05PVE9OSUM6Y2FzZSBDLlBST0NFU1NfQ1BVVElNRV9JRDpjYXNlIEMuVEhSRUFEX0NQVVRJTUVfSUQ6cmV0dXJuIG5ldyBEYXRhVmlldyh0aGlzLm1lbW9yeS5idWZmZXIpLnNldEJpZ1VpbnQ2NChpLEJpZ0ludCgxZTYpLCEwKSxzLlNVQ0NFU1N9cmV0dXJuIHMuRUlOVkFMfWNsb2NrX3RpbWVfZ2V0KHQsaSxuKXtzd2l0Y2godCl7Y2FzZSBDLlJFQUxUSU1FOmNhc2UgQy5NT05PVE9OSUM6Y2FzZSBDLlBST0NFU1NfQ1BVVElNRV9JRDpjYXNlIEMuVEhSRUFEX0NQVVRJTUVfSUQ6cmV0dXJuIG5ldyBEYXRhVmlldyh0aGlzLm1lbW9yeS5idWZmZXIpLnNldEJpZ1VpbnQ2NChuLHcobmV3IERhdGUpLCEwKSxzLlNVQ0NFU1N9cmV0dXJuIHMuRUlOVkFMfWVudmlyb25fZ2V0KHQsaSl7Y29uc3Qgbj1uZXcgRGF0YVZpZXcodGhpcy5tZW1vcnkuYnVmZmVyKTtmb3IoY29uc3QgciBvZiB0aGlzLmVudkFycmF5KXtuLnNldFVpbnQzMih0LGksITApLHQrPTQ7Y29uc3QgYT1uZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoYCR7cn1cMGApO25ldyBVaW50OEFycmF5KHRoaXMubWVtb3J5LmJ1ZmZlcixpLGEuYnl0ZUxlbmd0aCkuc2V0KGEpLGkrPWEuYnl0ZUxlbmd0aH1yZXR1cm4gcy5TVUNDRVNTfWVudmlyb25fc2l6ZXNfZ2V0KHQsaSl7Y29uc3Qgbj10aGlzLmVudkFycmF5LnJlZHVjZSgoYSxmKT0+YStuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoYCR7Zn1cMGApLmJ5dGVMZW5ndGgsMCkscj1uZXcgRGF0YVZpZXcodGhpcy5tZW1vcnkuYnVmZmVyKTtyZXR1cm4gci5zZXRVaW50MzIodCx0aGlzLmVudkFycmF5Lmxlbmd0aCwhMCksci5zZXRVaW50MzIoaSxuLCEwKSxzLlNVQ0NFU1N9cHJvY19leGl0KHQpe3Rocm93IG5ldyBRKHQpfXJhbmRvbV9nZXQodCxpKXtjb25zdCBuPW5ldyBVaW50OEFycmF5KHRoaXMubWVtb3J5LmJ1ZmZlcix0LGkpO3JldHVybiBnbG9iYWxUaGlzLmNyeXB0by5nZXRSYW5kb21WYWx1ZXMobikscy5TVUNDRVNTfXNjaGVkX3lpZWxkKCl7cmV0dXJuIHMuU1VDQ0VTU31mZF9yZWFkKHQsaSxuLHIpe2lmKHQ9PT0xfHx0PT09MilyZXR1cm4gcy5FTk9UU1VQO2NvbnN0IGE9bmV3IERhdGFWaWV3KHRoaXMubWVtb3J5LmJ1ZmZlciksZj1rKGEsaSxuKSxjPW5ldyBUZXh0RW5jb2RlcjtsZXQgbz0wLEU9cy5TVUNDRVNTO2Zvcihjb25zdCBoIG9mIGYpe2xldCBTO2lmKHQ9PT0wKXtjb25zdCBUPXRoaXMuY29udGV4dC5zdGRpbihoLmJ5dGVMZW5ndGgpO2lmKCFUKWJyZWFrO1M9Yy5lbmNvZGUoVCl9ZWxzZXtjb25zdFtULHBdPXRoaXMuZHJpdmUucmVhZCh0LGguYnl0ZUxlbmd0aCk7aWYoVCl7RT1UO2JyZWFrfWVsc2UgUz1wfWNvbnN0IGc9TWF0aC5taW4oaC5ieXRlTGVuZ3RoLFMuYnl0ZUxlbmd0aCk7aC5zZXQoUy5zdWJhcnJheSgwLGcpKSxvKz1nfXJldHVybiB5KHtieXRlc1JlYWQ6b30pLGEuc2V0VWludDMyKHIsbywhMCksRX1mZF93cml0ZSh0LGksbixyKXtpZih0PT09MClyZXR1cm4gcy5FTk9UU1VQO2NvbnN0IGE9bmV3IERhdGFWaWV3KHRoaXMubWVtb3J5LmJ1ZmZlciksZj1rKGEsaSxuKSxjPW5ldyBUZXh0RGVjb2RlcjtsZXQgbz0wLEU9cy5TVUNDRVNTO2Zvcihjb25zdCBoIG9mIGYpaWYoaC5ieXRlTGVuZ3RoIT09MCl7aWYodD09PTF8fHQ9PT0yKXtjb25zdCBTPXQ9PT0xP3RoaXMuY29udGV4dC5zdGRvdXQ6dGhpcy5jb250ZXh0LnN0ZGVycixnPWMuZGVjb2RlKGgpO1MoZykseSh7b3V0cHV0Omd9KX1lbHNlIGlmKEU9dGhpcy5kcml2ZS53cml0ZSh0LGgpLEUhPXMuU1VDQ0VTUylicmVhaztvKz1oLmJ5dGVMZW5ndGh9cmV0dXJuIGEuc2V0VWludDMyKHIsbywhMCksRX1mZF9hZHZpc2UoKXtyZXR1cm4gcy5TVUNDRVNTfWZkX2FsbG9jYXRlKHQsaSxuKXtyZXR1cm4gdGhpcy5kcml2ZS5wd3JpdGUodCxuZXcgVWludDhBcnJheShOdW1iZXIobikpLE51bWJlcihpKSl9ZmRfY2xvc2UodCl7cmV0dXJuIHRoaXMuZHJpdmUuY2xvc2UodCl9ZmRfZGF0YXN5bmModCl7cmV0dXJuIHRoaXMuZHJpdmUuc3luYyh0KX1mZF9mZHN0YXRfZ2V0KHQsaSl7aWYodDwzKXtsZXQgYztpZih0aGlzLmNvbnRleHQuaXNUVFkpe2NvbnN0IEU9Vl5fLkZEX1NFRUteXy5GRF9URUxMO2M9SChELkNIQVJBQ1RFUl9ERVZJQ0UsMCxFKX1lbHNlIGM9SChELkNIQVJBQ1RFUl9ERVZJQ0UsMCk7cmV0dXJuIG5ldyBVaW50OEFycmF5KHRoaXMubWVtb3J5LmJ1ZmZlcixpLGMuYnl0ZUxlbmd0aCkuc2V0KGMpLHMuU1VDQ0VTU31pZighdGhpcy5kcml2ZS5leGlzdHModCkpcmV0dXJuIHMuRUJBREY7Y29uc3Qgbj10aGlzLmRyaXZlLmZpbGVUeXBlKHQpLHI9dGhpcy5kcml2ZS5maWxlRmRmbGFncyh0KSxhPUgobixyKTtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkodGhpcy5tZW1vcnkuYnVmZmVyLGksYS5ieXRlTGVuZ3RoKS5zZXQoYSkscy5TVUNDRVNTfWZkX2Zkc3RhdF9zZXRfZmxhZ3ModCxpKXtyZXR1cm4gdGhpcy5kcml2ZS5zZXRGbGFncyh0LGkpfWZkX2Zkc3RhdF9zZXRfcmlnaHRzKCl7cmV0dXJuIHMuU1VDQ0VTU31mZF9maWxlc3RhdF9nZXQodCxpKXtyZXR1cm4gdGhpcy5zaGFyZWRfZmRfZmlsZXN0YXRfZ2V0KHQsaSwicHJldmlldzEiKX11bnN0YWJsZV9mZF9maWxlc3RhdF9nZXQodCxpKXtyZXR1cm4gdGhpcy5zaGFyZWRfZmRfZmlsZXN0YXRfZ2V0KHQsaSwidW5zdGFibGUiKX1zaGFyZWRfZmRfZmlsZXN0YXRfZ2V0KHQsaSxuKXtjb25zdCByPW49PT0idW5zdGFibGUiP3E6SjtpZih0PDMpe2xldCBFO3N3aXRjaCh0KXtjYXNlIDA6RT0iL2Rldi9zdGRpbiI7YnJlYWs7Y2FzZSAxOkU9Ii9kZXYvc3Rkb3V0IjticmVhaztjYXNlIDI6RT0iL2Rldi9zdGRlcnIiO2JyZWFrO2RlZmF1bHQ6RT0iL2Rldi91bmRlZmluZWQiO2JyZWFrfWNvbnN0IGg9cih7cGF0aDpFLGJ5dGVMZW5ndGg6MCx0aW1lc3RhbXBzOnthY2Nlc3M6bmV3IERhdGUsbW9kaWZpY2F0aW9uOm5ldyBEYXRlLGNoYW5nZTpuZXcgRGF0ZX0sdHlwZTpELkNIQVJBQ1RFUl9ERVZJQ0V9KTtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkodGhpcy5tZW1vcnkuYnVmZmVyLGksaC5ieXRlTGVuZ3RoKS5zZXQoaCkscy5TVUNDRVNTfWNvbnN0W2EsZl09dGhpcy5kcml2ZS5zdGF0KHQpO2lmKGEhPXMuU1VDQ0VTUylyZXR1cm4gYTt5KHtyZXNvbHZlZFBhdGg6Zi5wYXRoLHN0YXQ6Zn0pO2NvbnN0IGM9cihmKTtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkodGhpcy5tZW1vcnkuYnVmZmVyLGksYy5ieXRlTGVuZ3RoKS5zZXQoYykscy5TVUNDRVNTfWZkX2ZpbGVzdGF0X3NldF9zaXplKHQsaSl7cmV0dXJuIHRoaXMuZHJpdmUuc2V0U2l6ZSh0LGkpfWZkX2ZpbGVzdGF0X3NldF90aW1lcyh0LGksbixyKXtsZXQgYT1udWxsO3ImTi5BVElNJiYoYT1sKGkpKSxyJk4uQVRJTV9OT1cmJihhPW5ldyBEYXRlKTtsZXQgZj1udWxsO2lmKHImTi5NVElNJiYoZj1sKG4pKSxyJk4uTVRJTV9OT1cmJihmPW5ldyBEYXRlKSxhKXtjb25zdCBjPXRoaXMuZHJpdmUuc2V0QWNjZXNzVGltZSh0LGEpO2lmKGMhPXMuU1VDQ0VTUylyZXR1cm4gY31pZihmKXtjb25zdCBjPXRoaXMuZHJpdmUuc2V0TW9kaWZpY2F0aW9uVGltZSh0LGYpO2lmKGMhPXMuU1VDQ0VTUylyZXR1cm4gY31yZXR1cm4gcy5TVUNDRVNTfWZkX3ByZWFkKHQsaSxuLHIsYSl7aWYodD09PTF8fHQ9PT0yKXJldHVybiBzLkVOT1RTVVA7aWYodD09PTApcmV0dXJuIHRoaXMuZmRfcmVhZCh0LGksbixhKTtjb25zdCBmPW5ldyBEYXRhVmlldyh0aGlzLm1lbW9yeS5idWZmZXIpLGM9ayhmLGksbik7bGV0IG89MCxFPXMuU1VDQ0VTUztmb3IoY29uc3QgaCBvZiBjKXtjb25zdFtTLGddPXRoaXMuZHJpdmUucHJlYWQodCxoLmJ5dGVMZW5ndGgsTnVtYmVyKHIpK28pO2lmKFMhPT1zLlNVQ0NFU1Mpe0U9UzticmVha31jb25zdCBUPU1hdGgubWluKGguYnl0ZUxlbmd0aCxnLmJ5dGVMZW5ndGgpO2guc2V0KGcuc3ViYXJyYXkoMCxUKSksbys9VH1yZXR1cm4gZi5zZXRVaW50MzIoYSxvLCEwKSxFfWZkX3ByZXN0YXRfZGlyX25hbWUodCxpLG4pe2lmKHQhPT0zKXJldHVybiBzLkVCQURGO2NvbnN0IHI9bmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKCIvIik7cmV0dXJuIG5ldyBVaW50OEFycmF5KHRoaXMubWVtb3J5LmJ1ZmZlcixpLG4pLnNldChyLnN1YmFycmF5KDAsbikpLHMuU1VDQ0VTU31mZF9wcmVzdGF0X2dldCh0LGkpe2lmKHQhPT0zKXJldHVybiBzLkVCQURGO2NvbnN0IG49bmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKCIuIikscj1uZXcgRGF0YVZpZXcodGhpcy5tZW1vcnkuYnVmZmVyLGkpO3JldHVybiByLnNldFVpbnQ4KDAsRy5ESVIpLHIuc2V0VWludDMyKDQsbi5ieXRlTGVuZ3RoLCEwKSxzLlNVQ0NFU1N9ZmRfcHdyaXRlKHQsaSxuLHIsYSl7aWYodD09PTApcmV0dXJuIHMuRU5PVFNVUDtpZih0PT09MXx8dD09PTIpcmV0dXJuIHRoaXMuZmRfd3JpdGUodCxpLG4sYSk7Y29uc3QgZj1uZXcgRGF0YVZpZXcodGhpcy5tZW1vcnkuYnVmZmVyKSxjPWsoZixpLG4pO2xldCBvPTAsRT1zLlNVQ0NFU1M7Zm9yKGNvbnN0IGggb2YgYylpZihoLmJ5dGVMZW5ndGghPT0wKXtpZihFPXRoaXMuZHJpdmUucHdyaXRlKHQsaCxOdW1iZXIocikpLEUhPXMuU1VDQ0VTUylicmVhaztvKz1oLmJ5dGVMZW5ndGh9cmV0dXJuIGYuc2V0VWludDMyKGEsbywhMCksRX1mZF9yZWFkZGlyKHQsaSxuLHIsYSl7Y29uc3RbZixjXT10aGlzLmRyaXZlLmxpc3QodCk7aWYoZiE9cy5TVUNDRVNTKXJldHVybiBmO2xldCBvPVtdLEU9MDtmb3IoY29uc3R7bmFtZTpVLHR5cGU6Rn1vZiBjKXtjb25zdCBLPWF0KFUsRixFKTtvLnB1c2goSyksRSsrfW89by5zbGljZShOdW1iZXIocikpO2NvbnN0IGg9by5yZWR1Y2UoKFUsRik9PlUrRi5ieXRlTGVuZ3RoLDApLFM9bmV3IFVpbnQ4QXJyYXkoaCk7bGV0IGc9MDtmb3IoY29uc3QgVSBvZiBvKVMuc2V0KFUsZyksZys9VS5ieXRlTGVuZ3RoO2NvbnN0IFQ9bmV3IFVpbnQ4QXJyYXkodGhpcy5tZW1vcnkuYnVmZmVyLGksbikscD1TLnN1YmFycmF5KDAsbik7cmV0dXJuIFQuc2V0KHApLG5ldyBEYXRhVmlldyh0aGlzLm1lbW9yeS5idWZmZXIpLnNldFVpbnQzMihhLHAuYnl0ZUxlbmd0aCwhMCkscy5TVUNDRVNTfWZkX3JlbnVtYmVyKHQsaSl7cmV0dXJuIHRoaXMuZHJpdmUucmVudW1iZXIodCxpKX1mZF9zZWVrKHQsaSxuLHIpe2NvbnN0W2EsZl09dGhpcy5kcml2ZS5zZWVrKHQsaSxuKTtyZXR1cm4gYSE9PXMuU1VDQ0VTU3x8KHkoe25ld09mZnNldDpmLnRvU3RyaW5nKCl9KSxuZXcgRGF0YVZpZXcodGhpcy5tZW1vcnkuYnVmZmVyKS5zZXRCaWdVaW50NjQocixmLCEwKSksYX11bnN0YWJsZV9mZF9zZWVrKHQsaSxuLHIpe2NvbnN0IGE9b3Rbbl07cmV0dXJuIHRoaXMuZmRfc2Vlayh0LGksYSxyKX1mZF9zeW5jKHQpe3JldHVybiB0aGlzLmRyaXZlLnN5bmModCl9ZmRfdGVsbCh0LGkpe2NvbnN0W24scl09dGhpcy5kcml2ZS50ZWxsKHQpO3JldHVybiBuIT09cy5TVUNDRVNTfHxuZXcgRGF0YVZpZXcodGhpcy5tZW1vcnkuYnVmZmVyKS5zZXRCaWdVaW50NjQoaSxyLCEwKSxufXBhdGhfZmlsZXN0YXRfZ2V0KHQsaSxuLHIsYSl7cmV0dXJuIHRoaXMuc2hhcmVkX3BhdGhfZmlsZXN0YXRfZ2V0KHQsaSxuLHIsYSwicHJldmlldzEiKX11bnN0YWJsZV9wYXRoX2ZpbGVzdGF0X2dldCh0LGksbixyLGEpe3JldHVybiB0aGlzLnNoYXJlZF9wYXRoX2ZpbGVzdGF0X2dldCh0LGksbixyLGEsInVuc3RhYmxlIil9c2hhcmVkX3BhdGhfZmlsZXN0YXRfZ2V0KHQsaSxuLHIsYSxmKXtjb25zdCBjPWY9PT0idW5zdGFibGUiP3E6SixvPW5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShuZXcgVWludDhBcnJheSh0aGlzLm1lbW9yeS5idWZmZXIsbixyKSk7eSh7cGF0aDpvfSk7Y29uc3RbRSxoXT10aGlzLmRyaXZlLnBhdGhTdGF0KHQsbyk7aWYoRSE9cy5TVUNDRVNTKXJldHVybiBFO2NvbnN0IFM9YyhoKTtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkodGhpcy5tZW1vcnkuYnVmZmVyLGEsUy5ieXRlTGVuZ3RoKS5zZXQoUyksRX1wYXRoX2ZpbGVzdGF0X3NldF90aW1lcyh0LGksbixyLGEsZixjKXtsZXQgbz1udWxsO2MmTi5BVElNJiYobz1sKGEpKSxjJk4uQVRJTV9OT1cmJihvPW5ldyBEYXRlKTtsZXQgRT1udWxsO2MmTi5NVElNJiYoRT1sKGYpKSxjJk4uTVRJTV9OT1cmJihFPW5ldyBEYXRlKTtjb25zdCBoPW5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShuZXcgVWludDhBcnJheSh0aGlzLm1lbW9yeS5idWZmZXIsbixyKSk7aWYobyl7Y29uc3QgUz10aGlzLmRyaXZlLnBhdGhTZXRBY2Nlc3NUaW1lKHQsaCxvKTtpZihTIT1zLlNVQ0NFU1MpcmV0dXJuIFN9aWYoRSl7Y29uc3QgUz10aGlzLmRyaXZlLnBhdGhTZXRNb2RpZmljYXRpb25UaW1lKHQsaCxFKTtpZihTIT1zLlNVQ0NFU1MpcmV0dXJuIFN9cmV0dXJuIHMuU1VDQ0VTU31wYXRoX29wZW4odCxpLG4scixhLGYsYyxvLEUpe2NvbnN0IGg9bmV3IERhdGFWaWV3KHRoaXMubWVtb3J5LmJ1ZmZlciksUz1CKHRoaXMubWVtb3J5LG4sciksZz0hIShhJk8uQ1JFQVQpLFQ9ISEoYSZPLkRJUkVDVE9SWSkscD0hIShhJk8uRVhDTCksZXQ9ISEoYSZPLlRSVU5DKSxVPSEhKG8mbS5BUFBFTkQpLEY9ISEobyZtLkRTWU5DKSxLPSEhKG8mbS5OT05CTE9DSyksZHQ9ISEobyZtLlJTWU5DKSx1dD0hIShvJm0uU1lOQyk7eSh7cGF0aDpTLG9wZW5GbGFnczp7Y3JlYXRlRmlsZUlmTm9uZTpnLGZhaWxJZk5vdERpcjpULGZhaWxJZkZpbGVFeGlzdHM6cCx0cnVuY2F0ZUZpbGU6ZXR9LGZpbGVEZXNjcmlwdG9yRmxhZ3M6e2ZsYWdBcHBlbmQ6VSxmbGFnRFN5bmM6RixmbGFnTm9uQmxvY2s6SyxmbGFnUlN5bmM6ZHQsZmxhZ1N5bmM6dXR9fSk7Y29uc3RbeixndF09dGhpcy5kcml2ZS5vcGVuKHQsUyxhLG8pO3JldHVybiB6fHwoaC5zZXRVaW50MzIoRSxndCwhMCkseil9cGF0aF9yZW5hbWUodCxpLG4scixhLGYpe2NvbnN0IGM9Qih0aGlzLm1lbW9yeSxpLG4pLG89Qih0aGlzLm1lbW9yeSxhLGYpO3JldHVybiB5KHtvbGRQYXRoOmMsbmV3UGF0aDpvfSksdGhpcy5kcml2ZS5yZW5hbWUodCxjLHIsbyl9cGF0aF91bmxpbmtfZmlsZSh0LGksbil7Y29uc3Qgcj1CKHRoaXMubWVtb3J5LGksbik7cmV0dXJuIHkoe3BhdGg6cn0pLHRoaXMuZHJpdmUudW5saW5rKHQscil9cG9sbF9vbmVvZmYodCxpLG4scil7Zm9yKGxldCBmPTA7ZjxuO2YrKyl7Y29uc3QgYz1uZXcgVWludDhBcnJheSh0aGlzLm1lbW9yeS5idWZmZXIsdCtmKiQsJCksbz1zdChjKSxFPW5ldyBVaW50OEFycmF5KHRoaXMubWVtb3J5LmJ1ZmZlcixpK2YqaixqKTtsZXQgaD0wLFM9cy5TVUNDRVNTO3N3aXRjaChvLnR5cGUpe2Nhc2UgQS5DTE9DSzpmb3IoO25ldyBEYXRlPG8udGltZW91dDspO0Uuc2V0KGZ0KG8udXNlcmRhdGEscy5TVUNDRVNTKSk7YnJlYWs7Y2FzZSBBLkZEX1JFQUQ6aWYoby5mZDwzKW8uZmQ9PT0wPyhTPXMuU1VDQ0VTUyxoPTMyKTpTPXMuRUJBREY7ZWxzZXtjb25zdFtnLFRdPXRoaXMuZHJpdmUuc3RhdChvLmZkKTtTPWcsaD1UP1QuYnl0ZUxlbmd0aDowfUUuc2V0KHR0KG8udXNlcmRhdGEsUyxBLkZEX1JFQUQsQmlnSW50KGgpKSk7YnJlYWs7Y2FzZSBBLkZEX1dSSVRFOmlmKGg9MCxTPXMuU1VDQ0VTUyxvLmZkPDMpby5mZD09PTA/Uz1zLkVCQURGOihTPXMuU1VDQ0VTUyxoPTEwMjQpO2Vsc2V7Y29uc3RbZyxUXT10aGlzLmRyaXZlLnN0YXQoby5mZCk7Uz1nLGg9VD9ULmJ5dGVMZW5ndGg6MH1FLnNldCh0dChvLnVzZXJkYXRhLFMsQS5GRF9SRUFELEJpZ0ludChoKSkpO2JyZWFrfX1yZXR1cm4gbmV3IERhdGFWaWV3KHRoaXMubWVtb3J5LmJ1ZmZlcixyLDQpLnNldFVpbnQzMigwLG4sITApLHMuU1VDQ0VTU31wYXRoX2NyZWF0ZV9kaXJlY3RvcnkodCxpLG4pe2NvbnN0IHI9Qih0aGlzLm1lbW9yeSxpLG4pO3JldHVybiB0aGlzLmRyaXZlLnBhdGhDcmVhdGVEaXIodCxyKX1wYXRoX2xpbmsoKXtyZXR1cm4gcy5FTk9TWVN9cGF0aF9yZWFkbGluaygpe3JldHVybiBzLkVOT1NZU31wYXRoX3JlbW92ZV9kaXJlY3RvcnkoKXtyZXR1cm4gcy5FTk9TWVN9cGF0aF9zeW1saW5rKCl7cmV0dXJuIHMuRU5PU1lTfXByb2NfcmFpc2UoKXtyZXR1cm4gcy5FTk9TWVN9c29ja19hY2NlcHQoKXtyZXR1cm4gcy5FTk9TWVN9c29ja19yZWN2KCl7cmV0dXJuIHMuRU5PU1lTfXNvY2tfc2VuZCgpe3JldHVybiBzLkVOT1NZU31zb2NrX3NodXRkb3duKCl7cmV0dXJuIHMuRU5PU1lTfXNvY2tfb3Blbigpe3JldHVybiBzLkVOT1NZU31zb2NrX2xpc3Rlbigpe3JldHVybiBzLkVOT1NZU31zb2NrX2Nvbm5lY3QoKXtyZXR1cm4gcy5FTk9TWVN9c29ja19zZXRzb2Nrb3B0KCl7cmV0dXJuIHMuRU5PU1lTfXNvY2tfYmluZCgpe3JldHVybiBzLkVOT1NZU31zb2NrX2dldGxvY2FsYWRkcigpe3JldHVybiBzLkVOT1NZU31zb2NrX2dldHBlZXJhZGRyKCl7cmV0dXJuIHMuRU5PU1lTfXNvY2tfZ2V0YWRkcmluZm8oKXtyZXR1cm4gcy5FTk9TWVN9fWNvbnN0IFY9Xy5GRF9EQVRBU1lOQ3xfLkZEX1JFQUR8Xy5GRF9TRUVLfF8uRkRfRkRTVEFUX1NFVF9GTEFHU3xfLkZEX1NZTkN8Xy5GRF9URUxMfF8uRkRfV1JJVEV8Xy5GRF9BRFZJU0V8Xy5GRF9BTExPQ0FURXxfLlBBVEhfQ1JFQVRFX0RJUkVDVE9SWXxfLlBBVEhfQ1JFQVRFX0ZJTEV8Xy5QQVRIX0xJTktfU09VUkNFfF8uUEFUSF9MSU5LX1RBUkdFVHxfLlBBVEhfT1BFTnxfLkZEX1JFQURESVJ8Xy5QQVRIX1JFQURMSU5LfF8uUEFUSF9SRU5BTUVfU09VUkNFfF8uUEFUSF9SRU5BTUVfVEFSR0VUfF8uUEFUSF9GSUxFU1RBVF9HRVR8Xy5QQVRIX0ZJTEVTVEFUX1NFVF9TSVpFfF8uUEFUSF9GSUxFU1RBVF9TRVRfVElNRVN8Xy5GRF9GSUxFU1RBVF9HRVR8Xy5GRF9GSUxFU1RBVF9TRVRfU0laRXxfLkZEX0ZJTEVTVEFUX1NFVF9USU1FU3xfLlBBVEhfU1lNTElOS3xfLlBBVEhfUkVNT1ZFX0RJUkVDVE9SWXxfLlBBVEhfVU5MSU5LX0ZJTEV8Xy5QT0xMX0ZEX1JFQURXUklURXxfLlNPQ0tfU0hVVERPV058Xy5TT0NLX0FDQ0VQVDtjbGFzcyBRIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IoaSl7c3VwZXIoKTtkKHRoaXMsImNvZGUiKTt0aGlzLmNvZGU9aX19ZnVuY3Rpb24gQihlLHQsaSl7cmV0dXJuIG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShuZXcgVWludDhBcnJheShlLmJ1ZmZlcix0LGkpKX1mdW5jdGlvbiBrKGUsdCxpKXtsZXQgbj1BcnJheShpKTtmb3IobGV0IHI9MDtyPGk7cisrKXtjb25zdCBhPWUuZ2V0VWludDMyKHQsITApO3QrPTQ7Y29uc3QgZj1lLmdldFVpbnQzMih0LCEwKTt0Kz00LG5bcl09bmV3IFVpbnQ4QXJyYXkoZS5idWZmZXIsYSxmKX1yZXR1cm4gbn1mdW5jdGlvbiBzdChlKXtjb25zdCB0PW5ldyBVaW50OEFycmF5KDgpO3Quc2V0KGUuc3ViYXJyYXkoMCw4KSk7Y29uc3QgaT1lWzhdLG49bmV3IERhdGFWaWV3KGUuYnVmZmVyLGUuYnl0ZU9mZnNldCs5KTtzd2l0Y2goaSl7Y2FzZSBBLkZEX1JFQUQ6Y2FzZSBBLkZEX1dSSVRFOnJldHVybnt1c2VyZGF0YTp0LHR5cGU6aSxmZDpuLmdldFVpbnQzMigwLCEwKX07Y2FzZSBBLkNMT0NLOmNvbnN0IHI9bi5nZXRVaW50MTYoMjQsITApLGE9dyhuZXcgRGF0ZSksZj1uLmdldEJpZ1VpbnQ2NCg4LCEwKSxjPW4uZ2V0QmlnVWludDY0KDE2LCEwKSxvPXImaXQuU1VCU0NSSVBUSU9OX0NMT0NLX0FCU1RJTUU/ZjphK2Y7cmV0dXJue3VzZXJkYXRhOnQsdHlwZTppLGlkOm4uZ2V0VWludDMyKDAsITApLHRpbWVvdXQ6bChvKSxwcmVjaXNpb246bChvK2MpfX19ZnVuY3Rpb24gSihlKXtjb25zdCB0PW5ldyBVaW50OEFycmF5KFcpLGk9bmV3IERhdGFWaWV3KHQuYnVmZmVyKTtyZXR1cm4gaS5zZXRCaWdVaW50NjQoMCxCaWdJbnQoMCksITApLGkuc2V0QmlnVWludDY0KDgsQmlnSW50KFIoZS5wYXRoKSksITApLGkuc2V0VWludDgoMTYsZS50eXBlKSxpLnNldEJpZ1VpbnQ2NCgyNCxCaWdJbnQoMSksITApLGkuc2V0QmlnVWludDY0KDMyLEJpZ0ludChlLmJ5dGVMZW5ndGgpLCEwKSxpLnNldEJpZ1VpbnQ2NCg0MCx3KGUudGltZXN0YW1wcy5hY2Nlc3MpLCEwKSxpLnNldEJpZ1VpbnQ2NCg0OCx3KGUudGltZXN0YW1wcy5tb2RpZmljYXRpb24pLCEwKSxpLnNldEJpZ1VpbnQ2NCg1Nix3KGUudGltZXN0YW1wcy5jaGFuZ2UpLCEwKSx0fWZ1bmN0aW9uIHEoZSl7Y29uc3QgdD1uZXcgVWludDhBcnJheShXKSxpPW5ldyBEYXRhVmlldyh0LmJ1ZmZlcik7cmV0dXJuIGkuc2V0QmlnVWludDY0KDAsQmlnSW50KDApLCEwKSxpLnNldEJpZ1VpbnQ2NCg4LEJpZ0ludChSKGUucGF0aCkpLCEwKSxpLnNldFVpbnQ4KDE2LGUudHlwZSksaS5zZXRVaW50MzIoMjAsMSwhMCksaS5zZXRCaWdVaW50NjQoMjQsQmlnSW50KGUuYnl0ZUxlbmd0aCksITApLGkuc2V0QmlnVWludDY0KDMyLHcoZS50aW1lc3RhbXBzLmFjY2VzcyksITApLGkuc2V0QmlnVWludDY0KDQwLHcoZS50aW1lc3RhbXBzLm1vZGlmaWNhdGlvbiksITApLGkuc2V0QmlnVWludDY0KDQ4LHcoZS50aW1lc3RhbXBzLmNoYW5nZSksITApLHR9ZnVuY3Rpb24gSChlLHQsaSl7Y29uc3Qgbj1pPz9WLHI9aT8/VixhPW5ldyBVaW50OEFycmF5KDI0KSxmPW5ldyBEYXRhVmlldyhhLmJ1ZmZlciwwLDI0KTtyZXR1cm4gZi5zZXRVaW50OCgwLGUpLGYuc2V0VWludDMyKDIsdCwhMCksZi5zZXRCaWdVaW50NjQoOCxuLCEwKSxmLnNldEJpZ1VpbnQ2NCgxNixyLCEwKSxhfWZ1bmN0aW9uIGF0KGUsdCxpKXtjb25zdCBuPW5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShlKSxyPTI0K24uYnl0ZUxlbmd0aCxhPW5ldyBVaW50OEFycmF5KHIpLGY9bmV3IERhdGFWaWV3KGEuYnVmZmVyKTtyZXR1cm4gZi5zZXRCaWdVaW50NjQoMCxCaWdJbnQoaSsxKSwhMCksZi5zZXRCaWdVaW50NjQoOCxCaWdJbnQoUihlKSksITApLGYuc2V0VWludDMyKDE2LG4ubGVuZ3RoLCEwKSxmLnNldFVpbnQ4KDIwLHQpLGEuc2V0KG4sMjQpLGF9ZnVuY3Rpb24gZnQoZSx0KXtjb25zdCBpPW5ldyBVaW50OEFycmF5KDMyKTtpLnNldChlLDApO2NvbnN0IG49bmV3IERhdGFWaWV3KGkuYnVmZmVyKTtyZXR1cm4gbi5zZXRVaW50MTYoOCx0LCEwKSxuLnNldFVpbnQxNigxMCxBLkNMT0NLLCEwKSxpfWZ1bmN0aW9uIHR0KGUsdCxpLG4pe2NvbnN0IHI9bmV3IFVpbnQ4QXJyYXkoMzIpO3Iuc2V0KGUsMCk7Y29uc3QgYT1uZXcgRGF0YVZpZXcoci5idWZmZXIpO3JldHVybiBhLnNldFVpbnQxNig4LHQsITApLGEuc2V0VWludDE2KDEwLGksITApLGEuc2V0QmlnVWludDY0KDE2LG4sITApLHJ9ZnVuY3Rpb24gUihlLHQ9MCl7bGV0IGk9MzczNTkyODU1OV50LG49MTEwMzU0Nzk5MV50O2ZvcihsZXQgcj0wLGE7cjxlLmxlbmd0aDtyKyspYT1lLmNoYXJDb2RlQXQociksaT1NYXRoLmltdWwoaV5hLDI2NTQ0MzU3NjEpLG49TWF0aC5pbXVsKG5eYSwxNTk3MzM0Njc3KTtyZXR1cm4gaT1NYXRoLmltdWwoaV5pPj4+MTYsMjI0NjgyMjUwNyleTWF0aC5pbXVsKG5ebj4+PjEzLDMyNjY0ODk5MDkpLG49TWF0aC5pbXVsKG5ebj4+PjE2LDIyNDY4MjI1MDcpXk1hdGguaW11bChpXmk+Pj4xMywzMjY2NDg5OTA5KSw0Mjk0OTY3Mjk2KigyMDk3MTUxJm4pKyhpPj4+MCl9ZnVuY3Rpb24gdyhlKXtyZXR1cm4gQmlnSW50KGUuZ2V0VGltZSgpKSpCaWdJbnQoMWU2KX1mdW5jdGlvbiBsKGUpe3JldHVybiBuZXcgRGF0ZShOdW1iZXIoZS9CaWdJbnQoMWU2KSkpfWNvbnN0IG90PXtbTS5DVVJdOmIuQ1VSLFtNLkVORF06Yi5FTkQsW00uU0VUXTpiLlNFVH07b25tZXNzYWdlPWFzeW5jIGU9Pntjb25zdCB0PWUuZGF0YTtzd2l0Y2godC50eXBlKXtjYXNlInN0YXJ0Ijp0cnl7Y29uc3QgaT1hd2FpdCBjdCh0LmJpbmFyeVVSTCx0LnN0ZGluQnVmZmVyLHQpO0woe3RhcmdldDoiaG9zdCIsdHlwZToicmVzdWx0IixyZXN1bHQ6aX0pfWNhdGNoKGkpe2xldCBuO2kgaW5zdGFuY2VvZiBFcnJvcj9uPXttZXNzYWdlOmkubWVzc2FnZSx0eXBlOmkuY29uc3RydWN0b3IubmFtZX06bj17bWVzc2FnZTpgdW5rbm93biBlcnJvciAtICR7aX1gLHR5cGU6IlVua25vd24ifSxMKHt0YXJnZXQ6Imhvc3QiLHR5cGU6ImNyYXNoIixlcnJvcjpufSl9YnJlYWt9fTtmdW5jdGlvbiBMKGUpe3Bvc3RNZXNzYWdlKGUpfWFzeW5jIGZ1bmN0aW9uIGN0KGUsdCxpKXtyZXR1cm4gdi5zdGFydChmZXRjaChlKSxuZXcgWCh7Li4uaSxzdGRvdXQ6RXQsc3RkZXJyOmh0LHN0ZGluOm49Pl90KG4sdCksZGVidWc6U3R9KSl9ZnVuY3Rpb24gRXQoZSl7TCh7dGFyZ2V0OiJob3N0Iix0eXBlOiJzdGRvdXQiLHRleHQ6ZX0pfWZ1bmN0aW9uIGh0KGUpe0woe3RhcmdldDoiaG9zdCIsdHlwZToic3RkZXJyIix0ZXh0OmV9KX1mdW5jdGlvbiBTdChlLHQsaSxuKXtyZXR1cm4gbj1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG4pKSxMKHt0YXJnZXQ6Imhvc3QiLHR5cGU6ImRlYnVnIixuYW1lOmUsYXJnczp0LHJldDppLGRhdGE6bn0pLGl9ZnVuY3Rpb24gX3QoZSx0KXtBdG9taWNzLndhaXQobmV3IEludDMyQXJyYXkodCksMCwwKTtjb25zdCBpPW5ldyBEYXRhVmlldyh0KSxuPWkuZ2V0SW50MzIoMCk7aWYobjwwKXJldHVybiBpLnNldEludDMyKDAsMCksbnVsbDtjb25zdCByPW5ldyBVaW50OEFycmF5KHQsNCxuKSxhPW5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShyLnNsaWNlKDAsZSkpLGY9ci5zbGljZShlLHIubGVuZ3RoKTtyZXR1cm4gaS5zZXRJbnQzMigwLGYuYnl0ZUxlbmd0aCksci5zZXQoZiksYX19KSgpOwo=";
var tt = typeof window < "u" && window.Blob && new Blob([atob(it)], { type: "text/javascript;charset=utf-8" });

// src/index.ts
var TwelfService = class {
  constructor(twelfWasm) {
    this.twelfWasm = twelfWasm;
  }
  hideLoaderAfterFetch() {
    return __async(this, null, function* () {
      yield this.twelfWasm;
      console.log("hello");
      document.getElementById("loading-indicator").classList.add("hidden");
    });
  }
  exec(twelfContent) {
    return __async(this, null, function* () {
      const stdin = "loadFile /single.elf\n";
      let stdinMark = 0;
      function readStdin(numBytes) {
        const bytes = Math.min(numBytes, stdin.length - stdinMark);
        if (bytes == 0)
          return null;
        const rv2 = stdin.substr(stdinMark, bytes);
        stdinMark += bytes;
        return rv2;
      }
      const output = [];
      const wasi = new H({
        args: ["twelf-server"],
        env: {},
        stdout: (out) => {
          output.push(out);
        },
        stderr: (err) => {
          output.push(err);
        },
        stdin: readStdin,
        fs: {
          "/single.elf": {
            path: "/single.elf",
            timestamps: {
              access: new Date(),
              change: new Date(),
              modification: new Date()
            },
            mode: "string",
            content: `${twelfContent}
`
          }
        }
      });
      const wasmInstance = yield WebAssembly.instantiate(yield this.twelfWasm, __spreadValues({}, wasi.getImportObject()));
      wasi.memory = wasmInstance.instance.exports.memory;
      console.log(Object.keys(wasmInstance.instance.exports));
      wasmInstance.instance.exports.export_open(0, 0);
      wasmInstance.instance.exports.f3();
      const rv = wasmInstance.instance.exports.f(42, 5.6, 65);
      console.log(`return value is ${String.fromCodePoint(rv)}`);
      console.log(output);
    });
  }
};
function getWasm(url) {
  return __async(this, null, function* () {
    return (yield fetch(url)).arrayBuffer();
  });
}
function init() {
  document.getElementById("twelf-response").value = "";
  const twelfService = new TwelfService(getWasm("assets/func.wasm"));
  const button = document.getElementById("check-button");
  function exec() {
    twelfService.exec(document.getElementById("primary-view").value);
  }
  button.onclick = exec;
  twelfService.hideLoaderAfterFetch();
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key == "Enter") {
      exec();
    }
  });
}
init();
//# sourceMappingURL=bundle.js.map

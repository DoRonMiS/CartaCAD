var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/replicad/dist/replicad.js
var replicad_exports = {};
__export(replicad_exports, {
  AXIS_NAMES: () => AXIS_NAMES,
  AssemblyExporter: () => AssemblyExporter,
  BaseSketcher2d: () => BaseSketcher2d,
  Blueprint: () => Blueprint,
  BlueprintSketcher: () => BlueprintSketcher,
  Blueprints: () => Blueprints,
  BoundingBox: () => BoundingBox,
  BoundingBox2d: () => BoundingBox2d,
  CompSolid: () => CompSolid,
  Compound: () => Compound,
  CompoundBlueprint: () => CompoundBlueprint,
  CompoundSketch: () => CompoundSketch,
  CornerFinder: () => CornerFinder,
  Curve: () => Curve,
  Curve2D: () => Curve2D,
  DEG2RAD: () => DEG2RAD,
  DistanceQuery: () => DistanceQuery,
  DistanceTool: () => DistanceTool,
  Drawing: () => Drawing,
  DrawingPen: () => DrawingPen,
  Edge: () => Edge,
  EdgeFinder: () => EdgeFinder,
  Face: () => Face,
  FaceFinder: () => FaceFinder,
  FaceSketcher: () => FaceSketcher,
  GCWithObject: () => GCWithObject,
  GCWithScope: () => GCWithScope,
  HASH_CODE_MAX: () => HASH_CODE_MAX,
  LinearPhysicalProperties: () => LinearPhysicalProperties,
  MeshShape: () => MeshShape,
  Plane: () => Plane,
  ProjectionCamera: () => ProjectionCamera,
  RAD2DEG: () => RAD2DEG,
  Shape: () => Shape,
  Shell: () => Shell,
  Sketch: () => Sketch,
  Sketcher: () => Sketcher,
  Sketches: () => Sketches,
  Solid: () => Solid,
  Surface: () => Surface,
  SurfacePhysicalProperties: () => SurfacePhysicalProperties,
  Transformation: () => Transformation,
  Vector: () => Vector,
  Vertex: () => Vertex,
  VolumePhysicalProperties: () => VolumePhysicalProperties,
  Wire: () => Wire,
  WrappingObj: () => WrappingObj,
  _1DShape: () => _1DShape,
  _3DShape: () => _3DShape,
  addHolesInFace: () => addHolesInFace,
  asDir: () => asDir,
  asPnt: () => asPnt,
  assembleWire: () => assembleWire,
  atShapeExtremum: () => atShapeExtremum,
  axis2d: () => axis2d,
  backMost: () => backMost,
  basicFaceExtrusion: () => basicFaceExtrusion,
  bottomMost: () => bottomMost,
  cast: () => cast,
  combineFinderFilters: () => combineFinderFilters,
  complexExtrude: () => complexExtrude,
  compoundShapes: () => compoundShapes,
  createAssembly: () => createAssembly,
  createNamedPlane: () => createNamedPlane,
  cut2D: () => cut2D,
  cutBlueprints: () => cutBlueprints,
  deserializeDrawing: () => deserializeDrawing,
  deserializeShape: () => deserializeShape,
  downcast: () => downcast,
  draw: () => draw,
  drawCircle: () => drawCircle,
  drawEllipse: () => drawEllipse,
  drawFaceOutline: () => drawFaceOutline,
  drawParametricFunction: () => drawParametricFunction,
  drawPointsInterpolation: () => drawPointsInterpolation,
  drawPolysides: () => drawPolysides,
  drawProjection: () => drawProjection,
  drawRectangle: () => drawRectangle,
  drawRoundedRectangle: () => drawRoundedRectangle,
  drawSingleCircle: () => drawSingleCircle,
  drawSingleEllipse: () => drawSingleEllipse,
  drawText: () => drawText,
  exportSTEP: () => exportSTEP,
  frontMost: () => frontMost,
  fuse2D: () => fuse2D,
  fuseBlueprints: () => fuseBlueprints,
  genericSweep: () => genericSweep,
  getFont: () => getFont,
  getManifold: () => getManifold,
  getOC: () => getOC,
  getSingleFace: () => getSingleFace,
  importSTEP: () => importSTEP,
  importSTL: () => importSTL,
  importSTLAsMesh: () => importSTLAsMesh,
  intersect2D: () => intersect2D,
  intersectBlueprints: () => intersectBlueprints,
  isPoint: () => isPoint,
  isProjectionPlane: () => isProjectionPlane,
  isShape3D: () => isShape3D,
  isWire: () => isWire,
  iterTopo: () => iterTopo,
  leftMost: () => leftMost,
  loadFont: () => loadFont,
  localGC: () => localGC,
  loft: () => loft,
  lookFromPlane: () => lookFromPlane,
  makeAx1: () => makeAx1,
  makeAx2: () => makeAx2,
  makeAx3: () => makeAx3,
  makeBSplineApproximation: () => makeBSplineApproximation,
  makeBaseBox: () => makeBaseBox,
  makeBezierCurve: () => makeBezierCurve,
  makeBox: () => makeBox,
  makeCircle: () => makeCircle,
  makeCompound: () => makeCompound,
  makeCylinder: () => makeCylinder,
  makeDirVector: () => makeDirVector,
  makeDirection: () => makeDirection,
  makeEllipse: () => makeEllipse,
  makeEllipseArc: () => makeEllipseArc,
  makeEllipsoid: () => makeEllipsoid,
  makeFace: () => makeFace,
  makeHelix: () => makeHelix,
  makeLine: () => makeLine,
  makeNewFaceWithinFace: () => makeNewFaceWithinFace,
  makeNonPlanarFace: () => makeNonPlanarFace,
  makeOffset: () => makeOffset,
  makePlane: () => makePlane,
  makePlaneFromFace: () => makePlaneFromFace,
  makePln: () => makePln,
  makePolygon: () => makePolygon,
  makeProjectedEdges: () => makeProjectedEdges,
  makeSolid: () => makeSolid,
  makeSphere: () => makeSphere,
  makeTangentArc: () => makeTangentArc,
  makeThreePointArc: () => makeThreePointArc,
  makeVertex: () => makeVertex,
  measureArea: () => measureArea,
  measureDistanceBetween: () => measureDistanceBetween,
  measureLength: () => measureLength,
  measureShapeLinearProperties: () => measureShapeLinearProperties,
  measureShapeSurfaceProperties: () => measureShapeSurfaceProperties,
  measureShapeVolumeProperties: () => measureShapeVolumeProperties,
  measureVolume: () => measureVolume,
  mirror: () => mirror,
  organiseBlueprints: () => organiseBlueprints,
  polysideInnerRadius: () => polysideInnerRadius,
  polysidesBlueprint: () => polysidesBlueprint,
  resolveDirection: () => resolveDirection,
  revolution: () => revolution,
  rightMost: () => rightMost,
  rotate: () => rotate,
  roundedRectangleBlueprint: () => roundedRectangleBlueprint,
  scale: () => scale,
  setManifold: () => setManifold,
  setOC: () => setOC,
  shapeType: () => shapeType,
  sketchCircle: () => sketchCircle,
  sketchEllipse: () => sketchEllipse,
  sketchFaceOffset: () => sketchFaceOffset,
  sketchHelix: () => sketchHelix,
  sketchParametricFunction: () => sketchParametricFunction,
  sketchPolysides: () => sketchPolysides,
  sketchRectangle: () => sketchRectangle,
  sketchRoundedRectangle: () => sketchRoundedRectangle,
  sketchText: () => sketchText,
  supportExtrude: () => supportExtrude,
  textBlueprints: () => textBlueprints,
  topMost: () => topMost,
  translate: () => translate,
  twistExtrude: () => twistExtrude,
  weldShellsAndFaces: () => weldShellsAndFaces
});

// node_modules/replicad/dist/casting-rs4QjB74.js
var OC = { library: null };
var setOC = (oc) => {
  OC.library = oc;
};
var getOC = () => {
  if (!OC.library) throw new Error("oppencascade has not been loaded");
  return OC.library;
};
if (!globalThis.FinalizationRegistry) {
  console.log("Garbage collection will not work");
  globalThis.FinalizationRegistry = (() => ({
    register: () => null,
    unregister: () => null
  }));
}
var deletetableRegistry = new globalThis.FinalizationRegistry((heldValue) => {
  if (!heldValue) return;
  try {
    heldValue.delete();
  } catch (e) {
    console.error(e);
  }
});
var WrappingObj = class {
  constructor(wrapped) {
    this.oc = getOC();
    if (wrapped) deletetableRegistry.register(this, wrapped, wrapped);
    this._wrapped = wrapped;
  }
  get wrapped() {
    if (this._wrapped === null) throw new Error("This object has been deleted");
    return this._wrapped;
  }
  set wrapped(newWrapped) {
    if (this._wrapped) {
      deletetableRegistry.unregister(this._wrapped);
      this._wrapped.delete();
    }
    if (newWrapped) deletetableRegistry.register(this, newWrapped, newWrapped);
    this._wrapped = newWrapped;
  }
  delete() {
    const wrapped = this._wrapped;
    if (wrapped === null) return;
    this._wrapped = null;
    deletetableRegistry.unregister(wrapped);
    wrapped.delete();
  }
};
if (typeof Symbol.dispose === "symbol") Object.defineProperty(WrappingObj.prototype, Symbol.dispose, {
  configurable: true,
  writable: true,
  value() {
    this.delete();
  }
});
var GCWithScope = () => {
  function gcWithScope(value) {
    if (value) deletetableRegistry.register(gcWithScope, value);
    return value;
  }
  return gcWithScope;
};
var GCWithObject = (obj) => {
  function registerForGC(value) {
    if (value) deletetableRegistry.register(obj, value);
    return value;
  }
  return registerForGC;
};
var localGC = (debug) => {
  const cleaner = /* @__PURE__ */ new Set();
  return [
    (v) => {
      cleaner.add(v);
      return v;
    },
    () => {
      [...cleaner.values()].forEach((d) => d.delete());
      cleaner.clear();
    },
    debug ? cleaner : void 0
  ];
};
var HASH_CODE_MAX = 2147483647;
var DEG2RAD = Math.PI / 180;
var RAD2DEG = 180 / Math.PI;
var round3 = (v) => Math.round(v * 1e3) / 1e3;
function isPoint(p) {
  if (Array.isArray(p)) return p.length === 3 || p.length === 2;
  else if (p instanceof Vector) return true;
  else if (p && typeof p?.XYZ === "function") return true;
  return false;
}
var makeAx3 = (center, dir, xDir) => {
  const oc = getOC();
  const origin = asPnt(center);
  const direction = asDir(dir);
  let axis;
  if (xDir) {
    const xDirection = asDir(xDir);
    axis = new oc.gp_Ax3(origin, direction, xDirection);
    xDirection.delete();
  } else axis = new oc.gp_Ax3(origin, direction);
  origin.delete();
  direction.delete();
  return axis;
};
function makePln(origin, dir) {
  const orig = asPnt(origin);
  const direction = asDir(dir);
  const pln = new (getOC()).gp_Pln(orig, direction);
  orig.delete();
  direction.delete();
  return pln;
}
var makeAx2 = (center, dir, xDir) => {
  const oc = getOC();
  const origin = asPnt(center);
  const direction = asDir(dir);
  let axis;
  if (xDir) {
    const xDirection = asDir(xDir);
    axis = new oc.gp_Ax2(origin, direction, xDirection);
    xDirection.delete();
  } else axis = new oc.gp_Ax2(origin, direction);
  origin.delete();
  direction.delete();
  return axis;
};
var makeAx1 = (center, dir) => {
  const oc = getOC();
  const origin = asPnt(center);
  const direction = asDir(dir);
  const axis = new oc.gp_Ax1(origin, direction);
  origin.delete();
  direction.delete();
  return axis;
};
var makeVec = (vector = [
  0,
  0,
  0
]) => {
  const oc = getOC();
  if (Array.isArray(vector)) {
    if (vector.length === 3) return new oc.gp_Vec(...vector);
    else if (vector.length === 2) return new oc.gp_Vec(...vector, 0);
  } else if (vector instanceof Vector) return new oc.gp_Vec(vector.wrapped.XYZ());
  else if (vector.XYZ) return new oc.gp_Vec(vector.XYZ());
  return new oc.gp_Vec(0, 0, 0);
};
var Vector = class Vector2 extends WrappingObj {
  constructor(vector = [
    0,
    0,
    0
  ]) {
    super(makeVec(vector));
  }
  get repr() {
    return `x: ${round3(this.x)}, y: ${round3(this.y)}, z: ${round3(this.z)}`;
  }
  get x() {
    return this.wrapped.X();
  }
  get y() {
    return this.wrapped.Y();
  }
  get z() {
    return this.wrapped.Z();
  }
  get Length() {
    return this.wrapped.Magnitude();
  }
  toTuple() {
    return [
      this.x,
      this.y,
      this.z
    ];
  }
  cross(v) {
    return new Vector2(this.wrapped.Crossed(v.wrapped));
  }
  dot(v) {
    return this.wrapped.Dot(v.wrapped);
  }
  sub(v) {
    return new Vector2(this.wrapped.Subtracted(v.wrapped));
  }
  add(v) {
    return new Vector2(this.wrapped.Added(v.wrapped));
  }
  multiply(scale2) {
    return new Vector2(this.wrapped.Multiplied(scale2));
  }
  normalized() {
    return new Vector2(this.wrapped.Normalized());
  }
  normalize() {
    this.wrapped.Normalize();
    return this;
  }
  getCenter() {
    return this;
  }
  getAngle(v) {
    return this.wrapped.Angle(v.wrapped) * RAD2DEG;
  }
  projectToPlane(plane) {
    const base = plane.origin;
    const normal = plane.zDir;
    const v1 = this.sub(base);
    const v2 = normal.multiply(v1.dot(normal) / normal.Length ** 2);
    const projection = this.sub(v2);
    v1.delete();
    v2.delete();
    return projection;
  }
  equals(other) {
    return this.wrapped.IsEqual(other.wrapped, 1e-5, 1e-5);
  }
  toPnt() {
    return new this.oc.gp_Pnt(this.wrapped.XYZ());
  }
  toDir() {
    return new this.oc.gp_Dir(this.wrapped.XYZ());
  }
  rotate(angle, center = [
    0,
    0,
    0
  ], direction = [
    0,
    0,
    1
  ]) {
    const ax = makeAx1(center, direction);
    this.wrapped.Rotate(ax, angle * DEG2RAD);
    ax.delete();
    return this;
  }
};
var AXIS_NAMES = [
  "X",
  "Y",
  "Z",
  "-X",
  "-Y",
  "-Z"
];
var DIRECTIONS = {
  X: [
    1,
    0,
    0
  ],
  Y: [
    0,
    1,
    0
  ],
  Z: [
    0,
    0,
    1
  ],
  "-X": [
    -1,
    0,
    0
  ],
  "-Y": [
    0,
    -1,
    0
  ],
  "-Z": [
    0,
    0,
    -1
  ]
};
function resolveDirection(direction) {
  if (typeof direction !== "string") return direction;
  const resolved = DIRECTIONS[direction];
  if (!resolved) throw new Error(`Invalid direction "${direction}". Expected one of: ${AXIS_NAMES.join(", ")}.`);
  return resolved;
}
var makeDirection = resolveDirection;
function makeDirVector(direction) {
  return new Vector(resolveDirection(direction));
}
function asPnt(coords) {
  const v = new Vector(coords);
  const pnt2 = v.toPnt();
  v.delete();
  return pnt2;
}
function asDir(direction) {
  const v = makeDirVector(direction);
  const dir = v.toDir();
  v.delete();
  return dir;
}
var Transformation = class Transformation2 extends WrappingObj {
  constructor(transform) {
    const oc = getOC();
    super(transform || new oc.gp_Trsf());
  }
  clone() {
    const clone = this.wrapped.Inverted();
    clone.Invert();
    return new Transformation2(clone);
  }
  translate(xDistOrVector, yDist = 0, zDist = 0) {
    const translation = new Vector(typeof xDistOrVector === "number" ? [
      xDistOrVector,
      yDist,
      zDist
    ] : xDistOrVector);
    this.wrapped.SetTranslation(translation.wrapped);
    return this;
  }
  rotate(angle, position = [
    0,
    0,
    0
  ], direction = [
    0,
    0,
    1
  ]) {
    const dir = asDir(direction);
    const origin = asPnt(position);
    const axis = new this.oc.gp_Ax1(origin, dir);
    this.wrapped.SetRotation(axis, angle * DEG2RAD);
    axis.delete();
    dir.delete();
    origin.delete();
    return this;
  }
  mirror(inputPlane = "YZ", inputOrigin) {
    const r = GCWithScope();
    let origin;
    let direction;
    if (typeof inputPlane === "string") {
      const plane = r(createNamedPlane(inputPlane, inputOrigin));
      origin = plane.origin;
      direction = plane.zDir;
    } else if (inputPlane instanceof Plane) {
      origin = inputOrigin || inputPlane.origin;
      direction = inputPlane.zDir;
    } else {
      origin = inputOrigin || [
        0,
        0,
        0
      ];
      direction = inputPlane;
    }
    const mirrorAxis = r(makeAx2(origin, direction));
    this.wrapped.SetMirror(mirrorAxis);
    return this;
  }
  scale(center, scale2) {
    const pnt2 = asPnt(center);
    this.wrapped.SetScale(pnt2, scale2);
    pnt2.delete();
    return this;
  }
  inverse() {
    this.wrapped.Invert();
    return this;
  }
  inverted() {
    return new Transformation2(this.wrapped.Inverted());
  }
  coordSystemChange(fromSystem, toSystem) {
    const r = GCWithScope();
    const fromAx = r(fromSystem === "reference" ? new this.oc.gp_Ax3() : makeAx3(fromSystem.origin, fromSystem.zDir, fromSystem.xDir));
    const toAx = r(toSystem === "reference" ? new this.oc.gp_Ax3() : makeAx3(toSystem.origin, toSystem.zDir, toSystem.xDir));
    this.wrapped.SetTransformation(fromAx, toAx);
    return this;
  }
  transformPoint(point) {
    const pnt2 = asPnt(point);
    const newPoint = pnt2.Transformed(this.wrapped);
    pnt2.delete();
    return newPoint;
  }
  transform(shape) {
    return new this.oc.BRepBuilderAPI_Transform(shape, this.wrapped, true, false).ModifiedShape(shape);
  }
};
var Plane = class Plane2 {
  constructor(origin, xDirection = null, normal = [
    0,
    0,
    1
  ]) {
    this.oc = getOC();
    const zDir = makeDirVector(normal);
    if (zDir.Length === 0) throw new Error("normal should be non null");
    this.zDir = zDir.normalize();
    let xDir;
    if (!xDirection) {
      const ax3 = makeAx3(origin, this.zDir);
      const defaultXDirection = ax3.XDirection();
      xDir = makeDirVector(defaultXDirection);
      defaultXDirection.delete();
      ax3.delete();
    } else xDir = makeDirVector(xDirection);
    if (xDir.Length === 0) throw new Error("xDir should be non null");
    this.xDir = xDir.normalize();
    this.yDir = this.zDir.cross(this.xDir).normalize();
    this.origin = new Vector(origin);
  }
  delete() {
    this.localToGlobal.delete();
    this.xDir.delete();
    this.yDir.delete();
    this.zDir.delete();
    this._origin.delete();
  }
  clone() {
    return new Plane2(this.origin, this.xDir, this.zDir);
  }
  get origin() {
    return this._origin;
  }
  set origin(newOrigin) {
    this._origin = newOrigin;
    this._calcTransforms();
  }
  translateTo(point) {
    const newPlane = this.clone();
    newPlane.origin = new Vector(point);
    return newPlane;
  }
  translate(xDistOrVector, yDist = 0, zDist = 0) {
    const translation = new Vector(typeof xDistOrVector === "number" ? [
      xDistOrVector,
      yDist,
      zDist
    ] : xDistOrVector);
    return this.translateTo(this.origin.add(translation));
  }
  translateX(xDist) {
    return this.translate(xDist, 0, 0);
  }
  translateY(yDist) {
    return this.translate(0, yDist, 0);
  }
  translateZ(zDist) {
    return this.translate(0, 0, zDist);
  }
  pivot(angle, direction = [
    1,
    0,
    0
  ]) {
    const zDir = new Vector(this.zDir).rotate(angle, [
      0,
      0,
      0
    ], direction);
    const xDir = new Vector(this.xDir).rotate(angle, [
      0,
      0,
      0
    ], direction);
    return new Plane2(this.origin, xDir, zDir);
  }
  rotate2DAxes(angle) {
    const xDir = new Vector(this.xDir).rotate(angle, [
      0,
      0,
      0
    ], this.zDir);
    return new Plane2(this.origin, xDir, this.zDir);
  }
  _calcTransforms() {
    const globalCoordSystem = new this.oc.gp_Ax3();
    const localCoordSystem = makeAx3(this.origin, this.zDir, this.xDir);
    new this.oc.gp_Trsf().SetTransformation(globalCoordSystem, localCoordSystem);
    this.globalToLocal = new Transformation();
    this.globalToLocal.coordSystemChange("reference", {
      origin: this.origin,
      zDir: this.zDir,
      xDir: this.xDir
    });
    this.localToGlobal = new Transformation();
    this.localToGlobal.coordSystemChange({
      origin: this.origin,
      zDir: this.zDir,
      xDir: this.xDir
    }, "reference");
  }
  setOrigin2d(x, y) {
    this.origin = this.toWorldCoords([x, y]);
  }
  toLocalCoords(vec2) {
    const pnt2 = this.globalToLocal.transformPoint(vec2);
    const newVec = new Vector(pnt2);
    pnt2.delete();
    return newVec;
  }
  toWorldCoords(v) {
    const pnt2 = this.localToGlobal.transformPoint(v);
    const newVec = new Vector(pnt2);
    pnt2.delete();
    return newVec;
  }
};
var PLANES_CONFIG = {
  XY: {
    xDir: [
      1,
      0,
      0
    ],
    normal: [
      0,
      0,
      1
    ]
  },
  YZ: {
    xDir: [
      0,
      1,
      0
    ],
    normal: [
      1,
      0,
      0
    ]
  },
  ZX: {
    xDir: [
      0,
      0,
      1
    ],
    normal: [
      0,
      1,
      0
    ]
  },
  XZ: {
    xDir: [
      1,
      0,
      0
    ],
    normal: [
      0,
      -1,
      0
    ]
  },
  YX: {
    xDir: [
      0,
      1,
      0
    ],
    normal: [
      0,
      0,
      -1
    ]
  },
  ZY: {
    xDir: [
      0,
      0,
      1
    ],
    normal: [
      -1,
      0,
      0
    ]
  },
  front: {
    xDir: [
      1,
      0,
      0
    ],
    normal: [
      0,
      0,
      1
    ]
  },
  back: {
    xDir: [
      -1,
      0,
      0
    ],
    normal: [
      0,
      0,
      -1
    ]
  },
  left: {
    xDir: [
      0,
      0,
      1
    ],
    normal: [
      -1,
      0,
      0
    ]
  },
  right: {
    xDir: [
      0,
      0,
      -1
    ],
    normal: [
      1,
      0,
      0
    ]
  },
  top: {
    xDir: [
      1,
      0,
      0
    ],
    normal: [
      0,
      1,
      0
    ]
  },
  bottom: {
    xDir: [
      1,
      0,
      0
    ],
    normal: [
      0,
      -1,
      0
    ]
  }
};
var createNamedPlane = (plane, sourceOrigin = [
  0,
  0,
  0
]) => {
  const config = PLANES_CONFIG[plane];
  if (!config) throw new Error(`Could not find plane ${plane}`);
  let origin;
  if (typeof sourceOrigin === "number") origin = config.normal.map((v) => v * sourceOrigin);
  else origin = sourceOrigin;
  return new Plane(origin, config.xDir, config.normal);
};
var BoundingBox = class BoundingBox2 extends WrappingObj {
  constructor(wrapped) {
    const oc = getOC();
    let boundBox = wrapped;
    if (!boundBox) boundBox = new oc.Bnd_Box();
    super(boundBox);
  }
  static fromBounds(min, max) {
    const box = new BoundingBox2();
    box.wrapped.Update(min[0], min[1], min[2], max[0], max[1], max[2]);
    return box;
  }
  get repr() {
    const [min, max] = this.bounds;
    return `${new Vector(min).repr} - ${new Vector(max).repr}`;
  }
  get bounds() {
    const cornerMin = this.wrapped.CornerMin();
    const cornerMax = this.wrapped.CornerMax();
    const result = [[
      cornerMin.X(),
      cornerMin.Y(),
      cornerMin.Z()
    ], [
      cornerMax.X(),
      cornerMax.Y(),
      cornerMax.Z()
    ]];
    cornerMin.delete();
    cornerMax.delete();
    return result;
  }
  get center() {
    const [[xmin, ymin, zmin], [xmax, ymax, zmax]] = this.bounds;
    return [
      xmin + (xmax - xmin) / 2,
      ymin + (ymax - ymin) / 2,
      zmin + (zmax - zmin) / 2
    ];
  }
  get width() {
    const [[xmin], [xmax]] = this.bounds;
    return Math.abs(xmax - xmin);
  }
  get height() {
    const [[, ymin], [, ymax]] = this.bounds;
    return Math.abs(ymax - ymin);
  }
  get depth() {
    const [[, , zmin], [, , zmax]] = this.bounds;
    return Math.abs(zmax - zmin);
  }
  add(other) {
    this.wrapped.Add(other.wrapped);
  }
  isOut(other) {
    return this.wrapped.IsOut(other.wrapped);
  }
};
var makePlaneFromFace = (face, originOnSurface = [0, 0]) => {
  const originPoint = face.pointOnSurface(...originOnSurface);
  const normal = face.normalAt(originPoint);
  const v = new Vector([
    0,
    0,
    1
  ]);
  let xd = v.cross(normal);
  if (xd.Length < 1e-8) {
    xd.delete();
    xd = new Vector([
      1,
      0,
      0
    ]);
  }
  v.delete();
  return new Plane(originPoint, xd, normal);
};
function makePlane(plane = "XY", origin = [
  0,
  0,
  0
]) {
  if (plane instanceof Plane) return plane.clone();
  else return createNamedPlane(plane, origin);
}
function rotate(shape, angle, position = [
  0,
  0,
  0
], direction = [
  0,
  0,
  1
]) {
  const transformation = new Transformation();
  transformation.rotate(angle, position, direction);
  const newShape = transformation.transform(shape);
  transformation.delete();
  return newShape;
}
function translate(shape, vector) {
  const transformation = new Transformation();
  transformation.translate(vector);
  const newShape = transformation.transform(shape);
  transformation.delete();
  return newShape;
}
function mirror(shape, inputPlane, origin) {
  const transformation = new Transformation();
  transformation.mirror(inputPlane, origin);
  const newShape = transformation.transform(shape);
  transformation.delete();
  return newShape;
}
function scale(shape, center, scale2) {
  const transformation = new Transformation();
  transformation.scale(center, scale2);
  const newShape = transformation.transform(shape);
  transformation.delete();
  return newShape;
}
var CURVE_TYPES_MAP = null;
var getCurveTypesMap = (refresh) => {
  if (CURVE_TYPES_MAP && !refresh) return CURVE_TYPES_MAP;
  const ga = getOC().GeomAbs_CurveType;
  CURVE_TYPES_MAP = /* @__PURE__ */ new Map([
    [ga.GeomAbs_Line, "LINE"],
    [ga.GeomAbs_Circle, "CIRCLE"],
    [ga.GeomAbs_Ellipse, "ELLIPSE"],
    [ga.GeomAbs_Hyperbola, "HYPERBOLA"],
    [ga.GeomAbs_Parabola, "PARABOLA"],
    [ga.GeomAbs_BezierCurve, "BEZIER_CURVE"],
    [ga.GeomAbs_BSplineCurve, "BSPLINE_CURVE"],
    [ga.GeomAbs_OffsetCurve, "OFFSET_CURVE"],
    [ga.GeomAbs_OtherCurve, "OTHER_CURVE"]
  ]);
  return CURVE_TYPES_MAP;
};
var findCurveType = (type) => {
  let shapeType2 = getCurveTypesMap().get(type);
  if (!shapeType2) shapeType2 = getCurveTypesMap(true).get(type);
  if (!shapeType2) throw new Error("unknown type");
  return shapeType2;
};
var unwrapShape = (shape) => {
  return "wrapped" in shape ? shape.wrapped : shape;
};
var extractFromPointer = (heap, pointer, size) => {
  const start = (pointer >>> 0) / heap.BYTES_PER_ELEMENT;
  return Array.from(heap.subarray(start, start + size));
};
function prepareShapeForMesh(shapeInput, { tolerance = 1e-3, angularTolerance = 0.1 } = {}) {
  const oc = getOC();
  const shape = unwrapShape(shapeInput);
  oc.ReplicadMeshExtractor.mesh(shape, tolerance, angularTolerance);
}
function mesh(shapeInput, { tolerance = 1e-3, angularTolerance = 0.1 } = {}) {
  const oc = getOC();
  const shape = unwrapShape(shapeInput);
  const raw = oc.ReplicadMeshExtractor.extract(shape, tolerance, angularTolerance, false);
  const buffer = oc.wasmMemory.buffer;
  const heapF32 = new Float32Array(buffer);
  const heapU32 = new Uint32Array(buffer);
  const heapI32 = new Int32Array(buffer);
  const vertices = extractFromPointer(heapF32, raw.getVerticesPtr(), raw.getVerticesSize());
  const normals = extractFromPointer(heapF32, raw.getNormalsPtr(), raw.getNormalsSize());
  const triangles = extractFromPointer(heapU32, raw.getTrianglesPtr(), raw.getTrianglesSize());
  const groupsRaw = extractFromPointer(heapI32, raw.getFaceGroupsPtr(), raw.getFaceGroupsSize());
  const faceGroups = [];
  for (let i = 0; i < groupsRaw.length; i += 3) faceGroups.push({
    start: groupsRaw[i],
    count: groupsRaw[i + 1],
    faceId: groupsRaw[i + 2]
  });
  raw.delete();
  return {
    triangles,
    vertices,
    normals,
    faceGroups
  };
}
function meshEdges(shapeInput, { tolerance = 1e-3, angularTolerance = 0.1 } = {}) {
  const oc = getOC();
  const shape = unwrapShape(shapeInput);
  const raw = oc.ReplicadEdgeMeshExtractor.extract(shape, tolerance, angularTolerance);
  const buffer = oc.wasmMemory.buffer;
  const heapF32 = new Float32Array(buffer);
  const heapI32 = new Int32Array(buffer);
  const lines = extractFromPointer(heapF32, raw.getLinesPtr(), raw.getLinesSize());
  const groupsRaw = extractFromPointer(heapI32, raw.getEdgeGroupsPtr(), raw.getEdgeGroupsSize());
  const edgeGroups = [];
  for (let i = 0; i < groupsRaw.length; i += 3) edgeGroups.push({
    start: groupsRaw[i],
    count: groupsRaw[i + 1],
    edgeId: groupsRaw[i + 2]
  });
  raw.delete();
  return {
    lines,
    edgeGroups
  };
}
function triangulateFace(faceInput, index0 = 0) {
  const oc = getOC();
  const face = unwrapShape(faceInput);
  const r = GCWithScope();
  const location = r(new oc.TopLoc_Location());
  const triangulation = r(oc.BRep_Tool.Triangulation(face, location, 0));
  if (!triangulation || triangulation.isNull()) return null;
  const transformation = r(location.Transformation());
  const result = {
    vertices: [],
    trianglesIndexes: [],
    verticesNormals: []
  };
  const nbNodes = triangulation.NbNodes();
  result.vertices = new Array(nbNodes * 3);
  for (let i = 1; i <= nbNodes; i++) {
    const point = r(r(triangulation.Node(i)).Transformed(transformation));
    result.vertices[(i - 1) * 3] = point.X();
    result.vertices[(i - 1) * 3 + 1] = point.Y();
    result.vertices[(i - 1) * 3 + 2] = point.Z();
  }
  const isForward = face.Orientation() === oc.TopAbs_Orientation.TopAbs_FORWARD;
  const normalSign = isForward ? 1 : -1;
  if (!triangulation.HasNormals()) triangulation.ComputeNormals();
  result.verticesNormals = new Array(nbNodes * 3);
  for (let i = 1; i <= nbNodes; i++) {
    const normal = r(r(triangulation.Normal(i)).Transformed(transformation));
    result.verticesNormals[(i - 1) * 3] = normal.X() * normalSign;
    result.verticesNormals[(i - 1) * 3 + 1] = normal.Y() * normalSign;
    result.verticesNormals[(i - 1) * 3 + 2] = normal.Z() * normalSign;
  }
  const nbTriangles = triangulation.NbTriangles();
  result.trianglesIndexes = new Array(nbTriangles * 3);
  for (let nt = 1; nt <= nbTriangles; nt++) {
    const triangle = r(triangulation.Triangle(nt));
    let n1 = triangle.Value(1);
    let n2 = triangle.Value(2);
    const n3 = triangle.Value(3);
    if (!isForward) [n1, n2] = [n2, n1];
    result.trianglesIndexes[(nt - 1) * 3] = n1 - 1 + index0;
    result.trianglesIndexes[(nt - 1) * 3 + 1] = n2 - 1 + index0;
    result.trianglesIndexes[(nt - 1) * 3 + 2] = n3 - 1 + index0;
  }
  return result;
}
function serializeShape(shapeInput) {
  return getOC().BRepToolsWrapper.Write(unwrapShape(shapeInput));
}
function deserializeTopoShape(data) {
  return getOC().BRepToolsWrapper.Read(data);
}
function exportShapeSTEP(shapeInput) {
  const oc = getOC();
  const shape = unwrapShape(shapeInput);
  const filename = "blob.step";
  const writer = new oc.STEPControl_Writer();
  oc.Interface_Static.SetIVal("write.step.schema", 5);
  const progress = new oc.Message_ProgressRange();
  writer.Transfer(shape, oc.STEPControl_StepModelType.STEPControl_AsIs, true, progress);
  const done = writer.Write(filename);
  writer.delete();
  progress.delete();
  if (done === oc.IFSelect_ReturnStatus.IFSelect_RetDone) {
    const file = oc.FS.readFile("/blob.step");
    oc.FS.unlink("/blob.step");
    return new Blob([file], { type: "application/STEP" });
  }
  throw new Error("WRITE STEP FILE FAILED.");
}
function exportShapeSTL(shapeInput, { tolerance = 1e-3, angularTolerance = 0.1, binary = false } = {}) {
  const oc = getOC();
  const shape = unwrapShape(shapeInput);
  prepareShapeForMesh(shape, {
    tolerance,
    angularTolerance
  });
  if (oc.StlAPI.Write(shape, "blob.stl", !binary)) {
    const file = oc.FS.readFile("/blob.stl");
    oc.FS.unlink("/blob.stl");
    return new Blob([file], { type: "application/sla" });
  }
  throw new Error("WRITE STL FILE FAILED.");
}
var unwrapCurve = (curve) => "wrapped" in curve ? curve.wrapped : curve;
var mapCurveParameter = (curve, position) => {
  const firstParam = curve.FirstParameter();
  return firstParam + (curve.LastParameter() - firstParam) * position;
};
function curveType(curveInput) {
  const curve = unwrapCurve(curveInput);
  return findCurveType(curve.GetType && curve.GetType());
}
function curvePointAt(curveInput, position = 0.5) {
  const curve = unwrapCurve(curveInput);
  return new Vector(curve.Value(mapCurveParameter(curve, position)));
}
function curveTangentAt(curveInput, position = 0.5) {
  const oc = getOC();
  const curve = unwrapCurve(curveInput);
  const parameter = mapCurveParameter(curve, position);
  const point = new oc.gp_Pnt();
  const derivative = new oc.gp_Vec();
  curve.D1(parameter, point, derivative);
  const tangent = new Vector(derivative);
  point.delete();
  derivative.delete();
  return tangent;
}
var Curve = class extends WrappingObj {
  get repr() {
    const { startPoint, endPoint } = this;
    const retVal = `start: (${this.startPoint.repr}) end:(${this.endPoint.repr}}`;
    startPoint.delete();
    endPoint.delete();
    return retVal;
  }
  get curveType() {
    return curveType(this);
  }
  get startPoint() {
    return new Vector(this.wrapped.Value(this.wrapped.FirstParameter()));
  }
  get endPoint() {
    return new Vector(this.wrapped.Value(this.wrapped.LastParameter()));
  }
  pointAt(position = 0.5) {
    return curvePointAt(this, position);
  }
  tangentAt(position = 0.5) {
    return curveTangentAt(this, position);
  }
  get isClosed() {
    return this.wrapped.IsClosed();
  }
  get isPeriodic() {
    return this.wrapped.IsPeriodic();
  }
  get period() {
    return this.wrapped.Period();
  }
};
var unwrapSurface = (surface) => "wrapped" in surface ? surface.wrapped : surface;
function surfaceType(surfaceInput) {
  const ga = getOC().GeomAbs_SurfaceType;
  const type = (/* @__PURE__ */ new Map([
    [ga.GeomAbs_Plane, "PLANE"],
    [ga.GeomAbs_Cylinder, "CYLINDRE"],
    [ga.GeomAbs_Cone, "CONE"],
    [ga.GeomAbs_Sphere, "SPHERE"],
    [ga.GeomAbs_Torus, "TORUS"],
    [ga.GeomAbs_BezierSurface, "BEZIER_SURFACE"],
    [ga.GeomAbs_BSplineSurface, "BSPLINE_SURFACE"],
    [ga.GeomAbs_SurfaceOfRevolution, "REVOLUTION_SURFACE"],
    [ga.GeomAbs_SurfaceOfExtrusion, "EXTRUSION_SURFACE"],
    [ga.GeomAbs_OffsetSurface, "OFFSET_SURFACE"],
    [ga.GeomAbs_OtherSurface, "OTHER_SURFACE"]
  ])).get(unwrapSurface(surfaceInput).GetType());
  if (!type) throw new Error("surface type not found");
  return type;
}
var Surface = class extends WrappingObj {
  get surfaceType() {
    return surfaceType(this);
  }
};
function faceUVBounds(faceInput) {
  const result = getOC().BRepTools.UVBounds(unwrapShape(faceInput), 0, 0, 0, 0);
  return {
    uMin: result.UMin,
    uMax: result.UMax,
    vMin: result.VMin,
    vMax: result.VMax
  };
}
function pointOnFace(faceInput, u, v) {
  const oc = getOC();
  const face = unwrapShape(faceInput);
  const { uMin, uMax, vMin, vMax } = faceUVBounds(face);
  const surface = new oc.BRepAdaptor_Surface(face, false);
  const point = new oc.gp_Pnt();
  const absoluteU = u * (uMax - uMin) + uMin;
  const absoluteV = v * (vMax - vMin) + vMin;
  surface.D0(absoluteU, absoluteV, point);
  const result = new Vector(point);
  surface.delete();
  point.delete();
  return result;
}
function faceUVCoordinates(faceInput, point) {
  const oc = getOC();
  const face = unwrapShape(faceInput);
  const r = GCWithScope();
  const surface = r(oc.BRep_Tool.Surface(face));
  const { U, V } = r(new oc.GeomAPI_ProjectPointOnSurf(r(asPnt(point)), surface, oc.Extrema_ExtAlgo.Extrema_ExtAlgo_Grad)).LowerDistanceParameters(0, 0);
  return [U, V];
}
function faceNormalAt(faceInput, location) {
  const oc = getOC();
  const face = unwrapShape(faceInput);
  let u;
  let v;
  if (location) [u, v] = faceUVCoordinates(face, location);
  else {
    const { uMin, uMax, vMin, vMax } = faceUVBounds(face);
    u = 0.5 * (uMin + uMax);
    v = 0.5 * (vMin + vMax);
  }
  const r = GCWithScope();
  const point = r(new oc.gp_Pnt());
  const normal = r(new oc.gp_Vec());
  r(new oc.BRepGProp_Face(face, false)).Normal(u, v, point, normal);
  return new Vector(normal);
}
function faceCenter(faceInput) {
  const oc = getOC();
  const properties = new oc.GProp_GProps();
  oc.BRepGProp.SurfaceProperties(unwrapShape(faceInput), properties, 1e-7, true);
  const center = new Vector(properties.CentreOfMass());
  properties.delete();
  return center;
}
var TOPOLOGY_KINDS = [
  "vertex",
  "edge",
  "wire",
  "face",
  "shell",
  "solid",
  "solidCompound",
  "compound"
];
var buildDefinitions = (oc) => {
  const ta = oc.TopAbs_ShapeEnum;
  const shapeEnum = {
    vertex: ta.TopAbs_VERTEX,
    edge: ta.TopAbs_EDGE,
    wire: ta.TopAbs_WIRE,
    face: ta.TopAbs_FACE,
    shell: ta.TopAbs_SHELL,
    solid: ta.TopAbs_SOLID,
    solidCompound: ta.TopAbs_COMPSOLID,
    compound: ta.TopAbs_COMPOUND,
    shape: ta.TopAbs_SHAPE
  };
  return {
    shapeEnum,
    kindOf: new Map(TOPOLOGY_KINDS.map((kind) => [shapeEnum[kind], kind])),
    downcast: {
      shape: (shape) => shape,
      vertex: (shape) => oc.TopoDS.Vertex(shape),
      edge: (shape) => oc.TopoDS.Edge(shape),
      wire: (shape) => oc.TopoDS.Wire(shape),
      face: (shape) => oc.TopoDS.Face(shape),
      shell: (shape) => oc.TopoDS.Shell(shape),
      solid: (shape) => oc.TopoDS.Solid(shape),
      solidCompound: (shape) => oc.ReplicadShapeCaster.CompSolid(shape),
      compound: (shape) => oc.TopoDS.Compound(shape)
    }
  };
};
var cache = null;
var definitions = () => {
  const oc = getOC();
  if (cache?.oc !== oc) cache = {
    oc,
    definitions: buildDefinitions(oc)
  };
  return cache.definitions;
};
var asTopo = (entity) => definitions().shapeEnum[entity];
var downcastTo = (shape, entity) => definitions().downcast[entity](shape);
function* iterTopo(shape, topo) {
  const explorer = new (getOC()).TopExp_Explorer(shape, asTopo(topo), asTopo("shape"));
  try {
    const seen = [];
    while (explorer.More()) {
      const item = explorer.Current();
      if (!seen.some((s) => s.IsSame(item))) {
        seen.push(item);
        yield downcastTo(item, topo);
      }
      explorer.Next();
    }
  } finally {
    explorer.delete();
  }
}
var shapeType = (shape) => {
  if (shape.IsNull()) throw new Error("This shape has not type, it is null");
  return shape.ShapeType();
};
function topologyKind(shape) {
  return definitions().kindOf.get(shapeType(shape));
}
function downcast(shape) {
  const kind = topologyKind(shape);
  if (!kind) throw new Error(`Unsupported topology type: ${shapeType(shape)}`);
  return definitions().downcast[kind](shape);
}
var configureGlue = (builder, optimisation) => {
  const oc = getOC();
  if (optimisation === "commonFace") builder.SetGlue(oc.BOPAlgo_GlueEnum.BOPAlgo_GlueShift);
  if (optimisation === "sameFace") builder.SetGlue(oc.BOPAlgo_GlueEnum.BOPAlgo_GlueFull);
};
function fuseShapes(leftInput, rightInput, { optimisation = "none" } = {}) {
  const oc = getOC();
  const builder = GCWithScope()(new oc.BRepAlgoAPI_Fuse(unwrapShape(leftInput), unwrapShape(rightInput)));
  configureGlue(builder, optimisation);
  builder.Build();
  builder.SimplifyResult(true, true, 1e-3);
  return builder.Shape();
}
function cutShape(shapeInput, toolInput, { optimisation = "none" } = {}) {
  const oc = getOC();
  const builder = GCWithScope()(new oc.BRepAlgoAPI_Cut(unwrapShape(shapeInput), unwrapShape(toolInput)));
  configureGlue(builder, optimisation);
  builder.Build();
  builder.SimplifyResult(true, true, 1e-3);
  return builder.Shape();
}
function intersectShapes(leftInput, rightInput) {
  const oc = getOC();
  const builder = GCWithScope()(new oc.BRepAlgoAPI_Common(unwrapShape(leftInput), unwrapShape(rightInput)));
  builder.Build();
  builder.SimplifyResult(true, true, 1e-3);
  return builder.Shape();
}
var signedDistanceToPlane = (point, plane) => (point[0] - plane.origin.x) * plane.zDir.x + (point[1] - plane.origin.y) * plane.zDir.y + (point[2] - plane.origin.z) * plane.zDir.z;
function splitShape(shapeInput, inputPlane = "XY", offset2 = 0, tolerance = 1e-7) {
  const oc = getOC();
  const r = GCWithScope();
  const shape = unwrapShape(shapeInput);
  const basePlane = r(makePlane(inputPlane));
  const plane = offset2 === 0 ? basePlane : r(basePlane.translate([
    basePlane.zDir.x * offset2,
    basePlane.zDir.y * offset2,
    basePlane.zDir.z * offset2
  ]));
  const ocPlane = r(makePln(plane.origin, plane.zDir));
  const splittingFace = r(r(new oc.BRepBuilderAPI_MakeFace(ocPlane)).Face());
  const argumentsList = r(new oc.NCollection_List_TopoDS_Shape());
  argumentsList.Append(shape);
  const toolsList = r(new oc.NCollection_List_TopoDS_Shape());
  toolsList.Append(splittingFace);
  const builder = r(new oc.BRepAlgoAPI_Splitter());
  builder.SetArguments(argumentsList);
  builder.SetTools(toolsList);
  builder.Build();
  if (builder.HasErrors()) throw new Error("Could not split shape with plane");
  const splitResult = builder.Shape();
  const pieces = splitResult.ShapeType() === oc.TopAbs_ShapeEnum.TopAbs_SOLID ? [oc.TopoDS.Solid(splitResult)] : [...iterTopo(splitResult, "solid")];
  splitResult.delete();
  const grouped = {
    positive: [],
    negative: [],
    on: []
  };
  for (const piece of pieces) {
    const bounds = r(new oc.Bnd_Box());
    oc.BRepBndLib.Add(piece, bounds, true);
    const min = r(bounds.CornerMin());
    const max = r(bounds.CornerMax());
    const distance = signedDistanceToPlane([
      (min.X() + max.X()) / 2,
      (min.Y() + max.Y()) / 2,
      (min.Z() + max.Z()) / 2
    ], plane);
    if (distance > tolerance) grouped.positive.push(piece);
    else if (distance < -tolerance) grouped.negative.push(piece);
    else grouped.on.push(piece);
  }
  const asShape = (group) => {
    if (!group.length) return null;
    if (group.length === 1) return group[0];
    const compound = new oc.TopoDS_Compound();
    const compoundBuilder = r(new oc.TopoDS_Builder());
    compoundBuilder.MakeCompound(compound);
    group.forEach((piece) => compoundBuilder.Add(compound, piece));
    group.forEach((piece) => piece.delete());
    return compound;
  };
  return {
    positive: asShape(grouped.positive),
    negative: asShape(grouped.negative),
    on: asShape(grouped.on)
  };
}
function cutShapeWithPlane(shapeInput, inputPlane = "XY", offset2 = 0, keep = "positive") {
  const oc = getOC();
  const r = GCWithScope();
  const shape = unwrapShape(shapeInput);
  const basePlane = r(makePlane(inputPlane));
  const plane = offset2 === 0 ? basePlane : r(basePlane.translate([
    basePlane.zDir.x * offset2,
    basePlane.zDir.y * offset2,
    basePlane.zDir.z * offset2
  ]));
  const ocPlane = r(makePln(plane.origin, plane.zDir));
  const face = r(r(new oc.BRepBuilderAPI_MakeFace(ocPlane)).Face());
  const removedSign = keep === "negative" ? 1 : -1;
  const referencePoint = r(asPnt([
    plane.origin.x + plane.zDir.x * removedSign,
    plane.origin.y + plane.zDir.y * removedSign,
    plane.origin.z + plane.zDir.z * removedSign
  ]));
  const halfSpace = r(r(new oc.BRepPrimAPI_MakeHalfSpace(face, referencePoint)).Solid());
  const builder = r(new oc.BRepAlgoAPI_Cut(shape, halfSpace));
  builder.Build();
  if (builder.HasErrors()) throw new Error("Could not cut shape with plane");
  const cutResult = builder.Shape();
  const solids = cutResult.ShapeType() === oc.TopAbs_ShapeEnum.TopAbs_SOLID ? [oc.TopoDS.Solid(cutResult)] : [...iterTopo(cutResult, "solid")];
  cutResult.delete();
  if (!solids.length) return null;
  if (solids.length === 1) return solids[0];
  const compound = new oc.TopoDS_Compound();
  const compoundBuilder = r(new oc.TopoDS_Builder());
  compoundBuilder.MakeCompound(compound);
  solids.forEach((solid) => compoundBuilder.Add(compound, solid));
  solids.forEach((solid) => solid.delete());
  return compound;
}
function shellShape(shapeInput, { faces, thickness, tolerance = 1e-3 }) {
  const oc = getOC();
  const r = GCWithScope();
  const facesToRemove = r(new oc.NCollection_List_TopoDS_Shape());
  for (const face of faces) facesToRemove.Append(unwrapShape(face));
  const builder = r(new oc.BRepOffsetAPI_MakeThickSolid());
  builder.MakeThickSolidByJoin(unwrapShape(shapeInput), facesToRemove, -thickness, tolerance, oc.BRepOffset_Mode.BRepOffset_Skin, false, false, oc.GeomAbs_JoinType.GeomAbs_Arc, false);
  return builder.Shape();
}
function draftShape(shapeInput, { faces, angle, neutralPlane = "XY" }) {
  const oc = getOC();
  const shape = unwrapShape(shapeInput);
  const builder = new oc.BRepOffsetAPI_DraftAngle(shape);
  const inputPlane = makePlane(neutralPlane);
  const plane = makePln(inputPlane.origin, inputPlane.zDir);
  const direction = asDir(inputPlane.zDir);
  for (const face of faces) builder.Add(unwrapShape(face), direction, angle * DEG2RAD, plane, false);
  builder.Build();
  const result = builder.ModifiedShape(shape);
  builder.delete();
  plane.delete();
  direction.delete();
  inputPlane.delete();
  return result;
}
function isFilletRadius(radius) {
  if (typeof radius === "number") return true;
  return Array.isArray(radius) && radius.length === 2 && radius.every((value) => typeof value === "number");
}
function* selectEdgeRadii(shapeInput, radiusConfig, isRadius, wrapEdge) {
  const shape = unwrapShape(shapeInput);
  if (isRadius(radiusConfig)) {
    for (const edge of iterTopo(shape, "edge")) yield {
      edge,
      radius: radiusConfig
    };
    return;
  }
  let radiusForEdge;
  let filterToDelete = null;
  if (typeof radiusConfig === "function") radiusForEdge = radiusConfig;
  else {
    radiusForEdge = (edge) => radiusConfig.filter.shouldKeep(edge) ? radiusConfig.radius || 1 : null;
    if (!radiusConfig.keep) filterToDelete = radiusConfig.filter;
  }
  try {
    for (const edge of iterTopo(shape, "edge")) {
      const wrappedEdge = wrapEdge(edge);
      try {
        const radius = radiusForEdge(wrappedEdge);
        if (radius) yield {
          edge,
          radius
        };
      } finally {
        wrappedEdge.delete();
      }
    }
  } finally {
    filterToDelete?.delete();
  }
}
function* mapSelectedEdges(edges, map) {
  for (const selected of edges) yield map(selected);
}
function filletShape(shapeInput, edges) {
  const oc = getOC();
  const builder = GCWithScope()(new oc.BRepFilletAPI_MakeFillet(unwrapShape(shapeInput), oc.ChFi3d_FilletShape.ChFi3d_Rational));
  let edgeCount = 0;
  for (const { radius, edge: edgeInput } of edges) {
    const edge = unwrapShape(edgeInput);
    if (typeof radius === "number") builder.Add(radius, edge);
    else builder.Add(radius[0], radius[1], edge);
    edgeCount += 1;
  }
  if (!edgeCount) throw new Error("Could not fillet, no edge was selected");
  return builder.Shape();
}
function chamferShape(shapeInput, edges) {
  const oc = getOC();
  const builder = GCWithScope()(new oc.BRepFilletAPI_MakeChamfer(unwrapShape(shapeInput)));
  let edgeCount = 0;
  for (const config of edges) {
    const edge = unwrapShape(config.edge);
    if ("radius" in config) builder.Add(config.radius, edge);
    else if ("distances" in config) builder.Add(config.distances[0] ?? 1, config.distances[1] ?? 1, edge, unwrapShape(config.face));
    else builder.AddDA(config.distance, config.angle * DEG2RAD, edge, unwrapShape(config.face));
    edgeCount += 1;
  }
  if (!edgeCount) throw new Error("Could not chamfer, no edge was selected");
  return builder.Shape();
}
function makeCaster(constructors) {
  return (shape) => {
    const kind = topologyKind(shape);
    if (!kind) throw new Error(`Unsupported topology type: ${shapeType(shape)}`);
    return new constructors[kind](downcast(shape));
  };
}

// node_modules/replicad/dist/replicad.js
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
function isPoint2D(point) {
  return Array.isArray(point) && point.length === 2;
}
function precisionRound(number, precision) {
  const factor = Math.pow(10, precision);
  const n = precision < 0 ? number : 0.01 / factor + number;
  return Math.round(n * factor) / factor;
}
function range(len) {
  return Array.from(Array(len).keys());
}
function zip(arrays) {
  return range(Math.min(...arrays.map((arr) => arr.length))).map((i) => arrays.map((arr) => arr[i]));
}
function round2(v) {
  return Math.round(v * 100) / 100;
}
var reprPnt = ([x, y]) => {
  return `(${round2(x)},${round2(y)})`;
};
var asFixed = (p, precision = 1e-9) => {
  let num = p;
  if (Math.abs(p) < precision) num = 0;
  return num.toFixed(-Math.log10(precision));
};
var removeDuplicatePoints = (points, precision = 1e-9) => {
  return Array.from(new Map(points.map(([p0, p1]) => [`[${asFixed(p0, precision)},${asFixed(p1, precision)}]`, [p0, p1]])).values());
};
var pnt = ([x, y]) => {
  return new (getOC()).gp_Pnt2d(x, y);
};
var direction2d = ([x, y]) => {
  return new (getOC()).gp_Dir2d(x, y);
};
var vec = ([x, y]) => {
  return new (getOC()).gp_Vec2d(x, y);
};
var axis2d = (point, direction) => {
  const oc = getOC();
  const [r, gc] = localGC();
  const axis = new oc.gp_Ax2d(r(pnt(point)), r(direction2d(direction)));
  gc();
  return axis;
};
var BoundingBox2d = class extends WrappingObj {
  constructor(wrapped) {
    const oc = getOC();
    let boundBox = wrapped;
    if (!boundBox) boundBox = new oc.Bnd_Box2d();
    super(boundBox);
  }
  get repr() {
    const [min, max] = this.bounds;
    return `${reprPnt(min)} - ${reprPnt(max)}`;
  }
  get bounds() {
    return [[this.wrapped.GetXMin(), this.wrapped.GetYMin()], [this.wrapped.GetXMax(), this.wrapped.GetYMax()]];
  }
  get center() {
    const [[xmin, ymin], [xmax, ymax]] = this.bounds;
    return [xmin + (xmax - xmin) / 2, ymin + (ymax - ymin) / 2];
  }
  get width() {
    const [[xmin], [xmax]] = this.bounds;
    return Math.abs(xmax - xmin);
  }
  get height() {
    const [[, ymin], [, ymax]] = this.bounds;
    return Math.abs(ymax - ymin);
  }
  outsidePoint(paddingPercent = 1) {
    const [min, max] = this.bounds;
    const width = max[0] - min[0];
    const height = max[1] - min[1];
    return [max[0] + width / 100 * paddingPercent, max[1] + height / 100 * paddingPercent * 0.9];
  }
  add(other) {
    this.wrapped.Add(other.wrapped);
  }
  isOut(other) {
    return this.wrapped.IsOut(other.wrapped);
  }
  containsPoint(other) {
    const point = GCWithScope()(pnt(other));
    return !this.wrapped.IsOut(point);
  }
};
var samePoint$2 = ([x0, y0], [x1, y1], precision = 1e-6) => {
  return Math.abs(x0 - x1) <= precision && Math.abs(y0 - y1) <= precision;
};
var add2d = ([x0, y0], [x1, y1]) => {
  return [x0 + x1, y0 + y1];
};
var subtract2d = ([x0, y0], [x1, y1]) => {
  return [x0 - x1, y0 - y1];
};
var scalarMultiply2d = ([x0, y0], scalar) => {
  return [x0 * scalar, y0 * scalar];
};
var distance2d = ([x0, y0], [x1, y1] = [0, 0]) => {
  return Math.sqrt((x0 - x1) ** 2 + (y0 - y1) ** 2);
};
var squareDistance2d = ([x0, y0], [x1, y1] = [0, 0]) => {
  return (x0 - x1) ** 2 + (y0 - y1) ** 2;
};
function crossProduct2d([x0, y0], [x1, y1]) {
  return x0 * y1 - y0 * x1;
}
var angle2d = ([x0, y0], [x1, y1] = [0, 0]) => {
  return Math.atan2(y1 * x0 - y0 * x1, x0 * x1 + y0 * y1);
};
var polarAngle2d = ([x0, y0], [x1, y1] = [0, 0]) => {
  return Math.atan2(y1 - y0, x1 - x0);
};
var normalize2d = ([x0, y0]) => {
  const l = distance2d([x0, y0]);
  return [x0 / l, y0 / l];
};
var rotate2d = (point, angle, center = [0, 0]) => {
  const [px0, py0] = point;
  const [cx, cy] = center;
  const px = px0 - cx;
  const py = py0 - cy;
  const sinA = Math.sin(angle);
  const cosA = Math.cos(angle);
  const xnew = px * cosA - py * sinA;
  const ynew = px * sinA + py * cosA;
  return [xnew + cx, ynew + cy];
};
var polarToCartesian = (r, theta) => {
  return [Math.cos(theta) * r, Math.sin(theta) * r];
};
var cartesianToPolar = ([x, y]) => {
  return [distance2d([x, y]), Math.atan2(y, x)];
};
var determinant2x2 = (matrix) => {
  return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
};
function deserializeCurve2D(data) {
  return new Curve2D(getOC().GeomToolsWrapper.Read(data));
}
var Curve2D = class Curve2D2 extends WrappingObj {
  constructor(handle) {
    super(handle);
    this._boundingBox = null;
  }
  get boundingBox() {
    if (this._boundingBox) return this._boundingBox;
    const oc = getOC();
    const boundBox = new oc.Bnd_Box2d();
    oc.BndLib_Add2dCurve.Add(this.wrapped, 1e-6, boundBox);
    this._boundingBox = new BoundingBox2d(boundBox);
    return this._boundingBox;
  }
  get repr() {
    return `${this.geomType} ${reprPnt(this.firstPoint)} - ${reprPnt(this.lastPoint)}`;
  }
  get innerCurve() {
    return this.wrapped;
  }
  serialize() {
    return getOC().GeomToolsWrapper.Write(this.wrapped);
  }
  value(parameter) {
    const pnt2 = this.innerCurve.Value(parameter);
    const vec2 = [pnt2.X(), pnt2.Y()];
    pnt2.delete();
    return vec2;
  }
  get firstPoint() {
    return this.value(this.firstParameter);
  }
  get lastPoint() {
    return this.value(this.lastParameter);
  }
  get firstParameter() {
    return this.innerCurve.FirstParameter();
  }
  get lastParameter() {
    return this.innerCurve.LastParameter();
  }
  adaptor() {
    return new (getOC()).Geom2dAdaptor_Curve(this.wrapped);
  }
  get geomType() {
    const adaptor = this.adaptor();
    const curveType2 = findCurveType(adaptor.GetType());
    adaptor.delete();
    return curveType2;
  }
  clone() {
    return new Curve2D2(this.innerCurve.Copy());
  }
  reverse() {
    this.innerCurve.Reverse();
  }
  distanceFromPoint(point) {
    const oc = getOC();
    const r = GCWithScope();
    const projector = r(new oc.Geom2dAPI_ProjectPointOnCurve(r(pnt(point)), this.wrapped));
    let curveToPoint = Infinity;
    try {
      curveToPoint = projector.LowerDistance();
    } catch (e) {
      curveToPoint = Infinity;
    }
    return Math.min(curveToPoint, distance2d(point, this.firstPoint), distance2d(point, this.lastPoint));
  }
  distanceFromCurve(curve) {
    const oc = getOC();
    const r = GCWithScope();
    let curveDistance = Infinity;
    const projector = r(new oc.Geom2dAPI_ExtremaCurveCurve(this.wrapped, curve.wrapped, this.firstParameter, this.lastParameter, curve.firstParameter, curve.lastParameter));
    try {
      curveDistance = projector.LowerDistance();
    } catch (e) {
      curveDistance = Infinity;
    }
    return Math.min(curveDistance, this.distanceFromPoint(curve.firstPoint), this.distanceFromPoint(curve.lastPoint), curve.distanceFromPoint(this.firstPoint), curve.distanceFromPoint(this.lastPoint));
  }
  distanceFrom(element) {
    if (isPoint2D(element)) return this.distanceFromPoint(element);
    return this.distanceFromCurve(element);
  }
  isOnCurve(point) {
    return this.distanceFromPoint(point) < 1e-9;
  }
  parameter(point, precision = 1e-9) {
    const oc = getOC();
    const r = GCWithScope();
    let lowerDistance;
    let lowerDistanceParameter;
    try {
      const projector = r(new oc.Geom2dAPI_ProjectPointOnCurve(r(pnt(point)), this.wrapped));
      lowerDistance = projector.LowerDistance();
      lowerDistanceParameter = projector.LowerDistanceParameter();
    } catch (e) {
      if (samePoint$2(point, this.firstPoint, precision)) return this.firstParameter;
      if (samePoint$2(point, this.lastPoint, precision)) return this.lastParameter;
      throw new Error("Failed to find parameter");
    }
    if (lowerDistance > precision) throw new Error(`Point ${reprPnt(point)} not on curve ${this.repr}, ${lowerDistance.toFixed(9)}`);
    return lowerDistanceParameter;
  }
  tangentAt(index) {
    const oc = getOC();
    const [r, gc] = localGC();
    let param;
    if (Array.isArray(index)) param = this.parameter(index);
    else param = (this.innerCurve.LastParameter() - this.innerCurve.FirstParameter()) * index + this.innerCurve.FirstParameter();
    const point = r(new oc.gp_Pnt2d());
    const dir = r(new oc.gp_Vec2d());
    this.innerCurve.D1(param, point, dir);
    const tgtVec = [dir.X(), dir.Y()];
    gc();
    return tgtVec;
  }
  splitAt(points, precision = 1e-9) {
    const oc = getOC();
    const r = GCWithScope();
    let parameters = points.map((point) => {
      if (isPoint2D(point)) return this.parameter(point, precision);
      return point;
    });
    parameters = Array.from(new Map(parameters.map((p) => [precisionRound(p, -Math.log10(precision)), p])).values()).sort((a, b) => a - b);
    const firstParam = this.firstParameter;
    const lastParam = this.lastParameter;
    if (firstParam > lastParam) parameters.reverse();
    if (Math.abs(parameters[0] - firstParam) < precision * 100) parameters = parameters.slice(1);
    if (!parameters.length) return [this];
    if (Math.abs(parameters[parameters.length - 1] - lastParam) < precision * 100) parameters = parameters.slice(0, -1);
    if (!parameters.length) return [this];
    return zip([[firstParam, ...parameters], [...parameters, lastParam]]).map(([first, last]) => {
      try {
        if (this.geomType === "BEZIER_CURVE") {
          const curveCopy = new oc.Geom2d_BezierCurve(r(this.adaptor()).Bezier().Poles());
          curveCopy.Segment(first, last);
          return new Curve2D2(curveCopy);
        }
        if (this.geomType === "BSPLINE_CURVE") {
          const adapted = r(this.adaptor()).BSpline();
          const curveCopy = new oc.Geom2d_BSplineCurve(adapted.Poles(), adapted.Knots(), adapted.Multiplicities(), adapted.Degree(), adapted.IsPeriodic());
          curveCopy.Segment(first, last, precision);
          return new Curve2D2(curveCopy);
        }
        const trimmed = new oc.Geom2d_TrimmedCurve(this.wrapped, first, last, true, true);
        return new Curve2D2(trimmed);
      } catch (e) {
        throw new Error("Failed to split the curve");
      }
    });
  }
};
var approximateAsBSpline = (adaptor, tolerance = 1e-4, continuity = "C0", maxSegments = 200) => {
  const oc = getOC();
  const r = GCWithScope();
  const continuities = {
    C0: oc.GeomAbs_Shape.GeomAbs_C0,
    C1: oc.GeomAbs_Shape.GeomAbs_C1,
    C2: oc.GeomAbs_Shape.GeomAbs_C2,
    C3: oc.GeomAbs_Shape.GeomAbs_C3
  };
  return new Curve2D(r(new oc.Geom2dConvert_ApproxCurve(adaptor.ShallowCopy(), tolerance, continuities[continuity], maxSegments, 3)).Curve());
};
var BSplineToBezier = (adaptor) => {
  if (findCurveType(adaptor.GetType()) !== "BSPLINE_CURVE") throw new Error("You can only convert a Bspline");
  const handle = adaptor.BSpline();
  const firstParameter = adaptor.FirstParameter();
  const lastParameter = adaptor.LastParameter();
  const convert = new (getOC()).Geom2dConvert_BSplineCurveToBezierCurve(handle, firstParameter, lastParameter, 1e-9);
  function* bezierCurves() {
    const nArcs = convert.NbArcs();
    if (!nArcs) return;
    for (let i = 1; i <= nArcs; i++) yield new Curve2D(convert.Arc(i));
  }
  const curves = Array.from(bezierCurves());
  convert.delete();
  return curves;
};
function approximateAsSvgCompatibleCurve(curves, options = {
  tolerance: 1e-4,
  continuity: "C0",
  maxSegments: 300
}) {
  const r = GCWithScope();
  return curves.flatMap((curve) => {
    const adaptor = r(curve.adaptor());
    const curveType2 = findCurveType(adaptor.GetType());
    const midpointParameter = 0.5 * (curve.firstParameter + curve.lastParameter);
    if (curveType2 === "ELLIPSE" || curveType2 === "CIRCLE" && samePoint$2(curve.firstPoint, curve.lastPoint)) return curve.splitAt([midpointParameter]);
    if ([
      "LINE",
      "ELLIPSE",
      "CIRCLE"
    ].includes(curveType2)) return curve;
    if (curveType2 === "BEZIER_CURVE") {
      const b = adaptor.Bezier();
      const deg = b.Degree();
      if (!b.IsRational() && [
        1,
        2,
        3
      ].includes(deg)) return curve;
    }
    if (curveType2 === "BSPLINE_CURVE") {
      if (!adaptor.BSpline().IsRational()) return approximateAsSvgCompatibleCurve(BSplineToBezier(adaptor), options);
    }
    const bspline = approximateAsBSpline(adaptor, options.tolerance, options.continuity, options.maxSegments);
    return approximateAsSvgCompatibleCurve(BSplineToBezier(r(bspline.adaptor())), options);
  });
}
function* pointsIteration(intersector) {
  const nPoints = intersector.NbPoints();
  if (!nPoints) return;
  for (let i = 1; i <= nPoints; i++) {
    const point = intersector.Point(i);
    yield [point.X(), point.Y()];
  }
}
function* commonSegmentsIteration(intersector) {
  const nSegments = intersector.NbSegments();
  if (!nSegments) return;
  for (let i = 1; i <= nSegments; i++) try {
    const { Curve1, Curve2 } = intersector.Segment(i);
    Curve2.delete();
    yield new Curve2D(Curve1);
  } catch (e) {
    continue;
  }
}
var intersectCurves = (first, second, precision = 1e-9) => {
  if (first.boundingBox.isOut(second.boundingBox)) return {
    intersections: [],
    commonSegments: [],
    commonSegmentsPoints: []
  };
  const intersector = new (getOC()).Geom2dAPI_InterCurveCurve();
  let intersections;
  let commonSegments;
  try {
    intersector.Init(first.wrapped, second.wrapped, precision);
    intersections = Array.from(pointsIteration(intersector));
    commonSegments = Array.from(commonSegmentsIteration(intersector));
  } catch (e) {
    console.error(first, second, e);
    throw new Error("Intersections failed between curves");
  } finally {
    intersector.delete();
  }
  const segmentsAsPoints = commonSegments.filter((c) => samePoint$2(c.firstPoint, c.lastPoint, precision)).map((c) => c.firstPoint);
  if (segmentsAsPoints.length) {
    intersections.push(...segmentsAsPoints);
    commonSegments = commonSegments.filter((c) => !samePoint$2(c.firstPoint, c.lastPoint, precision));
  }
  const commonSegmentsPoints = commonSegments.flatMap((c) => [c.firstPoint, c.lastPoint]);
  return {
    intersections,
    commonSegments,
    commonSegmentsPoints
  };
};
var selfIntersections = (curve, precision = 1e-9) => {
  const intersector = new (getOC()).Geom2dAPI_InterCurveCurve();
  let intersections;
  try {
    intersector.Init(curve.wrapped, curve.wrapped, precision);
    intersections = Array.from(pointsIteration(intersector));
  } catch (e) {
    throw new Error("Self intersection failed");
  } finally {
    intersector.delete();
  }
  return intersections;
};
var make2dSegmentCurve = (startPoint, endPoint) => {
  const oc = getOC();
  const [r, gc] = localGC();
  const curve = new Curve2D(r(new oc.GC_MakeSegment2d(r(pnt(startPoint)), r(pnt(endPoint)))).Value());
  if (!samePoint$2(curve.firstPoint, startPoint)) curve.reverse();
  gc();
  return curve;
};
var make2dThreePointArc = (startPoint, midPoint, endPoint) => {
  const oc = getOC();
  const [r, gc] = localGC();
  const segment = r(new oc.GC_MakeArcOfCircle2d(r(pnt(startPoint)), r(pnt(midPoint)), r(pnt(endPoint)))).Value();
  const firstPoint = r(segment.Value(segment.FirstParameter()));
  if (!samePoint$2([firstPoint.X(), firstPoint.Y()], startPoint)) segment.SetTrim(segment.LastParameter(), segment.FirstParameter(), true, true);
  gc();
  return new Curve2D(segment);
};
var make2dTangentArc = (startPoint, tangent, endPoint) => {
  const oc = getOC();
  const [r, gc] = localGC();
  const segment = r(new oc.GC_MakeArcOfCircle2d(r(pnt(startPoint)), r(vec(tangent)), r(pnt(endPoint)))).Value();
  const firstPoint = r(segment.Value(segment.FirstParameter()));
  if (!samePoint$2([firstPoint.X(), firstPoint.Y()], startPoint)) segment.SetTrim(segment.LastParameter(), segment.FirstParameter(), true, true);
  gc();
  return new Curve2D(segment);
};
var make2dCircle = (radius, center = [0, 0]) => {
  const oc = getOC();
  const [r, gc] = localGC();
  const segment = r(new oc.GC_MakeCircle2d(r(pnt(center)), radius, true)).Value();
  gc();
  return new Curve2D(segment);
};
var make2dEllipse = (majorRadius, minorRadius, xDir = [1, 0], center = [0, 0], direct = true) => {
  const oc = getOC();
  const [r, gc] = localGC();
  const ellipse = r(new oc.gp_Elips2d(r(axis2d(center, xDir)), majorRadius, minorRadius, direct));
  const segment = r(new oc.GC_MakeEllipse2d(ellipse)).Value();
  gc();
  return new Curve2D(segment);
};
var make2dEllipseArc = (majorRadius, minorRadius, startAngle, endAngle, center = [0, 0], xDir, direct = true) => {
  const oc = getOC();
  const [r, gc] = localGC();
  const ellipse = r(new oc.gp_Elips2d(r(axis2d(center, xDir)), majorRadius, minorRadius, true));
  const segment = r(new oc.GC_MakeArcOfEllipse2d(ellipse, startAngle, endAngle, direct)).Value();
  gc();
  return new Curve2D(segment);
};
var make2dBezierCurve = (startPoint, controls, endPoint) => {
  const oc = getOC();
  const [r, gc] = localGC();
  const arrayOfPoints = r(new oc.NCollection_Array1_gp_Pnt2d(1, controls.length + 2));
  arrayOfPoints.SetValue(1, r(pnt(startPoint)));
  controls.forEach((p, i) => {
    arrayOfPoints.SetValue(i + 2, r(pnt(p)));
  });
  arrayOfPoints.SetValue(controls.length + 2, r(pnt(endPoint)));
  const bezCurve = new oc.Geom2d_BezierCurve(arrayOfPoints);
  gc();
  return new Curve2D(bezCurve);
};
function make2dInerpolatedBSplineCurve(points, { tolerance = 1e-3, smoothing = null, degMax = 3, degMin = 1 } = {}) {
  const r = GCWithScope();
  const oc = getOC();
  const pnts = r(new oc.NCollection_Array1_gp_Pnt2d(1, points.length));
  points.forEach((point, index) => {
    pnts.SetValue(index + 1, r(pnt(point)));
  });
  let splineBuilder;
  if (smoothing) {
    splineBuilder = r(new oc.Geom2dAPI_PointsToBSpline());
    splineBuilder.Init(pnts, smoothing[0], smoothing[1], smoothing[2], degMax, oc.GeomAbs_Shape.GeomAbs_C2, tolerance);
  } else {
    splineBuilder = r(new oc.Geom2dAPI_PointsToBSpline());
    splineBuilder.Init(pnts, degMin, degMax, oc.GeomAbs_Shape.GeomAbs_C2, tolerance);
  }
  if (!splineBuilder.IsDone()) throw new Error("B-spline approximation failed");
  return new Curve2D(splineBuilder.Curve());
}
var make2dArcFromCenter = (startPoint, endPoint, center, longArc = false) => {
  const midChord = scalarMultiply2d(add2d(startPoint, endPoint), 0.5);
  const orientedRadius = distance2d(center, startPoint) * (longArc ? -1 : 1);
  return make2dThreePointArc(startPoint, add2d(scalarMultiply2d(normalize2d(subtract2d(midChord, center)), orientedRadius), center), endPoint);
};
var offsetEndPoints = (firstPoint, lastPoint, offset2) => {
  const tangent = normalize2d(subtract2d(lastPoint, firstPoint));
  const normal = [tangent[1], -tangent[0]];
  const offsetVec = [normal[0] * offset2, normal[1] * offset2];
  return {
    firstPoint: add2d(firstPoint, offsetVec),
    lastPoint: add2d(lastPoint, offsetVec)
  };
};
var make2dOffset = (curve, offset2) => {
  const r = GCWithScope();
  const curveType2 = curve.geomType;
  if (curveType2 === "CIRCLE") {
    const circle = r(r(curve.adaptor()).Circle());
    const radius = circle.Radius();
    const orientedOffset = offset2 * (circle.IsDirect() ? 1 : -1);
    const newRadius = radius + orientedOffset;
    if (newRadius < 1e-10) {
      const centerPos = r(circle.Location());
      const center = [centerPos.X(), centerPos.Y()];
      const offsetViaCenter = (point) => {
        const [x, y] = normalize2d(subtract2d(point, center));
        return add2d(point, [orientedOffset * x, orientedOffset * y]);
      };
      return {
        collapsed: true,
        firstPoint: offsetViaCenter(curve.firstPoint),
        lastPoint: offsetViaCenter(curve.lastPoint)
      };
    }
    const oc = getOC();
    const newCircle = new oc.gp_Circ2d(circle.Axis(), newRadius);
    const newInnerCurve = new oc.Geom2d_Circle(newCircle);
    return new Curve2D(new oc.Geom2d_TrimmedCurve(newInnerCurve, curve.firstParameter, curve.lastParameter, true, true));
  }
  if (curveType2 === "LINE") {
    const { firstPoint, lastPoint } = offsetEndPoints(curve.firstPoint, curve.lastPoint, offset2);
    return make2dSegmentCurve(firstPoint, lastPoint);
  }
  const approximation = approximateAsBSpline(new Curve2D(new (getOC()).Geom2d_OffsetCurve(curve.wrapped, offset2, true)).adaptor());
  if (selfIntersections(approximation).length) return {
    collapsed: true,
    firstPoint: approximation.firstPoint,
    lastPoint: approximation.lastPoint
  };
  return approximation;
};
function removeCorner(firstCurve, secondCurve, radius) {
  const sinAngle = crossProduct2d(firstCurve.tangentAt(1), secondCurve.tangentAt(0));
  if (Math.abs(sinAngle) < 1e-10) return null;
  const offset2 = Math.abs(radius) * (sinAngle > 0 ? -1 : 1);
  const firstOffset = make2dOffset(firstCurve, offset2);
  const secondOffset = make2dOffset(secondCurve, offset2);
  if (!(firstOffset instanceof Curve2D) || !(secondOffset instanceof Curve2D)) return null;
  let potentialCenter;
  try {
    const { intersections } = intersectCurves(firstOffset, secondOffset, 1e-9);
    potentialCenter = intersections.at(-1);
  } catch (e) {
    return null;
  }
  if (!isPoint2D(potentialCenter)) return null;
  const center = potentialCenter;
  const splitForFillet = (curve, offsetCurve) => {
    const [x, y] = offsetCurve.tangentAt(center);
    const normal = normalize2d([-y, x]);
    const splitPoint = add2d(center, scalarMultiply2d(normal, offset2));
    const splitParam = curve.parameter(splitPoint, 1e-6);
    return curve.splitAt([splitParam]);
  };
  const [first] = splitForFillet(firstCurve, firstOffset);
  const [, second] = splitForFillet(secondCurve, secondOffset);
  return {
    first,
    second,
    center
  };
}
function filletCurves(firstCurve, secondCurve, radius) {
  const cornerRemoved = removeCorner(firstCurve, secondCurve, radius);
  if (!cornerRemoved) {
    console.warn("Cannot fillet between curves", firstCurve.repr, secondCurve.repr);
    return [firstCurve, secondCurve];
  }
  const { first, second, center } = cornerRemoved;
  return [
    first,
    make2dArcFromCenter(first.lastPoint, second.firstPoint, center),
    second
  ];
}
function chamferCurves(firstCurve, secondCurve, radius) {
  const cornerRemoved = removeCorner(firstCurve, secondCurve, radius);
  if (!cornerRemoved) {
    console.warn("Cannot chamfer between curves", firstCurve.repr, secondCurve.repr);
    return [firstCurve, secondCurve];
  }
  const { first, second } = cornerRemoved;
  return [
    first,
    make2dSegmentCurve(first.lastPoint, second.firstPoint),
    second
  ];
}
function dogboneFilletCurves(firstCurve, secondCurve, radius) {
  const sinAngle = crossProduct2d(normalize2d(firstCurve.tangentAt(1)), normalize2d(secondCurve.tangentAt(0)));
  const a = Math.asin(sinAngle);
  if (Math.abs(sinAngle) < 1e-10) return [firstCurve, secondCurve];
  const orientationCorrection = sinAngle > 0 ? -1 : 1;
  const offset2 = Math.abs(radius) * Math.sin(a / 2) * orientationCorrection;
  const firstOffset = make2dOffset(firstCurve, offset2);
  const secondOffset = make2dOffset(secondCurve, offset2);
  if (!(firstOffset instanceof Curve2D) || !(secondOffset instanceof Curve2D)) return [firstCurve, secondCurve];
  let potentialCenter;
  try {
    const { intersections } = intersectCurves(firstOffset, secondOffset, 1e-9);
    potentialCenter = intersections.at(-1);
  } catch (e) {
    return [firstCurve, secondCurve];
  }
  if (!isPoint2D(potentialCenter)) return [firstCurve, secondCurve];
  const circle = make2dCircle(radius, potentialCenter);
  const firstInt = intersectCurves(firstCurve, circle).intersections[0];
  const secondInt = intersectCurves(secondCurve, circle).intersections.at(-1);
  if (!firstInt || !secondInt) return [firstCurve, secondCurve];
  const firstPart = firstCurve.splitAt([firstInt])[0];
  const secondPart = secondCurve.splitAt([secondInt]).at(-1);
  if (!firstPart || !secondPart) return [firstCurve, secondCurve];
  try {
    return [
      firstPart,
      make2dThreePointArc(firstPart.lastPoint, firstCurve.lastPoint, secondPart.firstPoint),
      secondPart
    ];
  } catch (e) {
    return [firstCurve, secondCurve];
  }
}
var FlatQueue = class {
  /**
  * Creates an empty queue. If `capacity` is provided, the queue is backed by fixed-size typed
  * arrays for better performance and memory use, but can't grow beyond `capacity`. `values` uses
  * `ValuesArray` (default `Float64Array`) and `ids` uses `IdsArray` (default `Uint32Array`); pass
  * narrower constructors like `Uint16Array` if your values or ids are known to fit them.
  *
  * @param {number} [capacity]
  * @param {TypedArrayConstructor} [ValuesArray]
  * @param {TypedArrayConstructor} [IdsArray]
  */
  constructor(capacity = Infinity, ValuesArray = Float64Array, IdsArray = Uint32Array) {
    const fixed = capacity !== Infinity;
    this.ids = fixed ? new IdsArray(capacity) : [];
    this.values = fixed ? new ValuesArray(capacity) : [];
    this.capacity = capacity;
    this.length = 0;
  }
  /** Removes all items from the queue. */
  clear() {
    this.length = 0;
  }
  /**
  * Adds `item` to the queue with the specified `priority`.
  *
  * `priority` must be a number. Items are sorted and returned from low to high priority. Multiple items
  * with the same priority value can be added to the queue, but there is no guaranteed order between these items.
  *
  * For fixed-capacity queues, throws a `RangeError` if the queue is already full.
  *
  * @param {T} item
  * @param {number} priority
  */
  push(item, priority) {
    if (this.length === this.capacity) throw new RangeError("Queue is at capacity.");
    let pos = this.length++;
    while (pos > 0) {
      const parent = pos - 1 >> 1;
      const parentValue = this.values[parent];
      if (priority >= parentValue) break;
      this.ids[pos] = this.ids[parent];
      this.values[pos] = parentValue;
      pos = parent;
    }
    this.ids[pos] = item;
    this.values[pos] = priority;
  }
  /**
  * Removes and returns the item from the head of this queue, which is one of
  * the items with the lowest priority. If this queue is empty, returns `undefined`.
  */
  pop() {
    if (this.length === 0) return void 0;
    const ids = this.ids, values = this.values, top = ids[0], last = --this.length;
    if (last > 0) {
      const id = ids[last];
      const value = values[last];
      let pos = 0;
      const halfLen = last >> 1;
      while (pos < halfLen) {
        const left = (pos << 1) + 1;
        const right = left + 1;
        const child = left + (+(right < last) & +(values[right] < values[left]));
        if (values[child] >= value) break;
        ids[pos] = ids[child];
        values[pos] = values[child];
        pos = child;
      }
      ids[pos] = id;
      values[pos] = value;
    }
    return top;
  }
  /** Returns the item from the head of this queue without removing it. If this queue is empty, returns `undefined`. */
  peek() {
    return this.length > 0 ? this.ids[0] : void 0;
  }
  /**
  * Returns the priority value of the item at the head of this queue without
  * removing it. If this queue is empty, returns `undefined`.
  */
  peekValue() {
    return this.length > 0 ? this.values[0] : void 0;
  }
  /**
  * Shrinks the internal arrays to `this.length`. No-op for queues with fixed capacity.
  *
  * `pop()` and `clear()` calls don't free memory automatically to avoid unnecessary resize operations.
  * This also means that items that have been added to the queue can't be garbage collected until
  * a new item is pushed in their place, or this method is called.
  */
  shrink() {
    if (Array.isArray(this.ids)) this.ids.length = this.length;
    if (Array.isArray(this.values)) this.values.length = this.length;
  }
};
var ARRAY_TYPES = [
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
];
var VERSION = 3;
var Flatbush = class Flatbush2 {
  /**
  * Recreate a Flatbush index from raw `ArrayBuffer` or `SharedArrayBuffer` data.
  * @param {ArrayBufferLike} data
  * @param {number} [byteOffset=0] byte offset to the start of the Flatbush buffer in the referenced ArrayBuffer.
  * @returns {Flatbush} index
  */
  static from(data, byteOffset = 0) {
    if (byteOffset % 8 !== 0) throw new Error("byteOffset must be 8-byte aligned.");
    if (!data || data.byteLength === void 0 || "buffer" in data) throw new Error("Data must be an instance of ArrayBuffer or SharedArrayBuffer.");
    const [magic, versionAndType] = new Uint8Array(data, byteOffset + 0, 2);
    if (magic !== 251) throw new Error("Data does not appear to be in a Flatbush format.");
    const version = versionAndType >> 4;
    if (version !== VERSION) throw new Error(`Got v${version} data when expected v${VERSION}.`);
    const ArrayType = ARRAY_TYPES[versionAndType & 15];
    if (!ArrayType) throw new Error("Unrecognized array type.");
    const [nodeSize] = new Uint16Array(data, byteOffset + 2, 1);
    const [numItems] = new Uint32Array(data, byteOffset + 4, 1);
    return new Flatbush2(numItems, nodeSize, ArrayType, void 0, data, byteOffset);
  }
  /**
  * Create a Flatbush index that will hold a given number of items.
  * @param {number} numItems
  * @param {number} [nodeSize=16] Size of the tree node (16 by default).
  * @param {TypedArrayConstructor} [ArrayType=Float64Array] The array type used for coordinates storage (`Float64Array` by default).
  * @param {ArrayBufferConstructor | SharedArrayBufferConstructor} [ArrayBufferType=ArrayBuffer] The array buffer type used to store data (`ArrayBuffer` by default).
  * @param {ArrayBufferLike} [data] (Only used internally)
  * @param {number} [byteOffset=0] (Only used internally)
  */
  constructor(numItems, nodeSize = 16, ArrayType = Float64Array, ArrayBufferType = ArrayBuffer, data, byteOffset = 0) {
    if (numItems === void 0) throw new Error("Missing required argument: numItems.");
    if (isNaN(numItems) || numItems <= 0) throw new Error(`Unexpected numItems value: ${numItems}.`);
    this.numItems = +numItems;
    this.nodeSize = Math.min(Math.max(+nodeSize, 2), 65535);
    this.byteOffset = byteOffset;
    let n = numItems;
    let numNodes = n;
    this._levelBounds = [n * 4];
    do {
      n = Math.ceil(n / this.nodeSize);
      numNodes += n;
      this._levelBounds.push(numNodes * 4);
    } while (n !== 1);
    this.ArrayType = ArrayType;
    this.IndexArrayType = numNodes < 16384 ? Uint16Array : Uint32Array;
    const arrayTypeIndex = ARRAY_TYPES.indexOf(ArrayType);
    const nodesByteSize = numNodes * 4 * ArrayType.BYTES_PER_ELEMENT;
    if (arrayTypeIndex < 0) throw new Error(`Unexpected typed array class: ${ArrayType}.`);
    const BoxCtor = ArrayType;
    const IdxCtor = this.IndexArrayType;
    if (data) {
      this.data = data;
      this._boxes = new BoxCtor(data, byteOffset + 8, numNodes * 4);
      this._indices = new IdxCtor(data, byteOffset + 8 + nodesByteSize, numNodes);
      this._pos = numNodes * 4;
      this.minX = this._boxes[this._pos - 4];
      this.minY = this._boxes[this._pos - 3];
      this.maxX = this._boxes[this._pos - 2];
      this.maxY = this._boxes[this._pos - 1];
    } else {
      const data2 = this.data = new ArrayBufferType(8 + nodesByteSize + numNodes * this.IndexArrayType.BYTES_PER_ELEMENT);
      this._boxes = new BoxCtor(data2, 8, numNodes * 4);
      this._indices = new IdxCtor(data2, 8 + nodesByteSize, numNodes);
      this._pos = 0;
      this.minX = Infinity;
      this.minY = Infinity;
      this.maxX = -Infinity;
      this.maxY = -Infinity;
      new Uint8Array(data2, 0, 2).set([251, 48 + arrayTypeIndex]);
      new Uint16Array(data2, 2, 1)[0] = nodeSize;
      new Uint32Array(data2, 4, 1)[0] = numItems;
    }
    this._queue = new FlatQueue();
  }
  /**
  * Add a given rectangle to the index.
  * @param {number} minX
  * @param {number} minY
  * @param {number} maxX
  * @param {number} maxY
  * @returns {number} A zero-based, incremental number that represents the newly added rectangle.
  */
  add(minX, minY, maxX = minX, maxY = minY) {
    const pos = this._pos;
    const index = pos >> 2;
    const boxes = this._boxes;
    this._indices[index] = index;
    boxes[pos] = minX;
    boxes[pos + 1] = minY;
    boxes[pos + 2] = maxX;
    boxes[pos + 3] = maxY;
    this._pos = pos + 4;
    if (minX < this.minX) this.minX = minX;
    if (minY < this.minY) this.minY = minY;
    if (maxX > this.maxX) this.maxX = maxX;
    if (maxY > this.maxY) this.maxY = maxY;
    return index;
  }
  /** Perform indexing of the added rectangles. */
  finish() {
    if (this._pos >> 2 !== this.numItems) throw new Error(`Added ${this._pos >> 2} items when expected ${this.numItems}.`);
    const boxes = this._boxes;
    if (this.numItems <= this.nodeSize) {
      boxes[this._pos++] = this.minX;
      boxes[this._pos++] = this.minY;
      boxes[this._pos++] = this.maxX;
      boxes[this._pos++] = this.maxY;
      return;
    }
    const { numItems, minX, minY, nodeSize, _indices: indices, _levelBounds: levelBounds } = this;
    const width = this.maxX - minX || 1;
    const height = this.maxY - minY || 1;
    const hilbertValues = new Int32Array(numItems);
    const hilbertMax = 65535;
    const sx = hilbertMax / width;
    const sy = hilbertMax / height;
    for (let i = 0, pos2 = 0; i < numItems; i++) {
      const itemMinX = boxes[pos2++];
      const itemMinY = boxes[pos2++];
      const itemMaxX = boxes[pos2++];
      const itemMaxY = boxes[pos2++];
      const x = sx * ((itemMinX + itemMaxX) / 2 - minX) | 0;
      const y = sy * ((itemMinY + itemMaxY) / 2 - minY) | 0;
      hilbertValues[i] = hilbert(x, y);
    }
    sort(hilbertValues, boxes, indices, 0, numItems - 1, nodeSize);
    let pos = numItems * 4;
    for (let i = 0, readPos = 0; i < levelBounds.length - 1; i++) {
      const end = levelBounds[i];
      while (readPos < end) {
        const nodeIndex = readPos;
        let nodeMinX = boxes[readPos++];
        let nodeMinY = boxes[readPos++];
        let nodeMaxX = boxes[readPos++];
        let nodeMaxY = boxes[readPos++];
        for (let j = 1; j < nodeSize && readPos < end; j++) {
          nodeMinX = Math.min(nodeMinX, boxes[readPos++]);
          nodeMinY = Math.min(nodeMinY, boxes[readPos++]);
          nodeMaxX = Math.max(nodeMaxX, boxes[readPos++]);
          nodeMaxY = Math.max(nodeMaxY, boxes[readPos++]);
        }
        indices[pos >> 2] = nodeIndex;
        boxes[pos++] = nodeMinX;
        boxes[pos++] = nodeMinY;
        boxes[pos++] = nodeMaxX;
        boxes[pos++] = nodeMaxY;
      }
    }
    this._pos = pos;
  }
  /**
  * Search the index by a bounding box.
  * @param {number} minX
  * @param {number} minY
  * @param {number} maxX
  * @param {number} maxY
  * @param {(index: number, x0: number, y0: number, x1: number, y1: number) => boolean} [filterFn] An optional function that is called on every found item; if supplied, only items for which this function returns true will be included in the results array.
  * @returns {number[]} An array of indices of items intersecting or touching the given bounding box.
  */
  search(minX, minY, maxX, maxY, filterFn) {
    if (this._pos !== this._boxes.length) throw new Error("Data not yet indexed - call index.finish().");
    const { _boxes: boxes, _levelBounds: levelBounds, _indices: indices, nodeSize } = this;
    const numItems4 = this.numItems * 4;
    let nodeIndex = boxes.length - 4;
    let level = levelBounds.length - 1;
    const q = [];
    const results = [];
    let contained = false;
    while (nodeIndex !== void 0) {
      const end = Math.min(nodeIndex + nodeSize * 4, levelBounds[level]);
      const isNode = nodeIndex >= numItems4;
      if (contained) this._collectContained(nodeIndex, end, level, numItems4, results, filterFn);
      else for (let pos = nodeIndex; pos < end; pos += 4) {
        const x0 = boxes[pos];
        if (maxX < x0) continue;
        const y0 = boxes[pos + 1];
        if (maxY < y0) continue;
        const x1 = boxes[pos + 2];
        if (minX > x1) continue;
        const y1 = boxes[pos + 3];
        if (minY > y1) continue;
        const index = indices[pos >> 2] | 0;
        if (isNode) {
          const c = +(minX <= x0 && minY <= y0 && maxX >= x1 && maxY >= y1);
          q.push(index | c, level - 1);
        } else if (filterFn === void 0 || filterFn(index, x0, y0, x1, y1)) results.push(index);
      }
      level = q.pop();
      nodeIndex = q.pop();
      if (nodeIndex !== void 0) {
        contained = (nodeIndex & 1) === 1;
        nodeIndex &= -2;
      }
    }
    return results;
  }
  /**
  * Collect all leaves of a subtree that's fully inside the query, skipping intersection tests.
  * Because the tree is packed bottom-up, those leaves occupy one contiguous block of the leaf
  * level, so we skip traversal entirely: descend to the first leaf, then sweep the flat range.
  * @param {number} nodeIndex
  * @param {number} end
  * @param {number} level
  * @param {number} numItems4
  * @param {number[]} results
  * @param {((index: number, x0: number, y0: number, x1: number, y1: number) => boolean) | undefined} filterFn
  */
  _collectContained(nodeIndex, end, level, numItems4, results, filterFn) {
    const boxes = this._boxes;
    const indices = this._indices;
    let pos = nodeIndex;
    for (let l = level; l > 0; l--) pos = indices[pos >> 2];
    const leafEnd = Math.min(pos + (end - nodeIndex) * this.nodeSize ** level, numItems4);
    if (filterFn === void 0) for (; pos < leafEnd; pos += 4) results.push(indices[pos >> 2] | 0);
    else for (; pos < leafEnd; pos += 4) {
      const index = indices[pos >> 2] | 0;
      if (filterFn(index, boxes[pos], boxes[pos + 1], boxes[pos + 2], boxes[pos + 3])) results.push(index);
    }
  }
  /**
  * Search items in order of distance from the given point.
  * @param {number} x
  * @param {number} y
  * @param {number} [maxResults=Infinity]
  * @param {number} [maxDistance=Infinity]
  * @param {(index: number) => boolean} [filterFn] An optional function for filtering the results.
  * @returns {number[]} An array of indices of items found.
  */
  neighbors(x, y, maxResults = Infinity, maxDistance = Infinity, filterFn) {
    if (this._pos !== this._boxes.length) throw new Error("Data not yet indexed - call index.finish().");
    const { _boxes: boxes, _levelBounds: levelBounds, _indices: indices, _queue: q, nodeSize } = this;
    const numItems4 = this.numItems * 4;
    const nodeSize4 = nodeSize * 4;
    const results = [];
    const maxDistSquared = maxDistance * maxDistance;
    const trackNearest = maxResults === 1;
    let bound = maxDistSquared;
    q.push(boxes.length - 4 << 1, 0);
    while (q.length) {
      const top = q.ids[0];
      if (top & 1) {
        q.pop();
        results.push(top >> 1);
        if (results.length === maxResults) break;
        continue;
      }
      q.pop();
      const nodeIndex = top >> 1;
      const isLeafLevel = nodeIndex < numItems4;
      const end = Math.min(nodeIndex + nodeSize4, upperBound(nodeIndex, levelBounds));
      for (let pos = nodeIndex; pos < end; pos += 4) {
        const minX = boxes[pos];
        const minY = boxes[pos + 1];
        const maxX = boxes[pos + 2];
        const maxY = boxes[pos + 3];
        const dx = Math.max(Math.max(minX - x, x - maxX), 0);
        const dy = Math.max(Math.max(minY - y, y - maxY), 0);
        const dist = dx * dx + dy * dy;
        if (dist > bound) continue;
        const childIndex = indices[pos >> 2] | 0;
        if (isLeafLevel) {
          if (filterFn === void 0 || filterFn(childIndex)) {
            q.push(childIndex << 1 | 1, dist);
            if (trackNearest && dist < bound) bound = dist;
          }
        } else q.push(childIndex << 1, dist);
      }
    }
    q.clear();
    return results;
  }
};
function upperBound(value, arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    const m = i + j >> 1;
    if (arr[m] > value) j = m;
    else i = m + 1;
  }
  return arr[i];
}
function sort(values, boxes, indices, left, right, nodeSize) {
  const stack = [left, right];
  while (stack.length) {
    const r = stack.pop() || 0;
    const l = stack.pop() || 0;
    if (r - l <= nodeSize && Math.floor(l / nodeSize) >= Math.floor(r / nodeSize)) continue;
    const a = values[l];
    const b = values[l + r >> 1];
    const c = values[r];
    const pivot = a > b !== a > c ? a : b < a !== b < c ? b : c;
    let i = l - 1;
    let j = r + 1;
    while (true) {
      do
        i++;
      while (values[i] < pivot);
      do
        j--;
      while (values[j] > pivot);
      if (i >= j) break;
      swap(values, boxes, indices, i, j);
    }
    stack.push(l, j, j + 1, r);
  }
}
function swap(values, boxes, indices, i, j) {
  const temp = values[i];
  values[i] = values[j];
  values[j] = temp;
  const k = 4 * i;
  const m = 4 * j;
  const a = boxes[k];
  const b = boxes[k + 1];
  const c = boxes[k + 2];
  const d = boxes[k + 3];
  boxes[k] = boxes[m];
  boxes[k + 1] = boxes[m + 1];
  boxes[k + 2] = boxes[m + 2];
  boxes[k + 3] = boxes[m + 3];
  boxes[m] = a;
  boxes[m + 1] = b;
  boxes[m + 2] = c;
  boxes[m + 3] = d;
  const e = indices[i];
  indices[i] = indices[j];
  indices[j] = e;
}
function hilbert(x, y) {
  let a = x ^ y;
  let b = 65535 ^ a;
  let c = 65535 ^ (x | y);
  let d = x & (y ^ 65535);
  let A = a | b >> 1;
  let B = a >> 1 ^ a;
  let C = c ^ (c >> 1 ^ b & d >> 1);
  let D = d ^ (a & c >> 1 ^ d >> 1);
  a = A & A >> 2 ^ B & B >> 2;
  b = A & B >> 2 ^ B & (A ^ B) >> 2;
  c = C ^ (A & C >> 2 ^ B & D >> 2);
  d = D ^ (B & C >> 2 ^ (A ^ B) & D >> 2);
  A = a & a >> 4 ^ b & b >> 4;
  B = a & b >> 4 ^ b & (a ^ b) >> 4;
  C = c ^ (a & c >> 4 ^ b & d >> 4);
  D = d ^ (b & c >> 4 ^ (a ^ b) & d >> 4);
  c = C ^ (A & C >> 8 ^ B & D >> 8);
  d = D ^ (B & C >> 8 ^ (A ^ B) & D >> 8);
  c ^= c >> 1;
  d ^= d >> 1;
  a = x ^ y;
  b = d | 65535 ^ (a | c);
  a = (a | a << 8) & 16711935;
  a = (a | a << 4) & 252645135;
  a = (a | a << 2) & 858993459;
  a = (a | a << 1) & 1431655765;
  b = (b | b << 8) & 16711935;
  b = (b | b << 4) & 252645135;
  b = (b | b << 2) & 858993459;
  b = (b | b << 1) & 1431655765;
  return ((b << 1 | a) >>> 0) - 2147483648;
}
var stitchCurves = (curves, precision = 1e-7) => {
  const startPoints = new Flatbush(curves.length);
  curves.forEach((c) => {
    const [x, y] = c.firstPoint;
    startPoints.add(x - precision, y - precision, x + precision, y + precision);
  });
  startPoints.finish();
  const stitchedCurves = [];
  const visited = /* @__PURE__ */ new Set();
  curves.forEach((curve, index) => {
    if (visited.has(index)) return;
    const connectedCurves = [curve];
    let currentIndex = index;
    visited.add(index);
    let maxLoops = curves.length;
    while (true) {
      if (maxLoops-- < 0) throw new Error("Infinite loop detected");
      const [x, y] = connectedCurves[connectedCurves.length - 1].lastPoint;
      const neighbors = startPoints.search(x - precision, y - precision, x + precision, y + precision);
      const indexDistance = (otherIndex) => Math.abs((currentIndex - otherIndex) % curves.length);
      const potentialNextCurves = neighbors.filter((neighborIndex) => !visited.has(neighborIndex)).map((neighborIndex) => [
        curves[neighborIndex],
        neighborIndex,
        indexDistance(neighborIndex)
      ]).sort(([, , a], [, , b]) => indexDistance(a) - indexDistance(b));
      if (potentialNextCurves.length === 0) {
        stitchedCurves.push(connectedCurves);
        break;
      }
      const [nextCurve, nextCurveIndex] = potentialNextCurves[0];
      connectedCurves.push(nextCurve);
      visited.add(nextCurveIndex);
      currentIndex = nextCurveIndex;
    }
  });
  return stitchedCurves;
};
function round5(v) {
  return Math.round(v * 1e5) / 1e5;
}
var fromPnt = (pnt2) => `${round5(pnt2.X())} ${round5(pnt2.Y())}`;
var adaptedCurveToPathElem = (adaptor, lastPoint) => {
  const oc = getOC();
  const curveType2 = findCurveType(adaptor.GetType());
  const [endX, endY] = lastPoint;
  const endpoint = `${round5(endX)} ${round5(endY)}`;
  if (curveType2 === "LINE") return `L ${endpoint}`;
  if (curveType2 === "BEZIER_CURVE") {
    const curve = adaptor.Bezier();
    const deg = curve.Degree();
    if (deg === 1) return `L ${endpoint}`;
    if (deg === 2) return `Q ${fromPnt(curve.Pole(2))} ${endpoint}`;
    if (deg === 3) return `C ${fromPnt(curve.Pole(2))} ${fromPnt(curve.Pole(3))} ${endpoint}`;
  }
  if (curveType2 === "CIRCLE") {
    const curve = adaptor.Circle();
    const radius = curve.Radius();
    const p1 = adaptor.FirstParameter();
    const paramAngle = (adaptor.LastParameter() - p1) * RAD2DEG;
    const end = paramAngle !== 360 ? endpoint : `${round5(endX)} ${round5(endY + 1e-4)}`;
    return `A ${radius} ${radius} 0 ${Math.abs(paramAngle) > 180 ? "1" : "0"} ${curve.IsDirect() ? "1" : "0"} ${end}`;
  }
  if (curveType2 === "ELLIPSE") {
    const curve = adaptor.Ellipse();
    const rx = curve.MajorRadius();
    const ry = curve.MinorRadius();
    const p1 = adaptor.FirstParameter();
    const paramAngle = (adaptor.LastParameter() - p1) * RAD2DEG;
    const end = paramAngle !== 360 ? endpoint : `${round5(endX)} ${round5(endY + 1e-4)}`;
    const dir0 = new oc.gp_Dir2d();
    const angle = 180 - curve.XAxis().Direction().Angle(dir0) * RAD2DEG;
    dir0.delete();
    return `A ${round5(rx)} ${round5(ry)} ${round5(angle)} ${Math.abs(paramAngle) > 180 ? "1" : "0"} ${curve.IsDirect() ? "1" : "0"} ${end}`;
  }
  throw new Error(`Unsupported curve type: ${curveType2}`);
};
var MANIFOLD = { library: null };
var setManifold = (manifold) => {
  manifold?.setup?.();
  MANIFOLD.library = manifold;
};
var getManifold = () => {
  if (!MANIFOLD.library) throw new Error("manifold has not been loaded");
  return MANIFOLD.library;
};
var asVec3 = (v) => {
  const vec2 = new Vector(v);
  return [
    vec2.x,
    vec2.y,
    vec2.z
  ];
};
var manifoldTransformFromTransformation = (t) => {
  const transform = t.inverted();
  const origin = transform.transformPoint([
    0,
    0,
    0
  ]);
  const xPoint = transform.transformPoint([
    1,
    0,
    0
  ]);
  const yPoint = transform.transformPoint([
    0,
    1,
    0
  ]);
  const zPoint = transform.transformPoint([
    0,
    0,
    1
  ]);
  const o = [
    origin.X(),
    origin.Y(),
    origin.Z()
  ];
  const x = [
    xPoint.X() - o[0],
    xPoint.Y() - o[1],
    xPoint.Z() - o[2]
  ];
  const y = [
    yPoint.X() - o[0],
    yPoint.Y() - o[1],
    yPoint.Z() - o[2]
  ];
  const z = [
    zPoint.X() - o[0],
    zPoint.Y() - o[1],
    zPoint.Z() - o[2]
  ];
  origin.delete();
  xPoint.delete();
  yPoint.delete();
  zPoint.delete();
  return [
    x[0],
    y[0],
    z[0],
    o[0],
    x[1],
    y[1],
    z[1],
    o[1],
    x[2],
    y[2],
    z[2],
    o[2]
  ];
};
var applyTransformation = (shape, transform) => {
  const manifoldTransform = manifoldTransformFromTransformation(transform);
  return shape.transform(manifoldTransform);
};
var MeshShape = class MeshShape2 extends WrappingObj {
  constructor(manifoldShape) {
    super(manifoldShape);
    manifoldShape.numVert();
  }
  clone() {
    const mesh2 = this.wrapped.getMesh();
    const copy = new (getManifold()).Manifold(mesh2);
    return new MeshShape2(copy);
  }
  fuse(other, _options) {
    const newShape = this.wrapped.add(other.wrapped);
    return new MeshShape2(newShape);
  }
  cut(other, _options) {
    const newShape = this.wrapped.subtract(other.wrapped);
    return new MeshShape2(newShape);
  }
  intersect(other) {
    const newShape = this.wrapped.intersect(other.wrapped);
    return new MeshShape2(newShape);
  }
  translate(vectorOrxDist, yDist = 0, zDist = 0) {
    const translation = typeof vectorOrxDist === "number" ? [
      vectorOrxDist,
      yDist,
      zDist
    ] : asVec3(vectorOrxDist);
    const newShape = this.wrapped.translate(translation);
    return new MeshShape2(newShape);
  }
  translateX(distance) {
    return this.translate([
      distance,
      0,
      0
    ]);
  }
  translateY(distance) {
    return this.translate([
      0,
      distance,
      0
    ]);
  }
  translateZ(distance) {
    return this.translate([
      0,
      0,
      distance
    ]);
  }
  rotate(angleOrVector, position = [
    0,
    0,
    0
  ], direction = [
    0,
    0,
    1
  ]) {
    if (typeof angleOrVector !== "number") {
      const newShape2 = this.wrapped.rotate(asVec3(angleOrVector));
      return new MeshShape2(newShape2);
    }
    const transform = new Transformation();
    transform.rotate(angleOrVector, position, direction);
    const newShape = applyTransformation(this.wrapped, transform);
    return new MeshShape2(newShape);
  }
  scale(scale2, center) {
    const transform = new Transformation();
    transform.scale(center ?? [
      0,
      0,
      0
    ], scale2);
    const newShape = applyTransformation(this.wrapped, transform);
    return new MeshShape2(newShape);
  }
  mirror(inputPlane, origin) {
    const transform = new Transformation();
    transform.mirror(inputPlane, origin);
    const newShape = applyTransformation(this.wrapped, transform);
    return new MeshShape2(newShape);
  }
  simplify(tolerance) {
    const newShape = this.wrapped.simplify(tolerance);
    return new MeshShape2(newShape);
  }
  refine(n) {
    return new MeshShape2(this.wrapped.refine(n));
  }
  refineToLength(length) {
    return new MeshShape2(this.wrapped.refineToLength(length));
  }
  refineToTolerance(tolerance) {
    return new MeshShape2(this.wrapped.refineToTolerance(tolerance));
  }
  hull() {
    return new MeshShape2(this.wrapped.hull());
  }
  asOriginal() {
    return new MeshShape2(this.wrapped.asOriginal());
  }
  mesh() {
    const mesh2 = this.wrapped.calculateNormals(0, 0.1).getMesh();
    const numProp = mesh2.numProp ?? 3;
    const vertProperties = Array.from(mesh2.vertProperties);
    const triangles = Array.from(mesh2.triVerts);
    const vertices = [];
    const numVert = mesh2.numVert ?? Math.floor(vertProperties.length / numProp);
    const normalOffset = numProp >= 6 ? 3 : -1;
    const normals = [];
    for (let i = 0; i < numVert; i++) {
      const base = i * numProp;
      vertices.push(vertProperties[base], vertProperties[base + 1], vertProperties[base + 2]);
      if (normalOffset >= 0 && normalOffset + 2 < numProp) normals.push(vertProperties[base + normalOffset], vertProperties[base + normalOffset + 1], vertProperties[base + normalOffset + 2]);
    }
    return {
      vertices,
      triangles,
      normals,
      vertProperties,
      numProp
    };
  }
  get boundingBox() {
    const bbox = this.wrapped.boundingBox();
    return BoundingBox.fromBounds([
      bbox.min[0],
      bbox.min[1],
      bbox.min[2]
    ], [
      bbox.max[0],
      bbox.max[1],
      bbox.max[2]
    ]);
  }
  volume() {
    return this.wrapped.volume();
  }
  surfaceArea() {
    return this.wrapped.surfaceArea();
  }
  numTri() {
    return this.wrapped.numTri();
  }
  numVert() {
    return this.wrapped.numVert();
  }
  numEdge() {
    return this.wrapped.numEdge();
  }
  get isEmpty() {
    return this.wrapped.isEmpty();
  }
  /**
  * Exports the mesh shape as an STL file Blob.
  *
  * Since MeshShape is already a triangle mesh, no tessellation parameters
  * are needed (tolerance/angularTolerance are accepted but ignored for
  * API compatibility).
  *
  * @category Shape Export
  */
  blobSTL({ binary = false } = {}) {
    const { vertices, triangles } = this.mesh();
    const numTriangles = triangles.length / 3;
    if (binary) {
      const bufferSize = 84 + numTriangles * 50;
      const buffer = new ArrayBuffer(bufferSize);
      const view = new DataView(buffer);
      view.setUint32(80, numTriangles, true);
      let offset2 = 84;
      for (let i = 0; i < numTriangles; i++) {
        const i0 = triangles[i * 3];
        const i1 = triangles[i * 3 + 1];
        const i2 = triangles[i * 3 + 2];
        const ax = vertices[i0 * 3], ay = vertices[i0 * 3 + 1], az = vertices[i0 * 3 + 2];
        const bx = vertices[i1 * 3], by = vertices[i1 * 3 + 1], bz = vertices[i1 * 3 + 2];
        const cx = vertices[i2 * 3], cy = vertices[i2 * 3 + 1], cz = vertices[i2 * 3 + 2];
        const ux = bx - ax, uy = by - ay, uz = bz - az;
        const vx = cx - ax, vy = cy - ay, vz = cz - az;
        let nx = uy * vz - uz * vy;
        let ny = uz * vx - ux * vz;
        let nz = ux * vy - uy * vx;
        const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
        if (len > 0) {
          nx /= len;
          ny /= len;
          nz /= len;
        }
        view.setFloat32(offset2, nx, true);
        offset2 += 4;
        view.setFloat32(offset2, ny, true);
        offset2 += 4;
        view.setFloat32(offset2, nz, true);
        offset2 += 4;
        view.setFloat32(offset2, ax, true);
        offset2 += 4;
        view.setFloat32(offset2, ay, true);
        offset2 += 4;
        view.setFloat32(offset2, az, true);
        offset2 += 4;
        view.setFloat32(offset2, bx, true);
        offset2 += 4;
        view.setFloat32(offset2, by, true);
        offset2 += 4;
        view.setFloat32(offset2, bz, true);
        offset2 += 4;
        view.setFloat32(offset2, cx, true);
        offset2 += 4;
        view.setFloat32(offset2, cy, true);
        offset2 += 4;
        view.setFloat32(offset2, cz, true);
        offset2 += 4;
        view.setUint16(offset2, 0, true);
        offset2 += 2;
      }
      return new Blob([buffer], { type: "application/sla" });
    }
    const lines = ["solid mesh"];
    for (let i = 0; i < numTriangles; i++) {
      const i0 = triangles[i * 3];
      const i1 = triangles[i * 3 + 1];
      const i2 = triangles[i * 3 + 2];
      const ax = vertices[i0 * 3], ay = vertices[i0 * 3 + 1], az = vertices[i0 * 3 + 2];
      const bx = vertices[i1 * 3], by = vertices[i1 * 3 + 1], bz = vertices[i1 * 3 + 2];
      const cx = vertices[i2 * 3], cy = vertices[i2 * 3 + 1], cz = vertices[i2 * 3 + 2];
      const ux = bx - ax, uy = by - ay, uz = bz - az;
      const vx = cx - ax, vy = cy - ay, vz = cz - az;
      let nx = uy * vz - uz * vy;
      let ny = uz * vx - ux * vz;
      let nz = ux * vy - uy * vx;
      const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
      if (len > 0) {
        nx /= len;
        ny /= len;
        nz /= len;
      }
      lines.push(`facet normal ${nx} ${ny} ${nz}`);
      lines.push("  outer loop");
      lines.push(`    vertex ${ax} ${ay} ${az}`);
      lines.push(`    vertex ${bx} ${by} ${bz}`);
      lines.push(`    vertex ${cx} ${cy} ${cz}`);
      lines.push("  endloop");
      lines.push("endfacet");
    }
    lines.push("endsolid mesh");
    return new Blob([lines.join("\n")], { type: "application/sla" });
  }
};
var PLANE_TO_DIR = {
  YZ: "X",
  XZ: "Y",
  XY: "Z"
};
var Finder = class {
  constructor() {
    this.filters = [];
  }
  delete() {
    this.filters = [];
  }
  /**
  * Combine logically a set of filter with an AND operation.
  *
  * You need to pass an array of functions that take a finder as a argument
  * and return the same finder with some filters applied to it.
  *
  * Note that by default filters are applied with and AND operation, but in
  * some case you might want to create them dynamically and use this method.
  *
  * @category Filter Combination
  */
  and(findersList) {
    findersList.forEach((f) => f(this));
    return this;
  }
  /**
  * Invert the result of a particular finder
  *
  * You need to pass a function that take a finder as a argument
  * and return the same finder with some filters applied to it.
  *
  * @category Filter Combination
  */
  not(finderFun) {
    const finder = new this.constructor();
    finderFun(finder);
    const notFilter = ({ element }) => !finder.shouldKeep(element);
    this.filters.push(notFilter);
    return this;
  }
  /**
  * Combine logically a set of filter with an OR operation.
  *
  * You need to pass an array of functions that take a finder as a argument
  * and return the same finder with some filters applied to it.
  *
  * @category Filter Combination
  */
  either(findersList) {
    const builtFinders = findersList.map((finderFunction) => {
      const finder = new this.constructor();
      finderFunction(finder);
      return finder;
    });
    const eitherFilter = ({ element }) => builtFinders.some((finder) => finder.shouldKeep(element));
    this.filters.push(eitherFilter);
    return this;
  }
  find(shape, { unique = false } = {}) {
    const elements = this.applyFilter(shape);
    if (unique) {
      if (elements.length !== 1) {
        console.error(elements);
        throw new Error("Finder has not found a unique solution");
      }
      return elements[0];
    }
    return elements;
  }
};
var PhysicalProperties = class extends WrappingObj {
  get centerOfMass() {
    const pnt2 = GCWithScope()(this.wrapped.CentreOfMass());
    return [
      pnt2.X(),
      pnt2.Y(),
      pnt2.Z()
    ];
  }
};
var VolumePhysicalProperties = class extends PhysicalProperties {
  get volume() {
    return this.wrapped.Mass();
  }
};
var SurfacePhysicalProperties = class extends PhysicalProperties {
  get area() {
    return this.wrapped.Mass();
  }
};
var LinearPhysicalProperties = class extends PhysicalProperties {
  get length() {
    return this.wrapped.Mass();
  }
};
function measureShapeSurfaceProperties(shape) {
  const oc = getOC();
  const properties = new oc.GProp_GProps();
  oc.BRepGProp.SurfaceProperties(shape.wrapped, properties, false, false);
  return new SurfacePhysicalProperties(properties);
}
function measureShapeLinearProperties(shape) {
  const oc = getOC();
  const properties = new oc.GProp_GProps();
  oc.BRepGProp.LinearProperties(shape.wrapped, properties, false, false);
  return new LinearPhysicalProperties(properties);
}
function measureShapeVolumeProperties(shape) {
  const oc = getOC();
  const properties = new oc.GProp_GProps();
  oc.BRepGProp.VolumeProperties(shape.wrapped, properties, false, false, false);
  return new VolumePhysicalProperties(properties);
}
function measureVolume(shape) {
  return measureShapeVolumeProperties(shape).volume;
}
function measureArea(shape) {
  return measureShapeSurfaceProperties(shape).area;
}
function measureLength(shape) {
  return measureShapeLinearProperties(shape).length;
}
var DistanceTool = class extends WrappingObj {
  constructor() {
    const oc = getOC();
    super(new oc.BRepExtrema_DistShapeShape());
  }
  distanceBetween(shape1, shape2) {
    this.wrapped.LoadS1(shape1.wrapped);
    this.wrapped.LoadS2(shape2.wrapped);
    this.wrapped.Perform();
    return this.wrapped.Value();
  }
};
function measureDistanceBetween(shape1, shape2) {
  return new DistanceTool().distanceBetween(shape1, shape2);
}
var DistanceQuery = class extends WrappingObj {
  constructor(shape) {
    const oc = getOC();
    super(new oc.BRepExtrema_DistShapeShape());
    this.wrapped.LoadS1(shape.wrapped);
  }
  distanceTo(shape) {
    this.wrapped.LoadS2(shape.wrapped);
    this.wrapped.Perform();
    return this.wrapped.Value();
  }
};
var Finder3d = class extends Finder {
  /**
  * Filter to find elements following a custom function.
  *
  * @category Filter
  */
  when(filter) {
    this.filters.push(filter);
    return this;
  }
  /**
  * Filter to find elements that are in the list.
  *
  * This deletes the elements in the list as the filter deletion.
  *
  * @category Filter
  */
  inList(elementList) {
    const elementInList = ({ element }) => {
      return !!elementList.find((e) => e.isSame(element));
    };
    this.filters.push(elementInList);
    return this;
  }
  /**
  * Filter to find elements that are at a specified angle (in degrees) with
  * a direction.
  *
  * The element direction corresponds to its normal in the case of a face.
  *
  * @category Filter
  */
  atAngleWith(direction = "Z", angle = 0) {
    const myDirection = makeDirVector(direction);
    const checkAngle = ({ normal }) => {
      if (!normal) return false;
      const angleOfNormal = Math.acos(Math.abs(normal.dot(myDirection)));
      return Math.abs(angleOfNormal - DEG2RAD * angle) < 1e-6;
    };
    this.filters.push(checkAngle);
    return this;
  }
  /**
  * Filter to find elements that are at a specified distance from a point,
  * within the given tolerance.
  *
  * @category Filter
  */
  atDistance(distance, point = [
    0,
    0,
    0
  ], tolerance = 1e-6) {
    const query = new DistanceQuery(makeVertex(point));
    const checkPoint = ({ element }) => {
      return Math.abs(query.distanceTo(element) - distance) < tolerance;
    };
    this.filters.push(checkPoint);
    return this;
  }
  /**
  * Filter to find elements that contain a certain point
  *
  * @category Filter
  */
  containsPoint(point) {
    return this.near(point);
  }
  /**
  * Filter to find elements that are near a certain point, within the given
  * tolerance.
  *
  * @category Filter
  */
  near(point, tolerance = 1e-6) {
    return this.atDistance(0, point, tolerance);
  }
  /**
  * Filter to find elements that are within a certain distance from a point.
  *
  * @category Filter
  */
  withinDistance(distance, point = [
    0,
    0,
    0
  ]) {
    const query = new DistanceQuery(makeVertex(point));
    const checkPoint = ({ element }) => {
      return query.distanceTo(element) - distance < 1e-6;
    };
    this.filters.push(checkPoint);
    return this;
  }
  /**
  * Filter to find elements that are within a box
  *
  * The elements that are not fully contained in the box are also found.
  *
  * @category Filter
  */
  inBox(corner1, corner2) {
    const box = makeBox(corner1, corner2);
    return this.inShape(box);
  }
  /**
  * Filter to find elements that are within a generic shape
  *
  * The elements that are not fully contained in the shape are also found.
  *
  * @category Filter
  */
  inShape(shape) {
    const query = new DistanceQuery(shape);
    const checkPoint = ({ element }) => {
      return query.distanceTo(element) < 1e-6;
    };
    this.filters.push(checkPoint);
    return this;
  }
};
var EdgeFinder = class EdgeFinder2 extends Finder3d {
  clone() {
    const ef = new EdgeFinder2();
    ef.filters = [...this.filters];
    return ef;
  }
  /**
  * Filter to find edges that are in a certain direction
  *
  * @category Filter
  */
  inDirection(direction) {
    return this.atAngleWith(direction, 0);
  }
  /**
  * Filter to find edges of a certain length
  *
  * @category Filter
  */
  ofLength(length) {
    const check2 = ({ element }) => {
      if (typeof length === "number") return Math.abs(element.length - length) < 1e-9;
      return length(element.length);
    };
    this.filters.push(check2);
    return this;
  }
  /**
  * Filter to find edges that are of a cetain curve type.
  *
  * @category Filter
  */
  ofCurveType(curveType2) {
    const check2 = ({ element }) => {
      return element.geomType === curveType2;
    };
    this.filters.push(check2);
    return this;
  }
  /**
  * Filter to find edges that are parallel to a plane.
  *
  * Note that this will work only in lines (but the method does not
  * check this assumption).
  *
  * @category Filter
  */
  parallelTo(plane) {
    if (typeof plane === "string" && PLANE_TO_DIR[plane]) return this.atAngleWith(PLANE_TO_DIR[plane], 90);
    if (typeof plane !== "string" && plane instanceof Plane) return this.atAngleWith(plane.zDir, 90);
    if (typeof plane !== "string" && plane.normalAt) {
      const normal = plane.normalAt();
      this.atAngleWith(normal, 90);
      return this;
    }
    return this;
  }
  /**
  * Filter to find edges that within a plane.
  *
  * Note that this will work only in lines (but the method does not
  * check this assumption).
  *
  * @category Filter
  */
  inPlane(inputPlane, origin) {
    const plane = inputPlane instanceof Plane ? makePlane(inputPlane) : makePlane(inputPlane, origin);
    this.parallelTo(plane);
    const firstPointInPlane = ({ element }) => {
      const point = element.startPoint;
      const projectedPoint = point.projectToPlane(plane);
      return point.equals(projectedPoint);
    };
    this.filters.push(firstPointInPlane);
    return this;
  }
  shouldKeep(element) {
    let normal = null;
    try {
      normal = element.tangentAt().normalized();
    } catch (error) {
      console.error("failed to compute a normal", error);
    }
    return this.filters.every((filter) => filter({
      normal,
      element
    }));
  }
  applyFilter(shape) {
    return shape.edges.filter((edge) => {
      return this.shouldKeep(edge);
    });
  }
};
var FaceFinder = class FaceFinder2 extends Finder3d {
  clone() {
    const ff = new FaceFinder2();
    ff.filters = [...this.filters];
    return ff;
  }
  /** Filter to find faces that are parallel to plane or another face
  *
  * Note that this will work only in planar faces (but the method does not
  * check this assumption).
  *
  * @category Filter
  */
  parallelTo(plane) {
    if (typeof plane === "string" && PLANE_TO_DIR[plane]) return this.atAngleWith(PLANE_TO_DIR[plane]);
    if (typeof plane !== "string" && plane instanceof Plane) return this.atAngleWith(plane.zDir);
    if (typeof plane !== "string" && plane.normalAt) {
      const normal = plane.normalAt();
      this.atAngleWith(normal);
      return this;
    }
    return this;
  }
  /**
  * Filter to find faces that are of a cetain surface type.
  *
  * @category Filter
  */
  ofSurfaceType(surfaceType2) {
    const check2 = ({ element }) => {
      return element.geomType === surfaceType2;
    };
    this.filters.push(check2);
    return this;
  }
  /** Filter to find faces that are contained in a plane.
  *
  * Note that this will work only in planar faces (but the method does not
  * check this assumption).
  *
  * @category Filter
  */
  inPlane(inputPlane, origin) {
    const plane = inputPlane instanceof Plane ? makePlane(inputPlane) : makePlane(inputPlane, origin);
    this.parallelTo(plane);
    const centerInPlane = ({ element }) => {
      const point = element.center;
      const projectedPoint = point.projectToPlane(plane);
      return point.equals(projectedPoint);
    };
    this.filters.push(centerInPlane);
    return this;
  }
  shouldKeep(element) {
    const normal = element.normalAt();
    return this.filters.every((filter) => filter({
      normal,
      element
    }));
  }
  applyFilter(shape) {
    return shape.faces.filter((face) => {
      return this.shouldKeep(face);
    });
  }
};
var blueprintCorners = function(blueprint) {
  return blueprint.curves.map((curve, index) => {
    return {
      firstCurve: curve,
      secondCurve: blueprint.curves[(index + 1) % blueprint.curves.length],
      point: curve.lastPoint
    };
  });
};
var PI_2 = 2 * Math.PI;
var positiveHalfAngle = (angle) => {
  const limitedAngle = angle % PI_2;
  const coterminalAngle = limitedAngle < 0 ? limitedAngle + PI_2 : limitedAngle;
  if (coterminalAngle < Math.PI) return coterminalAngle;
  if (coterminalAngle === Math.PI) return 0;
  return Math.abs(coterminalAngle - PI_2);
};
var CornerFinder = class CornerFinder2 extends Finder {
  clone() {
    const ef = new CornerFinder2();
    ef.filters = [...this.filters];
    return ef;
  }
  /**
  * Filter to find corner that have their point are in the list.
  *
  * @category Filter
  */
  inList(elementList) {
    const elementInList = ({ element }) => {
      return !!elementList.find((e) => samePoint$2(e, element.point));
    };
    this.filters.push(elementInList);
    return this;
  }
  /**
  * Filter to find elements that are at a specified distance from a point.
  *
  * @category Filter
  */
  atDistance(distance, point = [0, 0]) {
    function elementAtDistance({ element }) {
      return Math.abs(distance2d(point, element.point) - distance) < 1e-9;
    }
    this.filters.push(elementAtDistance);
    return this;
  }
  /**
  * Filter to find elements that contain a certain point
  *
  * @category Filter
  */
  atPoint(point) {
    function elementAtPoint({ element }) {
      return samePoint$2(point, element.point);
    }
    this.filters.push(elementAtPoint);
    return this;
  }
  /**
  * Filter to find elements that are within a box
  *
  * @category Filter
  */
  inBox(corner1, corner2) {
    const [x1, y1] = corner1;
    const [x2, y2] = corner2;
    const minX = Math.min(x1, x2);
    const maxX = Math.max(x1, x2);
    const minY = Math.min(y1, y2);
    const maxY = Math.max(y1, y2);
    function elementInBox({ element }) {
      const [x, y] = element.point;
      return x >= minX && x <= maxX && y >= minY && y <= maxY;
    }
    this.filters.push(elementInBox);
    return this;
  }
  /**
  * Filter to find corner that a certain angle between them - only between
  * 0 and 180.
  *
  * @category Filter
  */
  ofAngle(angle) {
    function elementOfAngle({ element }) {
      const tgt1 = element.firstCurve.tangentAt(1);
      const tgt2 = element.secondCurve.tangentAt(0);
      return Math.abs(positiveHalfAngle(angle2d(tgt1, tgt2)) - positiveHalfAngle(DEG2RAD * angle)) < 1e-9;
    }
    this.filters.push(elementOfAngle);
    return this;
  }
  shouldKeep(element) {
    return this.filters.every((filter) => filter({
      normal: null,
      element
    }));
  }
  applyFilter(blueprint) {
    return blueprintCorners(blueprint).filter((corner) => {
      return this.shouldKeep(corner);
    });
  }
};
function getSingleFace(f, shape) {
  if (f instanceof Face) return f;
  return (f instanceof FaceFinder ? f : f(new FaceFinder(), shape)).find(shape, { unique: true });
}
var AXIS_INDEX = {
  X: 0,
  Y: 1,
  Z: 2
};
var atShapeExtremum = (shape, axis, extremum, tolerance = 1e-6) => {
  const axisIndex = AXIS_INDEX[axis];
  const boundIndex = extremum === "min" ? 0 : 1;
  const shapeBox = shape.boundingBox;
  const shapeExtreme = shapeBox.bounds[boundIndex][axisIndex];
  shapeBox.delete();
  return ({ element }) => {
    const elementBox = element.boundingBox;
    const elementExtreme = elementBox.bounds[boundIndex][axisIndex];
    elementBox.delete();
    return Math.abs(elementExtreme - shapeExtreme) <= tolerance;
  };
};
var topMost = (shape, tolerance = 1e-6) => atShapeExtremum(shape, "Z", "max", tolerance);
var bottomMost = (shape, tolerance = 1e-6) => atShapeExtremum(shape, "Z", "min", tolerance);
var leftMost = (shape, tolerance = 1e-6) => atShapeExtremum(shape, "X", "min", tolerance);
var rightMost = (shape, tolerance = 1e-6) => atShapeExtremum(shape, "X", "max", tolerance);
var frontMost = (shape, tolerance = 1e-6) => atShapeExtremum(shape, "Y", "max", tolerance);
var backMost = (shape, tolerance = 1e-6) => atShapeExtremum(shape, "Y", "min", tolerance);
var combineFinderFilters = (filters) => {
  const filter = (element) => {
    for (const { filter: filter2, radius } of filters) if (filter2.shouldKeep(element)) return radius;
    return null;
  };
  return [filter, () => filters.forEach((f) => f.filter.delete())];
};
function isChamferRadius(r) {
  if (typeof r === "number") return true;
  if (typeof r === "object" && r !== null) {
    const obj = r;
    return "distances" in obj && Array.isArray(obj.distances) && "selectedFace" in obj || "distance" in obj && "angle" in obj && "selectedFace" in obj;
  }
  return false;
}
function deserializeShape(data) {
  return cast(deserializeTopoShape(data));
}
var Shape = class extends WrappingObj {
  constructor(ocShape) {
    super(ocShape);
  }
  clone() {
    return new this.constructor(downcast(this.wrapped));
  }
  serialize() {
    return serializeShape(this.wrapped);
  }
  get hashCode() {
    return this.oc.ReplicadShapeHasher.HashCode(this.wrapped, HASH_CODE_MAX);
  }
  get isNull() {
    return this.wrapped.IsNull();
  }
  isSame(other) {
    return this.wrapped.IsSame(other.wrapped);
  }
  isEqual(other) {
    return this.wrapped.IsEqual(other.wrapped);
  }
  /**
  * Splits the solid parts of this shape with an oriented plane and groups
  * them by side. Non-solid results are ignored.
  *
  * `offset` translates the splitting plane along its normal. Each side is
  * `null` when empty, the resulting shape when it contains one piece, or a
  * `Compound` when it contains multiple disconnected pieces. Positive is the
  * direction of the plane's normal.
  *
  * @category Shape Modifications
  */
  split(plane = "XY", offset2 = 0, tolerance = 1e-7) {
    const result = splitShape(this.wrapped, plane, offset2, tolerance);
    const castResult = (piece) => {
      if (!piece) return null;
      const resultShape = cast(piece);
      if (resultShape instanceof Solid || resultShape instanceof Compound) return resultShape;
      resultShape.delete();
      throw new Error("Split produced an unexpected non-solid shape");
    };
    return {
      positive: castResult(result.positive),
      negative: castResult(result.negative),
      on: castResult(result.on)
    };
  }
  /**
  * Asserts that this shape is a 3D shape (Shell, Solid, CompSolid, or
  * Compound) and returns it typed as Shape3D. Throws if the shape is not 3D.
  *
  * Useful for chaining after operations that return a generic shape type.
  *
  */
  asShape3D() {
    if (isShape3D(this)) return this;
    throw new Error("Shape is not a 3D shape");
  }
  /**
  * Simplifies the shape by removing unnecessary edges and faces
  */
  simplify() {
    const shapeUpgrader = new (getOC()).ShapeUpgrade_UnifySameDomain(this.wrapped, true, true, false);
    shapeUpgrader.Build();
    const newShape = cast(shapeUpgrader.Shape());
    shapeUpgrader.delete();
    if (this.constructor !== newShape.constructor) throw new Error("unexpected types mismatch");
    return newShape;
  }
  translate(vectorOrxDist, yDist = 0, zDist = 0) {
    const translation = typeof vectorOrxDist === "number" ? [
      vectorOrxDist,
      yDist,
      zDist
    ] : vectorOrxDist;
    const newShape = cast(translate(this.wrapped, translation));
    this.delete();
    if (this.constructor !== newShape.constructor) throw new Error("unexpected types mismatch");
    return newShape;
  }
  /**
  * Translates the shape on the X axis
  *
  * @category Shape Transformations
  */
  translateX(distance) {
    return this.translate([
      distance,
      0,
      0
    ]);
  }
  /**
  * Translates the shape on the Y axis
  *
  * @category Shape Transformations
  */
  translateY(distance) {
    return this.translate([
      0,
      distance,
      0
    ]);
  }
  /**
  * Translates the shape on the Z axis
  *
  * @category Shape Transformations
  */
  translateZ(distance) {
    return this.translate([
      0,
      0,
      distance
    ]);
  }
  /**
  * Rotates the shape
  *
  * @category Shape Transformations
  */
  rotate(angle, position = [
    0,
    0,
    0
  ], direction = [
    0,
    0,
    1
  ]) {
    const newShape = cast(rotate(this.wrapped, angle, position, direction));
    this.delete();
    if (this.constructor !== newShape.constructor) throw new Error("unexpected types mismatch");
    return newShape;
  }
  /**
  * Mirrors the shape through a plane
  *
  * @category Shape Transformations
  */
  mirror(inputPlane, origin) {
    const newShape = cast(mirror(this.wrapped, inputPlane, origin));
    this.delete();
    if (this.constructor !== newShape.constructor) throw new Error("unexpected types mismatch");
    return newShape;
  }
  /**
  * Returns a scaled version of the shape
  *
  * @category Shape Transformations
  */
  scale(scale$1, center = [
    0,
    0,
    0
  ]) {
    const newShape = cast(scale(this.wrapped, center, scale$1));
    this.delete();
    if (this.constructor !== newShape.constructor) throw new Error("unexpected types mismatch");
    return newShape;
  }
  get edges() {
    return Array.from(iterTopo(this.wrapped, "edge"), (edge) => new Edge(edge));
  }
  get faces() {
    return Array.from(iterTopo(this.wrapped, "face"), (face) => new Face(face));
  }
  get solids() {
    return Array.from(iterTopo(this.wrapped, "solid"), (solid) => new Solid(solid));
  }
  get wires() {
    return Array.from(iterTopo(this.wrapped, "wire"), (wire) => new Wire(wire));
  }
  get boundingBox() {
    const bbox = new BoundingBox();
    this.oc.BRepBndLib.AddOptimal(this.wrapped, bbox.wrapped, false, false);
    return bbox;
  }
  /**
  * Exports the current shape as a set of triangle. These can be used by threejs
  * for instance to represent the the shape
  *
  * @category Shape Export
  */
  mesh(options = {}) {
    return mesh(this.wrapped, options);
  }
  /**
  * Exports the current shape as a set of lines. These can be used by threejs
  * for instance to represent the edges of the shape
  *
  * @category Shape Export
  */
  meshEdges(options = {}) {
    return meshEdges(this.wrapped, options);
  }
  /**
  * Exports the current shape as a STEP file as a Blob
  *
  * @category Shape Export
  */
  blobSTEP() {
    return exportShapeSTEP(this.wrapped);
  }
  /**
  * Exports the current shape as a STL file as a Blob
  *
  * In order to create a STL file, the shape needs to be meshed. The
  * tolerances correspond to the values used to mesh the shape.
  *
  * @category Shape Export
  */
  blobSTL(options = {}) {
    return exportShapeSTL(this.wrapped, options);
  }
};
var Vertex = class extends Shape {
  asTuple() {
    const pnt2 = this.oc.BRep_Tool.Pnt(this.wrapped);
    const tuple = [
      pnt2.X(),
      pnt2.Y(),
      pnt2.Z()
    ];
    pnt2.delete();
    return tuple;
  }
};
var _1DShape = class extends Shape {
  get repr() {
    const { startPoint, endPoint } = this;
    const retVal = `start: (${this.startPoint.repr}) end:(${this.endPoint.repr})`;
    startPoint.delete();
    endPoint.delete();
    return retVal;
  }
  get curve() {
    return new Curve(this._geomAdaptor());
  }
  get startPoint() {
    return this.curve.startPoint;
  }
  get endPoint() {
    return this.curve.endPoint;
  }
  tangentAt(position = 0) {
    return this.curve.tangentAt(position);
  }
  pointAt(position = 0) {
    return this.curve.pointAt(position);
  }
  get isClosed() {
    return this.curve.isClosed;
  }
  get isPeriodic() {
    return this.curve.isPeriodic;
  }
  get period() {
    return this.curve.period;
  }
  get geomType() {
    return this.curve.curveType;
  }
  get length() {
    const properties = new this.oc.GProp_GProps();
    this.oc.BRepGProp.LinearProperties(this.wrapped, properties, true, false);
    const length = properties.Mass();
    properties.delete();
    return length;
  }
  get orientation() {
    if (this.wrapped.Orientation() === this.oc.TopAbs_Orientation.TopAbs_FORWARD) return "forward";
    return "backward";
  }
  flipOrientation() {
    return cast(this.wrapped.Reversed());
  }
};
var Edge = class extends _1DShape {
  _geomAdaptor() {
    return new this.oc.BRepAdaptor_Curve(this.wrapped);
  }
};
var Wire = class Wire2 extends _1DShape {
  _geomAdaptor() {
    return new this.oc.BRepAdaptor_CompCurve(this.wrapped, false);
  }
  offset2D(offset2, kind = "arc") {
    const kinds = {
      arc: this.oc.GeomAbs_JoinType.GeomAbs_Arc,
      intersection: this.oc.GeomAbs_JoinType.GeomAbs_Intersection,
      tangent: this.oc.GeomAbs_JoinType.GeomAbs_Tangent
    };
    const offsetter = new this.oc.BRepOffsetAPI_MakeOffset(this.wrapped, kinds[kind], false);
    offsetter.Perform(offset2, 0);
    const newShape = cast(offsetter.Shape());
    offsetter.delete();
    this.delete();
    if (!(newShape instanceof Wire2)) throw new Error("Could not offset with a wire");
    return newShape;
  }
};
var Face = class extends Shape {
  _geomAdaptor() {
    return new this.oc.BRepAdaptor_Surface(this.wrapped, false);
  }
  get surface() {
    return new Surface(this._geomAdaptor());
  }
  get orientation() {
    if (this.wrapped.Orientation() === this.oc.TopAbs_Orientation.TopAbs_FORWARD) return "forward";
    return "backward";
  }
  flipOrientation() {
    return cast(this.wrapped.Reversed());
  }
  get geomType() {
    const surface = this.surface;
    const geomType = surface.surfaceType;
    surface.delete();
    return geomType;
  }
  get UVBounds() {
    return faceUVBounds(this.wrapped);
  }
  pointOnSurface(u, v) {
    return pointOnFace(this.wrapped, u, v);
  }
  uvCoordinates(point) {
    return faceUVCoordinates(this.wrapped, point);
  }
  normalAt(locationVector) {
    return faceNormalAt(this.wrapped, locationVector);
  }
  get center() {
    return faceCenter(this.wrapped);
  }
  outerWire() {
    const newVal = new Wire(this.oc.BRepTools.OuterWire(this.wrapped));
    this.delete();
    return newVal;
  }
  innerWires() {
    const outer = this.clone().outerWire();
    const innerWires = this.wires.filter((w) => !outer.isSame(w));
    outer.delete();
    this.delete();
    return innerWires;
  }
  triangulation(index0 = 0) {
    return triangulateFace(this.wrapped, index0);
  }
};
var _3DShape = class extends Shape {
  /**
  * Builds a new shape out of the two, fused, shapes
  *
  * @category Shape Modifications
  */
  fuse(other, options = {}) {
    const newShape = cast(fuseShapes(this.wrapped, other.wrapped, options));
    if (!isShape3D(newShape)) throw new Error("Could not fuse as a 3d shape");
    return newShape;
  }
  /**
  * Builds a new shape by removing the tool tape from this shape
  *
  * @category Shape Modifications
  */
  cut(tool, options = {}) {
    const newShape = cast(cutShape(this.wrapped, tool.wrapped, options));
    if (!isShape3D(newShape)) throw new Error("Could not cut as a 3d shape");
    return newShape;
  }
  /**
  * Builds a new shape by intersecting this shape and another
  *
  * @category Shape Modifications
  */
  intersect(tool) {
    const newShape = cast(intersectShapes(this.wrapped, tool.wrapped));
    if (!isShape3D(newShape)) throw new Error("Could not intersect as a 3d shape");
    return newShape;
  }
  /**
  * Cuts this shape with a plane and retains one of its half-spaces.
  * Positive is the direction of the plane normal and is kept by default.
  *
  * @category Shape Modifications
  */
  cutPlane(plane = "XY", offset2 = 0, keep = "positive") {
    const result = cutShapeWithPlane(this.wrapped, plane, offset2, keep);
    if (!result) return null;
    const newShape = cast(result);
    if (!(newShape instanceof Solid) && !(newShape instanceof Compound)) {
      newShape.delete();
      throw new Error("Could not cut plane as a solid shape");
    }
    return newShape;
  }
  meshShape(options) {
    const { triangles, vertices } = this.mesh(options);
    const tol = options?.tolerance ?? 1e-6;
    const scale2 = tol === 0 ? 0 : 1 / tol;
    const keyFor = (x, y, z) => {
      if (scale2 === 0) return `${x}|${y}|${z}`;
      return `${Math.round(x * scale2)}|${Math.round(y * scale2)}|${Math.round(z * scale2)}`;
    };
    const mergeFrom = [];
    const mergeTo = [];
    const seen = /* @__PURE__ */ new Map();
    for (let i = 0; i < vertices.length; i += 3) {
      const x = vertices[i];
      const y = vertices[i + 1];
      const z = vertices[i + 2];
      const key = keyFor(x, y, z);
      const existing = seen.get(key);
      const idx = i / 3;
      if (existing !== void 0) {
        mergeFrom.push(idx);
        mergeTo.push(existing);
      } else seen.set(key, idx);
    }
    const meshData = {
      vertProperties: new Float32Array(vertices),
      triVerts: new Uint32Array(triangles),
      numProp: 3,
      mergeFromVert: mergeFrom.length ? new Uint32Array(mergeFrom) : void 0,
      mergeToVert: mergeTo.length ? new Uint32Array(mergeTo) : void 0
    };
    const manifold = getManifold();
    const mesh2 = new manifold.Mesh(meshData);
    return new MeshShape(new manifold.Manifold(mesh2));
  }
  shell(thicknessOrConfig, toleranceOrFinderFcn = null, tolerance = 1e-3) {
    const tol = typeof toleranceOrFinderFcn === "number" ? toleranceOrFinderFcn : tolerance;
    let filter;
    let thickness;
    if (typeof thicknessOrConfig === "number") {
      thickness = thicknessOrConfig;
      const ff = new FaceFinder();
      filter = typeof toleranceOrFinderFcn === "function" ? toleranceOrFinderFcn(ff, this) : ff;
    } else {
      thickness = thicknessOrConfig.thickness;
      filter = thicknessOrConfig.filter;
    }
    const filteredFaces = filter.find(this);
    const newShape = cast(shellShape(this.wrapped, {
      faces: filteredFaces,
      thickness,
      tolerance: tol
    }));
    if (!isShape3D(newShape)) throw new Error("Could not shell as a 3d shape");
    return newShape;
  }
  /**
  * Creates a new shapes with some edges filletted, as specified in the
  * radius config.
  *
  * If the radius is a filter finder object (with an EdgeFinder as filter,
  * and a radius to specifiy the fillet radius), the fillet will only be
  * applied to the edges as selected by the finder. The finder will be
  * deleted unless it is explicitly specified to `keep` it.
  *
  * If the radius is a number all the edges will be filletted.
  *
  * If the radius is a function edges will be filletted according to the
  * value returned by the function (0 or null will not add any fillet).
  *
  * @category Shape Modifications
  */
  fillet(radiusConfig, filter) {
    let config = radiusConfig;
    if (isFilletRadius(radiusConfig) && filter) config = {
      radius: radiusConfig,
      filter: filter(new EdgeFinder(), this)
    };
    const selectedEdges = selectEdgeRadii(this.wrapped, config, isFilletRadius, (edge) => new Edge(edge));
    const newShape = cast(filletShape(this.wrapped, selectedEdges));
    if (!isShape3D(newShape)) throw new Error("Could not fillet as a 3d shape");
    return newShape;
  }
  /**
  * Creates a new shapes with some edges chamfered, as specified in the
  * radius config.
  *
  * If the radius is a filter finder object (with an EdgeFinder as filter,
  * and a radius to specifiy the chamfer radius), the fillet will only be
  * applied to the edges as selected by the finder. The finder will be
  * deleted unless it is explicitly specified to `keep` it.
  *
  * If the radius is a number all the edges will be chamfered.
  *
  * If the radius is a function edges will be chamfered according to the
  * value returned by the function (0 or null will not add any chamfer).
  *
  * @category Shape Modifications
  */
  chamfer(radiusConfig, filter) {
    let config = radiusConfig;
    if (isChamferRadius(radiusConfig) && filter) config = {
      radius: radiusConfig,
      filter: filter(new EdgeFinder(), this)
    };
    const selectedEdges = selectEdgeRadii(this.wrapped, config, isChamferRadius, (edge) => new Edge(edge));
    const chamfers = mapSelectedEdges(selectedEdges, ({ radius, edge }) => {
      if (typeof radius === "number") return {
        radius,
        edge
      };
      const face = radius.selectedFace(new FaceFinder(), this).find(this, { unique: true });
      if (!face) throw new Error("Could not find face for chamfer");
      return "distances" in radius ? {
        edge,
        face,
        distances: radius.distances
      } : {
        edge,
        face,
        distance: radius.distance,
        angle: radius.angle
      };
    });
    const newShape = cast(chamferShape(this.wrapped, chamfers));
    if (!isShape3D(newShape)) throw new Error("Could not chamfer as a 3d shape");
    return newShape;
  }
  /**
  * Applies a draft angle to selected faces of the shape.
  *
  * A draft angle is a taper applied to faces, commonly used in moulding
  * and casting to allow parts to be released from a mould. The selected
  * faces are tilted by the given angle relative to the neutral plane.
  *
  * The face finder function receives a `FaceFinder` and should return it
  * with the desired filters applied to select which faces to draft.
  *
  * The neutral plane defines the reference from which the draft angle is
  * measured — faces are unchanged where they intersect this plane and
  * taper away from it.
  *
  * @category Shape Modifications
  */
  draft(angle, faceFinder, neutralPlane = "XY") {
    const faces = faceFinder(new FaceFinder(), this).find(this);
    const newShape = cast(draftShape(this.wrapped, {
      faces,
      angle,
      neutralPlane
    }));
    if (!isShape3D(newShape)) throw new Error("Could not draft as a 3d shape");
    return newShape;
  }
};
var Shell = class extends _3DShape {
};
var Solid = class extends _3DShape {
};
var CompSolid = class extends _3DShape {
};
var Compound = class extends _3DShape {
};
function isShape3D(shape) {
  return shape instanceof Shell || shape instanceof Solid || shape instanceof CompSolid || shape instanceof Compound;
}
function isWire(shape) {
  return shape instanceof Wire;
}
var cast = makeCaster({
  vertex: Vertex,
  edge: Edge,
  wire: Wire,
  face: Face,
  shell: Shell,
  solid: Solid,
  solidCompound: CompSolid,
  compound: Compound
});
var makeLine = (v1, v2) => {
  return new Edge(new (getOC()).BRepBuilderAPI_MakeEdge(asPnt(v1), asPnt(v2)).Edge());
};
var makeCircle = (radius, center = [
  0,
  0,
  0
], normal = [
  0,
  0,
  1
]) => {
  const oc = getOC();
  const [r, gc] = localGC();
  const ax = r(makeAx2(center, normal));
  const circleGp = r(new oc.gp_Circ(ax, radius));
  const shape = new Edge(r(new oc.BRepBuilderAPI_MakeEdge(circleGp)).Edge());
  gc();
  return shape;
};
var makeEllipse = (majorRadius, minorRadius, center = [
  0,
  0,
  0
], normal = [
  0,
  0,
  1
], xDir) => {
  const oc = getOC();
  const [r, gc] = localGC();
  const ax = r(makeAx2(center, normal, xDir));
  if (minorRadius > majorRadius) throw new Error("The minor radius must be smaller than the major one");
  const ellipseGp = r(new oc.gp_Elips(ax, majorRadius, minorRadius));
  const shape = new Edge(r(new oc.BRepBuilderAPI_MakeEdge(ellipseGp)).Edge());
  gc();
  return shape;
};
var makeHelix = (pitch, height, radius, center = [
  0,
  0,
  0
], dir = [
  0,
  0,
  1
], lefthand = false) => {
  const oc = getOC();
  const [r, gc] = localGC();
  let myDir = 2 * Math.PI;
  if (lefthand) myDir = -2 * Math.PI;
  const geomLine = r(new oc.Geom2d_Line(r(new oc.gp_Pnt2d(0, 0)), r(new oc.gp_Dir2d(myDir, pitch))));
  const nTurns = height / pitch;
  const uStart = geomLine.Value(0);
  const uStop = geomLine.Value(nTurns * Math.sqrt((2 * Math.PI) ** 2 + pitch ** 2));
  const geomSeg = r(new oc.GC_MakeSegment2d(uStart, uStop));
  const geomSurf = new oc.Geom_CylindricalSurface(r(makeAx3(center, dir)), radius);
  const e = r(new oc.BRepBuilderAPI_MakeEdge(r(geomSeg.Value()), r(geomSurf))).Edge();
  const w = r(new oc.BRepBuilderAPI_MakeWire(e)).Wire();
  oc.BRepLib.BuildCurves3d(w);
  gc();
  return new Wire(w);
};
var makeThreePointArc = (v1, v2, v3) => {
  const oc = getOC();
  const curve = new oc.GC_MakeArcOfCircle(asPnt(v1), asPnt(v2), asPnt(v3)).Value();
  return new Edge(new oc.BRepBuilderAPI_MakeEdge(curve).Edge());
};
var makeEllipseArc = (majorRadius, minorRadius, startAngle, endAngle, center = [
  0,
  0,
  0
], normal = [
  0,
  0,
  1
], xDir) => {
  const oc = getOC();
  const [r, gc] = localGC();
  const ax = r(makeAx2(center, normal, xDir));
  if (minorRadius > majorRadius) throw new Error("The minor radius must be smaller than the major one");
  const ellipseGp = r(new oc.gp_Elips(ax, majorRadius, minorRadius));
  const shape = new Edge(r(new oc.BRepBuilderAPI_MakeEdge(ellipseGp, startAngle, endAngle)).Edge());
  gc();
  return shape;
};
var makeBSplineApproximation = function makeBSplineApproximation2(points, { tolerance = 1e-3, smoothing = null, degMax = 6, degMin = 1 } = {}) {
  const oc = getOC();
  const [r, gc] = localGC();
  const pnts = r(new oc.NCollection_Array1_gp_Pnt(1, points.length));
  points.forEach((point, index) => {
    pnts.SetValue(index + 1, r(asPnt(point)));
  });
  let splineBuilder;
  if (smoothing) {
    splineBuilder = r(new oc.GeomAPI_PointsToBSpline());
    splineBuilder.Init(pnts, smoothing[0], smoothing[1], smoothing[2], degMax, oc.GeomAbs_Shape.GeomAbs_C2, tolerance);
  } else {
    splineBuilder = r(new oc.GeomAPI_PointsToBSpline());
    splineBuilder.Init(pnts, degMin, degMax, oc.GeomAbs_Shape.GeomAbs_C2, tolerance);
  }
  if (!splineBuilder.IsDone()) {
    gc();
    throw new Error("B-spline approximation failed");
  }
  const curve = r(r(splineBuilder.Curve()));
  const edge = new Edge(new oc.BRepBuilderAPI_MakeEdge(curve).Edge());
  gc();
  return edge;
};
var makeBezierCurve = (points) => {
  const oc = getOC();
  const arrayOfPoints = new oc.NCollection_Array1_gp_Pnt(1, points.length);
  points.forEach((p, i) => {
    arrayOfPoints.SetValue(i + 1, asPnt(p));
  });
  const curve = new oc.Geom_BezierCurve(arrayOfPoints);
  return new Edge(new oc.BRepBuilderAPI_MakeEdge(curve).Edge());
};
var makeTangentArc = (startPoint, startTgt, endPoint) => {
  const oc = getOC();
  const [r, gc] = localGC();
  const curve = r(r(new oc.GC_MakeArcOfCircle(r(asPnt(startPoint)), new Vector(startTgt).wrapped, r(asPnt(endPoint))).Value()));
  const edge = new Edge(r(new oc.BRepBuilderAPI_MakeEdge(curve)).Edge());
  gc();
  return edge;
};
var assembleWire = (listOfEdges) => {
  const oc = getOC();
  const wireBuilder = new oc.BRepBuilderAPI_MakeWire();
  listOfEdges.forEach((e) => {
    if (e instanceof Edge) wireBuilder.Add(e.wrapped);
    if (e instanceof Wire) wireBuilder.Add(e.wrapped);
  });
  wireBuilder.Build();
  const res = wireBuilder.Error();
  if (res !== oc.BRepBuilderAPI_WireError.BRepBuilderAPI_WireDone) {
    const errorNames = /* @__PURE__ */ new Map([
      [oc.BRepBuilderAPI_WireError.BRepBuilderAPI_EmptyWire, "empty wire"],
      [oc.BRepBuilderAPI_WireError.BRepBuilderAPI_NonManifoldWire, "non manifold wire"],
      [oc.BRepBuilderAPI_WireError.BRepBuilderAPI_DisconnectedWire, "disconnected wire"]
    ]);
    throw new Error(`Failed to build the wire, ${errorNames.get(res) || "unknown error"}`);
  }
  const wire = new Wire(wireBuilder.Wire());
  wireBuilder.delete();
  return wire;
};
var makeFace = (wire, holes) => {
  const faceBuilder = new (getOC()).BRepBuilderAPI_MakeFace(wire.wrapped, false);
  holes?.forEach((hole) => {
    faceBuilder.Add(hole.wrapped);
  });
  if (!faceBuilder.IsDone()) {
    faceBuilder.delete();
    throw new Error("Failed to build the face. Your wire might be non planar.");
  }
  const face = faceBuilder.Face();
  faceBuilder.delete();
  return new Face(face);
};
var makeNewFaceWithinFace = (originFace, wire) => {
  const oc = getOC();
  const [r, gc] = localGC();
  const surface = r(oc.BRep_Tool.Surface(originFace.wrapped));
  const face = r(new oc.BRepBuilderAPI_MakeFace(surface, wire.wrapped, true)).Face();
  gc();
  return new Face(face);
};
var makeNonPlanarFace = (wire) => {
  const oc = getOC();
  const [r, gc] = localGC();
  const faceBuilder = r(new oc.BRepOffsetAPI_MakeFilling(3, 15, 2, false, 1e-5, 1e-4, 0.01, 0.1, 8, 9));
  wire.edges.forEach((edge) => {
    faceBuilder.Add(r(edge).wrapped, oc.GeomAbs_Shape.GeomAbs_C0, true);
  });
  faceBuilder.Build();
  const newFace = cast(faceBuilder.Shape());
  gc();
  if (!(newFace instanceof Face)) throw new Error("Failed to create a face");
  return newFace;
};
var makeCylinder = (radius, height, location = [
  0,
  0,
  0
], direction = [
  0,
  0,
  1
]) => {
  const oc = getOC();
  const axis = makeAx2(location, direction);
  const cylinder = new oc.BRepPrimAPI_MakeCylinder(axis, radius, height);
  const solid = new Solid(cylinder.Shape());
  axis.delete();
  cylinder.delete();
  return solid;
};
var makeSphere = (radius) => {
  const sphereMaker = new (getOC()).BRepPrimAPI_MakeSphere(radius);
  const sphere = new Solid(sphereMaker.Shape());
  sphereMaker.delete();
  return sphere;
};
var EllpsoidTransform = class extends WrappingObj {
  constructor(x, y, z) {
    const oc = getOC();
    const r = GCWithScope();
    const xyRatio = Math.sqrt(x * y / z);
    const xzRatio = x / xyRatio;
    const yzRatio = y / xyRatio;
    const transform = new oc.gp_GTrsf();
    transform.SetAffinity(makeAx1([
      0,
      0,
      0
    ], [
      0,
      1,
      0
    ]), xzRatio);
    const xy = r(new oc.gp_GTrsf());
    xy.SetAffinity(makeAx1([
      0,
      0,
      0
    ], [
      0,
      0,
      1
    ]), xyRatio);
    const yz = r(new oc.gp_GTrsf());
    yz.SetAffinity(makeAx1([
      0,
      0,
      0
    ], [
      1,
      0,
      0
    ]), yzRatio);
    transform.Multiply(xy);
    transform.Multiply(yz);
    super(transform);
  }
  applyToPoint(p) {
    const oc = getOC();
    const coords = GCWithScope()(p.XYZ());
    this.wrapped.Transforms(coords);
    return new oc.gp_Pnt(coords);
  }
};
var makeEllipsoid = (aLength, bLength, cLength) => {
  const oc = getOC();
  const r = GCWithScope();
  const sphere = r(new oc.gp_Sphere());
  sphere.SetRadius(1);
  const sphericalSurface = r(new oc.Geom_SphericalSurface(sphere));
  const baseSurface = oc.GeomConvert.SurfaceToBSplineSurface(sphericalSurface.UReversed());
  const transform = new EllpsoidTransform(aLength, bLength, cLength);
  for (let u = 1; u <= baseSurface.NbUPoles(); u++) for (let v = 1; v <= baseSurface.NbVPoles(); v++) {
    const newPoint = transform.applyToPoint(baseSurface.Pole(u, v));
    baseSurface.SetPole(u, v, newPoint);
  }
  return makeSolid([cast(r(new oc.BRepBuilderAPI_MakeShell(baseSurface.UReversed(), false)).Shell())]);
};
var makeBox = (corner1, corner2) => {
  const boxMaker = new (getOC()).BRepPrimAPI_MakeBox(asPnt(corner1), asPnt(corner2));
  const box = new Solid(boxMaker.Solid());
  boxMaker.delete();
  return box;
};
var makeVertex = (point) => {
  const oc = getOC();
  const pnt2 = asPnt(point);
  const vertexMaker = new oc.BRepBuilderAPI_MakeVertex(pnt2);
  const vertex = vertexMaker.Vertex();
  vertexMaker.delete();
  return new Vertex(vertex);
};
var makeOffset = (face, offset2, tolerance = 1e-6) => {
  const oc = getOC();
  const offsetBuilder = new oc.BRepOffsetAPI_MakeOffsetShape();
  offsetBuilder.PerformByJoin(face.wrapped, offset2, tolerance, oc.BRepOffset_Mode.BRepOffset_Skin, false, false, oc.GeomAbs_JoinType.GeomAbs_Arc, false);
  const newShape = cast(downcast(offsetBuilder.Shape()));
  offsetBuilder.delete();
  if (!isShape3D(newShape)) throw new Error("Could not offset to a 3d shape");
  return newShape;
};
var compoundShapes = (shapeArray) => {
  const oc = getOC();
  const builder = new oc.TopoDS_Builder();
  const compound = new oc.TopoDS_Compound();
  builder.MakeCompound(compound);
  shapeArray.forEach((s) => {
    builder.Add(compound, s.wrapped);
    s.delete();
  });
  return cast(compound);
};
var makeCompound = compoundShapes;
function _weld(facesOrShells) {
  const oc = getOC();
  const shellBuilder = GCWithScope()(new oc.BRepBuilderAPI_Sewing(1e-6, true, true, true, false));
  facesOrShells.forEach(({ wrapped }) => {
    shellBuilder.Add(wrapped);
  });
  shellBuilder.Perform();
  return cast(downcast(shellBuilder.SewedShape()));
}
function weldShellsAndFaces(facesOrShells, ignoreType = false) {
  const shell = _weld(facesOrShells);
  if (!ignoreType && !(shell instanceof Shell)) throw new Error("Could not make a solid of faces and shells");
  return shell;
}
function makeSolid(facesOrShells) {
  const r = GCWithScope();
  const oc = getOC();
  const shell = _weld(facesOrShells);
  const solid = cast(r(new oc.ShapeFix_Solid()).SolidFromShell(shell.wrapped));
  if (!(solid instanceof Solid)) throw new Error("Could not make a solid of faces and shells");
  return solid;
}
var addHolesInFace = (face, holes) => {
  const oc = getOC();
  const [r, gc] = localGC();
  const faceMaker = r(new oc.BRepBuilderAPI_MakeFace(face.wrapped));
  holes.forEach((wire) => {
    faceMaker.Add(wire.wrapped);
  });
  const builtFace = r(faceMaker.Face());
  const fixer = r(new oc.ShapeFix_Face(builtFace));
  fixer.FixOrientation();
  const newFace = fixer.Face();
  gc();
  return new Face(newFace);
};
var makePolygon = (points) => {
  if (points.length < 3) throw new Error("You need at least 3 points to make a polygon");
  return makeFace(assembleWire(zip([points, [...points.slice(1), points[0]]]).map(([p1, p2]) => makeLine(p1, p2))));
};
var isTangent = (c) => c === "symmetric" || typeof c === "number" || Array.isArray(c) && c.length === 2;
var defaultsSplineConfig = (config) => {
  let conf;
  if (!config) conf = { endTangent: [1, 0] };
  else if (isTangent(config)) conf = { endTangent: config };
  else conf = {
    endTangent: 0,
    ...config
  };
  const { endTangent: endTgt, startFactor = 1, endFactor = 1, startTangent: startTgt } = conf;
  let endTangent;
  if (typeof endTgt === "number") endTangent = polarToCartesian(1, endTgt * DEG2RAD);
  else endTangent = endTgt;
  let startTangent;
  if (typeof startTgt === "number") startTangent = polarToCartesian(1, startTgt * DEG2RAD);
  else startTangent = startTgt;
  return {
    endTangent,
    startFactor,
    endFactor,
    startTangent
  };
};
function radianAngle(ux, uy, vx, vy) {
  const dot = ux * vx + uy * vy;
  const mod = Math.sqrt((ux * ux + uy * uy) * (vx * vx + vy * vy));
  let rad = Math.acos(dot / mod);
  if (ux * vy - uy * vx < 0) rad = -rad;
  return rad;
}
function convertSvgEllipseParams([x1, y1], [x2, y2], rx, ry, phi, fA, fS) {
  const PIx2 = Math.PI * 2;
  if (rx < 0) rx = -rx;
  if (ry < 0) ry = -ry;
  if (rx == 0 || ry == 0) throw Error("rx and ry can not be 0");
  const s_phi = Math.sin(phi);
  const c_phi = Math.cos(phi);
  const hd_x = (x1 - x2) / 2;
  const hd_y = (y1 - y2) / 2;
  const hs_x = (x1 + x2) / 2;
  const hs_y = (y1 + y2) / 2;
  const x1_ = c_phi * hd_x + s_phi * hd_y;
  const y1_ = c_phi * hd_y - s_phi * hd_x;
  const lambda = x1_ * x1_ / (rx * rx) + y1_ * y1_ / (ry * ry);
  if (lambda > 1) {
    rx = rx * Math.sqrt(lambda);
    ry = ry * Math.sqrt(lambda);
  }
  const rxry = rx * ry;
  const rxy1_ = rx * y1_;
  const ryx1_ = ry * x1_;
  const sum_of_sq = rxy1_ * rxy1_ + ryx1_ * ryx1_;
  if (!sum_of_sq) throw Error("start point can not be same as end point");
  let coe = Math.sqrt(Math.abs((rxry * rxry - sum_of_sq) / sum_of_sq));
  if (fA == fS) coe = -coe;
  const cx_ = coe * rxy1_ / ry;
  const cy_ = -coe * ryx1_ / rx;
  const cx = c_phi * cx_ - s_phi * cy_ + hs_x;
  const cy = s_phi * cx_ + c_phi * cy_ + hs_y;
  const xcr1 = (x1_ - cx_) / rx;
  const xcr2 = (x1_ + cx_) / rx;
  const ycr1 = (y1_ - cy_) / ry;
  const ycr2 = (y1_ + cy_) / ry;
  const startAngle = radianAngle(1, 0, xcr1, ycr1);
  let deltaAngle = radianAngle(xcr1, ycr1, -xcr2, -ycr2);
  while (deltaAngle > PIx2) deltaAngle -= PIx2;
  while (deltaAngle < 0) deltaAngle += PIx2;
  if (!fS) deltaAngle -= PIx2;
  let endAngle = startAngle + deltaAngle;
  while (endAngle > PIx2) endAngle -= PIx2;
  while (endAngle < 0) endAngle += PIx2;
  return {
    cx,
    cy,
    startAngle,
    deltaAngle,
    endAngle,
    clockwise: !!fS,
    rx,
    ry
  };
}
var basicFaceExtrusion = (face, extrusionVec) => {
  const solidBuilder = new (getOC()).BRepPrimAPI_MakePrism(face.wrapped, extrusionVec.wrapped, false, true);
  const solid = new Solid(downcast(solidBuilder.Shape()));
  solidBuilder.delete();
  return solid;
};
var revolution = (face, center = [
  0,
  0,
  0
], direction = [
  0,
  0,
  1
], angle = 360) => {
  const oc = getOC();
  const ax = makeAx1(center, direction);
  const revolBuilder = new oc.BRepPrimAPI_MakeRevol(face.wrapped, ax, angle * DEG2RAD, false);
  const shape = cast(revolBuilder.Shape());
  ax.delete();
  revolBuilder.delete();
  if (!isShape3D(shape)) throw new Error("Could not revolve to a 3d shape");
  return shape;
};
function genericSweep(wire, spine, { frenet = false, auxiliarySpine, law = null, transitionMode = "right", withContact, support, forceProfileSpineOthogonality } = {}, shellMode = false) {
  const oc = getOC();
  const withCorrection = transitionMode === "round" ? true : !!forceProfileSpineOthogonality;
  const sweepBuilder = new oc.BRepOffsetAPI_MakePipeShell(spine.wrapped);
  if (transitionMode) {
    const mode = {
      transformed: oc.BRepBuilderAPI_TransitionMode.BRepBuilderAPI_Transformed,
      round: oc.BRepBuilderAPI_TransitionMode.BRepBuilderAPI_RoundCorner,
      right: oc.BRepBuilderAPI_TransitionMode.BRepBuilderAPI_RightCorner
    }[transitionMode];
    if (mode) sweepBuilder.SetTransitionMode(mode);
  }
  if (support) sweepBuilder.SetMode(support);
  else if (frenet) sweepBuilder.SetMode(frenet);
  if (auxiliarySpine) sweepBuilder.SetMode(auxiliarySpine.wrapped, false, oc.BRepFill_TypeOfContact.BRepFill_NoContact);
  if (!law) sweepBuilder.Add(wire.wrapped, !!withContact, withCorrection);
  else sweepBuilder.SetLaw(wire.wrapped, law, !!withContact, withCorrection);
  sweepBuilder.Build();
  if (!shellMode) sweepBuilder.MakeSolid();
  const shape = cast(sweepBuilder.Shape());
  if (!isShape3D(shape)) throw new Error("Could not sweep to a 3d shape");
  if (shellMode) {
    const startWire = cast(sweepBuilder.FirstShape());
    const endWire = cast(sweepBuilder.LastShape());
    if (!isWire(startWire)) throw new Error("Could not sweep with one start wire");
    if (!isWire(endWire)) throw new Error("Could not sweep with one end wire");
    sweepBuilder.delete();
    return [
      shape,
      startWire,
      endWire
    ];
  }
  sweepBuilder.delete();
  return shape;
}
var buildLawFromProfile = (extrusionLength, { profile, endFactor = 1 }) => {
  let law;
  const oc = getOC();
  if (profile === "s-curve") {
    law = new oc.Law_S();
    law.Set(0, 1, extrusionLength, endFactor);
  } else if (profile === "linear") {
    law = new oc.Law_Linear();
    law.Set(0, 1, extrusionLength, endFactor);
  } else throw new Error("Could not generate a law function");
  return law.Trim(0, extrusionLength, 1e-6);
};
var supportExtrude = (wire, center, normal, support) => {
  const centerVec = new Vector(center);
  const normalVec = new Vector(normal);
  return genericSweep(wire, assembleWire([makeLine(centerVec, centerVec.add(normalVec))]), { support });
};
function complexExtrude(wire, center, normal, profileShape, shellMode = false) {
  const centerVec = new Vector(center);
  const normalVec = new Vector(normal);
  const spine = assembleWire([makeLine(centerVec, centerVec.add(normalVec))]);
  const law = profileShape ? buildLawFromProfile(normalVec.Length, profileShape) : null;
  return shellMode ? genericSweep(wire, spine, { law }, shellMode) : genericSweep(wire, spine, { law }, shellMode);
}
function twistExtrude(wire, angleDegrees, center, normal, profileShape, shellMode = false) {
  const centerVec = new Vector(center);
  const normalVec = new Vector(normal);
  const spine = assembleWire([makeLine(centerVec, centerVec.add(normalVec))]);
  const auxiliarySpine = makeHelix(360 / angleDegrees * normalVec.Length, normalVec.Length, 1, center, normal);
  const law = profileShape ? buildLawFromProfile(normalVec.Length, profileShape) : null;
  return shellMode ? genericSweep(wire, spine, {
    auxiliarySpine,
    law
  }, shellMode) : genericSweep(wire, spine, {
    auxiliarySpine,
    law
  }, shellMode);
}
var loft = (wires, { ruled = true, startPoint, endPoint } = {}, returnShell = false) => {
  const oc = getOC();
  const [r, gc] = localGC();
  const loftBuilder = r(new oc.BRepOffsetAPI_ThruSections(!returnShell, ruled, 1e-6));
  if (startPoint) loftBuilder.AddVertex(r(makeVertex(startPoint)).wrapped);
  wires.forEach((w) => loftBuilder.AddWire(w.wrapped));
  if (endPoint) loftBuilder.AddVertex(r(makeVertex(endPoint)).wrapped);
  loftBuilder.Build();
  const shape = cast(loftBuilder.Shape());
  gc();
  if (!isShape3D(shape)) throw new Error("Could not loft to a 3d shape");
  return shape;
};
var Sketch = class Sketch2 {
  constructor(wire, { defaultOrigin = [
    0,
    0,
    0
  ], defaultDirection = [
    0,
    0,
    1
  ] } = {}) {
    this.wire = wire;
    this.defaultOrigin = defaultOrigin;
    this.defaultDirection = defaultDirection;
    this.baseFace = null;
  }
  get baseFace() {
    return this._baseFace;
  }
  set baseFace(newFace) {
    if (!newFace) this._baseFace = newFace;
    else this._baseFace = newFace.clone();
  }
  delete() {
    this.wire.delete();
    this._defaultOrigin.delete();
    this._defaultDirection.delete();
    this.baseFace && this.baseFace.delete();
  }
  clone() {
    const sketch = new Sketch2(this.wire.clone(), {
      defaultOrigin: this.defaultOrigin,
      defaultDirection: this.defaultDirection
    });
    if (this.baseFace) sketch.baseFace = this.baseFace.clone();
    return sketch;
  }
  get defaultOrigin() {
    return this._defaultOrigin;
  }
  set defaultOrigin(newOrigin) {
    this._defaultOrigin = new Vector(newOrigin);
  }
  get defaultDirection() {
    return this._defaultDirection;
  }
  set defaultDirection(newDirection) {
    this._defaultDirection = new Vector(newDirection);
  }
  /**
  * Transforms the lines into a face. The lines should be closed.
  */
  face() {
    let face;
    if (!this.baseFace) face = makeFace(this.wire);
    else face = makeNewFaceWithinFace(this.baseFace, this.wire);
    return face;
  }
  wires() {
    return this.wire.clone();
  }
  faces() {
    return this.face();
  }
  /**
  * Revolves the drawing on an axis (defined by its direction and an origin
  * (defaults to the sketch origin)
  */
  revolve(revolutionAxis, { origin, angle } = {}) {
    const face = makeFace(this.wire);
    const solid = revolution(face, origin || this.defaultOrigin, revolutionAxis, angle);
    face.delete();
    this.delete();
    return solid;
  }
  /** Extrudes the sketch to a certain distance.(along the default direction
  * and origin of the sketch).
  *
  * You can define another extrusion direction or origin,
  *
  * It is also possible to twist extrude with an angle (in degrees), or to
  * give a profile to the extrusion (the endFactor will scale the face, and
  * the profile will define how the scale is applied (either linarly or with
  * a s-shape).
  */
  extrude(extrusionDistance, { extrusionDirection, extrusionProfile, twistAngle, origin } = {}) {
    const [r, gc] = localGC();
    const extrusionVec = r(new Vector(extrusionDirection || this.defaultDirection).normalized().multiply(extrusionDistance));
    if (extrusionProfile && !twistAngle) {
      const solid2 = complexExtrude(this.wire, origin || this.defaultOrigin, extrusionVec, extrusionProfile);
      gc();
      this.delete();
      return solid2;
    }
    if (twistAngle) {
      const solid2 = twistExtrude(this.wire, twistAngle, origin || this.defaultOrigin, extrusionVec, extrusionProfile);
      gc();
      this.delete();
      return solid2;
    }
    const solid = basicFaceExtrusion(makeFace(this.wire), extrusionVec);
    gc();
    this.delete();
    return solid;
  }
  /**
  * Sweep along this sketch another sketch defined in the function
  * `sketchOnPlane`.
  *
  * TODO: clean the interface of the sweep config to make it more
  * understandable.
  */
  sweepSketch(sketchOnPlane, sweepConfig = {}) {
    const startPoint = this.wire.startPoint;
    const normal = this.wire.tangentAt(1e-9).multiply(-1).normalize();
    const xDir = normal.cross(this.defaultDirection).multiply(-1);
    const sketch = sketchOnPlane(new Plane(startPoint, xDir, normal), startPoint);
    const config = {
      forceProfileSpineOthogonality: true,
      ...sweepConfig
    };
    if (this.baseFace) config.support = this.baseFace.wrapped;
    const shape = genericSweep(sketch.wire, this.wire, config);
    this.delete();
    return shape;
  }
  /** Loft between this sketch and another sketch (or an array of them)
  *
  * You can also define a `startPoint` for the loft (that will be placed
  * before this sketch) and an `endPoint` after the last one.
  *
  * You can also define if you want the loft to result in a ruled surface.
  *
  * Note that all sketches will be deleted by this operation
  */
  loftWith(otherSketches, loftConfig = {}, returnShell = false) {
    const sketchArray = Array.isArray(otherSketches) ? [this, ...otherSketches] : [this, otherSketches];
    const shape = loft(sketchArray.map((s) => s.wire), loftConfig, returnShell);
    sketchArray.forEach((s) => s.delete());
    return shape;
  }
};
var Sketcher = class {
  constructor(plane, origin) {
    this.plane = plane instanceof Plane ? makePlane(plane) : makePlane(plane, origin);
    this.pointer = new Vector(this.plane.origin);
    this.firstPoint = new Vector(this.plane.origin);
    this.pendingEdges = [];
    this._mirrorWire = false;
  }
  delete() {
    this.plane.delete();
  }
  _updatePointer(newPointer) {
    this.pointer = newPointer;
  }
  movePointerTo([x, y]) {
    if (this.pendingEdges.length) throw new Error("You can only move the pointer if there is no edge defined");
    this._updatePointer(this.plane.toWorldCoords([x, y]));
    this.firstPoint = new Vector(this.pointer);
    return this;
  }
  lineTo([x, y]) {
    const endPoint = this.plane.toWorldCoords([x, y]);
    this.pendingEdges.push(makeLine(this.pointer, endPoint));
    this._updatePointer(endPoint);
    return this;
  }
  line(xDist, yDist) {
    const pointer = this.plane.toLocalCoords(this.pointer);
    return this.lineTo([xDist + pointer.x, yDist + pointer.y]);
  }
  vLine(distance) {
    return this.line(0, distance);
  }
  hLine(distance) {
    return this.line(distance, 0);
  }
  vLineTo(yPos) {
    const pointer = this.plane.toLocalCoords(this.pointer);
    return this.lineTo([pointer.x, yPos]);
  }
  hLineTo(xPos) {
    const pointer = this.plane.toLocalCoords(this.pointer);
    return this.lineTo([xPos, pointer.y]);
  }
  polarLine(distance, angle) {
    const [x, y] = polarToCartesian(distance, angle * DEG2RAD);
    return this.line(x, y);
  }
  polarLineTo([r, theta]) {
    const point = polarToCartesian(r, theta * DEG2RAD);
    return this.lineTo(point);
  }
  tangentLine(distance) {
    const [r, gc] = localGC();
    const previousEdge = this.pendingEdges.length ? this.pendingEdges[this.pendingEdges.length - 1] : null;
    if (!previousEdge) throw new Error("you need a previous edge to create a tangent line");
    const endPoint = r(r(previousEdge.tangentAt(1)).normalized().multiply(distance)).add(this.pointer);
    this.pendingEdges.push(makeLine(this.pointer, endPoint));
    this._updatePointer(endPoint);
    gc();
    return this;
  }
  threePointsArcTo(end, innerPoint) {
    const gpoint1 = this.plane.toWorldCoords(innerPoint);
    const gpoint2 = this.plane.toWorldCoords(end);
    this.pendingEdges.push(makeThreePointArc(this.pointer, gpoint1, gpoint2));
    this._updatePointer(gpoint2);
    return this;
  }
  threePointsArc(xDist, yDist, viaXDist, viaYDist) {
    const pointer = this.plane.toLocalCoords(this.pointer);
    return this.threePointsArcTo([pointer.x + xDist, pointer.y + yDist], [pointer.x + viaXDist, pointer.y + viaYDist]);
  }
  tangentArcTo(end) {
    const endPoint = this.plane.toWorldCoords(end);
    const previousEdge = this.pendingEdges[this.pendingEdges.length - 1];
    this.pendingEdges.push(makeTangentArc(previousEdge.endPoint, previousEdge.tangentAt(1), endPoint));
    this._updatePointer(endPoint);
    return this;
  }
  tangentArc(xDist, yDist) {
    const pointer = this.plane.toLocalCoords(this.pointer);
    return this.tangentArcTo([xDist + pointer.x, yDist + pointer.y]);
  }
  sagittaArcTo(end, sagitta) {
    const startPoint = this.pointer;
    const endPoint = this.plane.toWorldCoords(end);
    let p = endPoint.add(startPoint);
    const midPoint = p.multiply(0.5);
    p = endPoint.sub(startPoint);
    const sagVector = p.cross(this.plane.zDir).normalized().multiply(sagitta);
    const sagPoint = midPoint.add(sagVector);
    this.pendingEdges.push(makeThreePointArc(this.pointer, sagPoint, endPoint));
    this._updatePointer(endPoint);
    return this;
  }
  sagittaArc(xDist, yDist, sagitta) {
    const pointer = this.plane.toLocalCoords(this.pointer);
    return this.sagittaArcTo([xDist + pointer.x, yDist + pointer.y], sagitta);
  }
  vSagittaArc(distance, sagitta) {
    return this.sagittaArc(0, distance, sagitta);
  }
  hSagittaArc(distance, sagitta) {
    return this.sagittaArc(distance, 0, sagitta);
  }
  bulgeArcTo(end, bulge) {
    if (!bulge) return this.lineTo(end);
    const pointer = this.plane.toLocalCoords(this.pointer);
    const halfChord = distance2d([pointer.x, pointer.y], end) / 2;
    const bulgeAsSagitta = -bulge * halfChord;
    return this.sagittaArcTo(end, bulgeAsSagitta);
  }
  bulgeArc(xDist, yDist, bulge) {
    const pointer = this.plane.toLocalCoords(this.pointer);
    return this.bulgeArcTo([xDist + pointer.x, yDist + this.pointer.y], bulge);
  }
  vBulgeArc(distance, bulge) {
    return this.bulgeArc(0, distance, bulge);
  }
  hBulgeArc(distance, bulge) {
    return this.bulgeArc(distance, 0, bulge);
  }
  ellipseTo(end, horizontalRadius, verticalRadius, rotation = 0, longAxis = false, sweep = false) {
    const [r, gc] = localGC();
    const start = this.plane.toLocalCoords(this.pointer);
    let rotationAngle = rotation;
    let majorRadius = horizontalRadius;
    let minorRadius = verticalRadius;
    if (horizontalRadius < verticalRadius) {
      rotationAngle = rotation + 90;
      majorRadius = verticalRadius;
      minorRadius = horizontalRadius;
    }
    const { cx, cy, rx, ry, startAngle, endAngle, clockwise } = convertSvgEllipseParams([start.x, start.y], end, majorRadius, minorRadius, rotationAngle * DEG2RAD, longAxis, sweep);
    const xDir = r(new Vector(this.plane.xDir).rotate(rotationAngle, this.plane.origin, this.plane.zDir));
    const arc = makeEllipseArc(rx, ry, clockwise ? startAngle : endAngle, clockwise ? endAngle : startAngle, r(this.plane.toWorldCoords([cx, cy])), this.plane.zDir, xDir);
    if (!clockwise) arc.wrapped.Reverse();
    this.pendingEdges.push(arc);
    this._updatePointer(this.plane.toWorldCoords(end));
    gc();
    return this;
  }
  ellipse(xDist, yDist, horizontalRadius, verticalRadius, rotation = 0, longAxis = false, sweep = false) {
    const pointer = this.plane.toLocalCoords(this.pointer);
    return this.ellipseTo([xDist + pointer.x, yDist + pointer.y], horizontalRadius, verticalRadius, rotation, longAxis, sweep);
  }
  halfEllipseTo(end, verticalRadius, sweep = false) {
    const pointer = this.plane.toLocalCoords(this.pointer);
    const start = [pointer.x, pointer.y];
    const angle = polarAngle2d(end, start);
    const distance = distance2d(end, start);
    return this.ellipseTo(end, distance / 2, verticalRadius, angle * RAD2DEG, false, sweep);
  }
  halfEllipse(xDist, yDist, verticalRadius, sweep = false) {
    const pointer = this.plane.toLocalCoords(this.pointer);
    return this.halfEllipseTo([xDist + pointer.x, yDist + pointer.y], verticalRadius, sweep);
  }
  bezierCurveTo(end, controlPoints) {
    let cp;
    if (controlPoints.length === 2 && !Array.isArray(controlPoints[0])) cp = [controlPoints];
    else cp = controlPoints;
    const inWorldPoints = cp.map((p) => this.plane.toWorldCoords(p));
    const endPoint = this.plane.toWorldCoords(end);
    this.pendingEdges.push(makeBezierCurve([
      this.pointer,
      ...inWorldPoints,
      endPoint
    ]));
    this._updatePointer(endPoint);
    return this;
  }
  quadraticBezierCurveTo(end, controlPoint) {
    return this.bezierCurveTo(end, [controlPoint]);
  }
  cubicBezierCurveTo(end, startControlPoint, endControlPoint) {
    return this.bezierCurveTo(end, [startControlPoint, endControlPoint]);
  }
  smoothSplineTo(end, config) {
    const [r, gc] = localGC();
    const { endTangent, startTangent, startFactor, endFactor } = defaultsSplineConfig(config);
    const endPoint = this.plane.toWorldCoords(end);
    const previousEdge = this.pendingEdges.length ? this.pendingEdges[this.pendingEdges.length - 1] : null;
    const defaultDistance = r(endPoint.sub(this.pointer)).Length * 0.25;
    let startPoleDirection;
    if (startTangent) startPoleDirection = this.plane.toWorldCoords(startTangent);
    else if (!previousEdge) startPoleDirection = this.plane.toWorldCoords([1, 0]);
    else if (previousEdge.geomType === "BEZIER_CURVE") {
      const rawCurve = r(previousEdge.curve).wrapped.Bezier();
      const previousPole = r(new Vector(rawCurve.Pole(rawCurve.NbPoles() - 1)));
      startPoleDirection = r(this.pointer.sub(previousPole));
    } else startPoleDirection = r(previousEdge.tangentAt(1));
    const poleDistance = r(startPoleDirection.normalized().multiply(startFactor * defaultDistance));
    const startControl = r(this.pointer.add(poleDistance));
    let endPoleDirection;
    if (endTangent === "symmetric") endPoleDirection = r(startPoleDirection.multiply(-1));
    else endPoleDirection = r(this.plane.toWorldCoords(endTangent));
    const endPoleDistance = r(endPoleDirection.normalized().multiply(endFactor * defaultDistance));
    const endControl = r(endPoint.sub(endPoleDistance));
    this.pendingEdges.push(makeBezierCurve([
      this.pointer,
      startControl,
      endControl,
      endPoint
    ]));
    this._updatePointer(endPoint);
    gc();
    return this;
  }
  smoothSpline(xDist, yDist, splineConfig = {}) {
    const pointer = this.plane.toLocalCoords(this.pointer);
    return this.smoothSplineTo([xDist + pointer.x, yDist + pointer.y], splineConfig);
  }
  _mirrorWireOnStartEnd(wire) {
    const normal = this.pointer.sub(this.firstPoint).normalize().cross(this.plane.zDir);
    return assembleWire([wire, wire.clone().mirror(normal, this.pointer)]);
  }
  buildWire() {
    if (!this.pendingEdges.length) throw new Error("No lines to convert into a wire");
    let wire = assembleWire(this.pendingEdges);
    if (this._mirrorWire) wire = this._mirrorWireOnStartEnd(wire);
    return wire;
  }
  _closeSketch() {
    if (!this.pointer.equals(this.firstPoint) && !this._mirrorWire) {
      const endpoint = this.plane.toLocalCoords(this.firstPoint);
      this.lineTo([endpoint.x, endpoint.y]);
    }
  }
  done() {
    return new Sketch(this.buildWire(), {
      defaultOrigin: this.plane.origin,
      defaultDirection: this.plane.zDir
    });
  }
  close() {
    this._closeSketch();
    return this.done();
  }
  closeWithMirror() {
    this._mirrorWire = true;
    return this.close();
  }
};
var curvesBoundingBox = (curves) => {
  const oc = getOC();
  const boundBox = new oc.Bnd_Box2d();
  curves.forEach((c) => {
    oc.BndLib_Add2dCurve.Add(c.wrapped, 1e-6, boundBox);
  });
  return new BoundingBox2d(boundBox);
};
function curvesAsEdgesOnPlane(curves, plane) {
  const [r, gc] = localGC();
  const ax = r(makeAx2(plane.origin, plane.zDir, plane.xDir));
  const oc = getOC();
  const edges = curves.map((curve) => {
    const curve3d = oc.GeomLib.To3d(ax, curve.wrapped);
    return new Edge(new oc.BRepBuilderAPI_MakeEdge(curve3d).Edge());
  });
  gc();
  return edges;
}
var curvesAsEdgesOnSurface = (curves, geomSurf) => {
  const [r, gc] = localGC();
  const oc = getOC();
  const modifiedCurves = curves.map((curve) => {
    return new Edge(r(new oc.BRepBuilderAPI_MakeEdge(curve.wrapped, geomSurf)).Edge());
  });
  gc();
  return modifiedCurves;
};
var transformCurves = (curves, transformation) => {
  const oc = getOC();
  return curves.map((curve) => {
    if (!transformation) return curve.clone();
    return new Curve2D(oc.GeomLib.GTransform(curve.wrapped, transformation));
  });
};
var Transformation2D = class extends WrappingObj {
  transformCurves(curves) {
    return transformCurves(curves, this.wrapped);
  }
};
var stretchTransform2d = (ratio, direction, origin = [0, 0]) => {
  const oc = getOC();
  const axis = axis2d(origin, direction);
  const transform = new oc.gp_GTrsf2d();
  transform.SetAffinity(axis, ratio);
  axis.delete();
  return new Transformation2D(transform);
};
var translationTransform2d = (translation) => {
  const oc = getOC();
  const [r, gc] = localGC();
  const rotation = new oc.gp_Trsf2d();
  rotation.SetTranslation(r(vec(translation)));
  const transform = new oc.gp_GTrsf2d(rotation);
  gc();
  return new Transformation2D(transform);
};
var mirrorTransform2d = (centerOrDirection, origin = [0, 0], mode = "center") => {
  const oc = getOC();
  const [r, gc] = localGC();
  const rotation = new oc.gp_Trsf2d();
  if (mode === "center") rotation.SetMirror(r(pnt(centerOrDirection)));
  else rotation.SetMirror(r(axis2d(origin, centerOrDirection)));
  const transform = new oc.gp_GTrsf2d(rotation);
  gc();
  return new Transformation2D(transform);
};
var rotateTransform2d = (angle, center = [0, 0]) => {
  const oc = getOC();
  const [r, gc] = localGC();
  const rotation = new oc.gp_Trsf2d();
  rotation.SetRotation(r(pnt(center)), angle);
  const transform = new oc.gp_GTrsf2d(rotation);
  gc();
  return new Transformation2D(transform);
};
var scaleTransform2d = (scaleFactor, center = [0, 0]) => {
  const oc = getOC();
  const [r, gc] = localGC();
  const scaling = new oc.gp_Trsf2d();
  scaling.SetScale(r(pnt(center)), scaleFactor);
  const transform = new oc.gp_GTrsf2d(scaling);
  gc();
  return new Transformation2D(transform);
};
function curvesAsEdgesOnFace(curves, face, scale2 = "original") {
  const [r, gc] = localGC();
  const oc = getOC();
  let geomSurf = r(oc.BRep_Tool.Surface(face.wrapped));
  const bounds = face.UVBounds;
  let transformation = null;
  const uAxis = r(axis2d([0, 0], [0, 1]));
  const vAxis = r(axis2d([0, 0], [1, 0]));
  if (scale2 === "original" && face.geomType !== "PLANE") {
    if (face.geomType !== "CYLINDRE") throw new Error("Only planar and cylidrical faces can be unwrapped for sketching");
    const cylinder = r(r(new oc.BRepAdaptor_Surface(face.wrapped)).Cylinder());
    if (!cylinder.Direct()) geomSurf = geomSurf.UReversed();
    transformation = stretchTransform2d(1 / cylinder.Radius(), [0, 1]).wrapped;
  }
  if (scale2 === "bounds") {
    transformation = r(new oc.gp_GTrsf2d());
    transformation.SetAffinity(uAxis, bounds.uMax - bounds.uMin);
    if (bounds.uMin !== 0) {
      const translation = r(new oc.gp_GTrsf2d());
      translation.SetTranslationPart(new oc.gp_XY(0, -bounds.uMin));
      transformation.Multiply(translation);
    }
    const vTransformation = r(new oc.gp_GTrsf2d());
    vTransformation.SetAffinity(vAxis, bounds.vMax - bounds.vMin);
    transformation.Multiply(vTransformation);
    if (bounds.vMin !== 0) {
      const translation = r(new oc.gp_GTrsf2d());
      translation.SetTranslationPart(r(new oc.gp_XY(0, -bounds.vMin)));
      transformation.Multiply(translation);
    }
  }
  const edges = curvesAsEdgesOnSurface(transformCurves(curves, transformation), geomSurf);
  gc();
  return edges;
}
function edgeToCurve(e, face) {
  const oc = getOC();
  const adaptor = GCWithScope()(new oc.BRepAdaptor_Curve2d(e.wrapped, face.wrapped));
  const trimmed = new oc.Geom2d_TrimmedCurve(adaptor.Curve(), adaptor.FirstParameter(), adaptor.LastParameter(), true, true);
  if (e.orientation === "backward") trimmed.Reverse();
  return new Curve2D(trimmed);
}
var poles3dTo2d = (poles, register) => {
  const oc = getOC();
  const poles2d = register(new oc.NCollection_Array1_gp_Pnt2d(poles.Lower(), poles.Upper()));
  for (let i = poles.Lower(); i <= poles.Upper(); i++) {
    const pole = register(poles.Value(i));
    poles2d.SetValue(i, register(new oc.gp_Pnt2d(pole.X(), pole.Y())));
  }
  return poles2d;
};
var point3dTo2d = (point) => [point.X(), point.Y()];
var direction3dTo2d = (direction) => [direction.X(), direction.Y()];
var axis3dTo2d = (axis, register) => {
  const oc = getOC();
  const location = register(axis.Location());
  const xDirection = register(axis.XDirection());
  const yDirection = register(axis.YDirection());
  return register(new oc.gp_Ax22d(register(new oc.gp_Pnt2d(location.X(), location.Y())), register(new oc.gp_Dir2d(direction3dTo2d(xDirection)[0], direction3dTo2d(xDirection)[1])), register(new oc.gp_Dir2d(direction3dTo2d(yDirection)[0], direction3dTo2d(yDirection)[1]))));
};
var orientCurveLikeEdge = (curve, edge) => {
  if (edge.orientation === "backward") curve.reverse();
  return curve;
};
function edgeToCurveOnPlane(e) {
  const oc = getOC();
  const r = GCWithScope();
  const adaptor = r(new oc.BRepAdaptor_Curve(e.wrapped));
  const curveType2 = findCurveType(adaptor.GetType());
  const firstParameter = adaptor.FirstParameter();
  const lastParameter = adaptor.LastParameter();
  const wrapAndTrim = (curve) => orientCurveLikeEdge(new Curve2D(new oc.Geom2d_TrimmedCurve(curve, firstParameter, lastParameter, true, true)), e);
  if (curveType2 === "LINE") return orientCurveLikeEdge(make2dSegmentCurve(point3dTo2d(r(adaptor.Value(firstParameter))), point3dTo2d(r(adaptor.Value(lastParameter)))), e);
  if (curveType2 === "CIRCLE") {
    const circle = adaptor.Circle();
    return wrapAndTrim(new oc.Geom2d_Circle(r(new oc.gp_Circ2d(axis3dTo2d(r(circle.Position()), r), circle.Radius()))));
  }
  if (curveType2 === "ELLIPSE") {
    const ellipse = adaptor.Ellipse();
    return wrapAndTrim(new oc.Geom2d_Ellipse(r(new oc.gp_Elips2d(axis3dTo2d(r(ellipse.Position()), r), ellipse.MajorRadius(), ellipse.MinorRadius()))));
  }
  if (curveType2 === "BEZIER_CURVE") {
    const bezier = adaptor.Bezier();
    const poles = poles3dTo2d(r(bezier.Poles()), r);
    const curveCopy = bezier.IsRational() ? new oc.Geom2d_BezierCurve(poles, bezier.Weights()) : new oc.Geom2d_BezierCurve(poles);
    curveCopy.Segment(firstParameter, lastParameter);
    return orientCurveLikeEdge(new Curve2D(curveCopy), e);
  }
  if (curveType2 === "BSPLINE_CURVE") {
    const bspline = adaptor.BSpline();
    const poles = poles3dTo2d(r(bspline.Poles()), r);
    const curveCopy = bspline.IsRational() ? new oc.Geom2d_BSplineCurve(poles, bspline.Weights(), bspline.Knots(), bspline.Multiplicities(), bspline.Degree(), bspline.IsPeriodic()) : new oc.Geom2d_BSplineCurve(poles, bspline.Knots(), bspline.Multiplicities(), bspline.Degree(), bspline.IsPeriodic());
    curveCopy.Segment(firstParameter, lastParameter, 1e-9);
    return orientCurveLikeEdge(new Curve2D(curveCopy), e);
  }
  throw new Error(`Unsupported projected curve type: ${curveType2}`);
}
var viewbox = (bbox, margin = 1) => {
  return `${bbox.bounds[0][0] - margin} ${-bbox.bounds[1][1] - margin} ${bbox.width + 2 * margin} ${bbox.height + 2 * margin}`;
};
var asSVG = (body, boundingBox, margin = 1) => {
  return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="${viewbox(boundingBox, margin)}" fill="none" stroke="black" stroke-width="0.6%" vector-effect="non-scaling-stroke">
    ${body}
</svg>`;
};
var Blueprint = class Blueprint2 {
  constructor(curves) {
    this.curves = curves;
    this._boundingBox = null;
    this._orientation = null;
    this._guessedOrientation = null;
  }
  delete() {
    this.curves.forEach((c) => c.delete());
    if (this._boundingBox) this._boundingBox.delete();
  }
  clone() {
    return new Blueprint2(this.curves);
  }
  get repr() {
    return ["Blueprint", ...this.curves.map((c) => c.repr)].join("\n");
  }
  get boundingBox() {
    if (!this._boundingBox) this._boundingBox = curvesBoundingBox(this.curves);
    return this._boundingBox;
  }
  get orientation() {
    if (this._orientation) return this._orientation;
    if (this._guessedOrientation) return this._guessedOrientation;
    const vertices = this.curves.flatMap((c) => {
      if (c.geomType !== "LINE") return [c.firstPoint, c.value(0.5)];
      return [c.firstPoint];
    });
    const approximateArea = vertices.map((v1, i) => {
      const v2 = vertices[(i + 1) % vertices.length];
      return (v2[0] - v1[0]) * (v2[1] + v1[1]);
    }).reduce((a, b) => a + b, 0);
    this._guessedOrientation = approximateArea > 0 ? "clockwise" : "counterClockwise";
    return this._guessedOrientation;
  }
  stretch(ratio, direction, origin = [0, 0]) {
    const curves = stretchTransform2d(ratio, direction, origin).transformCurves(this.curves);
    return new Blueprint2(curves);
  }
  scale(scaleFactor, center) {
    const curves = scaleTransform2d(scaleFactor, center || this.boundingBox.center).transformCurves(this.curves);
    return new Blueprint2(curves);
  }
  rotate(angle, center) {
    const curves = rotateTransform2d(angle * DEG2RAD, center).transformCurves(this.curves);
    return new Blueprint2(curves);
  }
  translate(xDistOrPoint, yDist = 0) {
    const curves = translationTransform2d(isPoint2D(xDistOrPoint) ? xDistOrPoint : [xDistOrPoint, yDist]).transformCurves(this.curves);
    return new Blueprint2(curves);
  }
  mirror(centerOrDirection, origin = [0, 0], mode = "center") {
    const curves = mirrorTransform2d(centerOrDirection, origin, mode).transformCurves(this.curves);
    return new Blueprint2(curves);
  }
  sketchOnPlane(inputPlane, origin) {
    const plane = inputPlane instanceof Plane ? makePlane(inputPlane) : makePlane(inputPlane, origin);
    return new Sketch(assembleWire(curvesAsEdgesOnPlane(this.curves, plane)), {
      defaultOrigin: plane.origin,
      defaultDirection: plane.zDir
    });
  }
  sketchOnFace(face, scaleMode) {
    const oc = getOC();
    const wire = assembleWire(curvesAsEdgesOnFace(this.curves, face, scaleMode));
    oc.BRepLib.BuildCurves3d(wire.wrapped);
    const wireFixer = new oc.ShapeFix_Wire(wire.wrapped, face.wrapped, 1e-9);
    wireFixer.FixEdgeCurves();
    wireFixer.delete();
    const sketch = new Sketch(wire);
    if (wire.isClosed) {
      const baseFace = sketch.clone().face();
      sketch.defaultOrigin = baseFace.pointOnSurface(0.5, 0.5);
      sketch.defaultDirection = baseFace.normalAt();
      if (baseFace.orientation !== face.orientation) sketch.defaultDirection = sketch.defaultDirection.multiply(-1);
      sketch.baseFace = face;
    } else {
      const startPoint = wire.startPoint;
      sketch.defaultOrigin = startPoint;
      sketch.defaultDirection = face.normalAt(startPoint);
      sketch.baseFace = face;
    }
    return sketch;
  }
  subFace(face, origin) {
    let subFace = this.translate(face.uvCoordinates(origin || face.center)).sketchOnFace(face, "original").face();
    if (subFace.orientation !== face.orientation) subFace = subFace.flipOrientation();
    return subFace;
  }
  punchHole(shape, face, { height = null, origin = null, draftAngle = 0 } = {}) {
    const oc = getOC();
    const gc = GCWithScope();
    const foundFace = getSingleFace(face, shape);
    const hole = this.subFace(foundFace, origin);
    const maker = gc(new oc.BRepFeat_MakeDPrism(shape.wrapped, hole.wrapped, foundFace.wrapped, draftAngle * DEG2RAD, 0, false));
    if (height) maker.Perform(height);
    else maker.PerformThruAll();
    return cast(maker.Shape());
  }
  toSVGPathD() {
    const r = GCWithScope();
    const bp = this.clone().mirror([1, 0], [0, 0], "plane");
    const path = approximateAsSvgCompatibleCurve(bp.curves).flatMap((c) => {
      return adaptedCurveToPathElem(r(c.adaptor()), c.lastPoint);
    });
    const [startX, startY] = bp.curves[0].firstPoint;
    return `M ${round5(startX)} ${round5(startY)} ${path.join(" ")}${bp.isClosed() ? " Z" : ""}`;
  }
  toSVGPath() {
    return `<path d="${this.toSVGPathD()}" />`;
  }
  toSVGViewBox(margin = 1) {
    return viewbox(this.boundingBox, margin);
  }
  toSVGPaths() {
    return [this.toSVGPathD()];
  }
  toSVG(margin = 1) {
    return asSVG(this.toSVGPath(), this.boundingBox, margin);
  }
  get firstPoint() {
    return this.curves[0].firstPoint;
  }
  get lastPoint() {
    return this.curves[this.curves.length - 1].lastPoint;
  }
  isInside(point) {
    if (!this.boundingBox.containsPoint(point)) return false;
    const intersector = new (getOC()).Geom2dAPI_InterCurveCurve();
    const segment = make2dSegmentCurve(point, this.boundingBox.outsidePoint());
    let crossCounts = 0;
    if (this.curves.find((c) => c.isOnCurve(point))) return false;
    this.curves.forEach((c) => {
      if (c.boundingBox.isOut(segment.boundingBox)) return;
      intersector.Init(segment.wrapped, c.wrapped, 1e-9);
      crossCounts += intersector.NbPoints();
    });
    intersector.delete();
    return !!(crossCounts % 2);
  }
  isClosed() {
    return samePoint$2(this.firstPoint, this.lastPoint);
  }
  intersects(other) {
    const intersector = new (getOC()).Geom2dAPI_InterCurveCurve();
    if (this.boundingBox.isOut(other.boundingBox)) return false;
    for (const myCurve of this.curves) for (const otherCurve of other.curves) {
      if (myCurve.boundingBox.isOut(otherCurve.boundingBox)) continue;
      intersector.Init(myCurve.wrapped, otherCurve.wrapped, 1e-9);
      if (intersector.NbPoints() || intersector.NbSegments()) return true;
    }
    intersector.delete();
    return false;
  }
};
function buildCornerFunction(radius, mode) {
  if (typeof radius === "function") return radius;
  const makeFn = mode === "chamfer" ? chamferCurves : mode === "dogbone" ? dogboneFilletCurves : filletCurves;
  return (first, second) => makeFn(first, second, radius);
}
var BaseSketcher2d = class {
  constructor(origin = [0, 0]) {
    this.pointer = origin;
    this.firstPoint = origin;
    this._nextCorner = null;
    this.pendingCurves = [];
  }
  _convertToUV([x, y]) {
    return [x, y];
  }
  _convertFromUV([u, v]) {
    return [u, v];
  }
  /**
  * Returns the current pen position as [x, y] coordinates
  * 
  * Added By Ben Harper 5/12/2025 
  
  * @category Drawing State
  */
  get penPosition() {
    return this.pointer;
  }
  /**
  * Returns the current pen angle in degrees
  *
  * The angle represents the tangent direction at the current pen position,
  * based on the last drawing operation (line, arc, bezier, etc.).
  * Returns 0 if nothing has been drawn yet.
  *
  * @category Drawing State
  *
  * Added By Ben Harper 5/12/2025 to solve issue with being unable to draw a line perpendicular
  * to the tangent extension at the end of a .tangentArc() that did not finish at a known angle.
  */
  get penAngle() {
    if (this.pendingCurves.length === 0) return 0;
    const [dx, dy] = this.pendingCurves[this.pendingCurves.length - 1].tangentAt(1);
    return Math.atan2(dy, dx) * RAD2DEG;
  }
  movePointerTo(point) {
    if (this.pendingCurves.length) throw new Error("You can only move the pointer if there is no curve defined");
    this.pointer = point;
    this.firstPoint = point;
    return this;
  }
  saveCurve(curve) {
    if (!this._nextCorner) {
      this.pendingCurves.push(curve);
      return;
    }
    const previousCurve = this.pendingCurves.pop();
    if (!previousCurve) throw new Error("bug in the custom corner algorithm");
    this.pendingCurves.push(...this._nextCorner(previousCurve, curve));
    this._nextCorner = null;
  }
  lineTo(point) {
    const curve = make2dSegmentCurve(this._convertToUV(this.pointer), this._convertToUV(point));
    this.pointer = point;
    this.saveCurve(curve);
    return this;
  }
  line(xDist, yDist) {
    return this.lineTo([this.pointer[0] + xDist, this.pointer[1] + yDist]);
  }
  vLine(distance) {
    return this.line(0, distance);
  }
  hLine(distance) {
    return this.line(distance, 0);
  }
  vLineTo(yPos) {
    return this.lineTo([this.pointer[0], yPos]);
  }
  hLineTo(xPos) {
    return this.lineTo([xPos, this.pointer[1]]);
  }
  polarLineTo([r, theta]) {
    const point = polarToCartesian(r, theta * DEG2RAD);
    return this.lineTo(point);
  }
  polarLine(distance, angle) {
    const [x, y] = polarToCartesian(distance, angle * DEG2RAD);
    return this.line(x, y);
  }
  tangentLine(distance) {
    const previousCurve = this.pendingCurves.length ? this.pendingCurves[this.pendingCurves.length - 1] : null;
    if (!previousCurve) throw new Error("You need a previous curve to sketch a tangent line");
    const direction = normalize2d(this._convertFromUV(previousCurve.tangentAt(1)));
    return this.line(direction[0] * distance, direction[1] * distance);
  }
  threePointsArcTo(end, midPoint) {
    this.saveCurve(make2dThreePointArc(this._convertToUV(this.pointer), this._convertToUV(midPoint), this._convertToUV(end)));
    this.pointer = end;
    return this;
  }
  threePointsArc(xDist, yDist, viaXDist, viaYDist) {
    const [x0, y0] = this.pointer;
    return this.threePointsArcTo([x0 + xDist, y0 + yDist], [x0 + viaXDist, y0 + viaYDist]);
  }
  sagittaArcTo(end, sagitta) {
    const [x0, y0] = this.pointer;
    const [x1, y1] = end;
    const midPoint = [(x0 + x1) / 2, (y0 + y1) / 2];
    const sagDir = [-(y1 - y0), x1 - x0];
    const sagDirLen = Math.sqrt(sagDir[0] ** 2 + sagDir[1] ** 2);
    const sagPoint = [midPoint[0] + sagDir[0] / sagDirLen * sagitta, midPoint[1] + sagDir[1] / sagDirLen * sagitta];
    this.saveCurve(make2dThreePointArc(this._convertToUV(this.pointer), this._convertToUV(sagPoint), this._convertToUV(end)));
    this.pointer = end;
    return this;
  }
  sagittaArc(xDist, yDist, sagitta) {
    return this.sagittaArcTo([xDist + this.pointer[0], yDist + this.pointer[1]], sagitta);
  }
  vSagittaArc(distance, sagitta) {
    return this.sagittaArc(0, distance, sagitta);
  }
  hSagittaArc(distance, sagitta) {
    return this.sagittaArc(distance, 0, sagitta);
  }
  bulgeArcTo(end, bulge) {
    if (!bulge) return this.lineTo(end);
    const halfChord = distance2d(this.pointer, end) / 2;
    const bulgeAsSagitta = -bulge * halfChord;
    return this.sagittaArcTo(end, bulgeAsSagitta);
  }
  bulgeArc(xDist, yDist, bulge) {
    return this.bulgeArcTo([xDist + this.pointer[0], yDist + this.pointer[1]], bulge);
  }
  vBulgeArc(distance, bulge) {
    return this.bulgeArc(0, distance, bulge);
  }
  hBulgeArc(distance, bulge) {
    return this.bulgeArc(distance, 0, bulge);
  }
  tangentArcTo(end) {
    const previousCurve = this.pendingCurves.length ? this.pendingCurves[this.pendingCurves.length - 1] : null;
    if (!previousCurve) throw new Error("You need a previous curve to sketch a tangent arc");
    this.saveCurve(make2dTangentArc(this._convertToUV(this.pointer), previousCurve.tangentAt(1), this._convertToUV(end)));
    this.pointer = end;
    return this;
  }
  tangentArc(xDist, yDist) {
    const [x0, y0] = this.pointer;
    return this.tangentArcTo([xDist + x0, yDist + y0]);
  }
  ellipseTo(end, horizontalRadius, verticalRadius, rotation = 0, longAxis = false, sweep = false) {
    let rotationAngle = rotation;
    let majorRadius = horizontalRadius;
    let minorRadius = verticalRadius;
    if (horizontalRadius < verticalRadius) {
      rotationAngle = rotation + 90;
      majorRadius = verticalRadius;
      minorRadius = horizontalRadius;
    }
    const radRotationAngle = rotationAngle * DEG2RAD;
    const convertAxis = (ax) => distance2d(this._convertToUV(ax));
    const r1 = convertAxis(polarToCartesian(majorRadius, radRotationAngle));
    const r2 = convertAxis(polarToCartesian(minorRadius, radRotationAngle + Math.PI / 2));
    const xDir = normalize2d(this._convertToUV(rotate2d([1, 0], radRotationAngle)));
    const [, newRotationAngle] = cartesianToPolar(xDir);
    const { cx, cy, startAngle, endAngle, clockwise, rx, ry } = convertSvgEllipseParams(this._convertToUV(this.pointer), this._convertToUV(end), r1, r2, newRotationAngle, longAxis, sweep);
    const arc = make2dEllipseArc(rx, ry, clockwise ? startAngle : endAngle, clockwise ? endAngle : startAngle, [cx, cy], xDir);
    if (!clockwise) arc.reverse();
    this.saveCurve(arc);
    this.pointer = end;
    return this;
  }
  ellipse(xDist, yDist, horizontalRadius, verticalRadius, rotation = 0, longAxis = false, sweep = false) {
    const [x0, y0] = this.pointer;
    return this.ellipseTo([xDist + x0, yDist + y0], horizontalRadius, verticalRadius, rotation, longAxis, sweep);
  }
  halfEllipseTo(end, minorRadius, sweep = false) {
    const angle = polarAngle2d(end, this.pointer);
    const distance = distance2d(end, this.pointer);
    return this.ellipseTo(end, distance / 2, minorRadius, angle * RAD2DEG, true, sweep);
  }
  halfEllipse(xDist, yDist, minorRadius, sweep = false) {
    const [x0, y0] = this.pointer;
    return this.halfEllipseTo([x0 + xDist, y0 + yDist], minorRadius, sweep);
  }
  bezierCurveTo(end, controlPoints) {
    let cp;
    if (controlPoints.length === 2 && !Array.isArray(controlPoints[0])) cp = [controlPoints];
    else cp = controlPoints;
    this.saveCurve(make2dBezierCurve(this._convertToUV(this.pointer), cp.map((point) => this._convertToUV(point)), this._convertToUV(end)));
    this.pointer = end;
    return this;
  }
  quadraticBezierCurveTo(end, controlPoint) {
    return this.bezierCurveTo(end, [controlPoint]);
  }
  cubicBezierCurveTo(end, startControlPoint, endControlPoint) {
    return this.bezierCurveTo(end, [startControlPoint, endControlPoint]);
  }
  smoothSplineTo(end, config) {
    const { endTangent, startTangent, startFactor, endFactor } = defaultsSplineConfig(config);
    const previousCurve = this.pendingCurves.length ? this.pendingCurves[this.pendingCurves.length - 1] : null;
    const defaultDistance = distance2d(this.pointer, end) * 0.25;
    let startPoleDirection;
    if (startTangent) startPoleDirection = startTangent;
    else if (!previousCurve) startPoleDirection = [1, 0];
    else startPoleDirection = this._convertFromUV(previousCurve.tangentAt(1));
    startPoleDirection = normalize2d(startPoleDirection);
    const startControl = [this.pointer[0] + startPoleDirection[0] * startFactor * defaultDistance, this.pointer[1] + startPoleDirection[1] * startFactor * defaultDistance];
    let endPoleDirection;
    if (endTangent === "symmetric") endPoleDirection = [-startPoleDirection[0], -startPoleDirection[1]];
    else endPoleDirection = endTangent;
    endPoleDirection = normalize2d(endPoleDirection);
    const endControl = [end[0] - endPoleDirection[0] * endFactor * defaultDistance, end[1] - endPoleDirection[1] * endFactor * defaultDistance];
    return this.cubicBezierCurveTo(end, startControl, endControl);
  }
  smoothSpline(xDist, yDist, splineConfig) {
    return this.smoothSplineTo([xDist + this.pointer[0], yDist + this.pointer[1]], splineConfig);
  }
  /**
  * Changes the corner between the previous and next segments.
  */
  customCorner(radius, mode = "fillet") {
    if (!this.pendingCurves.length) throw new Error("You need a curve defined to fillet the angle");
    this._nextCorner = buildCornerFunction(radius, mode);
    return this;
  }
  _customCornerLastWithFirst(radius, mode = "fillet") {
    if (!radius) return;
    const previousCurve = this.pendingCurves.pop();
    const curve = this.pendingCurves.shift();
    if (!previousCurve || !curve) throw new Error("Not enough curves to close and fillet");
    this.pendingCurves.push(...buildCornerFunction(radius, mode)(previousCurve, curve));
  }
  _closeSketch() {
    if (!samePoint$2(this.pointer, this.firstPoint)) this.lineTo(this.firstPoint);
  }
  _closeWithMirror() {
    if (samePoint$2(this.pointer, this.firstPoint)) throw new Error("Cannot close with a mirror when the sketch is already closed");
    const startToEndVector = [this.pointer[0] - this.firstPoint[0], this.pointer[1] - this.firstPoint[1]];
    const mirrorAxis = axis2d(this._convertToUV(this.pointer), this._convertToUV(startToEndVector));
    const mirroredCurves = this.pendingCurves.map((c) => new Curve2D(c.innerCurve.Mirrored(mirrorAxis)));
    mirroredCurves.reverse();
    mirroredCurves.map((c) => c.reverse());
    this.pendingCurves.push(...mirroredCurves);
    this.pointer = this.firstPoint;
  }
};
var FaceSketcher = class extends BaseSketcher2d {
  constructor(face, origin = [0, 0]) {
    super(origin);
    this.face = face.clone();
    this._bounds = face.UVBounds;
  }
  _convertToUV([x, y]) {
    const { uMin, uMax, vMin, vMax } = this._bounds;
    return [uMin + x * (uMax - uMin), vMin + y * (vMax - vMin)];
  }
  _convertFromUV([u, v]) {
    const { uMin, uMax, vMin, vMax } = this._bounds;
    return [(u - uMin) / (uMax - uMin), (v - vMin) / (vMax - vMin)];
  }
  _adaptSurface() {
    return getOC().BRep_Tool.Surface(this.face.wrapped);
  }
  /**
  * @ignore
  */
  buildWire() {
    const [r, gc] = localGC();
    const oc = getOC();
    const geomSurf = r(this._adaptSurface());
    const wire = assembleWire(this.pendingCurves.map((curve) => {
      return r(new Edge(r(new oc.BRepBuilderAPI_MakeEdge(curve.wrapped, geomSurf)).Edge()));
    }));
    oc.BRepLib.BuildCurves3d(wire.wrapped);
    gc();
    return wire;
  }
  done() {
    const [r, gc] = localGC();
    const wire = this.buildWire();
    const sketch = new Sketch(wire);
    if (wire.isClosed) {
      const face = r(sketch.clone().face());
      sketch.defaultOrigin = r(face.pointOnSurface(0.5, 0.5));
      sketch.defaultDirection = r(r(face.normalAt()).multiply(-1));
    } else {
      const startPoint = r(wire.startPoint);
      sketch.defaultOrigin = startPoint;
      sketch.defaultDirection = r(this.face.normalAt(startPoint));
    }
    sketch.baseFace = this.face;
    gc();
    return sketch;
  }
  close() {
    this._closeSketch();
    return this.done();
  }
  closeWithMirror() {
    this._closeWithMirror();
    return this.close();
  }
  /**
  * Stop drawing, make sure the sketch is closed (by adding a straight line to
  * from the last point to the first), add a fillet between the last and the
  * first segments and returns the sketch.
  */
  closeWithCustomCorner(radius, mode = "fillet") {
    this._closeSketch();
    this._customCornerLastWithFirst(radius, mode);
    return this.done();
  }
};
var BlueprintSketcher = class extends BaseSketcher2d {
  constructor(origin = [0, 0]) {
    super();
    this.pointer = origin;
    this.firstPoint = origin;
    this.pendingCurves = [];
  }
  done() {
    return new Blueprint(this.pendingCurves);
  }
  close() {
    this._closeSketch();
    return this.done();
  }
  closeWithMirror() {
    this._closeWithMirror();
    return this.close();
  }
  /**
  * Stop drawing, make sure the sketch is closed (by adding a straight line to
  * from the last point to the first), add a fillet between the last and the
  * first segments and returns the sketch.
  */
  closeWithCustomCorner(radius, mode = "fillet") {
    this._closeSketch();
    this._customCornerLastWithFirst(radius, mode);
    return this.done();
  }
};
var makeBaseBox = (xLength, yLength, zLength) => {
  return new Sketcher().movePointerTo([-xLength / 2, yLength / 2]).hLine(xLength).vLine(-yLength).hLine(-xLength).close().extrude(zLength);
};
var guessFaceFromWires = (wires) => {
  const oc = getOC();
  const faceBuilder = new oc.BRepOffsetAPI_MakeFilling(3, 15, 2, false, 1e-5, 1e-4, 0.01, 0.1, 8, 9);
  wires.forEach((wire, wireIndex) => {
    wire.edges.forEach((edge) => {
      faceBuilder.Add(edge.wrapped, oc.GeomAbs_Shape.GeomAbs_C0, wireIndex === 0);
    });
  });
  faceBuilder.Build();
  const newFace = cast(faceBuilder.Shape());
  faceBuilder.delete();
  if (!(newFace instanceof Face)) throw new Error("Failed to create a face");
  return newFace;
};
var fixWire = (wire, baseFace) => {
  const wireFixer = new (getOC()).ShapeFix_Wire(wire.wrapped, baseFace.wrapped, 1e-9);
  wireFixer.FixEdgeCurves();
  wireFixer.delete();
  return wire;
};
var faceFromWires = (wires) => {
  let baseFace;
  let holeWires;
  try {
    baseFace = makeFace(wires[0]);
    holeWires = wires.slice(1);
  } catch (e) {
    baseFace = guessFaceFromWires(wires);
    holeWires = wires.slice(1).map((w) => fixWire(w, baseFace));
  }
  return addHolesInFace(baseFace, holeWires);
};
var solidFromShellGenerator = (sketches, shellGenerator) => {
  const shells = [];
  const startWires = [];
  const endWires = [];
  sketches.forEach((sketch) => {
    const [shell, startWire, endWire] = shellGenerator(sketch);
    shells.push(shell);
    startWires.push(startWire);
    endWires.push(endWire);
  });
  const startFace = faceFromWires(startWires);
  const endFace = faceFromWires(endWires);
  return makeSolid([
    startFace,
    ...shells,
    endFace
  ]);
};
var CompoundSketch = class {
  constructor(sketches) {
    this.sketches = sketches;
  }
  delete() {
    this.sketches.forEach((sketch) => sketch.delete());
  }
  get outerSketch() {
    return this.sketches[0];
  }
  get innerSketches() {
    return this.sketches.slice(1);
  }
  get wires() {
    return compoundShapes(this.sketches.map((s) => s.wire));
  }
  face() {
    return addHolesInFace(this.outerSketch.face(), this.innerSketches.map((s) => s.wire));
  }
  extrude(extrusionDistance, { extrusionDirection, extrusionProfile, twistAngle, origin } = {}) {
    const extrusionVec = new Vector(extrusionDirection || this.outerSketch.defaultDirection).normalized().multiply(extrusionDistance);
    if (extrusionProfile && !twistAngle) return solidFromShellGenerator(this.sketches, (sketch) => complexExtrude(sketch.wire, origin || this.outerSketch.defaultOrigin, extrusionVec, extrusionProfile, true));
    if (twistAngle) return solidFromShellGenerator(this.sketches, (sketch) => twistExtrude(sketch.wire, twistAngle, origin || this.outerSketch.defaultOrigin, extrusionVec, extrusionProfile, true));
    return basicFaceExtrusion(this.face(), extrusionVec);
  }
  /**
  * Revolves the drawing on an axis (defined by its direction and an origin
  * (defaults to the sketch origin)
  */
  revolve(revolutionAxis, { origin, angle } = {}) {
    return revolution(this.face(), origin || this.outerSketch.defaultOrigin, revolutionAxis, angle);
  }
  loftWith(otherCompound, loftConfig) {
    if (this.sketches.length !== otherCompound.sketches.length) throw new Error("You need to loft with another compound with the same number of sketches");
    const shells = this.sketches.map((base, cIndex) => {
      const outer = otherCompound.sketches[cIndex];
      return base.clone().loftWith(outer.clone(), { ruled: loftConfig.ruled }, true);
    });
    const baseFace = this.face().clone();
    shells.push(baseFace, otherCompound.face());
    return makeSolid(shells);
  }
};
var CompoundBlueprint = class CompoundBlueprint2 {
  constructor(blueprints) {
    this.blueprints = blueprints;
    this._boundingBox = null;
  }
  clone() {
    return new CompoundBlueprint2(this.blueprints);
  }
  get boundingBox() {
    if (!this._boundingBox) {
      const box = new BoundingBox2d();
      this.blueprints.forEach((b) => box.add(b.boundingBox));
      this._boundingBox = box;
    }
    return this._boundingBox;
  }
  get repr() {
    return [
      "Compound Blueprints",
      "-- Outline",
      this.blueprints[0].repr,
      "-- Holes",
      ...this.blueprints.slice(1).map((b) => b.repr)
    ].join("\n");
  }
  stretch(ratio, direction, origin) {
    return new CompoundBlueprint2(this.blueprints.map((bp) => bp.stretch(ratio, direction, origin)));
  }
  rotate(angle, center) {
    return new CompoundBlueprint2(this.blueprints.map((bp) => bp.rotate(angle, center)));
  }
  scale(scaleFactor, center) {
    const centerPoint = center || this.boundingBox.center;
    return new CompoundBlueprint2(this.blueprints.map((bp) => bp.scale(scaleFactor, centerPoint)));
  }
  translate(xDistOrPoint, yDist = 0) {
    return new CompoundBlueprint2(this.blueprints.map((bp) => bp.translate(xDistOrPoint, yDist)));
  }
  mirror(centerOrDirection, origin, mode) {
    return new CompoundBlueprint2(this.blueprints.map((bp) => bp.mirror(centerOrDirection, origin, mode)));
  }
  sketchOnPlane(plane, origin) {
    return new CompoundSketch(this.blueprints.map((blueprint) => blueprint.sketchOnPlane(plane, origin)));
  }
  sketchOnFace(face, scaleMode) {
    return new CompoundSketch(this.blueprints.map((blueprint) => blueprint.sketchOnFace(face, scaleMode)));
  }
  punchHole(shape, face, options = {}) {
    return this.blueprints[0].punchHole(shape, face, options);
  }
  toSVGViewBox(margin = 1) {
    return viewbox(this.boundingBox, margin);
  }
  toSVGPaths() {
    return this.blueprints.flatMap((bp) => bp.toSVGPaths());
  }
  toSVGGroup() {
    return `<g>${this.blueprints.map((b) => b.toSVGPath()).join("")}</g>`;
  }
  toSVG(margin = 1) {
    return asSVG(this.toSVGGroup(), this.boundingBox, margin);
  }
};
var Sketches = class {
  constructor(sketches) {
    this.sketches = sketches;
  }
  wires() {
    return compoundShapes(this.sketches.map((s) => s instanceof Sketch ? s.wire : s.wires));
  }
  faces() {
    return compoundShapes(this.sketches.map((s) => s.face()));
  }
  /** Extrudes the sketch to a certain distance.(along the default direction
  * and origin of the sketch).
  *
  * You can define another extrusion direction or origin,
  *
  * It is also possible to twist extrude with an angle (in degrees), or to
  * give a profile to the extrusion (the endFactor will scale the face, and
  * the profile will define how the scale is applied (either linarly or with
  * a s-shape).
  */
  extrude(extrusionDistance, extrusionConfig = {}) {
    return compoundShapes(this.sketches.map((s) => s.extrude(extrusionDistance, extrusionConfig)));
  }
  /**
  * Revolves the drawing on an axis (defined by its direction and an origin
  * (defaults to the sketch origin)
  */
  revolve(revolutionAxis, config) {
    return compoundShapes(this.sketches.map((s) => s.revolve(revolutionAxis, config)));
  }
};
var Blueprints = class Blueprints2 {
  constructor(blueprints) {
    this.blueprints = blueprints;
    this._boundingBox = null;
  }
  get repr() {
    return ["Blueprints", ...this.blueprints.map((b) => b.repr)].join("\n");
  }
  clone() {
    return new Blueprints2(this.blueprints);
  }
  get boundingBox() {
    if (!this._boundingBox) {
      const box = new BoundingBox2d();
      this.blueprints.forEach((b) => box.add(b.boundingBox));
      this._boundingBox = box;
    }
    return this._boundingBox;
  }
  stretch(ratio, direction, origin) {
    return new Blueprints2(this.blueprints.map((bp) => bp.stretch(ratio, direction, origin)));
  }
  rotate(angle, center) {
    return new Blueprints2(this.blueprints.map((bp) => bp.rotate(angle, center)));
  }
  scale(scaleFactor, center) {
    const centerPoint = center || this.boundingBox.center;
    return new Blueprints2(this.blueprints.map((bp) => bp.scale(scaleFactor, centerPoint)));
  }
  translate(xDistOrPoint, yDist = 0) {
    return new Blueprints2(this.blueprints.map((bp) => bp.translate(xDistOrPoint, yDist)));
  }
  mirror(centerOrDirection, origin, mode) {
    return new Blueprints2(this.blueprints.map((bp) => bp.mirror(centerOrDirection, origin, mode)));
  }
  sketchOnPlane(plane, origin) {
    return new Sketches(this.blueprints.map((bp) => bp.sketchOnPlane(plane, origin)));
  }
  sketchOnFace(face, scaleMode) {
    return new Sketches(this.blueprints.map((bp) => bp.sketchOnFace(face, scaleMode)));
  }
  punchHole(shape, face, options = {}) {
    let outShape = shape;
    this.blueprints.forEach((b) => {
      outShape = b.punchHole(outShape, face, options);
    });
    return outShape;
  }
  toSVGViewBox(margin = 1) {
    return viewbox(this.boundingBox, margin);
  }
  toSVGPaths() {
    return this.blueprints.map((bp) => bp.toSVGPaths());
  }
  toSVG(margin = 1) {
    return asSVG(this.blueprints.map((bp) => {
      if (bp instanceof Blueprint) return bp.toSVGPath();
      else return bp.toSVGGroup();
    }).join("\n    "), this.boundingBox, margin);
  }
};
var groupByBoundingBoxOverlap = (blueprints) => {
  const overlaps = blueprints.map((blueprint, i) => {
    return blueprints.slice(i + 1).map((v, j) => [j + i + 1, v]).filter(([, other]) => !blueprint.boundingBox.isOut(other.boundingBox)).map(([index]) => index);
  });
  const groups = [];
  const groupsInOverlaps = Array(overlaps.length);
  overlaps.forEach((indices, i) => {
    let myGroup = groupsInOverlaps[i];
    if (!myGroup) {
      myGroup = [];
      groups.push(myGroup);
    }
    myGroup.push(blueprints[i]);
    if (indices.length) indices.forEach((index) => {
      groupsInOverlaps[index] = myGroup;
    });
  });
  return groups;
};
var addContainmentInfo = (groupedBlueprints) => {
  return groupedBlueprints.map((blueprint, index) => {
    const firstCurve = blueprint.curves[0];
    const point = firstCurve.value((firstCurve.lastParameter + firstCurve.firstParameter) / 2);
    return {
      blueprint,
      isIn: groupedBlueprints.filter((potentialOuterBlueprint, j) => {
        if (index === j) return false;
        return potentialOuterBlueprint.isInside(point);
      })
    };
  });
};
var splitMultipleOuterBlueprints = (outerBlueprints, allBlueprints2) => {
  return outerBlueprints.flatMap(({ blueprint: outerBlueprint }) => {
    return cleanEdgeCases(allBlueprints2.filter(({ blueprint, isIn }) => blueprint === outerBlueprint || isIn.indexOf(outerBlueprint) !== -1));
  });
};
var handleNestedBlueprints = (nestedBlueprints, allBlueprints2) => {
  return [allBlueprints2.filter(({ isIn }) => isIn.length <= 1), ...cleanEdgeCases(addContainmentInfo(nestedBlueprints.map(({ blueprint }) => blueprint)))];
};
var cleanEdgeCases = (groupedBlueprints) => {
  if (!groupedBlueprints.length) return [];
  const outerBlueprints = groupedBlueprints.filter(({ isIn }) => !isIn.length);
  const nestedBlueprints = groupedBlueprints.filter(({ isIn }) => isIn.length > 1);
  if (outerBlueprints.length === 1 && nestedBlueprints.length === 0) return [groupedBlueprints];
  else if (outerBlueprints.length > 1) return splitMultipleOuterBlueprints(outerBlueprints, groupedBlueprints);
  else return handleNestedBlueprints(nestedBlueprints, groupedBlueprints);
};
var organiseBlueprints = (blueprints) => {
  return new Blueprints(groupByBoundingBoxOverlap(blueprints).map(addContainmentInfo).flatMap(cleanEdgeCases).map((compounds) => {
    if (compounds.length === 1) return compounds[0].blueprint;
    compounds.sort((a, b) => a.isIn.length - b.isIn.length);
    return new CompoundBlueprint(compounds.map(({ blueprint }) => blueprint));
  }));
};
var polysidesBlueprint = (radius, sidesCount, sagitta = 0) => {
  const points = [...Array(sidesCount).keys()].map((i) => {
    const theta = -(Math.PI * 2 / sidesCount) * i;
    return [radius * Math.sin(theta), radius * Math.cos(theta)];
  });
  const blueprint = new BlueprintSketcher().movePointerTo([points[points.length - 1][0], points[points.length - 1][1]]);
  if (sagitta) points.forEach(([x, y]) => blueprint.sagittaArcTo([x, y], sagitta));
  else points.forEach(([x, y]) => blueprint.lineTo([x, y]));
  return blueprint.done();
};
var roundedRectangleBlueprint = (width, height, r = 0) => {
  const { rx: inputRx = 0, ry: inputRy = 0 } = typeof r === "number" ? {
    ry: r,
    rx: r
  } : r;
  let rx = Math.min(inputRx, width / 2);
  let ry = Math.min(inputRy, height / 2);
  const withRadius = rx && ry;
  if (!withRadius) {
    rx = 0;
    ry = 0;
  }
  const symmetricRadius = rx === ry;
  const sk = new BlueprintSketcher([Math.min(0, -(width / 2 - rx)), -height / 2]);
  const addFillet = (xDist, yDist) => {
    if (withRadius) {
      if (symmetricRadius) sk.tangentArc(xDist, yDist);
      else sk.ellipse(xDist, yDist, rx, ry, 0, false, true);
    }
  };
  if (rx < width / 2) sk.hLine(width - 2 * rx);
  addFillet(rx, ry);
  if (ry < height / 2) sk.vLine(height - 2 * ry);
  addFillet(-rx, ry);
  if (rx < width / 2) sk.hLine(-(width - 2 * rx));
  addFillet(-rx, -ry);
  if (ry < height / 2) sk.vLine(-(height - 2 * ry));
  addFillet(rx, -ry);
  return sk.close();
};
var PRECISION$1 = 1e-9;
var samePoint$1 = (x, y) => samePoint$2(x, y, PRECISION$1);
var curveMidPoint = (curve) => {
  const midParameter = (curve.lastParameter + curve.firstParameter) / 2;
  return curve.value(midParameter);
};
var rotateToStartAt = (curves, point) => {
  const startIndex = curves.findIndex((curve) => {
    return samePoint$1(point, curve.firstPoint);
  });
  const start = curves.slice(0, startIndex);
  return curves.slice(startIndex).concat(start);
};
var rotateToStartAtSegment = (curves, segment) => {
  const onSegment = (curve) => {
    return samePoint$1(segment.firstPoint, curve.firstPoint) && samePoint$1(segment.lastPoint, curve.lastPoint);
  };
  let startIndex = curves.findIndex(onSegment);
  if (startIndex === -1) {
    curves = reverseSegment(curves);
    startIndex = curves.findIndex(onSegment);
    if (startIndex === -1) {
      console.error(curves.map((c) => c.repr), segment.repr);
      throw new Error("Failed to rotate to segment start");
    }
  }
  const start = curves.slice(0, startIndex);
  return curves.slice(startIndex).concat(start);
};
function* createSegmentOnPoints(curves, allIntersections, allCommonSegments) {
  const endsAtIntersection = (curve) => {
    return !!allIntersections.find((intersection) => {
      return samePoint$1(intersection, curve.lastPoint);
    });
  };
  const isCommonSegment = (curve) => {
    return !!allCommonSegments.find((segment) => {
      return samePoint$1(segment.firstPoint, curve.firstPoint) && samePoint$1(segment.lastPoint, curve.lastPoint) || samePoint$1(segment.firstPoint, curve.lastPoint) && samePoint$1(segment.lastPoint, curve.firstPoint);
    });
  };
  let currentCurves = [];
  for (const curve of curves) if (endsAtIntersection(curve)) {
    currentCurves.push(curve);
    yield currentCurves;
    currentCurves = [];
  } else if (isCommonSegment(curve)) {
    if (currentCurves.length) {
      yield currentCurves;
      currentCurves = [];
    }
    yield [curve];
  } else currentCurves.push(curve);
  if (currentCurves.length) yield currentCurves;
}
var startOfSegment = (s) => {
  return s[0].firstPoint;
};
var endOfSegment = (s) => {
  return s[s.length - 1].lastPoint;
};
var reverseSegment = (segment) => {
  segment.reverse();
  return segment.map((curve) => {
    const newCurve = curve.clone();
    newCurve.reverse();
    return newCurve;
  });
};
var reverseSegments = (s) => {
  s.reverse();
  return s.map(reverseSegment);
};
function removeNonCrossingPoint(allIntersections, segmentedCurve, blueprintToCheck) {
  return allIntersections.filter((intersection) => {
    const segmentsOfIntersection = segmentedCurve.filter((s) => {
      return samePoint$1(s.firstPoint, intersection) || samePoint$1(s.lastPoint, intersection);
    });
    if (segmentsOfIntersection.length % 2) {
      console.error(segmentsOfIntersection, intersection);
      throw new Error("Bug in the intersection algo on non crossing point");
    }
    const isInside = segmentsOfIntersection.map((segment) => {
      return blueprintToCheck.isInside(curveMidPoint(segment));
    });
    return !(isInside.every((i) => i) || !isInside.some((i) => i));
  });
}
function blueprintsIntersectionSegments(first, second) {
  let allIntersections = [];
  const allCommonSegments = [];
  const firstCurvePoints = new Array(first.curves.length).fill(0).map(() => []);
  const secondCurvePoints = new Array(second.curves.length).fill(0).map(() => []);
  first.curves.forEach((thisCurve, firstIndex) => {
    second.curves.forEach((otherCurve, secondIndex) => {
      const { intersections, commonSegments, commonSegmentsPoints: commonSegmentsPoints2 } = intersectCurves(thisCurve, otherCurve, PRECISION$1 / 100);
      allIntersections.push(...intersections);
      firstCurvePoints[firstIndex].push(...intersections);
      secondCurvePoints[secondIndex].push(...intersections);
      allCommonSegments.push(...commonSegments);
      allIntersections.push(...commonSegmentsPoints2);
      firstCurvePoints[firstIndex].push(...commonSegmentsPoints2);
      secondCurvePoints[secondIndex].push(...commonSegmentsPoints2);
    });
  });
  allIntersections = removeDuplicatePoints(allIntersections, PRECISION$1);
  if (!allIntersections.length || allIntersections.length === 1) return null;
  const cutCurve = ([curve, intersections]) => {
    if (!intersections.length) return [curve];
    return curve.splitAt(intersections, PRECISION$1 / 100);
  };
  let firstCurveSegments = zip([first.curves, firstCurvePoints]).flatMap(cutCurve);
  let secondCurveSegments = zip([second.curves, secondCurvePoints]).flatMap(cutCurve);
  const commonSegmentsPoints = allCommonSegments.map((c) => [c.firstPoint, c.lastPoint]);
  allIntersections = removeNonCrossingPoint(allIntersections, firstCurveSegments, second);
  if (!allIntersections.length && !allCommonSegments.length) return null;
  if (!allCommonSegments.length) {
    const startAt = allIntersections[0];
    firstCurveSegments = rotateToStartAt(firstCurveSegments, startAt);
    secondCurveSegments = rotateToStartAt(secondCurveSegments, startAt);
  } else {
    const startSegment = allCommonSegments[0];
    firstCurveSegments = rotateToStartAtSegment(firstCurveSegments, startSegment);
    secondCurveSegments = rotateToStartAtSegment(secondCurveSegments, startSegment);
  }
  const firstIntersectedSegments = Array.from(createSegmentOnPoints(firstCurveSegments, allIntersections, allCommonSegments));
  let secondIntersectedSegments = Array.from(createSegmentOnPoints(secondCurveSegments, allIntersections, allCommonSegments));
  if (!samePoint$1(endOfSegment(secondIntersectedSegments[0]), endOfSegment(firstIntersectedSegments[0])) || allCommonSegments.length > 0 && secondIntersectedSegments[0].length !== 1) secondIntersectedSegments = reverseSegments(secondIntersectedSegments);
  return zip([firstIntersectedSegments, secondIntersectedSegments]).map(([first2, second2]) => {
    const currentStart = startOfSegment(first2);
    const currentEnd = endOfSegment(first2);
    if (commonSegmentsPoints.find(([startPoint, endPoint]) => {
      return samePoint$1(startPoint, currentStart) && samePoint$1(endPoint, currentEnd) || samePoint$1(startPoint, currentEnd) && samePoint$1(startPoint, currentStart);
    })) return [first2, "same"];
    return [first2, second2];
  });
}
var splitPaths = (curves) => {
  const startPoints = curves.map((c) => c.firstPoint);
  let endPoints = curves.map((c) => c.lastPoint);
  endPoints = endPoints.slice(-1).concat(endPoints.slice(0, -1));
  const discontinuities = zip([startPoints, endPoints]).map(([startPoint, endPoint], index) => {
    if (!samePoint$1(startPoint, endPoint)) return index;
    return null;
  }).filter((f) => f !== null);
  if (!discontinuities.length) return [curves];
  const paths = zip([discontinuities.slice(0, -1), discontinuities.slice(1)]).map(([start, end]) => {
    return curves.slice(start, end);
  });
  let lastPath = curves.slice(discontinuities[discontinuities.length - 1]);
  if (discontinuities[0] !== 0) lastPath = lastPath.concat(curves.slice(0, discontinuities[0]));
  paths.push(lastPath);
  return paths;
};
function booleanOperation(first, second, { firstInside, secondInside }) {
  const segments = blueprintsIntersectionSegments(first, second);
  if (!segments) {
    const firstBlueprintPoint = curveMidPoint(first.curves[0]);
    const firstCurveInSecond = second.isInside(firstBlueprintPoint);
    const secondBlueprintPoint = curveMidPoint(second.curves[0]);
    return {
      identical: false,
      firstCurveInSecond,
      secondCurveInFirst: first.isInside(secondBlueprintPoint)
    };
  }
  if (segments.every(([, secondSegment]) => secondSegment === "same")) return { identical: true };
  let lastWasSame = null;
  let segmentsIn = null;
  const paths = splitPaths(segments.flatMap(([firstSegment, secondSegment]) => {
    let segments2 = [];
    let segmentsOut = 0;
    if (secondSegment === "same") {
      if (segmentsIn === 1) {
        segmentsIn = 1;
        return [...firstSegment];
      }
      if (segmentsIn === 2 || segmentsIn === 0) {
        segmentsIn = null;
        return [];
      }
      if (segmentsIn === null) {
        if (!lastWasSame) lastWasSame = firstSegment;
        else lastWasSame = [...lastWasSame, ...firstSegment];
        return [];
      }
      console.error("weird situation");
      return [];
    }
    const firstSegmentPoint = curveMidPoint(firstSegment[0]);
    const firstSegmentInSecondShape = second.isInside(firstSegmentPoint);
    if (firstInside === "keep" && firstSegmentInSecondShape || firstInside === "remove" && !firstSegmentInSecondShape) {
      segmentsOut += 1;
      segments2.push(...firstSegment);
    }
    const secondSegmentPoint = curveMidPoint(secondSegment[0]);
    const secondSegmentInFirstShape = first.isInside(secondSegmentPoint);
    if (secondInside === "keep" && secondSegmentInFirstShape || secondInside === "remove" && !secondSegmentInFirstShape) {
      let segmentsToAdd = secondSegment;
      if (segmentsOut === 1) segmentsToAdd = reverseSegment(secondSegment);
      segmentsOut += 1;
      segments2.push(...segmentsToAdd);
    }
    if (segmentsIn === null && segmentsOut === 1 && lastWasSame) segments2 = [...lastWasSame, ...segments2];
    if (segmentsOut === 1) {
      segmentsIn = segmentsOut;
      lastWasSame = null;
    }
    return segments2;
  })).filter((b) => b.length).map((b) => new Blueprint(b));
  if (paths.length === 0) return null;
  if (paths.length === 1) return paths[0];
  return organiseBlueprints(paths);
}
var fuseBlueprints = (first, second) => {
  const result = booleanOperation(first, second, {
    firstInside: "remove",
    secondInside: "remove"
  });
  if (result === null || result instanceof Blueprint || result instanceof Blueprints) return result;
  if (result.identical) return first.clone();
  if (result.firstCurveInSecond) return second.clone();
  if (result.secondCurveInFirst) return first.clone();
  return new Blueprints([first, second]);
};
var cutBlueprints = (first, second) => {
  const result = booleanOperation(first, second, {
    firstInside: "remove",
    secondInside: "keep"
  });
  if (result === null || result instanceof Blueprint || result instanceof Blueprints) return result;
  if (result.identical) return null;
  if (result.firstCurveInSecond) return null;
  if (result.secondCurveInFirst) return new Blueprints([new CompoundBlueprint([first, second])]);
  return first.clone();
};
var intersectBlueprints = (first, second) => {
  const result = booleanOperation(first, second, {
    firstInside: "keep",
    secondInside: "keep"
  });
  if (result === null || result instanceof Blueprint || result instanceof Blueprints) return result;
  if (result.identical) return first.clone();
  if (result.firstCurveInSecond) return first.clone();
  if (result.secondCurveInFirst) return second.clone();
  return null;
};
var genericIntersects = (first, second) => {
  if (first instanceof Blueprint && second instanceof Blueprint) {
    let allIntersections = [];
    first.curves.forEach((thisCurve) => {
      second.curves.forEach((otherCurve) => {
        const { intersections, commonSegmentsPoints } = intersectCurves(thisCurve, otherCurve);
        allIntersections.push(...intersections);
        allIntersections.push(...commonSegmentsPoints);
      });
    });
    allIntersections = removeDuplicatePoints(allIntersections);
    return allIntersections.length > 1;
  }
  if (first instanceof CompoundBlueprint || first instanceof Blueprints) return first.blueprints.some((bp) => genericIntersects(bp, second));
  if (second instanceof CompoundBlueprint || second instanceof Blueprints) return second.blueprints.some((bp) => genericIntersects(first, bp));
  throw new Error("Bug in the generic intersects algorithm");
};
var genericFuse = (first, second) => {
  if (first instanceof CompoundBlueprint) {
    if (second instanceof Blueprint) return fuseBlueprintWithCompound(second, first);
    if (second instanceof CompoundBlueprint) return fuseCompoundWithCompound(first, second);
  }
  if (second instanceof CompoundBlueprint) {
    if (first instanceof Blueprint) return fuseBlueprintWithCompound(first, second);
    if (first instanceof CompoundBlueprint) return fuseCompoundWithCompound(first, second);
  }
  if (first instanceof Blueprint && second instanceof Blueprint) return fuseBlueprints(first, second);
  throw new Error("Bug in the generic fuse algorithm");
};
var fuseIntersectingBlueprints = (blueprints) => {
  const fused = /* @__PURE__ */ new Map();
  const output = [];
  blueprints.forEach((inputBlueprint, i) => {
    let savedBlueprint;
    if (fused.has(i)) savedBlueprint = fused.get(i);
    else {
      savedBlueprint = {
        current: inputBlueprint,
        fusedWith: /* @__PURE__ */ new Set([i])
      };
      output.push(savedBlueprint);
    }
    blueprints.slice(i + 1).forEach((inputOtherBlueprint, j) => {
      const blueprint = savedBlueprint.current;
      const currentIndex = i + j + 1;
      if (savedBlueprint.fusedWith.has(currentIndex)) return;
      let otherBlueprint = inputOtherBlueprint;
      let otherIsFused = false;
      if (fused.has(currentIndex)) {
        otherBlueprint = fused.get(currentIndex).current;
        otherIsFused = true;
      }
      if (blueprint.boundingBox.isOut(otherBlueprint.boundingBox)) return;
      if (!genericIntersects(blueprint, otherBlueprint)) return;
      let newFused;
      if (blueprint instanceof Blueprints || otherBlueprint instanceof Blueprints) newFused = fuse2D(blueprint, otherBlueprint);
      else newFused = genericFuse(blueprint, otherBlueprint);
      if (!(newFused instanceof Blueprint || newFused instanceof CompoundBlueprint)) {
        if (newFused instanceof Blueprints && newFused.blueprints.length === 2) return;
        else if (newFused instanceof Blueprints && newFused.blueprints.length === 1) newFused = newFused.blueprints[0];
        else if (!(newFused instanceof Blueprints)) {
          console.error(newFused);
          throw new Error("Bug in blueprint fusing algorigthm");
        }
      }
      savedBlueprint.fusedWith.add(currentIndex);
      savedBlueprint.current = newFused;
      if (!otherIsFused) fused.set(currentIndex, savedBlueprint);
    });
  });
  return organiseBlueprints(output.map(({ current }) => current).filter((a) => a).flatMap((b) => allBlueprints(b)));
};
var allBlueprints = (shape) => {
  if (shape instanceof Blueprint) return [shape];
  if (shape instanceof CompoundBlueprint) return shape.blueprints;
  if (shape instanceof Blueprints) return shape.blueprints.flatMap((b) => allBlueprints(b));
  return [];
};
var fuseBlueprintWithCompound = (blueprint, compound) => {
  const outerFused = fuseBlueprints(blueprint, compound.blueprints[0]);
  const innerFused = compound.blueprints.slice(1).map((c) => cutBlueprints(c, blueprint));
  return organiseBlueprints([...allBlueprints(outerFused), ...innerFused.flatMap((fused) => allBlueprints(fused))]);
};
function allPairs(list1, list2) {
  const result = [];
  for (const l1 of list1) for (const l2 of list2) result.push([l1, l2]);
  return result;
}
var fuseCompoundWithCompound = (first, second) => {
  const outerFused = fuseBlueprints(first.blueprints[0], second.blueprints[0]);
  const inner1Fused = second.blueprints.slice(1).map((c) => cutBlueprints(c, first.blueprints[0]));
  const inner2Fused = first.blueprints.slice(1).map((c) => cutBlueprints(c, second.blueprints[0]));
  const innerIntersections = allPairs(first.blueprints.slice(1), second.blueprints.slice(1)).flatMap(([first2, second2]) => {
    return allBlueprints(intersectBlueprints(first2, second2));
  });
  return organiseBlueprints([
    ...allBlueprints(outerFused),
    ...inner1Fused.flatMap((fused) => allBlueprints(fused)),
    ...inner2Fused.flatMap((fused) => allBlueprints(fused)),
    ...innerIntersections
  ]);
};
var fuse2D = (first, second) => {
  if (first === null) return second && second.clone();
  if (second === null) return first && first.clone();
  if (!(first instanceof Blueprints) && second instanceof Blueprints) return fuseIntersectingBlueprints([first, ...second.blueprints]);
  if (!(second instanceof Blueprints) && first instanceof Blueprints) return fuseIntersectingBlueprints([second, ...first.blueprints]);
  if (first instanceof Blueprints && second instanceof Blueprints) {
    let out = fuse2D(first.blueprints[0], second);
    first.blueprints.slice(1).forEach((bp) => {
      out = fuse2D(bp, out);
    });
    return out;
  }
  if (first instanceof CompoundBlueprint) {
    if (second instanceof Blueprints) return fuse2D(second, first);
    if (second instanceof Blueprint) return fuseBlueprintWithCompound(second, first);
    if (second instanceof CompoundBlueprint) return fuseCompoundWithCompound(first, second);
  }
  if (second instanceof CompoundBlueprint) {
    if (first instanceof Blueprints) return fuse2D(first, second);
    if (first instanceof Blueprint) return fuseBlueprintWithCompound(first, second);
    if (first instanceof CompoundBlueprint) return fuseCompoundWithCompound(first, second);
  }
  if (first instanceof Blueprint && second instanceof Blueprint) return fuseBlueprints(first, second);
  return null;
};
var mergeNonIntersecting = (shapes) => {
  const exploded = shapes.flatMap((s) => {
    if (s === null) return [];
    if (s instanceof Blueprints) return s.blueprints;
    return s;
  });
  if (exploded.length === 1) return exploded[0];
  return new Blueprints(exploded);
};
var cut2D = (first, second) => {
  if (first === null) return null;
  if (second === null) return first.clone();
  if (first instanceof Blueprints) return mergeNonIntersecting(first.blueprints.map((bp) => cut2D(bp, second)));
  if (first instanceof CompoundBlueprint) {
    const wrapper = first.blueprints[0];
    if (second instanceof Blueprint && !second.intersects(wrapper)) {
      if (!wrapper.isInside(second.firstPoint)) return null;
      return organiseBlueprints([wrapper, ...allBlueprints(fuse2D(second, new Blueprints(first.blueprints.slice(1))))]);
    } else {
      let out = cut2D(first.blueprints[0], second);
      first.blueprints.slice(1).forEach((bp) => {
        out = cut2D(out, bp);
      });
      return out;
    }
  }
  if (second instanceof Blueprints) return mergeNonIntersecting(second.blueprints.map((bp) => cut2D(first, bp)));
  if (second instanceof CompoundBlueprint) {
    let out = cutBlueprints(first, second.blueprints[0]);
    second.blueprints.slice(1).forEach((bp) => {
      out = fuse2D(out, intersectBlueprints(bp, first));
    });
    return out;
  }
  return cutBlueprints(first, second);
};
function intersect2D(first, second) {
  if (first === null || second === null) return null;
  if (first instanceof Blueprint && second instanceof Blueprint) return intersectBlueprints(first, second);
  if (first instanceof Blueprints) return mergeNonIntersecting(first.blueprints.map((bp) => intersect2D(bp, second)));
  if (first instanceof CompoundBlueprint) {
    const wrapper = first.blueprints[0];
    const cut = first.blueprints[1];
    return cut2D(intersect2D(wrapper, second), cut);
  }
  if (second instanceof Blueprints) return mergeNonIntersecting(second.blueprints.map((bp) => intersect2D(first, bp)));
  if (second instanceof CompoundBlueprint) {
    const wrapper = second.blueprints[0];
    const cut = second.blueprints[1];
    return cut2D(intersect2D(wrapper, first), cut);
  }
  throw new Error("intersct 2D algorithm error");
}
var sketchCircle = (radius, planeConfig = {}) => {
  const plane = planeConfig.plane instanceof Plane ? makePlane(planeConfig.plane) : makePlane(planeConfig.plane, planeConfig.origin);
  const sketch = new Sketch(assembleWire([makeCircle(radius, plane.origin, plane.zDir)]), {
    defaultOrigin: plane.origin,
    defaultDirection: plane.zDir
  });
  plane.delete();
  return sketch;
};
var sketchEllipse = (xRadius = 1, yRadius = 2, planeConfig = {}) => {
  const plane = planeConfig.plane instanceof Plane ? makePlane(planeConfig.plane) : makePlane(planeConfig.plane, planeConfig.origin);
  const xDir = new Vector(plane.xDir);
  let majR = xRadius;
  let minR = yRadius;
  if (yRadius > xRadius) {
    xDir.rotate(90, plane.origin, plane.zDir);
    majR = yRadius;
    minR = xRadius;
  }
  const wire = assembleWire([makeEllipse(majR, minR, plane.origin, plane.zDir, xDir)]);
  xDir.delete();
  const sketch = new Sketch(wire, {
    defaultOrigin: plane.origin,
    defaultDirection: plane.zDir
  });
  plane.delete();
  return sketch;
};
var sketchRectangle = (xLength, yLength, planeConfig = {}) => {
  return (planeConfig.plane instanceof Plane ? new Sketcher(planeConfig.plane) : new Sketcher(planeConfig.plane, planeConfig.origin)).movePointerTo([-xLength / 2, -yLength / 2]).hLine(xLength).vLine(yLength).hLine(-xLength).vLine(-yLength).done();
};
var sketchRoundedRectangle = (width, height, r = 0, planeConfig = {}) => {
  return roundedRectangleBlueprint(width, height, r).sketchOnPlane(planeConfig.plane, planeConfig.origin);
};
var sketchPolysides = (radius, sidesCount, sagitta = 0, planeConfig = {}) => {
  const points = [...Array(sidesCount).keys()].map((i) => {
    const theta = -(Math.PI * 2 / sidesCount) * i;
    return [radius * Math.sin(theta), radius * Math.cos(theta)];
  });
  const sketch = (planeConfig.plane instanceof Plane ? new Sketcher(planeConfig.plane) : new Sketcher(planeConfig.plane, planeConfig.origin)).movePointerTo([points[points.length - 1][0], points[points.length - 1][1]]);
  if (sagitta) points.forEach(([x, y]) => sketch.sagittaArcTo([x, y], sagitta));
  else points.forEach(([x, y]) => sketch.lineTo([x, y]));
  return sketch.done();
};
var polysideInnerRadius = (outerRadius, sidesCount, sagitta = 0) => {
  const innerAngle = Math.PI / sidesCount;
  const innerRadius = Math.cos(innerAngle) * outerRadius;
  if (sagitta >= 0) return innerRadius;
  return innerRadius + sagitta;
};
var sketchFaceOffset = (face, offset2) => {
  const defaultOrigin = face.center;
  const defaultDirection = face.normalAt();
  const sketch = new Sketch(face.outerWire().offset2D(offset2), {
    defaultOrigin,
    defaultDirection
  });
  defaultOrigin.delete();
  defaultDirection.delete();
  return sketch;
};
var sketchParametricFunction = (func, planeConfig = {}, { pointsCount = 400, start = 0, stop = 1 } = {}, approximationConfig = {}) => {
  const [r, gc] = localGC();
  const plane = r(planeConfig.plane instanceof Plane ? makePlane(planeConfig.plane) : makePlane(planeConfig.plane, planeConfig.origin));
  const stepSize = (stop - start) / pointsCount;
  const sketch = new Sketch(assembleWire([r(makeBSplineApproximation([...Array(pointsCount + 1).keys()].map((t) => {
    const point = func(start + t * stepSize);
    return r(plane.toWorldCoords(point));
  }), approximationConfig))]), {
    defaultOrigin: plane.origin,
    defaultDirection: plane.zDir
  });
  gc();
  return sketch;
};
var sketchHelix = (pitch, height, radius, center = [
  0,
  0,
  0
], dir = [
  0,
  0,
  1
], lefthand = false) => {
  return new Sketch(assembleWire(makeHelix(pitch, height, radius, center, dir, lefthand).wires));
};
var require___vite_browser_external = /* @__PURE__ */ __commonJSMin(((exports2, module) => {
  module.exports = {};
}));
if (!String.prototype.codePointAt) (function() {
  var defineProperty = (function() {
    try {
      var object = {};
      var $defineProperty = Object.defineProperty;
      var result = $defineProperty(object, object, object) && $defineProperty;
    } catch (error) {
    }
    return result;
  })();
  var codePointAt = function(position) {
    if (this == null) throw TypeError();
    var string = String(this);
    var size = string.length;
    var index = position ? Number(position) : 0;
    if (index != index) index = 0;
    if (index < 0 || index >= size) return;
    var first = string.charCodeAt(index);
    var second;
    if (first >= 55296 && first <= 56319 && size > index + 1) {
      second = string.charCodeAt(index + 1);
      if (second >= 56320 && second <= 57343) return (first - 55296) * 1024 + second - 56320 + 65536;
    }
    return first;
  };
  if (defineProperty) defineProperty(String.prototype, "codePointAt", {
    "value": codePointAt,
    "configurable": true,
    "writable": true
  });
  else String.prototype.codePointAt = codePointAt;
})();
var TINF_OK = 0;
var TINF_DATA_ERROR = -3;
function Tree() {
  this.table = /* @__PURE__ */ new Uint16Array(16);
  this.trans = /* @__PURE__ */ new Uint16Array(288);
}
function Data(source, dest) {
  this.source = source;
  this.sourceIndex = 0;
  this.tag = 0;
  this.bitcount = 0;
  this.dest = dest;
  this.destLen = 0;
  this.ltree = new Tree();
  this.dtree = new Tree();
}
var sltree = new Tree();
var sdtree = new Tree();
var length_bits = /* @__PURE__ */ new Uint8Array(30);
var length_base = /* @__PURE__ */ new Uint16Array(30);
var dist_bits = /* @__PURE__ */ new Uint8Array(30);
var dist_base = /* @__PURE__ */ new Uint16Array(30);
var clcidx = new Uint8Array([
  16,
  17,
  18,
  0,
  8,
  7,
  9,
  6,
  10,
  5,
  11,
  4,
  12,
  3,
  13,
  2,
  14,
  1,
  15
]);
var code_tree = new Tree();
var lengths = /* @__PURE__ */ new Uint8Array(320);
function tinf_build_bits_base(bits, base, delta, first) {
  var i, sum;
  for (i = 0; i < delta; ++i) bits[i] = 0;
  for (i = 0; i < 30 - delta; ++i) bits[i + delta] = i / delta | 0;
  for (sum = first, i = 0; i < 30; ++i) {
    base[i] = sum;
    sum += 1 << bits[i];
  }
}
function tinf_build_fixed_trees(lt, dt) {
  var i;
  for (i = 0; i < 7; ++i) lt.table[i] = 0;
  lt.table[7] = 24;
  lt.table[8] = 152;
  lt.table[9] = 112;
  for (i = 0; i < 24; ++i) lt.trans[i] = 256 + i;
  for (i = 0; i < 144; ++i) lt.trans[24 + i] = i;
  for (i = 0; i < 8; ++i) lt.trans[168 + i] = 280 + i;
  for (i = 0; i < 112; ++i) lt.trans[176 + i] = 144 + i;
  for (i = 0; i < 5; ++i) dt.table[i] = 0;
  dt.table[5] = 32;
  for (i = 0; i < 32; ++i) dt.trans[i] = i;
}
var offs = /* @__PURE__ */ new Uint16Array(16);
function tinf_build_tree(t, lengths2, off, num) {
  var i, sum;
  for (i = 0; i < 16; ++i) t.table[i] = 0;
  for (i = 0; i < num; ++i) t.table[lengths2[off + i]]++;
  t.table[0] = 0;
  for (sum = 0, i = 0; i < 16; ++i) {
    offs[i] = sum;
    sum += t.table[i];
  }
  for (i = 0; i < num; ++i) if (lengths2[off + i]) t.trans[offs[lengths2[off + i]]++] = i;
}
function tinf_getbit(d) {
  if (!d.bitcount--) {
    d.tag = d.source[d.sourceIndex++];
    d.bitcount = 7;
  }
  var bit = d.tag & 1;
  d.tag >>>= 1;
  return bit;
}
function tinf_read_bits(d, num, base) {
  if (!num) return base;
  while (d.bitcount < 24) {
    d.tag |= d.source[d.sourceIndex++] << d.bitcount;
    d.bitcount += 8;
  }
  var val = d.tag & 65535 >>> 16 - num;
  d.tag >>>= num;
  d.bitcount -= num;
  return val + base;
}
function tinf_decode_symbol(d, t) {
  while (d.bitcount < 24) {
    d.tag |= d.source[d.sourceIndex++] << d.bitcount;
    d.bitcount += 8;
  }
  var sum = 0, cur = 0, len = 0;
  var tag = d.tag;
  do {
    cur = 2 * cur + (tag & 1);
    tag >>>= 1;
    ++len;
    sum += t.table[len];
    cur -= t.table[len];
  } while (cur >= 0);
  d.tag = tag;
  d.bitcount -= len;
  return t.trans[sum + cur];
}
function tinf_decode_trees(d, lt, dt) {
  var hlit, hdist, hclen;
  var i, num, length;
  hlit = tinf_read_bits(d, 5, 257);
  hdist = tinf_read_bits(d, 5, 1);
  hclen = tinf_read_bits(d, 4, 4);
  for (i = 0; i < 19; ++i) lengths[i] = 0;
  for (i = 0; i < hclen; ++i) {
    var clen = tinf_read_bits(d, 3, 0);
    lengths[clcidx[i]] = clen;
  }
  tinf_build_tree(code_tree, lengths, 0, 19);
  for (num = 0; num < hlit + hdist; ) {
    var sym = tinf_decode_symbol(d, code_tree);
    switch (sym) {
      case 16:
        var prev = lengths[num - 1];
        for (length = tinf_read_bits(d, 2, 3); length; --length) lengths[num++] = prev;
        break;
      case 17:
        for (length = tinf_read_bits(d, 3, 3); length; --length) lengths[num++] = 0;
        break;
      case 18:
        for (length = tinf_read_bits(d, 7, 11); length; --length) lengths[num++] = 0;
        break;
      default:
        lengths[num++] = sym;
    }
  }
  tinf_build_tree(lt, lengths, 0, hlit);
  tinf_build_tree(dt, lengths, hlit, hdist);
}
function tinf_inflate_block_data(d, lt, dt) {
  while (1) {
    var sym = tinf_decode_symbol(d, lt);
    if (sym === 256) return TINF_OK;
    if (sym < 256) d.dest[d.destLen++] = sym;
    else {
      var length, dist, offs2;
      var i;
      sym -= 257;
      length = tinf_read_bits(d, length_bits[sym], length_base[sym]);
      dist = tinf_decode_symbol(d, dt);
      offs2 = d.destLen - tinf_read_bits(d, dist_bits[dist], dist_base[dist]);
      for (i = offs2; i < offs2 + length; ++i) d.dest[d.destLen++] = d.dest[i];
    }
  }
}
function tinf_inflate_uncompressed_block(d) {
  var length, invlength;
  var i;
  while (d.bitcount > 8) {
    d.sourceIndex--;
    d.bitcount -= 8;
  }
  length = d.source[d.sourceIndex + 1];
  length = 256 * length + d.source[d.sourceIndex];
  invlength = d.source[d.sourceIndex + 3];
  invlength = 256 * invlength + d.source[d.sourceIndex + 2];
  if (length !== (~invlength & 65535)) return TINF_DATA_ERROR;
  d.sourceIndex += 4;
  for (i = length; i; --i) d.dest[d.destLen++] = d.source[d.sourceIndex++];
  d.bitcount = 0;
  return TINF_OK;
}
function tinf_uncompress(source, dest) {
  var d = new Data(source, dest);
  var bfinal, btype, res;
  do {
    bfinal = tinf_getbit(d);
    btype = tinf_read_bits(d, 2, 0);
    switch (btype) {
      case 0:
        res = tinf_inflate_uncompressed_block(d);
        break;
      case 1:
        res = tinf_inflate_block_data(d, sltree, sdtree);
        break;
      case 2:
        tinf_decode_trees(d, d.ltree, d.dtree);
        res = tinf_inflate_block_data(d, d.ltree, d.dtree);
        break;
      default:
        res = TINF_DATA_ERROR;
    }
    if (res !== TINF_OK) throw new Error("Data error");
  } while (!bfinal);
  if (d.destLen < d.dest.length) {
    if (typeof d.dest.slice === "function") return d.dest.slice(0, d.destLen);
    else return d.dest.subarray(0, d.destLen);
  }
  return d.dest;
}
tinf_build_fixed_trees(sltree, sdtree);
tinf_build_bits_base(length_bits, length_base, 4, 3);
tinf_build_bits_base(dist_bits, dist_base, 2, 1);
length_bits[28] = 0;
length_base[28] = 258;
var tinyInflate = tinf_uncompress;
function derive(v0, v1, v2, v3, t) {
  return Math.pow(1 - t, 3) * v0 + 3 * Math.pow(1 - t, 2) * t * v1 + 3 * (1 - t) * Math.pow(t, 2) * v2 + Math.pow(t, 3) * v3;
}
function BoundingBox$1() {
  this.x1 = NaN;
  this.y1 = NaN;
  this.x2 = NaN;
  this.y2 = NaN;
}
BoundingBox$1.prototype.isEmpty = function() {
  return isNaN(this.x1) || isNaN(this.y1) || isNaN(this.x2) || isNaN(this.y2);
};
BoundingBox$1.prototype.addPoint = function(x, y) {
  if (typeof x === "number") {
    if (isNaN(this.x1) || isNaN(this.x2)) {
      this.x1 = x;
      this.x2 = x;
    }
    if (x < this.x1) this.x1 = x;
    if (x > this.x2) this.x2 = x;
  }
  if (typeof y === "number") {
    if (isNaN(this.y1) || isNaN(this.y2)) {
      this.y1 = y;
      this.y2 = y;
    }
    if (y < this.y1) this.y1 = y;
    if (y > this.y2) this.y2 = y;
  }
};
BoundingBox$1.prototype.addX = function(x) {
  this.addPoint(x, null);
};
BoundingBox$1.prototype.addY = function(y) {
  this.addPoint(null, y);
};
BoundingBox$1.prototype.addBezier = function(x0, y0, x1, y1, x2, y2, x, y) {
  var p0 = [x0, y0];
  var p1 = [x1, y1];
  var p2 = [x2, y2];
  var p3 = [x, y];
  this.addPoint(x0, y0);
  this.addPoint(x, y);
  for (var i = 0; i <= 1; i++) {
    var b = 6 * p0[i] - 12 * p1[i] + 6 * p2[i];
    var a = -3 * p0[i] + 9 * p1[i] - 9 * p2[i] + 3 * p3[i];
    var c = 3 * p1[i] - 3 * p0[i];
    if (a === 0) {
      if (b === 0) continue;
      var t = -c / b;
      if (0 < t && t < 1) {
        if (i === 0) this.addX(derive(p0[i], p1[i], p2[i], p3[i], t));
        if (i === 1) this.addY(derive(p0[i], p1[i], p2[i], p3[i], t));
      }
      continue;
    }
    var b2ac = Math.pow(b, 2) - 4 * c * a;
    if (b2ac < 0) continue;
    var t1 = (-b + Math.sqrt(b2ac)) / (2 * a);
    if (0 < t1 && t1 < 1) {
      if (i === 0) this.addX(derive(p0[i], p1[i], p2[i], p3[i], t1));
      if (i === 1) this.addY(derive(p0[i], p1[i], p2[i], p3[i], t1));
    }
    var t2 = (-b - Math.sqrt(b2ac)) / (2 * a);
    if (0 < t2 && t2 < 1) {
      if (i === 0) this.addX(derive(p0[i], p1[i], p2[i], p3[i], t2));
      if (i === 1) this.addY(derive(p0[i], p1[i], p2[i], p3[i], t2));
    }
  }
};
BoundingBox$1.prototype.addQuad = function(x0, y0, x1, y1, x, y) {
  var cp1x = x0 + 2 / 3 * (x1 - x0);
  var cp1y = y0 + 2 / 3 * (y1 - y0);
  var cp2x = cp1x + 1 / 3 * (x - x0);
  var cp2y = cp1y + 1 / 3 * (y - y0);
  this.addBezier(x0, y0, cp1x, cp1y, cp2x, cp2y, x, y);
};
function Path() {
  this.commands = [];
  this.fill = "black";
  this.stroke = null;
  this.strokeWidth = 1;
}
Path.prototype.moveTo = function(x, y) {
  this.commands.push({
    type: "M",
    x,
    y
  });
};
Path.prototype.lineTo = function(x, y) {
  this.commands.push({
    type: "L",
    x,
    y
  });
};
Path.prototype.curveTo = Path.prototype.bezierCurveTo = function(x1, y1, x2, y2, x, y) {
  this.commands.push({
    type: "C",
    x1,
    y1,
    x2,
    y2,
    x,
    y
  });
};
Path.prototype.quadTo = Path.prototype.quadraticCurveTo = function(x1, y1, x, y) {
  this.commands.push({
    type: "Q",
    x1,
    y1,
    x,
    y
  });
};
Path.prototype.close = Path.prototype.closePath = function() {
  this.commands.push({ type: "Z" });
};
Path.prototype.extend = function(pathOrCommands) {
  if (pathOrCommands.commands) pathOrCommands = pathOrCommands.commands;
  else if (pathOrCommands instanceof BoundingBox$1) {
    var box = pathOrCommands;
    this.moveTo(box.x1, box.y1);
    this.lineTo(box.x2, box.y1);
    this.lineTo(box.x2, box.y2);
    this.lineTo(box.x1, box.y2);
    this.close();
    return;
  }
  Array.prototype.push.apply(this.commands, pathOrCommands);
};
Path.prototype.getBoundingBox = function() {
  var box = new BoundingBox$1();
  var startX = 0;
  var startY = 0;
  var prevX = 0;
  var prevY = 0;
  for (var i = 0; i < this.commands.length; i++) {
    var cmd = this.commands[i];
    switch (cmd.type) {
      case "M":
        box.addPoint(cmd.x, cmd.y);
        startX = prevX = cmd.x;
        startY = prevY = cmd.y;
        break;
      case "L":
        box.addPoint(cmd.x, cmd.y);
        prevX = cmd.x;
        prevY = cmd.y;
        break;
      case "Q":
        box.addQuad(prevX, prevY, cmd.x1, cmd.y1, cmd.x, cmd.y);
        prevX = cmd.x;
        prevY = cmd.y;
        break;
      case "C":
        box.addBezier(prevX, prevY, cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y);
        prevX = cmd.x;
        prevY = cmd.y;
        break;
      case "Z":
        prevX = startX;
        prevY = startY;
        break;
      default:
        throw new Error("Unexpected path command " + cmd.type);
    }
  }
  if (box.isEmpty()) box.addPoint(0, 0);
  return box;
};
Path.prototype.draw = function(ctx) {
  ctx.beginPath();
  for (var i = 0; i < this.commands.length; i += 1) {
    var cmd = this.commands[i];
    if (cmd.type === "M") ctx.moveTo(cmd.x, cmd.y);
    else if (cmd.type === "L") ctx.lineTo(cmd.x, cmd.y);
    else if (cmd.type === "C") ctx.bezierCurveTo(cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y);
    else if (cmd.type === "Q") ctx.quadraticCurveTo(cmd.x1, cmd.y1, cmd.x, cmd.y);
    else if (cmd.type === "Z") ctx.closePath();
  }
  if (this.fill) {
    ctx.fillStyle = this.fill;
    ctx.fill();
  }
  if (this.stroke) {
    ctx.strokeStyle = this.stroke;
    ctx.lineWidth = this.strokeWidth;
    ctx.stroke();
  }
};
Path.prototype.toPathData = function(decimalPlaces) {
  decimalPlaces = decimalPlaces !== void 0 ? decimalPlaces : 2;
  function floatToString(v) {
    if (Math.round(v) === v) return "" + Math.round(v);
    else return v.toFixed(decimalPlaces);
  }
  function packValues() {
    var arguments$1 = arguments;
    var s = "";
    for (var i2 = 0; i2 < arguments.length; i2 += 1) {
      var v = arguments$1[i2];
      if (v >= 0 && i2 > 0) s += " ";
      s += floatToString(v);
    }
    return s;
  }
  var d = "";
  for (var i = 0; i < this.commands.length; i += 1) {
    var cmd = this.commands[i];
    if (cmd.type === "M") d += "M" + packValues(cmd.x, cmd.y);
    else if (cmd.type === "L") d += "L" + packValues(cmd.x, cmd.y);
    else if (cmd.type === "C") d += "C" + packValues(cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y);
    else if (cmd.type === "Q") d += "Q" + packValues(cmd.x1, cmd.y1, cmd.x, cmd.y);
    else if (cmd.type === "Z") d += "Z";
  }
  return d;
};
Path.prototype.toSVG = function(decimalPlaces) {
  var svg = '<path d="';
  svg += this.toPathData(decimalPlaces);
  svg += '"';
  if (this.fill && this.fill !== "black") {
    if (this.fill === null) svg += ' fill="none"';
    else svg += ' fill="' + this.fill + '"';
  }
  if (this.stroke) svg += ' stroke="' + this.stroke + '" stroke-width="' + this.strokeWidth + '"';
  svg += "/>";
  return svg;
};
Path.prototype.toDOMElement = function(decimalPlaces) {
  var temporaryPath = this.toPathData(decimalPlaces);
  var newPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  newPath.setAttribute("d", temporaryPath);
  return newPath;
};
function fail(message) {
  throw new Error(message);
}
function argument(predicate, message) {
  if (!predicate) fail(message);
}
var check = {
  fail,
  argument,
  assert: argument
};
var LIMIT16 = 32768;
var LIMIT32 = 2147483648;
var decode = {};
var encode = {};
var sizeOf = {};
function constant(v) {
  return function() {
    return v;
  };
}
encode.BYTE = function(v) {
  check.argument(v >= 0 && v <= 255, "Byte value should be between 0 and 255.");
  return [v];
};
sizeOf.BYTE = constant(1);
encode.CHAR = function(v) {
  return [v.charCodeAt(0)];
};
sizeOf.CHAR = constant(1);
encode.CHARARRAY = function(v) {
  if (typeof v === "undefined") {
    v = "";
    console.warn("Undefined CHARARRAY encountered and treated as an empty string. This is probably caused by a missing glyph name.");
  }
  var b = [];
  for (var i = 0; i < v.length; i += 1) b[i] = v.charCodeAt(i);
  return b;
};
sizeOf.CHARARRAY = function(v) {
  if (typeof v === "undefined") return 0;
  return v.length;
};
encode.USHORT = function(v) {
  return [v >> 8 & 255, v & 255];
};
sizeOf.USHORT = constant(2);
encode.SHORT = function(v) {
  if (v >= LIMIT16) v = -(2 * LIMIT16 - v);
  return [v >> 8 & 255, v & 255];
};
sizeOf.SHORT = constant(2);
encode.UINT24 = function(v) {
  return [
    v >> 16 & 255,
    v >> 8 & 255,
    v & 255
  ];
};
sizeOf.UINT24 = constant(3);
encode.ULONG = function(v) {
  return [
    v >> 24 & 255,
    v >> 16 & 255,
    v >> 8 & 255,
    v & 255
  ];
};
sizeOf.ULONG = constant(4);
encode.LONG = function(v) {
  if (v >= LIMIT32) v = -(2 * LIMIT32 - v);
  return [
    v >> 24 & 255,
    v >> 16 & 255,
    v >> 8 & 255,
    v & 255
  ];
};
sizeOf.LONG = constant(4);
encode.FIXED = encode.ULONG;
sizeOf.FIXED = sizeOf.ULONG;
encode.FWORD = encode.SHORT;
sizeOf.FWORD = sizeOf.SHORT;
encode.UFWORD = encode.USHORT;
sizeOf.UFWORD = sizeOf.USHORT;
encode.LONGDATETIME = function(v) {
  return [
    0,
    0,
    0,
    0,
    v >> 24 & 255,
    v >> 16 & 255,
    v >> 8 & 255,
    v & 255
  ];
};
sizeOf.LONGDATETIME = constant(8);
encode.TAG = function(v) {
  check.argument(v.length === 4, "Tag should be exactly 4 ASCII characters.");
  return [
    v.charCodeAt(0),
    v.charCodeAt(1),
    v.charCodeAt(2),
    v.charCodeAt(3)
  ];
};
sizeOf.TAG = constant(4);
encode.Card8 = encode.BYTE;
sizeOf.Card8 = sizeOf.BYTE;
encode.Card16 = encode.USHORT;
sizeOf.Card16 = sizeOf.USHORT;
encode.OffSize = encode.BYTE;
sizeOf.OffSize = sizeOf.BYTE;
encode.SID = encode.USHORT;
sizeOf.SID = sizeOf.USHORT;
encode.NUMBER = function(v) {
  if (v >= -107 && v <= 107) return [v + 139];
  else if (v >= 108 && v <= 1131) {
    v = v - 108;
    return [(v >> 8) + 247, v & 255];
  } else if (v >= -1131 && v <= -108) {
    v = -v - 108;
    return [(v >> 8) + 251, v & 255];
  } else if (v >= -32768 && v <= 32767) return encode.NUMBER16(v);
  else return encode.NUMBER32(v);
};
sizeOf.NUMBER = function(v) {
  return encode.NUMBER(v).length;
};
encode.NUMBER16 = function(v) {
  return [
    28,
    v >> 8 & 255,
    v & 255
  ];
};
sizeOf.NUMBER16 = constant(3);
encode.NUMBER32 = function(v) {
  return [
    29,
    v >> 24 & 255,
    v >> 16 & 255,
    v >> 8 & 255,
    v & 255
  ];
};
sizeOf.NUMBER32 = constant(5);
encode.REAL = function(v) {
  var value = v.toString();
  var m = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(value);
  if (m) {
    var epsilon = parseFloat("1e" + ((m[2] ? +m[2] : 0) + m[1].length));
    value = (Math.round(v * epsilon) / epsilon).toString();
  }
  var nibbles = "";
  for (var i = 0, ii = value.length; i < ii; i += 1) {
    var c = value[i];
    if (c === "e") nibbles += value[++i] === "-" ? "c" : "b";
    else if (c === ".") nibbles += "a";
    else if (c === "-") nibbles += "e";
    else nibbles += c;
  }
  nibbles += nibbles.length & 1 ? "f" : "ff";
  var out = [30];
  for (var i$1 = 0, ii$1 = nibbles.length; i$1 < ii$1; i$1 += 2) out.push(parseInt(nibbles.substr(i$1, 2), 16));
  return out;
};
sizeOf.REAL = function(v) {
  return encode.REAL(v).length;
};
encode.NAME = encode.CHARARRAY;
sizeOf.NAME = sizeOf.CHARARRAY;
encode.STRING = encode.CHARARRAY;
sizeOf.STRING = sizeOf.CHARARRAY;
decode.UTF8 = function(data, offset2, numBytes) {
  var codePoints = [];
  var numChars = numBytes;
  for (var j = 0; j < numChars; j++, offset2 += 1) codePoints[j] = data.getUint8(offset2);
  return String.fromCharCode.apply(null, codePoints);
};
decode.UTF16 = function(data, offset2, numBytes) {
  var codePoints = [];
  var numChars = numBytes / 2;
  for (var j = 0; j < numChars; j++, offset2 += 2) codePoints[j] = data.getUint16(offset2);
  return String.fromCharCode.apply(null, codePoints);
};
encode.UTF16 = function(v) {
  var b = [];
  for (var i = 0; i < v.length; i += 1) {
    var codepoint = v.charCodeAt(i);
    b[b.length] = codepoint >> 8 & 255;
    b[b.length] = codepoint & 255;
  }
  return b;
};
sizeOf.UTF16 = function(v) {
  return v.length * 2;
};
var eightBitMacEncodings = {
  "x-mac-croatian": "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\u0160\u2122\xB4\xA8\u2260\u017D\xD8\u221E\xB1\u2264\u2265\u2206\xB5\u2202\u2211\u220F\u0161\u222B\xAA\xBA\u03A9\u017E\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u0106\xAB\u010C\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u0110\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\uF8FF\xA9\u2044\u20AC\u2039\u203A\xC6\xBB\u2013\xB7\u201A\u201E\u2030\xC2\u0107\xC1\u010D\xC8\xCD\xCE\xCF\xCC\xD3\xD4\u0111\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u03C0\xCB\u02DA\xB8\xCA\xE6\u02C7",
  "x-mac-cyrillic": "\u0410\u0411\u0412\u0413\u0414\u0415\u0416\u0417\u0418\u0419\u041A\u041B\u041C\u041D\u041E\u041F\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042A\u042B\u042C\u042D\u042E\u042F\u2020\xB0\u0490\xA3\xA7\u2022\xB6\u0406\xAE\xA9\u2122\u0402\u0452\u2260\u0403\u0453\u221E\xB1\u2264\u2265\u0456\xB5\u0491\u0408\u0404\u0454\u0407\u0457\u0409\u0459\u040A\u045A\u0458\u0405\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\u040B\u045B\u040C\u045C\u0455\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u201E\u040E\u045E\u040F\u045F\u2116\u0401\u0451\u044F\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0438\u0439\u043A\u043B\u043C\u043D\u043E\u043F\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044A\u044B\u044C\u044D\u044E",
  "x-mac-gaelic": "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u1E02\xB1\u2264\u2265\u1E03\u010A\u010B\u1E0A\u1E0B\u1E1E\u1E1F\u0120\u0121\u1E40\xE6\xF8\u1E41\u1E56\u1E57\u027C\u0192\u017F\u1E60\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\u1E61\u1E9B\xFF\u0178\u1E6A\u20AC\u2039\u203A\u0176\u0177\u1E6B\xB7\u1EF2\u1EF3\u204A\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\u2663\xD2\xDA\xDB\xD9\u0131\xDD\xFD\u0174\u0175\u1E84\u1E85\u1E80\u1E81\u1E82\u1E83",
  "x-mac-greek": "\xC4\xB9\xB2\xC9\xB3\xD6\xDC\u0385\xE0\xE2\xE4\u0384\xA8\xE7\xE9\xE8\xEA\xEB\xA3\u2122\xEE\xEF\u2022\xBD\u2030\xF4\xF6\xA6\u20AC\xF9\xFB\xFC\u2020\u0393\u0394\u0398\u039B\u039E\u03A0\xDF\xAE\xA9\u03A3\u03AA\xA7\u2260\xB0\xB7\u0391\xB1\u2264\u2265\xA5\u0392\u0395\u0396\u0397\u0399\u039A\u039C\u03A6\u03AB\u03A8\u03A9\u03AC\u039D\xAC\u039F\u03A1\u2248\u03A4\xAB\xBB\u2026\xA0\u03A5\u03A7\u0386\u0388\u0153\u2013\u2015\u201C\u201D\u2018\u2019\xF7\u0389\u038A\u038C\u038E\u03AD\u03AE\u03AF\u03CC\u038F\u03CD\u03B1\u03B2\u03C8\u03B4\u03B5\u03C6\u03B3\u03B7\u03B9\u03BE\u03BA\u03BB\u03BC\u03BD\u03BF\u03C0\u03CE\u03C1\u03C3\u03C4\u03B8\u03C9\u03C2\u03C7\u03C5\u03B6\u03CA\u03CB\u0390\u03B0\xAD",
  "x-mac-icelandic": "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\xDD\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\xE6\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u2044\u20AC\xD0\xF0\xDE\xFE\xFD\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7",
  "x-mac-inuit": "\u1403\u1404\u1405\u1406\u140A\u140B\u1431\u1432\u1433\u1434\u1438\u1439\u1449\u144E\u144F\u1450\u1451\u1455\u1456\u1466\u146D\u146E\u146F\u1470\u1472\u1473\u1483\u148B\u148C\u148D\u148E\u1490\u1491\xB0\u14A1\u14A5\u14A6\u2022\xB6\u14A7\xAE\xA9\u2122\u14A8\u14AA\u14AB\u14BB\u14C2\u14C3\u14C4\u14C5\u14C7\u14C8\u14D0\u14EF\u14F0\u14F1\u14F2\u14F4\u14F5\u1505\u14D5\u14D6\u14D7\u14D8\u14DA\u14DB\u14EA\u1528\u1529\u152A\u152B\u152D\u2026\xA0\u152E\u153E\u1555\u1556\u1557\u2013\u2014\u201C\u201D\u2018\u2019\u1558\u1559\u155A\u155D\u1546\u1547\u1548\u1549\u154B\u154C\u1550\u157F\u1580\u1581\u1582\u1583\u1584\u1585\u158F\u1590\u1591\u1592\u1593\u1594\u1595\u1671\u1672\u1673\u1674\u1675\u1676\u1596\u15A0\u15A1\u15A2\u15A3\u15A4\u15A5\u15A6\u157C\u0141\u0142",
  "x-mac-ce": "\xC4\u0100\u0101\xC9\u0104\xD6\xDC\xE1\u0105\u010C\xE4\u010D\u0106\u0107\xE9\u0179\u017A\u010E\xED\u010F\u0112\u0113\u0116\xF3\u0117\xF4\xF6\xF5\xFA\u011A\u011B\xFC\u2020\xB0\u0118\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\u0119\xA8\u2260\u0123\u012E\u012F\u012A\u2264\u2265\u012B\u0136\u2202\u2211\u0142\u013B\u013C\u013D\u013E\u0139\u013A\u0145\u0146\u0143\xAC\u221A\u0144\u0147\u2206\xAB\xBB\u2026\xA0\u0148\u0150\xD5\u0151\u014C\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\u014D\u0154\u0155\u0158\u2039\u203A\u0159\u0156\u0157\u0160\u201A\u201E\u0161\u015A\u015B\xC1\u0164\u0165\xCD\u017D\u017E\u016A\xD3\xD4\u016B\u016E\xDA\u016F\u0170\u0171\u0172\u0173\xDD\xFD\u0137\u017B\u0141\u017C\u0122\u02C7",
  macintosh: "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\xE6\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u2044\u20AC\u2039\u203A\uFB01\uFB02\u2021\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7",
  "x-mac-romanian": "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\u0102\u0218\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\u0103\u0219\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u2044\u20AC\u2039\u203A\u021A\u021B\u2021\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7",
  "x-mac-turkish": "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\xE6\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u011E\u011F\u0130\u0131\u015E\u015F\u2021\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\uF8A0\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7"
};
decode.MACSTRING = function(dataView, offset2, dataLength, encoding) {
  var table2 = eightBitMacEncodings[encoding];
  if (table2 === void 0) return;
  var result = "";
  for (var i = 0; i < dataLength; i++) {
    var c = dataView.getUint8(offset2 + i);
    if (c <= 127) result += String.fromCharCode(c);
    else result += table2[c & 127];
  }
  return result;
};
var macEncodingTableCache = typeof WeakMap === "function" && /* @__PURE__ */ new WeakMap();
var macEncodingCacheKeys;
var getMacEncodingTable = function(encoding) {
  if (!macEncodingCacheKeys) {
    macEncodingCacheKeys = {};
    for (var e in eightBitMacEncodings) macEncodingCacheKeys[e] = new String(e);
  }
  var cacheKey = macEncodingCacheKeys[encoding];
  if (cacheKey === void 0) return;
  if (macEncodingTableCache) {
    var cachedTable = macEncodingTableCache.get(cacheKey);
    if (cachedTable !== void 0) return cachedTable;
  }
  var decodingTable = eightBitMacEncodings[encoding];
  if (decodingTable === void 0) return;
  var encodingTable = {};
  for (var i = 0; i < decodingTable.length; i++) encodingTable[decodingTable.charCodeAt(i)] = i + 128;
  if (macEncodingTableCache) macEncodingTableCache.set(cacheKey, encodingTable);
  return encodingTable;
};
encode.MACSTRING = function(str, encoding) {
  var table2 = getMacEncodingTable(encoding);
  if (table2 === void 0) return;
  var result = [];
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    if (c >= 128) {
      c = table2[c];
      if (c === void 0) return;
    }
    result[i] = c;
  }
  return result;
};
sizeOf.MACSTRING = function(str, encoding) {
  var b = encode.MACSTRING(str, encoding);
  if (b !== void 0) return b.length;
  else return 0;
};
function isByteEncodable(value) {
  return value >= -128 && value <= 127;
}
function encodeVarDeltaRunAsZeroes(deltas, pos, result) {
  var runLength = 0;
  var numDeltas = deltas.length;
  while (pos < numDeltas && runLength < 64 && deltas[pos] === 0) {
    ++pos;
    ++runLength;
  }
  result.push(128 | runLength - 1);
  return pos;
}
function encodeVarDeltaRunAsBytes(deltas, offset2, result) {
  var runLength = 0;
  var numDeltas = deltas.length;
  var pos = offset2;
  while (pos < numDeltas && runLength < 64) {
    var value = deltas[pos];
    if (!isByteEncodable(value)) break;
    if (value === 0 && pos + 1 < numDeltas && deltas[pos + 1] === 0) break;
    ++pos;
    ++runLength;
  }
  result.push(runLength - 1);
  for (var i = offset2; i < pos; ++i) result.push(deltas[i] + 256 & 255);
  return pos;
}
function encodeVarDeltaRunAsWords(deltas, offset2, result) {
  var runLength = 0;
  var numDeltas = deltas.length;
  var pos = offset2;
  while (pos < numDeltas && runLength < 64) {
    var value = deltas[pos];
    if (value === 0) break;
    if (isByteEncodable(value) && pos + 1 < numDeltas && isByteEncodable(deltas[pos + 1])) break;
    ++pos;
    ++runLength;
  }
  result.push(64 | runLength - 1);
  for (var i = offset2; i < pos; ++i) {
    var val = deltas[i];
    result.push(val + 65536 >> 8 & 255, val + 256 & 255);
  }
  return pos;
}
encode.VARDELTAS = function(deltas) {
  var pos = 0;
  var result = [];
  while (pos < deltas.length) {
    var value = deltas[pos];
    if (value === 0) pos = encodeVarDeltaRunAsZeroes(deltas, pos, result);
    else if (value >= -128 && value <= 127) pos = encodeVarDeltaRunAsBytes(deltas, pos, result);
    else pos = encodeVarDeltaRunAsWords(deltas, pos, result);
  }
  return result;
};
encode.INDEX = function(l) {
  var offset2 = 1;
  var offsets = [offset2];
  var data = [];
  for (var i = 0; i < l.length; i += 1) {
    var v = encode.OBJECT(l[i]);
    Array.prototype.push.apply(data, v);
    offset2 += v.length;
    offsets.push(offset2);
  }
  if (data.length === 0) return [0, 0];
  var encodedOffsets = [];
  var offSize = 1 + Math.floor(Math.log(offset2) / Math.log(2)) / 8 | 0;
  var offsetEncoder = [
    void 0,
    encode.BYTE,
    encode.USHORT,
    encode.UINT24,
    encode.ULONG
  ][offSize];
  for (var i$1 = 0; i$1 < offsets.length; i$1 += 1) {
    var encodedOffset = offsetEncoder(offsets[i$1]);
    Array.prototype.push.apply(encodedOffsets, encodedOffset);
  }
  return Array.prototype.concat(encode.Card16(l.length), encode.OffSize(offSize), encodedOffsets, data);
};
sizeOf.INDEX = function(v) {
  return encode.INDEX(v).length;
};
encode.DICT = function(m) {
  var d = [];
  var keys = Object.keys(m);
  var length = keys.length;
  for (var i = 0; i < length; i += 1) {
    var k = parseInt(keys[i], 0);
    var v = m[k];
    d = d.concat(encode.OPERAND(v.value, v.type));
    d = d.concat(encode.OPERATOR(k));
  }
  return d;
};
sizeOf.DICT = function(m) {
  return encode.DICT(m).length;
};
encode.OPERATOR = function(v) {
  if (v < 1200) return [v];
  else return [12, v - 1200];
};
encode.OPERAND = function(v, type) {
  var d = [];
  if (Array.isArray(type)) for (var i = 0; i < type.length; i += 1) {
    check.argument(v.length === type.length, "Not enough arguments given for type" + type);
    d = d.concat(encode.OPERAND(v[i], type[i]));
  }
  else if (type === "SID") d = d.concat(encode.NUMBER(v));
  else if (type === "offset") d = d.concat(encode.NUMBER32(v));
  else if (type === "number") d = d.concat(encode.NUMBER(v));
  else if (type === "real") d = d.concat(encode.REAL(v));
  else throw new Error("Unknown operand type " + type);
  return d;
};
encode.OP = encode.BYTE;
sizeOf.OP = sizeOf.BYTE;
var wmm = typeof WeakMap === "function" && /* @__PURE__ */ new WeakMap();
encode.CHARSTRING = function(ops) {
  if (wmm) {
    var cachedValue = wmm.get(ops);
    if (cachedValue !== void 0) return cachedValue;
  }
  var d = [];
  var length = ops.length;
  for (var i = 0; i < length; i += 1) {
    var op = ops[i];
    d = d.concat(encode[op.type](op.value));
  }
  if (wmm) wmm.set(ops, d);
  return d;
};
sizeOf.CHARSTRING = function(ops) {
  return encode.CHARSTRING(ops).length;
};
encode.OBJECT = function(v) {
  var encodingFunction = encode[v.type];
  check.argument(encodingFunction !== void 0, "No encoding function for type " + v.type);
  return encodingFunction(v.value);
};
sizeOf.OBJECT = function(v) {
  var sizeOfFunction = sizeOf[v.type];
  check.argument(sizeOfFunction !== void 0, "No sizeOf function for type " + v.type);
  return sizeOfFunction(v.value);
};
encode.TABLE = function(table2) {
  var d = [];
  var length = table2.fields.length;
  var subtables = [];
  var subtableOffsets = [];
  for (var i = 0; i < length; i += 1) {
    var field = table2.fields[i];
    var encodingFunction = encode[field.type];
    check.argument(encodingFunction !== void 0, "No encoding function for field type " + field.type + " (" + field.name + ")");
    var value = table2[field.name];
    if (value === void 0) value = field.value;
    var bytes = encodingFunction(value);
    if (field.type === "TABLE") {
      subtableOffsets.push(d.length);
      d = d.concat([0, 0]);
      subtables.push(bytes);
    } else d = d.concat(bytes);
  }
  for (var i$1 = 0; i$1 < subtables.length; i$1 += 1) {
    var o = subtableOffsets[i$1];
    var offset2 = d.length;
    check.argument(offset2 < 65536, "Table " + table2.tableName + " too big.");
    d[o] = offset2 >> 8;
    d[o + 1] = offset2 & 255;
    d = d.concat(subtables[i$1]);
  }
  return d;
};
sizeOf.TABLE = function(table2) {
  var numBytes = 0;
  var length = table2.fields.length;
  for (var i = 0; i < length; i += 1) {
    var field = table2.fields[i];
    var sizeOfFunction = sizeOf[field.type];
    check.argument(sizeOfFunction !== void 0, "No sizeOf function for field type " + field.type + " (" + field.name + ")");
    var value = table2[field.name];
    if (value === void 0) value = field.value;
    numBytes += sizeOfFunction(value);
    if (field.type === "TABLE") numBytes += 2;
  }
  return numBytes;
};
encode.RECORD = encode.TABLE;
sizeOf.RECORD = sizeOf.TABLE;
encode.LITERAL = function(v) {
  return v;
};
sizeOf.LITERAL = function(v) {
  return v.length;
};
function Table(tableName, fields, options) {
  if (fields.length && (fields[0].name !== "coverageFormat" || fields[0].value === 1)) for (var i = 0; i < fields.length; i += 1) {
    var field = fields[i];
    this[field.name] = field.value;
  }
  this.tableName = tableName;
  this.fields = fields;
  if (options) {
    var optionKeys = Object.keys(options);
    for (var i$1 = 0; i$1 < optionKeys.length; i$1 += 1) {
      var k = optionKeys[i$1];
      var v = options[k];
      if (this[k] !== void 0) this[k] = v;
    }
  }
}
Table.prototype.encode = function() {
  return encode.TABLE(this);
};
Table.prototype.sizeOf = function() {
  return sizeOf.TABLE(this);
};
function ushortList(itemName, list, count) {
  if (count === void 0) count = list.length;
  var fields = new Array(list.length + 1);
  fields[0] = {
    name: itemName + "Count",
    type: "USHORT",
    value: count
  };
  for (var i = 0; i < list.length; i++) fields[i + 1] = {
    name: itemName + i,
    type: "USHORT",
    value: list[i]
  };
  return fields;
}
function tableList(itemName, records, itemCallback) {
  var count = records.length;
  var fields = new Array(count + 1);
  fields[0] = {
    name: itemName + "Count",
    type: "USHORT",
    value: count
  };
  for (var i = 0; i < count; i++) fields[i + 1] = {
    name: itemName + i,
    type: "TABLE",
    value: itemCallback(records[i], i)
  };
  return fields;
}
function recordList(itemName, records, itemCallback) {
  var count = records.length;
  var fields = [];
  fields[0] = {
    name: itemName + "Count",
    type: "USHORT",
    value: count
  };
  for (var i = 0; i < count; i++) fields = fields.concat(itemCallback(records[i], i));
  return fields;
}
function Coverage(coverageTable) {
  if (coverageTable.format === 1) Table.call(this, "coverageTable", [{
    name: "coverageFormat",
    type: "USHORT",
    value: 1
  }].concat(ushortList("glyph", coverageTable.glyphs)));
  else if (coverageTable.format === 2) Table.call(this, "coverageTable", [{
    name: "coverageFormat",
    type: "USHORT",
    value: 2
  }].concat(recordList("rangeRecord", coverageTable.ranges, function(RangeRecord) {
    return [
      {
        name: "startGlyphID",
        type: "USHORT",
        value: RangeRecord.start
      },
      {
        name: "endGlyphID",
        type: "USHORT",
        value: RangeRecord.end
      },
      {
        name: "startCoverageIndex",
        type: "USHORT",
        value: RangeRecord.index
      }
    ];
  })));
  else check.assert(false, "Coverage format must be 1 or 2.");
}
Coverage.prototype = Object.create(Table.prototype);
Coverage.prototype.constructor = Coverage;
function ScriptList(scriptListTable) {
  Table.call(this, "scriptListTable", recordList("scriptRecord", scriptListTable, function(scriptRecord, i) {
    var script = scriptRecord.script;
    var defaultLangSys = script.defaultLangSys;
    check.assert(!!defaultLangSys, "Unable to write GSUB: script " + scriptRecord.tag + " has no default language system.");
    return [{
      name: "scriptTag" + i,
      type: "TAG",
      value: scriptRecord.tag
    }, {
      name: "script" + i,
      type: "TABLE",
      value: new Table("scriptTable", [{
        name: "defaultLangSys",
        type: "TABLE",
        value: new Table("defaultLangSys", [{
          name: "lookupOrder",
          type: "USHORT",
          value: 0
        }, {
          name: "reqFeatureIndex",
          type: "USHORT",
          value: defaultLangSys.reqFeatureIndex
        }].concat(ushortList("featureIndex", defaultLangSys.featureIndexes)))
      }].concat(recordList("langSys", script.langSysRecords, function(langSysRecord, i2) {
        var langSys = langSysRecord.langSys;
        return [{
          name: "langSysTag" + i2,
          type: "TAG",
          value: langSysRecord.tag
        }, {
          name: "langSys" + i2,
          type: "TABLE",
          value: new Table("langSys", [{
            name: "lookupOrder",
            type: "USHORT",
            value: 0
          }, {
            name: "reqFeatureIndex",
            type: "USHORT",
            value: langSys.reqFeatureIndex
          }].concat(ushortList("featureIndex", langSys.featureIndexes)))
        }];
      })))
    }];
  }));
}
ScriptList.prototype = Object.create(Table.prototype);
ScriptList.prototype.constructor = ScriptList;
function FeatureList(featureListTable) {
  Table.call(this, "featureListTable", recordList("featureRecord", featureListTable, function(featureRecord, i) {
    var feature = featureRecord.feature;
    return [{
      name: "featureTag" + i,
      type: "TAG",
      value: featureRecord.tag
    }, {
      name: "feature" + i,
      type: "TABLE",
      value: new Table("featureTable", [{
        name: "featureParams",
        type: "USHORT",
        value: feature.featureParams
      }].concat(ushortList("lookupListIndex", feature.lookupListIndexes)))
    }];
  }));
}
FeatureList.prototype = Object.create(Table.prototype);
FeatureList.prototype.constructor = FeatureList;
function LookupList(lookupListTable, subtableMakers2) {
  Table.call(this, "lookupListTable", tableList("lookup", lookupListTable, function(lookupTable) {
    var subtableCallback = subtableMakers2[lookupTable.lookupType];
    check.assert(!!subtableCallback, "Unable to write GSUB lookup type " + lookupTable.lookupType + " tables.");
    return new Table("lookupTable", [{
      name: "lookupType",
      type: "USHORT",
      value: lookupTable.lookupType
    }, {
      name: "lookupFlag",
      type: "USHORT",
      value: lookupTable.lookupFlag
    }].concat(tableList("subtable", lookupTable.subtables, subtableCallback)));
  }));
}
LookupList.prototype = Object.create(Table.prototype);
LookupList.prototype.constructor = LookupList;
var table = {
  Table,
  Record: Table,
  Coverage,
  ScriptList,
  FeatureList,
  LookupList,
  ushortList,
  tableList,
  recordList
};
function getByte(dataView, offset2) {
  return dataView.getUint8(offset2);
}
function getUShort(dataView, offset2) {
  return dataView.getUint16(offset2, false);
}
function getShort(dataView, offset2) {
  return dataView.getInt16(offset2, false);
}
function getULong(dataView, offset2) {
  return dataView.getUint32(offset2, false);
}
function getFixed(dataView, offset2) {
  return dataView.getInt16(offset2, false) + dataView.getUint16(offset2 + 2, false) / 65535;
}
function getTag(dataView, offset2) {
  var tag = "";
  for (var i = offset2; i < offset2 + 4; i += 1) tag += String.fromCharCode(dataView.getInt8(i));
  return tag;
}
function getOffset(dataView, offset2, offSize) {
  var v = 0;
  for (var i = 0; i < offSize; i += 1) {
    v <<= 8;
    v += dataView.getUint8(offset2 + i);
  }
  return v;
}
function getBytes(dataView, startOffset, endOffset) {
  var bytes = [];
  for (var i = startOffset; i < endOffset; i += 1) bytes.push(dataView.getUint8(i));
  return bytes;
}
function bytesToString(bytes) {
  var s = "";
  for (var i = 0; i < bytes.length; i += 1) s += String.fromCharCode(bytes[i]);
  return s;
}
var typeOffsets = {
  byte: 1,
  uShort: 2,
  short: 2,
  uLong: 4,
  fixed: 4,
  longDateTime: 8,
  tag: 4
};
function Parser(data, offset2) {
  this.data = data;
  this.offset = offset2;
  this.relativeOffset = 0;
}
Parser.prototype.parseByte = function() {
  var v = this.data.getUint8(this.offset + this.relativeOffset);
  this.relativeOffset += 1;
  return v;
};
Parser.prototype.parseChar = function() {
  var v = this.data.getInt8(this.offset + this.relativeOffset);
  this.relativeOffset += 1;
  return v;
};
Parser.prototype.parseCard8 = Parser.prototype.parseByte;
Parser.prototype.parseUShort = function() {
  var v = this.data.getUint16(this.offset + this.relativeOffset);
  this.relativeOffset += 2;
  return v;
};
Parser.prototype.parseCard16 = Parser.prototype.parseUShort;
Parser.prototype.parseSID = Parser.prototype.parseUShort;
Parser.prototype.parseOffset16 = Parser.prototype.parseUShort;
Parser.prototype.parseShort = function() {
  var v = this.data.getInt16(this.offset + this.relativeOffset);
  this.relativeOffset += 2;
  return v;
};
Parser.prototype.parseF2Dot14 = function() {
  var v = this.data.getInt16(this.offset + this.relativeOffset) / 16384;
  this.relativeOffset += 2;
  return v;
};
Parser.prototype.parseULong = function() {
  var v = getULong(this.data, this.offset + this.relativeOffset);
  this.relativeOffset += 4;
  return v;
};
Parser.prototype.parseOffset32 = Parser.prototype.parseULong;
Parser.prototype.parseFixed = function() {
  var v = getFixed(this.data, this.offset + this.relativeOffset);
  this.relativeOffset += 4;
  return v;
};
Parser.prototype.parseString = function(length) {
  var dataView = this.data;
  var offset2 = this.offset + this.relativeOffset;
  var string = "";
  this.relativeOffset += length;
  for (var i = 0; i < length; i++) string += String.fromCharCode(dataView.getUint8(offset2 + i));
  return string;
};
Parser.prototype.parseTag = function() {
  return this.parseString(4);
};
Parser.prototype.parseLongDateTime = function() {
  var v = getULong(this.data, this.offset + this.relativeOffset + 4);
  v -= 2082844800;
  this.relativeOffset += 8;
  return v;
};
Parser.prototype.parseVersion = function(minorBase) {
  var major = getUShort(this.data, this.offset + this.relativeOffset);
  var minor = getUShort(this.data, this.offset + this.relativeOffset + 2);
  this.relativeOffset += 4;
  if (minorBase === void 0) minorBase = 4096;
  return major + minor / minorBase / 10;
};
Parser.prototype.skip = function(type, amount) {
  if (amount === void 0) amount = 1;
  this.relativeOffset += typeOffsets[type] * amount;
};
Parser.prototype.parseULongList = function(count) {
  if (count === void 0) count = this.parseULong();
  var offsets = new Array(count);
  var dataView = this.data;
  var offset2 = this.offset + this.relativeOffset;
  for (var i = 0; i < count; i++) {
    offsets[i] = dataView.getUint32(offset2);
    offset2 += 4;
  }
  this.relativeOffset += count * 4;
  return offsets;
};
Parser.prototype.parseOffset16List = Parser.prototype.parseUShortList = function(count) {
  if (count === void 0) count = this.parseUShort();
  var offsets = new Array(count);
  var dataView = this.data;
  var offset2 = this.offset + this.relativeOffset;
  for (var i = 0; i < count; i++) {
    offsets[i] = dataView.getUint16(offset2);
    offset2 += 2;
  }
  this.relativeOffset += count * 2;
  return offsets;
};
Parser.prototype.parseShortList = function(count) {
  var list = new Array(count);
  var dataView = this.data;
  var offset2 = this.offset + this.relativeOffset;
  for (var i = 0; i < count; i++) {
    list[i] = dataView.getInt16(offset2);
    offset2 += 2;
  }
  this.relativeOffset += count * 2;
  return list;
};
Parser.prototype.parseByteList = function(count) {
  var list = new Array(count);
  var dataView = this.data;
  var offset2 = this.offset + this.relativeOffset;
  for (var i = 0; i < count; i++) list[i] = dataView.getUint8(offset2++);
  this.relativeOffset += count;
  return list;
};
Parser.prototype.parseList = function(count, itemCallback) {
  if (!itemCallback) {
    itemCallback = count;
    count = this.parseUShort();
  }
  var list = new Array(count);
  for (var i = 0; i < count; i++) list[i] = itemCallback.call(this);
  return list;
};
Parser.prototype.parseList32 = function(count, itemCallback) {
  if (!itemCallback) {
    itemCallback = count;
    count = this.parseULong();
  }
  var list = new Array(count);
  for (var i = 0; i < count; i++) list[i] = itemCallback.call(this);
  return list;
};
Parser.prototype.parseRecordList = function(count, recordDescription) {
  if (!recordDescription) {
    recordDescription = count;
    count = this.parseUShort();
  }
  var records = new Array(count);
  var fields = Object.keys(recordDescription);
  for (var i = 0; i < count; i++) {
    var rec = {};
    for (var j = 0; j < fields.length; j++) {
      var fieldName = fields[j];
      rec[fieldName] = recordDescription[fieldName].call(this);
    }
    records[i] = rec;
  }
  return records;
};
Parser.prototype.parseRecordList32 = function(count, recordDescription) {
  if (!recordDescription) {
    recordDescription = count;
    count = this.parseULong();
  }
  var records = new Array(count);
  var fields = Object.keys(recordDescription);
  for (var i = 0; i < count; i++) {
    var rec = {};
    for (var j = 0; j < fields.length; j++) {
      var fieldName = fields[j];
      rec[fieldName] = recordDescription[fieldName].call(this);
    }
    records[i] = rec;
  }
  return records;
};
Parser.prototype.parseStruct = function(description) {
  if (typeof description === "function") return description.call(this);
  else {
    var fields = Object.keys(description);
    var struct = {};
    for (var j = 0; j < fields.length; j++) {
      var fieldName = fields[j];
      struct[fieldName] = description[fieldName].call(this);
    }
    return struct;
  }
};
Parser.prototype.parseValueRecord = function(valueFormat) {
  if (valueFormat === void 0) valueFormat = this.parseUShort();
  if (valueFormat === 0) return;
  var valueRecord = {};
  if (valueFormat & 1) valueRecord.xPlacement = this.parseShort();
  if (valueFormat & 2) valueRecord.yPlacement = this.parseShort();
  if (valueFormat & 4) valueRecord.xAdvance = this.parseShort();
  if (valueFormat & 8) valueRecord.yAdvance = this.parseShort();
  if (valueFormat & 16) {
    valueRecord.xPlaDevice = void 0;
    this.parseShort();
  }
  if (valueFormat & 32) {
    valueRecord.yPlaDevice = void 0;
    this.parseShort();
  }
  if (valueFormat & 64) {
    valueRecord.xAdvDevice = void 0;
    this.parseShort();
  }
  if (valueFormat & 128) {
    valueRecord.yAdvDevice = void 0;
    this.parseShort();
  }
  return valueRecord;
};
Parser.prototype.parseValueRecordList = function() {
  var valueFormat = this.parseUShort();
  var valueCount = this.parseUShort();
  var values = new Array(valueCount);
  for (var i = 0; i < valueCount; i++) values[i] = this.parseValueRecord(valueFormat);
  return values;
};
Parser.prototype.parsePointer = function(description) {
  var structOffset = this.parseOffset16();
  if (structOffset > 0) return new Parser(this.data, this.offset + structOffset).parseStruct(description);
};
Parser.prototype.parsePointer32 = function(description) {
  var structOffset = this.parseOffset32();
  if (structOffset > 0) return new Parser(this.data, this.offset + structOffset).parseStruct(description);
};
Parser.prototype.parseListOfLists = function(itemCallback) {
  var offsets = this.parseOffset16List();
  var count = offsets.length;
  var relativeOffset = this.relativeOffset;
  var list = new Array(count);
  for (var i = 0; i < count; i++) {
    var start = offsets[i];
    if (start === 0) {
      list[i] = void 0;
      continue;
    }
    this.relativeOffset = start;
    if (itemCallback) {
      var subOffsets = this.parseOffset16List();
      var subList = new Array(subOffsets.length);
      for (var j = 0; j < subOffsets.length; j++) {
        this.relativeOffset = start + subOffsets[j];
        subList[j] = itemCallback.call(this);
      }
      list[i] = subList;
    } else list[i] = this.parseUShortList();
  }
  this.relativeOffset = relativeOffset;
  return list;
};
Parser.prototype.parseCoverage = function() {
  var startOffset = this.offset + this.relativeOffset;
  var format = this.parseUShort();
  var count = this.parseUShort();
  if (format === 1) return {
    format: 1,
    glyphs: this.parseUShortList(count)
  };
  else if (format === 2) {
    var ranges = new Array(count);
    for (var i = 0; i < count; i++) ranges[i] = {
      start: this.parseUShort(),
      end: this.parseUShort(),
      index: this.parseUShort()
    };
    return {
      format: 2,
      ranges
    };
  }
  throw new Error("0x" + startOffset.toString(16) + ": Coverage format must be 1 or 2.");
};
Parser.prototype.parseClassDef = function() {
  var startOffset = this.offset + this.relativeOffset;
  var format = this.parseUShort();
  if (format === 1) return {
    format: 1,
    startGlyph: this.parseUShort(),
    classes: this.parseUShortList()
  };
  else if (format === 2) return {
    format: 2,
    ranges: this.parseRecordList({
      start: Parser.uShort,
      end: Parser.uShort,
      classId: Parser.uShort
    })
  };
  throw new Error("0x" + startOffset.toString(16) + ": ClassDef format must be 1 or 2.");
};
Parser.list = function(count, itemCallback) {
  return function() {
    return this.parseList(count, itemCallback);
  };
};
Parser.list32 = function(count, itemCallback) {
  return function() {
    return this.parseList32(count, itemCallback);
  };
};
Parser.recordList = function(count, recordDescription) {
  return function() {
    return this.parseRecordList(count, recordDescription);
  };
};
Parser.recordList32 = function(count, recordDescription) {
  return function() {
    return this.parseRecordList32(count, recordDescription);
  };
};
Parser.pointer = function(description) {
  return function() {
    return this.parsePointer(description);
  };
};
Parser.pointer32 = function(description) {
  return function() {
    return this.parsePointer32(description);
  };
};
Parser.tag = Parser.prototype.parseTag;
Parser.byte = Parser.prototype.parseByte;
Parser.uShort = Parser.offset16 = Parser.prototype.parseUShort;
Parser.uShortList = Parser.prototype.parseUShortList;
Parser.uLong = Parser.offset32 = Parser.prototype.parseULong;
Parser.uLongList = Parser.prototype.parseULongList;
Parser.struct = Parser.prototype.parseStruct;
Parser.coverage = Parser.prototype.parseCoverage;
Parser.classDef = Parser.prototype.parseClassDef;
var langSysTable = {
  reserved: Parser.uShort,
  reqFeatureIndex: Parser.uShort,
  featureIndexes: Parser.uShortList
};
Parser.prototype.parseScriptList = function() {
  return this.parsePointer(Parser.recordList({
    tag: Parser.tag,
    script: Parser.pointer({
      defaultLangSys: Parser.pointer(langSysTable),
      langSysRecords: Parser.recordList({
        tag: Parser.tag,
        langSys: Parser.pointer(langSysTable)
      })
    })
  })) || [];
};
Parser.prototype.parseFeatureList = function() {
  return this.parsePointer(Parser.recordList({
    tag: Parser.tag,
    feature: Parser.pointer({
      featureParams: Parser.offset16,
      lookupListIndexes: Parser.uShortList
    })
  })) || [];
};
Parser.prototype.parseLookupList = function(lookupTableParsers) {
  return this.parsePointer(Parser.list(Parser.pointer(function() {
    var lookupType = this.parseUShort();
    check.argument(1 <= lookupType && lookupType <= 9, "GPOS/GSUB lookup type " + lookupType + " unknown.");
    var lookupFlag = this.parseUShort();
    var useMarkFilteringSet = lookupFlag & 16;
    return {
      lookupType,
      lookupFlag,
      subtables: this.parseList(Parser.pointer(lookupTableParsers[lookupType])),
      markFilteringSet: useMarkFilteringSet ? this.parseUShort() : void 0
    };
  }))) || [];
};
Parser.prototype.parseFeatureVariationsList = function() {
  return this.parsePointer32(function() {
    var majorVersion = this.parseUShort();
    var minorVersion = this.parseUShort();
    check.argument(majorVersion === 1 && minorVersion < 1, "GPOS/GSUB feature variations table unknown.");
    return this.parseRecordList32({
      conditionSetOffset: Parser.offset32,
      featureTableSubstitutionOffset: Parser.offset32
    });
  }) || [];
};
var parse = {
  getByte,
  getCard8: getByte,
  getUShort,
  getCard16: getUShort,
  getShort,
  getULong,
  getFixed,
  getTag,
  getOffset,
  getBytes,
  bytesToString,
  Parser
};
function parseCmapTableFormat12(cmap2, p) {
  p.parseUShort();
  cmap2.length = p.parseULong();
  cmap2.language = p.parseULong();
  var groupCount;
  cmap2.groupCount = groupCount = p.parseULong();
  cmap2.glyphIndexMap = {};
  for (var i = 0; i < groupCount; i += 1) {
    var startCharCode = p.parseULong();
    var endCharCode = p.parseULong();
    var startGlyphId = p.parseULong();
    for (var c = startCharCode; c <= endCharCode; c += 1) {
      cmap2.glyphIndexMap[c] = startGlyphId;
      startGlyphId++;
    }
  }
}
function parseCmapTableFormat4(cmap2, p, data, start, offset2) {
  cmap2.length = p.parseUShort();
  cmap2.language = p.parseUShort();
  var segCount;
  cmap2.segCount = segCount = p.parseUShort() >> 1;
  p.skip("uShort", 3);
  cmap2.glyphIndexMap = {};
  var endCountParser = new parse.Parser(data, start + offset2 + 14);
  var startCountParser = new parse.Parser(data, start + offset2 + 16 + segCount * 2);
  var idDeltaParser = new parse.Parser(data, start + offset2 + 16 + segCount * 4);
  var idRangeOffsetParser = new parse.Parser(data, start + offset2 + 16 + segCount * 6);
  var glyphIndexOffset = start + offset2 + 16 + segCount * 8;
  for (var i = 0; i < segCount - 1; i += 1) {
    var glyphIndex = void 0;
    var endCount = endCountParser.parseUShort();
    var startCount = startCountParser.parseUShort();
    var idDelta = idDeltaParser.parseShort();
    var idRangeOffset = idRangeOffsetParser.parseUShort();
    for (var c = startCount; c <= endCount; c += 1) {
      if (idRangeOffset !== 0) {
        glyphIndexOffset = idRangeOffsetParser.offset + idRangeOffsetParser.relativeOffset - 2;
        glyphIndexOffset += idRangeOffset;
        glyphIndexOffset += (c - startCount) * 2;
        glyphIndex = parse.getUShort(data, glyphIndexOffset);
        if (glyphIndex !== 0) glyphIndex = glyphIndex + idDelta & 65535;
      } else glyphIndex = c + idDelta & 65535;
      cmap2.glyphIndexMap[c] = glyphIndex;
    }
  }
}
function parseCmapTable(data, start) {
  var cmap2 = {};
  cmap2.version = parse.getUShort(data, start);
  check.argument(cmap2.version === 0, "cmap table version should be 0.");
  cmap2.numTables = parse.getUShort(data, start + 2);
  var offset2 = -1;
  for (var i = cmap2.numTables - 1; i >= 0; i -= 1) {
    var platformId = parse.getUShort(data, start + 4 + i * 8);
    var encodingId = parse.getUShort(data, start + 4 + i * 8 + 2);
    if (platformId === 3 && (encodingId === 0 || encodingId === 1 || encodingId === 10) || platformId === 0 && (encodingId === 0 || encodingId === 1 || encodingId === 2 || encodingId === 3 || encodingId === 4)) {
      offset2 = parse.getULong(data, start + 4 + i * 8 + 4);
      break;
    }
  }
  if (offset2 === -1) throw new Error("No valid cmap sub-tables found.");
  var p = new parse.Parser(data, start + offset2);
  cmap2.format = p.parseUShort();
  if (cmap2.format === 12) parseCmapTableFormat12(cmap2, p);
  else if (cmap2.format === 4) parseCmapTableFormat4(cmap2, p, data, start, offset2);
  else throw new Error("Only format 4 and 12 cmap tables are supported (found format " + cmap2.format + ").");
  return cmap2;
}
function addSegment(t, code, glyphIndex) {
  t.segments.push({
    end: code,
    start: code,
    delta: -(code - glyphIndex),
    offset: 0,
    glyphIndex
  });
}
function addTerminatorSegment(t) {
  t.segments.push({
    end: 65535,
    start: 65535,
    delta: 1,
    offset: 0
  });
}
function makeCmapTable(glyphs) {
  var isPlan0Only = true;
  var i;
  for (i = glyphs.length - 1; i > 0; i -= 1) if (glyphs.get(i).unicode > 65535) {
    console.log("Adding CMAP format 12 (needed!)");
    isPlan0Only = false;
    break;
  }
  var cmapTable = [
    {
      name: "version",
      type: "USHORT",
      value: 0
    },
    {
      name: "numTables",
      type: "USHORT",
      value: isPlan0Only ? 1 : 2
    },
    {
      name: "platformID",
      type: "USHORT",
      value: 3
    },
    {
      name: "encodingID",
      type: "USHORT",
      value: 1
    },
    {
      name: "offset",
      type: "ULONG",
      value: isPlan0Only ? 12 : 20
    }
  ];
  if (!isPlan0Only) cmapTable = cmapTable.concat([
    {
      name: "cmap12PlatformID",
      type: "USHORT",
      value: 3
    },
    {
      name: "cmap12EncodingID",
      type: "USHORT",
      value: 10
    },
    {
      name: "cmap12Offset",
      type: "ULONG",
      value: 0
    }
  ]);
  cmapTable = cmapTable.concat([
    {
      name: "format",
      type: "USHORT",
      value: 4
    },
    {
      name: "cmap4Length",
      type: "USHORT",
      value: 0
    },
    {
      name: "language",
      type: "USHORT",
      value: 0
    },
    {
      name: "segCountX2",
      type: "USHORT",
      value: 0
    },
    {
      name: "searchRange",
      type: "USHORT",
      value: 0
    },
    {
      name: "entrySelector",
      type: "USHORT",
      value: 0
    },
    {
      name: "rangeShift",
      type: "USHORT",
      value: 0
    }
  ]);
  var t = new table.Table("cmap", cmapTable);
  t.segments = [];
  for (i = 0; i < glyphs.length; i += 1) {
    var glyph = glyphs.get(i);
    for (var j = 0; j < glyph.unicodes.length; j += 1) addSegment(t, glyph.unicodes[j], i);
    t.segments = t.segments.sort(function(a, b) {
      return a.start - b.start;
    });
  }
  addTerminatorSegment(t);
  var segCount = t.segments.length;
  var segCountToRemove = 0;
  var endCounts = [];
  var startCounts = [];
  var idDeltas = [];
  var idRangeOffsets = [];
  var glyphIds = [];
  var cmap12Groups = [];
  for (i = 0; i < segCount; i += 1) {
    var segment = t.segments[i];
    if (segment.end <= 65535 && segment.start <= 65535) {
      endCounts = endCounts.concat({
        name: "end_" + i,
        type: "USHORT",
        value: segment.end
      });
      startCounts = startCounts.concat({
        name: "start_" + i,
        type: "USHORT",
        value: segment.start
      });
      idDeltas = idDeltas.concat({
        name: "idDelta_" + i,
        type: "SHORT",
        value: segment.delta
      });
      idRangeOffsets = idRangeOffsets.concat({
        name: "idRangeOffset_" + i,
        type: "USHORT",
        value: segment.offset
      });
      if (segment.glyphId !== void 0) glyphIds = glyphIds.concat({
        name: "glyph_" + i,
        type: "USHORT",
        value: segment.glyphId
      });
    } else segCountToRemove += 1;
    if (!isPlan0Only && segment.glyphIndex !== void 0) {
      cmap12Groups = cmap12Groups.concat({
        name: "cmap12Start_" + i,
        type: "ULONG",
        value: segment.start
      });
      cmap12Groups = cmap12Groups.concat({
        name: "cmap12End_" + i,
        type: "ULONG",
        value: segment.end
      });
      cmap12Groups = cmap12Groups.concat({
        name: "cmap12Glyph_" + i,
        type: "ULONG",
        value: segment.glyphIndex
      });
    }
  }
  t.segCountX2 = (segCount - segCountToRemove) * 2;
  t.searchRange = Math.pow(2, Math.floor(Math.log(segCount - segCountToRemove) / Math.log(2))) * 2;
  t.entrySelector = Math.log(t.searchRange / 2) / Math.log(2);
  t.rangeShift = t.segCountX2 - t.searchRange;
  t.fields = t.fields.concat(endCounts);
  t.fields.push({
    name: "reservedPad",
    type: "USHORT",
    value: 0
  });
  t.fields = t.fields.concat(startCounts);
  t.fields = t.fields.concat(idDeltas);
  t.fields = t.fields.concat(idRangeOffsets);
  t.fields = t.fields.concat(glyphIds);
  t.cmap4Length = 14 + endCounts.length * 2 + 2 + startCounts.length * 2 + idDeltas.length * 2 + idRangeOffsets.length * 2 + glyphIds.length * 2;
  if (!isPlan0Only) {
    var cmap12Length = 16 + cmap12Groups.length * 4;
    t.cmap12Offset = 20 + t.cmap4Length;
    t.fields = t.fields.concat([
      {
        name: "cmap12Format",
        type: "USHORT",
        value: 12
      },
      {
        name: "cmap12Reserved",
        type: "USHORT",
        value: 0
      },
      {
        name: "cmap12Length",
        type: "ULONG",
        value: cmap12Length
      },
      {
        name: "cmap12Language",
        type: "ULONG",
        value: 0
      },
      {
        name: "cmap12nGroups",
        type: "ULONG",
        value: cmap12Groups.length / 3
      }
    ]);
    t.fields = t.fields.concat(cmap12Groups);
  }
  return t;
}
var cmap = {
  parse: parseCmapTable,
  make: makeCmapTable
};
var cffStandardStrings = [
  ".notdef",
  "space",
  "exclam",
  "quotedbl",
  "numbersign",
  "dollar",
  "percent",
  "ampersand",
  "quoteright",
  "parenleft",
  "parenright",
  "asterisk",
  "plus",
  "comma",
  "hyphen",
  "period",
  "slash",
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "colon",
  "semicolon",
  "less",
  "equal",
  "greater",
  "question",
  "at",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "bracketleft",
  "backslash",
  "bracketright",
  "asciicircum",
  "underscore",
  "quoteleft",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "braceleft",
  "bar",
  "braceright",
  "asciitilde",
  "exclamdown",
  "cent",
  "sterling",
  "fraction",
  "yen",
  "florin",
  "section",
  "currency",
  "quotesingle",
  "quotedblleft",
  "guillemotleft",
  "guilsinglleft",
  "guilsinglright",
  "fi",
  "fl",
  "endash",
  "dagger",
  "daggerdbl",
  "periodcentered",
  "paragraph",
  "bullet",
  "quotesinglbase",
  "quotedblbase",
  "quotedblright",
  "guillemotright",
  "ellipsis",
  "perthousand",
  "questiondown",
  "grave",
  "acute",
  "circumflex",
  "tilde",
  "macron",
  "breve",
  "dotaccent",
  "dieresis",
  "ring",
  "cedilla",
  "hungarumlaut",
  "ogonek",
  "caron",
  "emdash",
  "AE",
  "ordfeminine",
  "Lslash",
  "Oslash",
  "OE",
  "ordmasculine",
  "ae",
  "dotlessi",
  "lslash",
  "oslash",
  "oe",
  "germandbls",
  "onesuperior",
  "logicalnot",
  "mu",
  "trademark",
  "Eth",
  "onehalf",
  "plusminus",
  "Thorn",
  "onequarter",
  "divide",
  "brokenbar",
  "degree",
  "thorn",
  "threequarters",
  "twosuperior",
  "registered",
  "minus",
  "eth",
  "multiply",
  "threesuperior",
  "copyright",
  "Aacute",
  "Acircumflex",
  "Adieresis",
  "Agrave",
  "Aring",
  "Atilde",
  "Ccedilla",
  "Eacute",
  "Ecircumflex",
  "Edieresis",
  "Egrave",
  "Iacute",
  "Icircumflex",
  "Idieresis",
  "Igrave",
  "Ntilde",
  "Oacute",
  "Ocircumflex",
  "Odieresis",
  "Ograve",
  "Otilde",
  "Scaron",
  "Uacute",
  "Ucircumflex",
  "Udieresis",
  "Ugrave",
  "Yacute",
  "Ydieresis",
  "Zcaron",
  "aacute",
  "acircumflex",
  "adieresis",
  "agrave",
  "aring",
  "atilde",
  "ccedilla",
  "eacute",
  "ecircumflex",
  "edieresis",
  "egrave",
  "iacute",
  "icircumflex",
  "idieresis",
  "igrave",
  "ntilde",
  "oacute",
  "ocircumflex",
  "odieresis",
  "ograve",
  "otilde",
  "scaron",
  "uacute",
  "ucircumflex",
  "udieresis",
  "ugrave",
  "yacute",
  "ydieresis",
  "zcaron",
  "exclamsmall",
  "Hungarumlautsmall",
  "dollaroldstyle",
  "dollarsuperior",
  "ampersandsmall",
  "Acutesmall",
  "parenleftsuperior",
  "parenrightsuperior",
  "266 ff",
  "onedotenleader",
  "zerooldstyle",
  "oneoldstyle",
  "twooldstyle",
  "threeoldstyle",
  "fouroldstyle",
  "fiveoldstyle",
  "sixoldstyle",
  "sevenoldstyle",
  "eightoldstyle",
  "nineoldstyle",
  "commasuperior",
  "threequartersemdash",
  "periodsuperior",
  "questionsmall",
  "asuperior",
  "bsuperior",
  "centsuperior",
  "dsuperior",
  "esuperior",
  "isuperior",
  "lsuperior",
  "msuperior",
  "nsuperior",
  "osuperior",
  "rsuperior",
  "ssuperior",
  "tsuperior",
  "ff",
  "ffi",
  "ffl",
  "parenleftinferior",
  "parenrightinferior",
  "Circumflexsmall",
  "hyphensuperior",
  "Gravesmall",
  "Asmall",
  "Bsmall",
  "Csmall",
  "Dsmall",
  "Esmall",
  "Fsmall",
  "Gsmall",
  "Hsmall",
  "Ismall",
  "Jsmall",
  "Ksmall",
  "Lsmall",
  "Msmall",
  "Nsmall",
  "Osmall",
  "Psmall",
  "Qsmall",
  "Rsmall",
  "Ssmall",
  "Tsmall",
  "Usmall",
  "Vsmall",
  "Wsmall",
  "Xsmall",
  "Ysmall",
  "Zsmall",
  "colonmonetary",
  "onefitted",
  "rupiah",
  "Tildesmall",
  "exclamdownsmall",
  "centoldstyle",
  "Lslashsmall",
  "Scaronsmall",
  "Zcaronsmall",
  "Dieresissmall",
  "Brevesmall",
  "Caronsmall",
  "Dotaccentsmall",
  "Macronsmall",
  "figuredash",
  "hypheninferior",
  "Ogoneksmall",
  "Ringsmall",
  "Cedillasmall",
  "questiondownsmall",
  "oneeighth",
  "threeeighths",
  "fiveeighths",
  "seveneighths",
  "onethird",
  "twothirds",
  "zerosuperior",
  "foursuperior",
  "fivesuperior",
  "sixsuperior",
  "sevensuperior",
  "eightsuperior",
  "ninesuperior",
  "zeroinferior",
  "oneinferior",
  "twoinferior",
  "threeinferior",
  "fourinferior",
  "fiveinferior",
  "sixinferior",
  "seveninferior",
  "eightinferior",
  "nineinferior",
  "centinferior",
  "dollarinferior",
  "periodinferior",
  "commainferior",
  "Agravesmall",
  "Aacutesmall",
  "Acircumflexsmall",
  "Atildesmall",
  "Adieresissmall",
  "Aringsmall",
  "AEsmall",
  "Ccedillasmall",
  "Egravesmall",
  "Eacutesmall",
  "Ecircumflexsmall",
  "Edieresissmall",
  "Igravesmall",
  "Iacutesmall",
  "Icircumflexsmall",
  "Idieresissmall",
  "Ethsmall",
  "Ntildesmall",
  "Ogravesmall",
  "Oacutesmall",
  "Ocircumflexsmall",
  "Otildesmall",
  "Odieresissmall",
  "OEsmall",
  "Oslashsmall",
  "Ugravesmall",
  "Uacutesmall",
  "Ucircumflexsmall",
  "Udieresissmall",
  "Yacutesmall",
  "Thornsmall",
  "Ydieresissmall",
  "001.000",
  "001.001",
  "001.002",
  "001.003",
  "Black",
  "Bold",
  "Book",
  "Light",
  "Medium",
  "Regular",
  "Roman",
  "Semibold"
];
var cffStandardEncoding = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "space",
  "exclam",
  "quotedbl",
  "numbersign",
  "dollar",
  "percent",
  "ampersand",
  "quoteright",
  "parenleft",
  "parenright",
  "asterisk",
  "plus",
  "comma",
  "hyphen",
  "period",
  "slash",
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "colon",
  "semicolon",
  "less",
  "equal",
  "greater",
  "question",
  "at",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "bracketleft",
  "backslash",
  "bracketright",
  "asciicircum",
  "underscore",
  "quoteleft",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "braceleft",
  "bar",
  "braceright",
  "asciitilde",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "exclamdown",
  "cent",
  "sterling",
  "fraction",
  "yen",
  "florin",
  "section",
  "currency",
  "quotesingle",
  "quotedblleft",
  "guillemotleft",
  "guilsinglleft",
  "guilsinglright",
  "fi",
  "fl",
  "",
  "endash",
  "dagger",
  "daggerdbl",
  "periodcentered",
  "",
  "paragraph",
  "bullet",
  "quotesinglbase",
  "quotedblbase",
  "quotedblright",
  "guillemotright",
  "ellipsis",
  "perthousand",
  "",
  "questiondown",
  "",
  "grave",
  "acute",
  "circumflex",
  "tilde",
  "macron",
  "breve",
  "dotaccent",
  "dieresis",
  "",
  "ring",
  "cedilla",
  "",
  "hungarumlaut",
  "ogonek",
  "caron",
  "emdash",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "AE",
  "",
  "ordfeminine",
  "",
  "",
  "",
  "",
  "Lslash",
  "Oslash",
  "OE",
  "ordmasculine",
  "",
  "",
  "",
  "",
  "",
  "ae",
  "",
  "",
  "",
  "dotlessi",
  "",
  "",
  "lslash",
  "oslash",
  "oe",
  "germandbls"
];
var cffExpertEncoding = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "space",
  "exclamsmall",
  "Hungarumlautsmall",
  "",
  "dollaroldstyle",
  "dollarsuperior",
  "ampersandsmall",
  "Acutesmall",
  "parenleftsuperior",
  "parenrightsuperior",
  "twodotenleader",
  "onedotenleader",
  "comma",
  "hyphen",
  "period",
  "fraction",
  "zerooldstyle",
  "oneoldstyle",
  "twooldstyle",
  "threeoldstyle",
  "fouroldstyle",
  "fiveoldstyle",
  "sixoldstyle",
  "sevenoldstyle",
  "eightoldstyle",
  "nineoldstyle",
  "colon",
  "semicolon",
  "commasuperior",
  "threequartersemdash",
  "periodsuperior",
  "questionsmall",
  "",
  "asuperior",
  "bsuperior",
  "centsuperior",
  "dsuperior",
  "esuperior",
  "",
  "",
  "isuperior",
  "",
  "",
  "lsuperior",
  "msuperior",
  "nsuperior",
  "osuperior",
  "",
  "",
  "rsuperior",
  "ssuperior",
  "tsuperior",
  "",
  "ff",
  "fi",
  "fl",
  "ffi",
  "ffl",
  "parenleftinferior",
  "",
  "parenrightinferior",
  "Circumflexsmall",
  "hyphensuperior",
  "Gravesmall",
  "Asmall",
  "Bsmall",
  "Csmall",
  "Dsmall",
  "Esmall",
  "Fsmall",
  "Gsmall",
  "Hsmall",
  "Ismall",
  "Jsmall",
  "Ksmall",
  "Lsmall",
  "Msmall",
  "Nsmall",
  "Osmall",
  "Psmall",
  "Qsmall",
  "Rsmall",
  "Ssmall",
  "Tsmall",
  "Usmall",
  "Vsmall",
  "Wsmall",
  "Xsmall",
  "Ysmall",
  "Zsmall",
  "colonmonetary",
  "onefitted",
  "rupiah",
  "Tildesmall",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "exclamdownsmall",
  "centoldstyle",
  "Lslashsmall",
  "",
  "",
  "Scaronsmall",
  "Zcaronsmall",
  "Dieresissmall",
  "Brevesmall",
  "Caronsmall",
  "",
  "Dotaccentsmall",
  "",
  "",
  "Macronsmall",
  "",
  "",
  "figuredash",
  "hypheninferior",
  "",
  "",
  "Ogoneksmall",
  "Ringsmall",
  "Cedillasmall",
  "",
  "",
  "",
  "onequarter",
  "onehalf",
  "threequarters",
  "questiondownsmall",
  "oneeighth",
  "threeeighths",
  "fiveeighths",
  "seveneighths",
  "onethird",
  "twothirds",
  "",
  "",
  "zerosuperior",
  "onesuperior",
  "twosuperior",
  "threesuperior",
  "foursuperior",
  "fivesuperior",
  "sixsuperior",
  "sevensuperior",
  "eightsuperior",
  "ninesuperior",
  "zeroinferior",
  "oneinferior",
  "twoinferior",
  "threeinferior",
  "fourinferior",
  "fiveinferior",
  "sixinferior",
  "seveninferior",
  "eightinferior",
  "nineinferior",
  "centinferior",
  "dollarinferior",
  "periodinferior",
  "commainferior",
  "Agravesmall",
  "Aacutesmall",
  "Acircumflexsmall",
  "Atildesmall",
  "Adieresissmall",
  "Aringsmall",
  "AEsmall",
  "Ccedillasmall",
  "Egravesmall",
  "Eacutesmall",
  "Ecircumflexsmall",
  "Edieresissmall",
  "Igravesmall",
  "Iacutesmall",
  "Icircumflexsmall",
  "Idieresissmall",
  "Ethsmall",
  "Ntildesmall",
  "Ogravesmall",
  "Oacutesmall",
  "Ocircumflexsmall",
  "Otildesmall",
  "Odieresissmall",
  "OEsmall",
  "Oslashsmall",
  "Ugravesmall",
  "Uacutesmall",
  "Ucircumflexsmall",
  "Udieresissmall",
  "Yacutesmall",
  "Thornsmall",
  "Ydieresissmall"
];
var standardNames = [
  ".notdef",
  ".null",
  "nonmarkingreturn",
  "space",
  "exclam",
  "quotedbl",
  "numbersign",
  "dollar",
  "percent",
  "ampersand",
  "quotesingle",
  "parenleft",
  "parenright",
  "asterisk",
  "plus",
  "comma",
  "hyphen",
  "period",
  "slash",
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "colon",
  "semicolon",
  "less",
  "equal",
  "greater",
  "question",
  "at",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "bracketleft",
  "backslash",
  "bracketright",
  "asciicircum",
  "underscore",
  "grave",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "braceleft",
  "bar",
  "braceright",
  "asciitilde",
  "Adieresis",
  "Aring",
  "Ccedilla",
  "Eacute",
  "Ntilde",
  "Odieresis",
  "Udieresis",
  "aacute",
  "agrave",
  "acircumflex",
  "adieresis",
  "atilde",
  "aring",
  "ccedilla",
  "eacute",
  "egrave",
  "ecircumflex",
  "edieresis",
  "iacute",
  "igrave",
  "icircumflex",
  "idieresis",
  "ntilde",
  "oacute",
  "ograve",
  "ocircumflex",
  "odieresis",
  "otilde",
  "uacute",
  "ugrave",
  "ucircumflex",
  "udieresis",
  "dagger",
  "degree",
  "cent",
  "sterling",
  "section",
  "bullet",
  "paragraph",
  "germandbls",
  "registered",
  "copyright",
  "trademark",
  "acute",
  "dieresis",
  "notequal",
  "AE",
  "Oslash",
  "infinity",
  "plusminus",
  "lessequal",
  "greaterequal",
  "yen",
  "mu",
  "partialdiff",
  "summation",
  "product",
  "pi",
  "integral",
  "ordfeminine",
  "ordmasculine",
  "Omega",
  "ae",
  "oslash",
  "questiondown",
  "exclamdown",
  "logicalnot",
  "radical",
  "florin",
  "approxequal",
  "Delta",
  "guillemotleft",
  "guillemotright",
  "ellipsis",
  "nonbreakingspace",
  "Agrave",
  "Atilde",
  "Otilde",
  "OE",
  "oe",
  "endash",
  "emdash",
  "quotedblleft",
  "quotedblright",
  "quoteleft",
  "quoteright",
  "divide",
  "lozenge",
  "ydieresis",
  "Ydieresis",
  "fraction",
  "currency",
  "guilsinglleft",
  "guilsinglright",
  "fi",
  "fl",
  "daggerdbl",
  "periodcentered",
  "quotesinglbase",
  "quotedblbase",
  "perthousand",
  "Acircumflex",
  "Ecircumflex",
  "Aacute",
  "Edieresis",
  "Egrave",
  "Iacute",
  "Icircumflex",
  "Idieresis",
  "Igrave",
  "Oacute",
  "Ocircumflex",
  "apple",
  "Ograve",
  "Uacute",
  "Ucircumflex",
  "Ugrave",
  "dotlessi",
  "circumflex",
  "tilde",
  "macron",
  "breve",
  "dotaccent",
  "ring",
  "cedilla",
  "hungarumlaut",
  "ogonek",
  "caron",
  "Lslash",
  "lslash",
  "Scaron",
  "scaron",
  "Zcaron",
  "zcaron",
  "brokenbar",
  "Eth",
  "eth",
  "Yacute",
  "yacute",
  "Thorn",
  "thorn",
  "minus",
  "multiply",
  "onesuperior",
  "twosuperior",
  "threesuperior",
  "onehalf",
  "onequarter",
  "threequarters",
  "franc",
  "Gbreve",
  "gbreve",
  "Idotaccent",
  "Scedilla",
  "scedilla",
  "Cacute",
  "cacute",
  "Ccaron",
  "ccaron",
  "dcroat"
];
function DefaultEncoding(font) {
  this.font = font;
}
DefaultEncoding.prototype.charToGlyphIndex = function(c) {
  var code = c.codePointAt(0);
  var glyphs = this.font.glyphs;
  if (glyphs) for (var i = 0; i < glyphs.length; i += 1) {
    var glyph = glyphs.get(i);
    for (var j = 0; j < glyph.unicodes.length; j += 1) if (glyph.unicodes[j] === code) return i;
  }
  return null;
};
function CmapEncoding(cmap2) {
  this.cmap = cmap2;
}
CmapEncoding.prototype.charToGlyphIndex = function(c) {
  return this.cmap.glyphIndexMap[c.codePointAt(0)] || 0;
};
function CffEncoding(encoding, charset) {
  this.encoding = encoding;
  this.charset = charset;
}
CffEncoding.prototype.charToGlyphIndex = function(s) {
  var code = s.codePointAt(0);
  var charName = this.encoding[code];
  return this.charset.indexOf(charName);
};
function GlyphNames(post2) {
  switch (post2.version) {
    case 1:
      this.names = standardNames.slice();
      break;
    case 2:
      this.names = new Array(post2.numberOfGlyphs);
      for (var i = 0; i < post2.numberOfGlyphs; i++) if (post2.glyphNameIndex[i] < standardNames.length) this.names[i] = standardNames[post2.glyphNameIndex[i]];
      else this.names[i] = post2.names[post2.glyphNameIndex[i] - standardNames.length];
      break;
    case 2.5:
      this.names = new Array(post2.numberOfGlyphs);
      for (var i$1 = 0; i$1 < post2.numberOfGlyphs; i$1++) this.names[i$1] = standardNames[i$1 + post2.glyphNameIndex[i$1]];
      break;
    case 3:
      this.names = [];
      break;
    default:
      this.names = [];
  }
}
GlyphNames.prototype.nameToGlyphIndex = function(name) {
  return this.names.indexOf(name);
};
GlyphNames.prototype.glyphIndexToName = function(gid) {
  return this.names[gid];
};
function addGlyphNamesAll(font) {
  var glyph;
  var glyphIndexMap = font.tables.cmap.glyphIndexMap;
  var charCodes = Object.keys(glyphIndexMap);
  for (var i = 0; i < charCodes.length; i += 1) {
    var c = charCodes[i];
    var glyphIndex = glyphIndexMap[c];
    glyph = font.glyphs.get(glyphIndex);
    glyph.addUnicode(parseInt(c));
  }
  for (var i$1 = 0; i$1 < font.glyphs.length; i$1 += 1) {
    glyph = font.glyphs.get(i$1);
    if (font.cffEncoding) {
      if (font.isCIDFont) glyph.name = "gid" + i$1;
      else glyph.name = font.cffEncoding.charset[i$1];
    } else if (font.glyphNames.names) glyph.name = font.glyphNames.glyphIndexToName(i$1);
  }
}
function addGlyphNamesToUnicodeMap(font) {
  font._IndexToUnicodeMap = {};
  var glyphIndexMap = font.tables.cmap.glyphIndexMap;
  var charCodes = Object.keys(glyphIndexMap);
  for (var i = 0; i < charCodes.length; i += 1) {
    var c = charCodes[i];
    var glyphIndex = glyphIndexMap[c];
    if (font._IndexToUnicodeMap[glyphIndex] === void 0) font._IndexToUnicodeMap[glyphIndex] = { unicodes: [parseInt(c)] };
    else font._IndexToUnicodeMap[glyphIndex].unicodes.push(parseInt(c));
  }
}
function addGlyphNames(font, opt) {
  if (opt.lowMemory) addGlyphNamesToUnicodeMap(font);
  else addGlyphNamesAll(font);
}
function line(ctx, x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}
var draw$1 = { line };
function getPathDefinition(glyph, path) {
  var _path = path || new Path();
  return {
    configurable: true,
    get: function() {
      if (typeof _path === "function") _path = _path();
      return _path;
    },
    set: function(p) {
      _path = p;
    }
  };
}
function Glyph(options) {
  this.bindConstructorValues(options);
}
Glyph.prototype.bindConstructorValues = function(options) {
  this.index = options.index || 0;
  this.name = options.name || null;
  this.unicode = options.unicode || void 0;
  this.unicodes = options.unicodes || options.unicode !== void 0 ? [options.unicode] : [];
  if ("xMin" in options) this.xMin = options.xMin;
  if ("yMin" in options) this.yMin = options.yMin;
  if ("xMax" in options) this.xMax = options.xMax;
  if ("yMax" in options) this.yMax = options.yMax;
  if ("advanceWidth" in options) this.advanceWidth = options.advanceWidth;
  Object.defineProperty(this, "path", getPathDefinition(this, options.path));
};
Glyph.prototype.addUnicode = function(unicode) {
  if (this.unicodes.length === 0) this.unicode = unicode;
  this.unicodes.push(unicode);
};
Glyph.prototype.getBoundingBox = function() {
  return this.path.getBoundingBox();
};
Glyph.prototype.getPath = function(x, y, fontSize, options, font) {
  x = x !== void 0 ? x : 0;
  y = y !== void 0 ? y : 0;
  fontSize = fontSize !== void 0 ? fontSize : 72;
  var commands;
  var hPoints;
  if (!options) options = {};
  var xScale = options.xScale;
  var yScale = options.yScale;
  if (options.hinting && font && font.hinting) hPoints = this.path && font.hinting.exec(this, fontSize);
  if (hPoints) {
    commands = font.hinting.getCommands(hPoints);
    x = Math.round(x);
    y = Math.round(y);
    xScale = yScale = 1;
  } else {
    commands = this.path.commands;
    var scale2 = 1 / (this.path.unitsPerEm || 1e3) * fontSize;
    if (xScale === void 0) xScale = scale2;
    if (yScale === void 0) yScale = scale2;
  }
  var p = new Path();
  for (var i = 0; i < commands.length; i += 1) {
    var cmd = commands[i];
    if (cmd.type === "M") p.moveTo(x + cmd.x * xScale, y + -cmd.y * yScale);
    else if (cmd.type === "L") p.lineTo(x + cmd.x * xScale, y + -cmd.y * yScale);
    else if (cmd.type === "Q") p.quadraticCurveTo(x + cmd.x1 * xScale, y + -cmd.y1 * yScale, x + cmd.x * xScale, y + -cmd.y * yScale);
    else if (cmd.type === "C") p.curveTo(x + cmd.x1 * xScale, y + -cmd.y1 * yScale, x + cmd.x2 * xScale, y + -cmd.y2 * yScale, x + cmd.x * xScale, y + -cmd.y * yScale);
    else if (cmd.type === "Z") p.closePath();
  }
  return p;
};
Glyph.prototype.getContours = function() {
  if (this.points === void 0) return [];
  var contours = [];
  var currentContour = [];
  for (var i = 0; i < this.points.length; i += 1) {
    var pt = this.points[i];
    currentContour.push(pt);
    if (pt.lastPointOfContour) {
      contours.push(currentContour);
      currentContour = [];
    }
  }
  check.argument(currentContour.length === 0, "There are still points left in the current contour.");
  return contours;
};
Glyph.prototype.getMetrics = function() {
  var commands = this.path.commands;
  var xCoords = [];
  var yCoords = [];
  for (var i = 0; i < commands.length; i += 1) {
    var cmd = commands[i];
    if (cmd.type !== "Z") {
      xCoords.push(cmd.x);
      yCoords.push(cmd.y);
    }
    if (cmd.type === "Q" || cmd.type === "C") {
      xCoords.push(cmd.x1);
      yCoords.push(cmd.y1);
    }
    if (cmd.type === "C") {
      xCoords.push(cmd.x2);
      yCoords.push(cmd.y2);
    }
  }
  var metrics = {
    xMin: Math.min.apply(null, xCoords),
    yMin: Math.min.apply(null, yCoords),
    xMax: Math.max.apply(null, xCoords),
    yMax: Math.max.apply(null, yCoords),
    leftSideBearing: this.leftSideBearing
  };
  if (!isFinite(metrics.xMin)) metrics.xMin = 0;
  if (!isFinite(metrics.xMax)) metrics.xMax = this.advanceWidth;
  if (!isFinite(metrics.yMin)) metrics.yMin = 0;
  if (!isFinite(metrics.yMax)) metrics.yMax = 0;
  metrics.rightSideBearing = this.advanceWidth - metrics.leftSideBearing - (metrics.xMax - metrics.xMin);
  return metrics;
};
Glyph.prototype.draw = function(ctx, x, y, fontSize, options) {
  this.getPath(x, y, fontSize, options).draw(ctx);
};
Glyph.prototype.drawPoints = function(ctx, x, y, fontSize) {
  function drawCircles(l, x2, y2, scale3) {
    ctx.beginPath();
    for (var j = 0; j < l.length; j += 1) {
      ctx.moveTo(x2 + l[j].x * scale3, y2 + l[j].y * scale3);
      ctx.arc(x2 + l[j].x * scale3, y2 + l[j].y * scale3, 2, 0, Math.PI * 2, false);
    }
    ctx.closePath();
    ctx.fill();
  }
  x = x !== void 0 ? x : 0;
  y = y !== void 0 ? y : 0;
  fontSize = fontSize !== void 0 ? fontSize : 24;
  var scale2 = 1 / this.path.unitsPerEm * fontSize;
  var blueCircles = [];
  var redCircles = [];
  var path = this.path;
  for (var i = 0; i < path.commands.length; i += 1) {
    var cmd = path.commands[i];
    if (cmd.x !== void 0) blueCircles.push({
      x: cmd.x,
      y: -cmd.y
    });
    if (cmd.x1 !== void 0) redCircles.push({
      x: cmd.x1,
      y: -cmd.y1
    });
    if (cmd.x2 !== void 0) redCircles.push({
      x: cmd.x2,
      y: -cmd.y2
    });
  }
  ctx.fillStyle = "blue";
  drawCircles(blueCircles, x, y, scale2);
  ctx.fillStyle = "red";
  drawCircles(redCircles, x, y, scale2);
};
Glyph.prototype.drawMetrics = function(ctx, x, y, fontSize) {
  var scale2;
  x = x !== void 0 ? x : 0;
  y = y !== void 0 ? y : 0;
  fontSize = fontSize !== void 0 ? fontSize : 24;
  scale2 = 1 / this.path.unitsPerEm * fontSize;
  ctx.lineWidth = 1;
  ctx.strokeStyle = "black";
  draw$1.line(ctx, x, -1e4, x, 1e4);
  draw$1.line(ctx, -1e4, y, 1e4, y);
  var xMin = this.xMin || 0;
  var yMin = this.yMin || 0;
  var xMax = this.xMax || 0;
  var yMax = this.yMax || 0;
  var advanceWidth = this.advanceWidth || 0;
  ctx.strokeStyle = "blue";
  draw$1.line(ctx, x + xMin * scale2, -1e4, x + xMin * scale2, 1e4);
  draw$1.line(ctx, x + xMax * scale2, -1e4, x + xMax * scale2, 1e4);
  draw$1.line(ctx, -1e4, y + -yMin * scale2, 1e4, y + -yMin * scale2);
  draw$1.line(ctx, -1e4, y + -yMax * scale2, 1e4, y + -yMax * scale2);
  ctx.strokeStyle = "green";
  draw$1.line(ctx, x + advanceWidth * scale2, -1e4, x + advanceWidth * scale2, 1e4);
};
function defineDependentProperty(glyph, externalName, internalName) {
  Object.defineProperty(glyph, externalName, {
    get: function() {
      glyph.path;
      return glyph[internalName];
    },
    set: function(newValue) {
      glyph[internalName] = newValue;
    },
    enumerable: true,
    configurable: true
  });
}
function GlyphSet(font, glyphs) {
  this.font = font;
  this.glyphs = {};
  if (Array.isArray(glyphs)) for (var i = 0; i < glyphs.length; i++) {
    var glyph = glyphs[i];
    glyph.path.unitsPerEm = font.unitsPerEm;
    this.glyphs[i] = glyph;
  }
  this.length = glyphs && glyphs.length || 0;
}
GlyphSet.prototype.get = function(index) {
  if (this.glyphs[index] === void 0) {
    this.font._push(index);
    if (typeof this.glyphs[index] === "function") this.glyphs[index] = this.glyphs[index]();
    var glyph = this.glyphs[index];
    var unicodeObj = this.font._IndexToUnicodeMap[index];
    if (unicodeObj) for (var j = 0; j < unicodeObj.unicodes.length; j++) glyph.addUnicode(unicodeObj.unicodes[j]);
    if (this.font.cffEncoding) {
      if (this.font.isCIDFont) glyph.name = "gid" + index;
      else glyph.name = this.font.cffEncoding.charset[index];
    } else if (this.font.glyphNames.names) glyph.name = this.font.glyphNames.glyphIndexToName(index);
    this.glyphs[index].advanceWidth = this.font._hmtxTableData[index].advanceWidth;
    this.glyphs[index].leftSideBearing = this.font._hmtxTableData[index].leftSideBearing;
  } else if (typeof this.glyphs[index] === "function") this.glyphs[index] = this.glyphs[index]();
  return this.glyphs[index];
};
GlyphSet.prototype.push = function(index, loader) {
  this.glyphs[index] = loader;
  this.length++;
};
function glyphLoader(font, index) {
  return new Glyph({
    index,
    font
  });
}
function ttfGlyphLoader(font, index, parseGlyph2, data, position, buildPath2) {
  return function() {
    var glyph = new Glyph({
      index,
      font
    });
    glyph.path = function() {
      parseGlyph2(glyph, data, position);
      var path = buildPath2(font.glyphs, glyph);
      path.unitsPerEm = font.unitsPerEm;
      return path;
    };
    defineDependentProperty(glyph, "xMin", "_xMin");
    defineDependentProperty(glyph, "xMax", "_xMax");
    defineDependentProperty(glyph, "yMin", "_yMin");
    defineDependentProperty(glyph, "yMax", "_yMax");
    return glyph;
  };
}
function cffGlyphLoader(font, index, parseCFFCharstring2, charstring) {
  return function() {
    var glyph = new Glyph({
      index,
      font
    });
    glyph.path = function() {
      var path = parseCFFCharstring2(font, glyph, charstring);
      path.unitsPerEm = font.unitsPerEm;
      return path;
    };
    return glyph;
  };
}
var glyphset = {
  GlyphSet,
  glyphLoader,
  ttfGlyphLoader,
  cffGlyphLoader
};
function equals(a, b) {
  if (a === b) return true;
  else if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; i += 1) if (!equals(a[i], b[i])) return false;
    return true;
  } else return false;
}
function calcCFFSubroutineBias(subrs) {
  var bias;
  if (subrs.length < 1240) bias = 107;
  else if (subrs.length < 33900) bias = 1131;
  else bias = 32768;
  return bias;
}
function parseCFFIndex(data, start, conversionFn) {
  var offsets = [];
  var objects = [];
  var count = parse.getCard16(data, start);
  var objectOffset;
  var endOffset;
  if (count !== 0) {
    var offsetSize = parse.getByte(data, start + 2);
    objectOffset = start + (count + 1) * offsetSize + 2;
    var pos = start + 3;
    for (var i = 0; i < count + 1; i += 1) {
      offsets.push(parse.getOffset(data, pos, offsetSize));
      pos += offsetSize;
    }
    endOffset = objectOffset + offsets[count];
  } else endOffset = start + 2;
  for (var i$1 = 0; i$1 < offsets.length - 1; i$1 += 1) {
    var value = parse.getBytes(data, objectOffset + offsets[i$1], objectOffset + offsets[i$1 + 1]);
    if (conversionFn) value = conversionFn(value);
    objects.push(value);
  }
  return {
    objects,
    startOffset: start,
    endOffset
  };
}
function parseCFFIndexLowMemory(data, start) {
  var offsets = [];
  var count = parse.getCard16(data, start);
  var objectOffset;
  var endOffset;
  if (count !== 0) {
    var offsetSize = parse.getByte(data, start + 2);
    objectOffset = start + (count + 1) * offsetSize + 2;
    var pos = start + 3;
    for (var i = 0; i < count + 1; i += 1) {
      offsets.push(parse.getOffset(data, pos, offsetSize));
      pos += offsetSize;
    }
    endOffset = objectOffset + offsets[count];
  } else endOffset = start + 2;
  return {
    offsets,
    startOffset: start,
    endOffset
  };
}
function getCffIndexObject(i, offsets, data, start, conversionFn) {
  var count = parse.getCard16(data, start);
  var objectOffset = 0;
  if (count !== 0) {
    var offsetSize = parse.getByte(data, start + 2);
    objectOffset = start + (count + 1) * offsetSize + 2;
  }
  var value = parse.getBytes(data, objectOffset + offsets[i], objectOffset + offsets[i + 1]);
  if (conversionFn) value = conversionFn(value);
  return value;
}
function parseFloatOperand(parser) {
  var s = "";
  var eof = 15;
  var lookup = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "E",
    "E-",
    null,
    "-"
  ];
  while (true) {
    var b = parser.parseByte();
    var n1 = b >> 4;
    var n2 = b & 15;
    if (n1 === eof) break;
    s += lookup[n1];
    if (n2 === eof) break;
    s += lookup[n2];
  }
  return parseFloat(s);
}
function parseOperand(parser, b0) {
  var b1;
  var b2;
  var b3;
  var b4;
  if (b0 === 28) {
    b1 = parser.parseByte();
    b2 = parser.parseByte();
    return b1 << 8 | b2;
  }
  if (b0 === 29) {
    b1 = parser.parseByte();
    b2 = parser.parseByte();
    b3 = parser.parseByte();
    b4 = parser.parseByte();
    return b1 << 24 | b2 << 16 | b3 << 8 | b4;
  }
  if (b0 === 30) return parseFloatOperand(parser);
  if (b0 >= 32 && b0 <= 246) return b0 - 139;
  if (b0 >= 247 && b0 <= 250) {
    b1 = parser.parseByte();
    return (b0 - 247) * 256 + b1 + 108;
  }
  if (b0 >= 251 && b0 <= 254) {
    b1 = parser.parseByte();
    return -(b0 - 251) * 256 - b1 - 108;
  }
  throw new Error("Invalid b0 " + b0);
}
function entriesToObject(entries) {
  var o = {};
  for (var i = 0; i < entries.length; i += 1) {
    var key = entries[i][0];
    var values = entries[i][1];
    var value = void 0;
    if (values.length === 1) value = values[0];
    else value = values;
    if (o.hasOwnProperty(key) && !isNaN(o[key])) throw new Error("Object " + o + " already has key " + key);
    o[key] = value;
  }
  return o;
}
function parseCFFDict(data, start, size) {
  start = start !== void 0 ? start : 0;
  var parser = new parse.Parser(data, start);
  var entries = [];
  var operands = [];
  size = size !== void 0 ? size : data.length;
  while (parser.relativeOffset < size) {
    var op = parser.parseByte();
    if (op <= 21) {
      if (op === 12) op = 1200 + parser.parseByte();
      entries.push([op, operands]);
      operands = [];
    } else operands.push(parseOperand(parser, op));
  }
  return entriesToObject(entries);
}
function getCFFString(strings, index) {
  if (index <= 390) index = cffStandardStrings[index];
  else index = strings[index - 391];
  return index;
}
function interpretDict(dict, meta2, strings) {
  var newDict = {};
  var value;
  for (var i = 0; i < meta2.length; i += 1) {
    var m = meta2[i];
    if (Array.isArray(m.type)) {
      var values = [];
      values.length = m.type.length;
      for (var j = 0; j < m.type.length; j++) {
        value = dict[m.op] !== void 0 ? dict[m.op][j] : void 0;
        if (value === void 0) value = m.value !== void 0 && m.value[j] !== void 0 ? m.value[j] : null;
        if (m.type[j] === "SID") value = getCFFString(strings, value);
        values[j] = value;
      }
      newDict[m.name] = values;
    } else {
      value = dict[m.op];
      if (value === void 0) value = m.value !== void 0 ? m.value : null;
      if (m.type === "SID") value = getCFFString(strings, value);
      newDict[m.name] = value;
    }
  }
  return newDict;
}
function parseCFFHeader(data, start) {
  var header = {};
  header.formatMajor = parse.getCard8(data, start);
  header.formatMinor = parse.getCard8(data, start + 1);
  header.size = parse.getCard8(data, start + 2);
  header.offsetSize = parse.getCard8(data, start + 3);
  header.startOffset = start;
  header.endOffset = start + 4;
  return header;
}
var TOP_DICT_META = [
  {
    name: "version",
    op: 0,
    type: "SID"
  },
  {
    name: "notice",
    op: 1,
    type: "SID"
  },
  {
    name: "copyright",
    op: 1200,
    type: "SID"
  },
  {
    name: "fullName",
    op: 2,
    type: "SID"
  },
  {
    name: "familyName",
    op: 3,
    type: "SID"
  },
  {
    name: "weight",
    op: 4,
    type: "SID"
  },
  {
    name: "isFixedPitch",
    op: 1201,
    type: "number",
    value: 0
  },
  {
    name: "italicAngle",
    op: 1202,
    type: "number",
    value: 0
  },
  {
    name: "underlinePosition",
    op: 1203,
    type: "number",
    value: -100
  },
  {
    name: "underlineThickness",
    op: 1204,
    type: "number",
    value: 50
  },
  {
    name: "paintType",
    op: 1205,
    type: "number",
    value: 0
  },
  {
    name: "charstringType",
    op: 1206,
    type: "number",
    value: 2
  },
  {
    name: "fontMatrix",
    op: 1207,
    type: [
      "real",
      "real",
      "real",
      "real",
      "real",
      "real"
    ],
    value: [
      1e-3,
      0,
      0,
      1e-3,
      0,
      0
    ]
  },
  {
    name: "uniqueId",
    op: 13,
    type: "number"
  },
  {
    name: "fontBBox",
    op: 5,
    type: [
      "number",
      "number",
      "number",
      "number"
    ],
    value: [
      0,
      0,
      0,
      0
    ]
  },
  {
    name: "strokeWidth",
    op: 1208,
    type: "number",
    value: 0
  },
  {
    name: "xuid",
    op: 14,
    type: [],
    value: null
  },
  {
    name: "charset",
    op: 15,
    type: "offset",
    value: 0
  },
  {
    name: "encoding",
    op: 16,
    type: "offset",
    value: 0
  },
  {
    name: "charStrings",
    op: 17,
    type: "offset",
    value: 0
  },
  {
    name: "private",
    op: 18,
    type: ["number", "offset"],
    value: [0, 0]
  },
  {
    name: "ros",
    op: 1230,
    type: [
      "SID",
      "SID",
      "number"
    ]
  },
  {
    name: "cidFontVersion",
    op: 1231,
    type: "number",
    value: 0
  },
  {
    name: "cidFontRevision",
    op: 1232,
    type: "number",
    value: 0
  },
  {
    name: "cidFontType",
    op: 1233,
    type: "number",
    value: 0
  },
  {
    name: "cidCount",
    op: 1234,
    type: "number",
    value: 8720
  },
  {
    name: "uidBase",
    op: 1235,
    type: "number"
  },
  {
    name: "fdArray",
    op: 1236,
    type: "offset"
  },
  {
    name: "fdSelect",
    op: 1237,
    type: "offset"
  },
  {
    name: "fontName",
    op: 1238,
    type: "SID"
  }
];
var PRIVATE_DICT_META = [
  {
    name: "subrs",
    op: 19,
    type: "offset",
    value: 0
  },
  {
    name: "defaultWidthX",
    op: 20,
    type: "number",
    value: 0
  },
  {
    name: "nominalWidthX",
    op: 21,
    type: "number",
    value: 0
  }
];
function parseCFFTopDict(data, strings) {
  return interpretDict(parseCFFDict(data, 0, data.byteLength), TOP_DICT_META, strings);
}
function parseCFFPrivateDict(data, start, size, strings) {
  return interpretDict(parseCFFDict(data, start, size), PRIVATE_DICT_META, strings);
}
function gatherCFFTopDicts(data, start, cffIndex, strings) {
  var topDictArray = [];
  for (var iTopDict = 0; iTopDict < cffIndex.length; iTopDict += 1) {
    var topDict = parseCFFTopDict(new DataView(new Uint8Array(cffIndex[iTopDict]).buffer), strings);
    topDict._subrs = [];
    topDict._subrsBias = 0;
    topDict._defaultWidthX = 0;
    topDict._nominalWidthX = 0;
    var privateSize = topDict.private[0];
    var privateOffset = topDict.private[1];
    if (privateSize !== 0 && privateOffset !== 0) {
      var privateDict = parseCFFPrivateDict(data, privateOffset + start, privateSize, strings);
      topDict._defaultWidthX = privateDict.defaultWidthX;
      topDict._nominalWidthX = privateDict.nominalWidthX;
      if (privateDict.subrs !== 0) {
        topDict._subrs = parseCFFIndex(data, privateOffset + privateDict.subrs + start).objects;
        topDict._subrsBias = calcCFFSubroutineBias(topDict._subrs);
      }
      topDict._privateDict = privateDict;
    }
    topDictArray.push(topDict);
  }
  return topDictArray;
}
function parseCFFCharset(data, start, nGlyphs, strings) {
  var sid;
  var count;
  var parser = new parse.Parser(data, start);
  nGlyphs -= 1;
  var charset = [".notdef"];
  var format = parser.parseCard8();
  if (format === 0) for (var i = 0; i < nGlyphs; i += 1) {
    sid = parser.parseSID();
    charset.push(getCFFString(strings, sid));
  }
  else if (format === 1) while (charset.length <= nGlyphs) {
    sid = parser.parseSID();
    count = parser.parseCard8();
    for (var i$1 = 0; i$1 <= count; i$1 += 1) {
      charset.push(getCFFString(strings, sid));
      sid += 1;
    }
  }
  else if (format === 2) while (charset.length <= nGlyphs) {
    sid = parser.parseSID();
    count = parser.parseCard16();
    for (var i$2 = 0; i$2 <= count; i$2 += 1) {
      charset.push(getCFFString(strings, sid));
      sid += 1;
    }
  }
  else throw new Error("Unknown charset format " + format);
  return charset;
}
function parseCFFEncoding(data, start, charset) {
  var code;
  var enc = {};
  var parser = new parse.Parser(data, start);
  var format = parser.parseCard8();
  if (format === 0) {
    var nCodes = parser.parseCard8();
    for (var i = 0; i < nCodes; i += 1) {
      code = parser.parseCard8();
      enc[code] = i;
    }
  } else if (format === 1) {
    var nRanges = parser.parseCard8();
    code = 1;
    for (var i$1 = 0; i$1 < nRanges; i$1 += 1) {
      var first = parser.parseCard8();
      var nLeft = parser.parseCard8();
      for (var j = first; j <= first + nLeft; j += 1) {
        enc[j] = code;
        code += 1;
      }
    }
  } else throw new Error("Unknown encoding format " + format);
  return new CffEncoding(enc, charset);
}
function parseCFFCharstring(font, glyph, code) {
  var c1x;
  var c1y;
  var c2x;
  var c2y;
  var p = new Path();
  var stack = [];
  var nStems = 0;
  var haveWidth = false;
  var open = false;
  var x = 0;
  var y = 0;
  var subrs;
  var subrsBias;
  var defaultWidthX;
  var nominalWidthX;
  if (font.isCIDFont) {
    var fdIndex = font.tables.cff.topDict._fdSelect[glyph.index];
    var fdDict = font.tables.cff.topDict._fdArray[fdIndex];
    subrs = fdDict._subrs;
    subrsBias = fdDict._subrsBias;
    defaultWidthX = fdDict._defaultWidthX;
    nominalWidthX = fdDict._nominalWidthX;
  } else {
    subrs = font.tables.cff.topDict._subrs;
    subrsBias = font.tables.cff.topDict._subrsBias;
    defaultWidthX = font.tables.cff.topDict._defaultWidthX;
    nominalWidthX = font.tables.cff.topDict._nominalWidthX;
  }
  var width = defaultWidthX;
  function newContour(x2, y2) {
    if (open) p.closePath();
    p.moveTo(x2, y2);
    open = true;
  }
  function parseStems() {
    if (stack.length % 2 !== 0 && !haveWidth) width = stack.shift() + nominalWidthX;
    nStems += stack.length >> 1;
    stack.length = 0;
    haveWidth = true;
  }
  function parse2(code2) {
    var b1;
    var b2;
    var b3;
    var b4;
    var codeIndex;
    var subrCode;
    var jpx;
    var jpy;
    var c3x;
    var c3y;
    var c4x;
    var c4y;
    var i = 0;
    while (i < code2.length) {
      var v = code2[i];
      i += 1;
      switch (v) {
        case 1:
          parseStems();
          break;
        case 3:
          parseStems();
          break;
        case 4:
          if (stack.length > 1 && !haveWidth) {
            width = stack.shift() + nominalWidthX;
            haveWidth = true;
          }
          y += stack.pop();
          newContour(x, y);
          break;
        case 5:
          while (stack.length > 0) {
            x += stack.shift();
            y += stack.shift();
            p.lineTo(x, y);
          }
          break;
        case 6:
          while (stack.length > 0) {
            x += stack.shift();
            p.lineTo(x, y);
            if (stack.length === 0) break;
            y += stack.shift();
            p.lineTo(x, y);
          }
          break;
        case 7:
          while (stack.length > 0) {
            y += stack.shift();
            p.lineTo(x, y);
            if (stack.length === 0) break;
            x += stack.shift();
            p.lineTo(x, y);
          }
          break;
        case 8:
          while (stack.length > 0) {
            c1x = x + stack.shift();
            c1y = y + stack.shift();
            c2x = c1x + stack.shift();
            c2y = c1y + stack.shift();
            x = c2x + stack.shift();
            y = c2y + stack.shift();
            p.curveTo(c1x, c1y, c2x, c2y, x, y);
          }
          break;
        case 10:
          codeIndex = stack.pop() + subrsBias;
          subrCode = subrs[codeIndex];
          if (subrCode) parse2(subrCode);
          break;
        case 11:
          return;
        case 12:
          v = code2[i];
          i += 1;
          switch (v) {
            case 35:
              c1x = x + stack.shift();
              c1y = y + stack.shift();
              c2x = c1x + stack.shift();
              c2y = c1y + stack.shift();
              jpx = c2x + stack.shift();
              jpy = c2y + stack.shift();
              c3x = jpx + stack.shift();
              c3y = jpy + stack.shift();
              c4x = c3x + stack.shift();
              c4y = c3y + stack.shift();
              x = c4x + stack.shift();
              y = c4y + stack.shift();
              stack.shift();
              p.curveTo(c1x, c1y, c2x, c2y, jpx, jpy);
              p.curveTo(c3x, c3y, c4x, c4y, x, y);
              break;
            case 34:
              c1x = x + stack.shift();
              c1y = y;
              c2x = c1x + stack.shift();
              c2y = c1y + stack.shift();
              jpx = c2x + stack.shift();
              jpy = c2y;
              c3x = jpx + stack.shift();
              c3y = c2y;
              c4x = c3x + stack.shift();
              c4y = y;
              x = c4x + stack.shift();
              p.curveTo(c1x, c1y, c2x, c2y, jpx, jpy);
              p.curveTo(c3x, c3y, c4x, c4y, x, y);
              break;
            case 36:
              c1x = x + stack.shift();
              c1y = y + stack.shift();
              c2x = c1x + stack.shift();
              c2y = c1y + stack.shift();
              jpx = c2x + stack.shift();
              jpy = c2y;
              c3x = jpx + stack.shift();
              c3y = c2y;
              c4x = c3x + stack.shift();
              c4y = c3y + stack.shift();
              x = c4x + stack.shift();
              p.curveTo(c1x, c1y, c2x, c2y, jpx, jpy);
              p.curveTo(c3x, c3y, c4x, c4y, x, y);
              break;
            case 37:
              c1x = x + stack.shift();
              c1y = y + stack.shift();
              c2x = c1x + stack.shift();
              c2y = c1y + stack.shift();
              jpx = c2x + stack.shift();
              jpy = c2y + stack.shift();
              c3x = jpx + stack.shift();
              c3y = jpy + stack.shift();
              c4x = c3x + stack.shift();
              c4y = c3y + stack.shift();
              if (Math.abs(c4x - x) > Math.abs(c4y - y)) x = c4x + stack.shift();
              else y = c4y + stack.shift();
              p.curveTo(c1x, c1y, c2x, c2y, jpx, jpy);
              p.curveTo(c3x, c3y, c4x, c4y, x, y);
              break;
            default:
              console.log("Glyph " + glyph.index + ": unknown operator 1200" + v);
              stack.length = 0;
          }
          break;
        case 14:
          if (stack.length > 0 && !haveWidth) {
            width = stack.shift() + nominalWidthX;
            haveWidth = true;
          }
          if (open) {
            p.closePath();
            open = false;
          }
          break;
        case 18:
          parseStems();
          break;
        case 19:
        case 20:
          parseStems();
          i += nStems + 7 >> 3;
          break;
        case 21:
          if (stack.length > 2 && !haveWidth) {
            width = stack.shift() + nominalWidthX;
            haveWidth = true;
          }
          y += stack.pop();
          x += stack.pop();
          newContour(x, y);
          break;
        case 22:
          if (stack.length > 1 && !haveWidth) {
            width = stack.shift() + nominalWidthX;
            haveWidth = true;
          }
          x += stack.pop();
          newContour(x, y);
          break;
        case 23:
          parseStems();
          break;
        case 24:
          while (stack.length > 2) {
            c1x = x + stack.shift();
            c1y = y + stack.shift();
            c2x = c1x + stack.shift();
            c2y = c1y + stack.shift();
            x = c2x + stack.shift();
            y = c2y + stack.shift();
            p.curveTo(c1x, c1y, c2x, c2y, x, y);
          }
          x += stack.shift();
          y += stack.shift();
          p.lineTo(x, y);
          break;
        case 25:
          while (stack.length > 6) {
            x += stack.shift();
            y += stack.shift();
            p.lineTo(x, y);
          }
          c1x = x + stack.shift();
          c1y = y + stack.shift();
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          x = c2x + stack.shift();
          y = c2y + stack.shift();
          p.curveTo(c1x, c1y, c2x, c2y, x, y);
          break;
        case 26:
          if (stack.length % 2) x += stack.shift();
          while (stack.length > 0) {
            c1x = x;
            c1y = y + stack.shift();
            c2x = c1x + stack.shift();
            c2y = c1y + stack.shift();
            x = c2x;
            y = c2y + stack.shift();
            p.curveTo(c1x, c1y, c2x, c2y, x, y);
          }
          break;
        case 27:
          if (stack.length % 2) y += stack.shift();
          while (stack.length > 0) {
            c1x = x + stack.shift();
            c1y = y;
            c2x = c1x + stack.shift();
            c2y = c1y + stack.shift();
            x = c2x + stack.shift();
            y = c2y;
            p.curveTo(c1x, c1y, c2x, c2y, x, y);
          }
          break;
        case 28:
          b1 = code2[i];
          b2 = code2[i + 1];
          stack.push((b1 << 24 | b2 << 16) >> 16);
          i += 2;
          break;
        case 29:
          codeIndex = stack.pop() + font.gsubrsBias;
          subrCode = font.gsubrs[codeIndex];
          if (subrCode) parse2(subrCode);
          break;
        case 30:
          while (stack.length > 0) {
            c1x = x;
            c1y = y + stack.shift();
            c2x = c1x + stack.shift();
            c2y = c1y + stack.shift();
            x = c2x + stack.shift();
            y = c2y + (stack.length === 1 ? stack.shift() : 0);
            p.curveTo(c1x, c1y, c2x, c2y, x, y);
            if (stack.length === 0) break;
            c1x = x + stack.shift();
            c1y = y;
            c2x = c1x + stack.shift();
            c2y = c1y + stack.shift();
            y = c2y + stack.shift();
            x = c2x + (stack.length === 1 ? stack.shift() : 0);
            p.curveTo(c1x, c1y, c2x, c2y, x, y);
          }
          break;
        case 31:
          while (stack.length > 0) {
            c1x = x + stack.shift();
            c1y = y;
            c2x = c1x + stack.shift();
            c2y = c1y + stack.shift();
            y = c2y + stack.shift();
            x = c2x + (stack.length === 1 ? stack.shift() : 0);
            p.curveTo(c1x, c1y, c2x, c2y, x, y);
            if (stack.length === 0) break;
            c1x = x;
            c1y = y + stack.shift();
            c2x = c1x + stack.shift();
            c2y = c1y + stack.shift();
            x = c2x + stack.shift();
            y = c2y + (stack.length === 1 ? stack.shift() : 0);
            p.curveTo(c1x, c1y, c2x, c2y, x, y);
          }
          break;
        default:
          if (v < 32) console.log("Glyph " + glyph.index + ": unknown operator " + v);
          else if (v < 247) stack.push(v - 139);
          else if (v < 251) {
            b1 = code2[i];
            i += 1;
            stack.push((v - 247) * 256 + b1 + 108);
          } else if (v < 255) {
            b1 = code2[i];
            i += 1;
            stack.push(-(v - 251) * 256 - b1 - 108);
          } else {
            b1 = code2[i];
            b2 = code2[i + 1];
            b3 = code2[i + 2];
            b4 = code2[i + 3];
            i += 4;
            stack.push((b1 << 24 | b2 << 16 | b3 << 8 | b4) / 65536);
          }
      }
    }
  }
  parse2(code);
  glyph.advanceWidth = width;
  return p;
}
function parseCFFFDSelect(data, start, nGlyphs, fdArrayCount) {
  var fdSelect = [];
  var fdIndex;
  var parser = new parse.Parser(data, start);
  var format = parser.parseCard8();
  if (format === 0) for (var iGid = 0; iGid < nGlyphs; iGid++) {
    fdIndex = parser.parseCard8();
    if (fdIndex >= fdArrayCount) throw new Error("CFF table CID Font FDSelect has bad FD index value " + fdIndex + " (FD count " + fdArrayCount + ")");
    fdSelect.push(fdIndex);
  }
  else if (format === 3) {
    var nRanges = parser.parseCard16();
    var first = parser.parseCard16();
    if (first !== 0) throw new Error("CFF Table CID Font FDSelect format 3 range has bad initial GID " + first);
    var next;
    for (var iRange = 0; iRange < nRanges; iRange++) {
      fdIndex = parser.parseCard8();
      next = parser.parseCard16();
      if (fdIndex >= fdArrayCount) throw new Error("CFF table CID Font FDSelect has bad FD index value " + fdIndex + " (FD count " + fdArrayCount + ")");
      if (next > nGlyphs) throw new Error("CFF Table CID Font FDSelect format 3 range has bad GID " + next);
      for (; first < next; first++) fdSelect.push(fdIndex);
      first = next;
    }
    if (next !== nGlyphs) throw new Error("CFF Table CID Font FDSelect format 3 range has bad final GID " + next);
  } else throw new Error("CFF Table CID Font FDSelect table has unsupported format " + format);
  return fdSelect;
}
function parseCFFTable(data, start, font, opt) {
  font.tables.cff = {};
  var topDictIndex = parseCFFIndex(data, parseCFFIndex(data, parseCFFHeader(data, start).endOffset, parse.bytesToString).endOffset);
  var stringIndex = parseCFFIndex(data, topDictIndex.endOffset, parse.bytesToString);
  font.gsubrs = parseCFFIndex(data, stringIndex.endOffset).objects;
  font.gsubrsBias = calcCFFSubroutineBias(font.gsubrs);
  var topDictArray = gatherCFFTopDicts(data, start, topDictIndex.objects, stringIndex.objects);
  if (topDictArray.length !== 1) throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = " + topDictArray.length);
  var topDict = topDictArray[0];
  font.tables.cff.topDict = topDict;
  if (topDict._privateDict) {
    font.defaultWidthX = topDict._privateDict.defaultWidthX;
    font.nominalWidthX = topDict._privateDict.nominalWidthX;
  }
  if (topDict.ros[0] !== void 0 && topDict.ros[1] !== void 0) font.isCIDFont = true;
  if (font.isCIDFont) {
    var fdArrayOffset = topDict.fdArray;
    var fdSelectOffset = topDict.fdSelect;
    if (fdArrayOffset === 0 || fdSelectOffset === 0) throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");
    fdArrayOffset += start;
    var fdArray = gatherCFFTopDicts(data, start, parseCFFIndex(data, fdArrayOffset).objects, stringIndex.objects);
    topDict._fdArray = fdArray;
    fdSelectOffset += start;
    topDict._fdSelect = parseCFFFDSelect(data, fdSelectOffset, font.numGlyphs, fdArray.length);
  }
  var privateDictOffset = start + topDict.private[1];
  var privateDict = parseCFFPrivateDict(data, privateDictOffset, topDict.private[0], stringIndex.objects);
  font.defaultWidthX = privateDict.defaultWidthX;
  font.nominalWidthX = privateDict.nominalWidthX;
  if (privateDict.subrs !== 0) {
    font.subrs = parseCFFIndex(data, privateDictOffset + privateDict.subrs).objects;
    font.subrsBias = calcCFFSubroutineBias(font.subrs);
  } else {
    font.subrs = [];
    font.subrsBias = 0;
  }
  var charStringsIndex;
  if (opt.lowMemory) {
    charStringsIndex = parseCFFIndexLowMemory(data, start + topDict.charStrings);
    font.nGlyphs = charStringsIndex.offsets.length;
  } else {
    charStringsIndex = parseCFFIndex(data, start + topDict.charStrings);
    font.nGlyphs = charStringsIndex.objects.length;
  }
  var charset = parseCFFCharset(data, start + topDict.charset, font.nGlyphs, stringIndex.objects);
  if (topDict.encoding === 0) font.cffEncoding = new CffEncoding(cffStandardEncoding, charset);
  else if (topDict.encoding === 1) font.cffEncoding = new CffEncoding(cffExpertEncoding, charset);
  else font.cffEncoding = parseCFFEncoding(data, start + topDict.encoding, charset);
  font.encoding = font.encoding || font.cffEncoding;
  font.glyphs = new glyphset.GlyphSet(font);
  if (opt.lowMemory) font._push = function(i2) {
    var charString2 = getCffIndexObject(i2, charStringsIndex.offsets, data, start + topDict.charStrings);
    font.glyphs.push(i2, glyphset.cffGlyphLoader(font, i2, parseCFFCharstring, charString2));
  };
  else for (var i = 0; i < font.nGlyphs; i += 1) {
    var charString = charStringsIndex.objects[i];
    font.glyphs.push(i, glyphset.cffGlyphLoader(font, i, parseCFFCharstring, charString));
  }
}
function encodeString(s, strings) {
  var sid;
  var i = cffStandardStrings.indexOf(s);
  if (i >= 0) sid = i;
  i = strings.indexOf(s);
  if (i >= 0) sid = i + cffStandardStrings.length;
  else {
    sid = cffStandardStrings.length + strings.length;
    strings.push(s);
  }
  return sid;
}
function makeHeader() {
  return new table.Record("Header", [
    {
      name: "major",
      type: "Card8",
      value: 1
    },
    {
      name: "minor",
      type: "Card8",
      value: 0
    },
    {
      name: "hdrSize",
      type: "Card8",
      value: 4
    },
    {
      name: "major",
      type: "Card8",
      value: 1
    }
  ]);
}
function makeNameIndex(fontNames) {
  var t = new table.Record("Name INDEX", [{
    name: "names",
    type: "INDEX",
    value: []
  }]);
  t.names = [];
  for (var i = 0; i < fontNames.length; i += 1) t.names.push({
    name: "name_" + i,
    type: "NAME",
    value: fontNames[i]
  });
  return t;
}
function makeDict(meta2, attrs, strings) {
  var m = {};
  for (var i = 0; i < meta2.length; i += 1) {
    var entry = meta2[i];
    var value = attrs[entry.name];
    if (value !== void 0 && !equals(value, entry.value)) {
      if (entry.type === "SID") value = encodeString(value, strings);
      m[entry.op] = {
        name: entry.name,
        type: entry.type,
        value
      };
    }
  }
  return m;
}
function makeTopDict(attrs, strings) {
  var t = new table.Record("Top DICT", [{
    name: "dict",
    type: "DICT",
    value: {}
  }]);
  t.dict = makeDict(TOP_DICT_META, attrs, strings);
  return t;
}
function makeTopDictIndex(topDict) {
  var t = new table.Record("Top DICT INDEX", [{
    name: "topDicts",
    type: "INDEX",
    value: []
  }]);
  t.topDicts = [{
    name: "topDict_0",
    type: "TABLE",
    value: topDict
  }];
  return t;
}
function makeStringIndex(strings) {
  var t = new table.Record("String INDEX", [{
    name: "strings",
    type: "INDEX",
    value: []
  }]);
  t.strings = [];
  for (var i = 0; i < strings.length; i += 1) t.strings.push({
    name: "string_" + i,
    type: "STRING",
    value: strings[i]
  });
  return t;
}
function makeGlobalSubrIndex() {
  return new table.Record("Global Subr INDEX", [{
    name: "subrs",
    type: "INDEX",
    value: []
  }]);
}
function makeCharsets(glyphNames, strings) {
  var t = new table.Record("Charsets", [{
    name: "format",
    type: "Card8",
    value: 0
  }]);
  for (var i = 0; i < glyphNames.length; i += 1) {
    var glyphName = glyphNames[i];
    var glyphSID = encodeString(glyphName, strings);
    t.fields.push({
      name: "glyph_" + i,
      type: "SID",
      value: glyphSID
    });
  }
  return t;
}
function glyphToOps(glyph) {
  var ops = [];
  var path = glyph.path;
  ops.push({
    name: "width",
    type: "NUMBER",
    value: glyph.advanceWidth
  });
  var x = 0;
  var y = 0;
  for (var i = 0; i < path.commands.length; i += 1) {
    var dx = void 0;
    var dy = void 0;
    var cmd = path.commands[i];
    if (cmd.type === "Q") {
      var _13 = 1 / 3;
      var _23 = 2 / 3;
      cmd = {
        type: "C",
        x: cmd.x,
        y: cmd.y,
        x1: Math.round(_13 * x + _23 * cmd.x1),
        y1: Math.round(_13 * y + _23 * cmd.y1),
        x2: Math.round(_13 * cmd.x + _23 * cmd.x1),
        y2: Math.round(_13 * cmd.y + _23 * cmd.y1)
      };
    }
    if (cmd.type === "M") {
      dx = Math.round(cmd.x - x);
      dy = Math.round(cmd.y - y);
      ops.push({
        name: "dx",
        type: "NUMBER",
        value: dx
      });
      ops.push({
        name: "dy",
        type: "NUMBER",
        value: dy
      });
      ops.push({
        name: "rmoveto",
        type: "OP",
        value: 21
      });
      x = Math.round(cmd.x);
      y = Math.round(cmd.y);
    } else if (cmd.type === "L") {
      dx = Math.round(cmd.x - x);
      dy = Math.round(cmd.y - y);
      ops.push({
        name: "dx",
        type: "NUMBER",
        value: dx
      });
      ops.push({
        name: "dy",
        type: "NUMBER",
        value: dy
      });
      ops.push({
        name: "rlineto",
        type: "OP",
        value: 5
      });
      x = Math.round(cmd.x);
      y = Math.round(cmd.y);
    } else if (cmd.type === "C") {
      var dx1 = Math.round(cmd.x1 - x);
      var dy1 = Math.round(cmd.y1 - y);
      var dx2 = Math.round(cmd.x2 - cmd.x1);
      var dy2 = Math.round(cmd.y2 - cmd.y1);
      dx = Math.round(cmd.x - cmd.x2);
      dy = Math.round(cmd.y - cmd.y2);
      ops.push({
        name: "dx1",
        type: "NUMBER",
        value: dx1
      });
      ops.push({
        name: "dy1",
        type: "NUMBER",
        value: dy1
      });
      ops.push({
        name: "dx2",
        type: "NUMBER",
        value: dx2
      });
      ops.push({
        name: "dy2",
        type: "NUMBER",
        value: dy2
      });
      ops.push({
        name: "dx",
        type: "NUMBER",
        value: dx
      });
      ops.push({
        name: "dy",
        type: "NUMBER",
        value: dy
      });
      ops.push({
        name: "rrcurveto",
        type: "OP",
        value: 8
      });
      x = Math.round(cmd.x);
      y = Math.round(cmd.y);
    }
  }
  ops.push({
    name: "endchar",
    type: "OP",
    value: 14
  });
  return ops;
}
function makeCharStringsIndex(glyphs) {
  var t = new table.Record("CharStrings INDEX", [{
    name: "charStrings",
    type: "INDEX",
    value: []
  }]);
  for (var i = 0; i < glyphs.length; i += 1) {
    var glyph = glyphs.get(i);
    var ops = glyphToOps(glyph);
    t.charStrings.push({
      name: glyph.name,
      type: "CHARSTRING",
      value: ops
    });
  }
  return t;
}
function makePrivateDict(attrs, strings) {
  var t = new table.Record("Private DICT", [{
    name: "dict",
    type: "DICT",
    value: {}
  }]);
  t.dict = makeDict(PRIVATE_DICT_META, attrs, strings);
  return t;
}
function makeCFFTable(glyphs, options) {
  var t = new table.Table("CFF ", [
    {
      name: "header",
      type: "RECORD"
    },
    {
      name: "nameIndex",
      type: "RECORD"
    },
    {
      name: "topDictIndex",
      type: "RECORD"
    },
    {
      name: "stringIndex",
      type: "RECORD"
    },
    {
      name: "globalSubrIndex",
      type: "RECORD"
    },
    {
      name: "charsets",
      type: "RECORD"
    },
    {
      name: "charStringsIndex",
      type: "RECORD"
    },
    {
      name: "privateDict",
      type: "RECORD"
    }
  ]);
  var fontScale = 1 / options.unitsPerEm;
  var attrs = {
    version: options.version,
    fullName: options.fullName,
    familyName: options.familyName,
    weight: options.weightName,
    fontBBox: options.fontBBox || [
      0,
      0,
      0,
      0
    ],
    fontMatrix: [
      fontScale,
      0,
      0,
      fontScale,
      0,
      0
    ],
    charset: 999,
    encoding: 0,
    charStrings: 999,
    private: [0, 999]
  };
  var privateAttrs = {};
  var glyphNames = [];
  var glyph;
  for (var i = 1; i < glyphs.length; i += 1) {
    glyph = glyphs.get(i);
    glyphNames.push(glyph.name);
  }
  var strings = [];
  t.header = makeHeader();
  t.nameIndex = makeNameIndex([options.postScriptName]);
  var topDict = makeTopDict(attrs, strings);
  t.topDictIndex = makeTopDictIndex(topDict);
  t.globalSubrIndex = makeGlobalSubrIndex();
  t.charsets = makeCharsets(glyphNames, strings);
  t.charStringsIndex = makeCharStringsIndex(glyphs);
  t.privateDict = makePrivateDict(privateAttrs, strings);
  t.stringIndex = makeStringIndex(strings);
  attrs.charset = t.header.sizeOf() + t.nameIndex.sizeOf() + t.topDictIndex.sizeOf() + t.stringIndex.sizeOf() + t.globalSubrIndex.sizeOf();
  attrs.encoding = 0;
  attrs.charStrings = attrs.charset + t.charsets.sizeOf();
  attrs.private[1] = attrs.charStrings + t.charStringsIndex.sizeOf();
  topDict = makeTopDict(attrs, strings);
  t.topDictIndex = makeTopDictIndex(topDict);
  return t;
}
var cff = {
  parse: parseCFFTable,
  make: makeCFFTable
};
function parseHeadTable(data, start) {
  var head2 = {};
  var p = new parse.Parser(data, start);
  head2.version = p.parseVersion();
  head2.fontRevision = Math.round(p.parseFixed() * 1e3) / 1e3;
  head2.checkSumAdjustment = p.parseULong();
  head2.magicNumber = p.parseULong();
  check.argument(head2.magicNumber === 1594834165, "Font header has wrong magic number.");
  head2.flags = p.parseUShort();
  head2.unitsPerEm = p.parseUShort();
  head2.created = p.parseLongDateTime();
  head2.modified = p.parseLongDateTime();
  head2.xMin = p.parseShort();
  head2.yMin = p.parseShort();
  head2.xMax = p.parseShort();
  head2.yMax = p.parseShort();
  head2.macStyle = p.parseUShort();
  head2.lowestRecPPEM = p.parseUShort();
  head2.fontDirectionHint = p.parseShort();
  head2.indexToLocFormat = p.parseShort();
  head2.glyphDataFormat = p.parseShort();
  return head2;
}
function makeHeadTable(options) {
  var timestamp = Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3) + 2082844800;
  var createdTimestamp = timestamp;
  if (options.createdTimestamp) createdTimestamp = options.createdTimestamp + 2082844800;
  return new table.Table("head", [
    {
      name: "version",
      type: "FIXED",
      value: 65536
    },
    {
      name: "fontRevision",
      type: "FIXED",
      value: 65536
    },
    {
      name: "checkSumAdjustment",
      type: "ULONG",
      value: 0
    },
    {
      name: "magicNumber",
      type: "ULONG",
      value: 1594834165
    },
    {
      name: "flags",
      type: "USHORT",
      value: 0
    },
    {
      name: "unitsPerEm",
      type: "USHORT",
      value: 1e3
    },
    {
      name: "created",
      type: "LONGDATETIME",
      value: createdTimestamp
    },
    {
      name: "modified",
      type: "LONGDATETIME",
      value: timestamp
    },
    {
      name: "xMin",
      type: "SHORT",
      value: 0
    },
    {
      name: "yMin",
      type: "SHORT",
      value: 0
    },
    {
      name: "xMax",
      type: "SHORT",
      value: 0
    },
    {
      name: "yMax",
      type: "SHORT",
      value: 0
    },
    {
      name: "macStyle",
      type: "USHORT",
      value: 0
    },
    {
      name: "lowestRecPPEM",
      type: "USHORT",
      value: 0
    },
    {
      name: "fontDirectionHint",
      type: "SHORT",
      value: 2
    },
    {
      name: "indexToLocFormat",
      type: "SHORT",
      value: 0
    },
    {
      name: "glyphDataFormat",
      type: "SHORT",
      value: 0
    }
  ], options);
}
var head = {
  parse: parseHeadTable,
  make: makeHeadTable
};
function parseHheaTable(data, start) {
  var hhea2 = {};
  var p = new parse.Parser(data, start);
  hhea2.version = p.parseVersion();
  hhea2.ascender = p.parseShort();
  hhea2.descender = p.parseShort();
  hhea2.lineGap = p.parseShort();
  hhea2.advanceWidthMax = p.parseUShort();
  hhea2.minLeftSideBearing = p.parseShort();
  hhea2.minRightSideBearing = p.parseShort();
  hhea2.xMaxExtent = p.parseShort();
  hhea2.caretSlopeRise = p.parseShort();
  hhea2.caretSlopeRun = p.parseShort();
  hhea2.caretOffset = p.parseShort();
  p.relativeOffset += 8;
  hhea2.metricDataFormat = p.parseShort();
  hhea2.numberOfHMetrics = p.parseUShort();
  return hhea2;
}
function makeHheaTable(options) {
  return new table.Table("hhea", [
    {
      name: "version",
      type: "FIXED",
      value: 65536
    },
    {
      name: "ascender",
      type: "FWORD",
      value: 0
    },
    {
      name: "descender",
      type: "FWORD",
      value: 0
    },
    {
      name: "lineGap",
      type: "FWORD",
      value: 0
    },
    {
      name: "advanceWidthMax",
      type: "UFWORD",
      value: 0
    },
    {
      name: "minLeftSideBearing",
      type: "FWORD",
      value: 0
    },
    {
      name: "minRightSideBearing",
      type: "FWORD",
      value: 0
    },
    {
      name: "xMaxExtent",
      type: "FWORD",
      value: 0
    },
    {
      name: "caretSlopeRise",
      type: "SHORT",
      value: 1
    },
    {
      name: "caretSlopeRun",
      type: "SHORT",
      value: 0
    },
    {
      name: "caretOffset",
      type: "SHORT",
      value: 0
    },
    {
      name: "reserved1",
      type: "SHORT",
      value: 0
    },
    {
      name: "reserved2",
      type: "SHORT",
      value: 0
    },
    {
      name: "reserved3",
      type: "SHORT",
      value: 0
    },
    {
      name: "reserved4",
      type: "SHORT",
      value: 0
    },
    {
      name: "metricDataFormat",
      type: "SHORT",
      value: 0
    },
    {
      name: "numberOfHMetrics",
      type: "USHORT",
      value: 0
    }
  ], options);
}
var hhea = {
  parse: parseHheaTable,
  make: makeHheaTable
};
function parseHmtxTableAll(data, start, numMetrics, numGlyphs, glyphs) {
  var advanceWidth;
  var leftSideBearing;
  var p = new parse.Parser(data, start);
  for (var i = 0; i < numGlyphs; i += 1) {
    if (i < numMetrics) {
      advanceWidth = p.parseUShort();
      leftSideBearing = p.parseShort();
    }
    var glyph = glyphs.get(i);
    glyph.advanceWidth = advanceWidth;
    glyph.leftSideBearing = leftSideBearing;
  }
}
function parseHmtxTableOnLowMemory(font, data, start, numMetrics, numGlyphs) {
  font._hmtxTableData = {};
  var advanceWidth;
  var leftSideBearing;
  var p = new parse.Parser(data, start);
  for (var i = 0; i < numGlyphs; i += 1) {
    if (i < numMetrics) {
      advanceWidth = p.parseUShort();
      leftSideBearing = p.parseShort();
    }
    font._hmtxTableData[i] = {
      advanceWidth,
      leftSideBearing
    };
  }
}
function parseHmtxTable(font, data, start, numMetrics, numGlyphs, glyphs, opt) {
  if (opt.lowMemory) parseHmtxTableOnLowMemory(font, data, start, numMetrics, numGlyphs);
  else parseHmtxTableAll(data, start, numMetrics, numGlyphs, glyphs);
}
function makeHmtxTable(glyphs) {
  var t = new table.Table("hmtx", []);
  for (var i = 0; i < glyphs.length; i += 1) {
    var glyph = glyphs.get(i);
    var advanceWidth = glyph.advanceWidth || 0;
    var leftSideBearing = glyph.leftSideBearing || 0;
    t.fields.push({
      name: "advanceWidth_" + i,
      type: "USHORT",
      value: advanceWidth
    });
    t.fields.push({
      name: "leftSideBearing_" + i,
      type: "SHORT",
      value: leftSideBearing
    });
  }
  return t;
}
var hmtx = {
  parse: parseHmtxTable,
  make: makeHmtxTable
};
function makeLtagTable(tags) {
  var result = new table.Table("ltag", [
    {
      name: "version",
      type: "ULONG",
      value: 1
    },
    {
      name: "flags",
      type: "ULONG",
      value: 0
    },
    {
      name: "numTags",
      type: "ULONG",
      value: tags.length
    }
  ]);
  var stringPool = "";
  var stringPoolOffset = 12 + tags.length * 4;
  for (var i = 0; i < tags.length; ++i) {
    var pos = stringPool.indexOf(tags[i]);
    if (pos < 0) {
      pos = stringPool.length;
      stringPool += tags[i];
    }
    result.fields.push({
      name: "offset " + i,
      type: "USHORT",
      value: stringPoolOffset + pos
    });
    result.fields.push({
      name: "length " + i,
      type: "USHORT",
      value: tags[i].length
    });
  }
  result.fields.push({
    name: "stringPool",
    type: "CHARARRAY",
    value: stringPool
  });
  return result;
}
function parseLtagTable(data, start) {
  var p = new parse.Parser(data, start);
  var tableVersion = p.parseULong();
  check.argument(tableVersion === 1, "Unsupported ltag table version.");
  p.skip("uLong", 1);
  var numTags = p.parseULong();
  var tags = [];
  for (var i = 0; i < numTags; i++) {
    var tag = "";
    var offset2 = start + p.parseUShort();
    var length = p.parseUShort();
    for (var j = offset2; j < offset2 + length; ++j) tag += String.fromCharCode(data.getInt8(j));
    tags.push(tag);
  }
  return tags;
}
var ltag = {
  make: makeLtagTable,
  parse: parseLtagTable
};
function parseMaxpTable(data, start) {
  var maxp2 = {};
  var p = new parse.Parser(data, start);
  maxp2.version = p.parseVersion();
  maxp2.numGlyphs = p.parseUShort();
  if (maxp2.version === 1) {
    maxp2.maxPoints = p.parseUShort();
    maxp2.maxContours = p.parseUShort();
    maxp2.maxCompositePoints = p.parseUShort();
    maxp2.maxCompositeContours = p.parseUShort();
    maxp2.maxZones = p.parseUShort();
    maxp2.maxTwilightPoints = p.parseUShort();
    maxp2.maxStorage = p.parseUShort();
    maxp2.maxFunctionDefs = p.parseUShort();
    maxp2.maxInstructionDefs = p.parseUShort();
    maxp2.maxStackElements = p.parseUShort();
    maxp2.maxSizeOfInstructions = p.parseUShort();
    maxp2.maxComponentElements = p.parseUShort();
    maxp2.maxComponentDepth = p.parseUShort();
  }
  return maxp2;
}
function makeMaxpTable(numGlyphs) {
  return new table.Table("maxp", [{
    name: "version",
    type: "FIXED",
    value: 20480
  }, {
    name: "numGlyphs",
    type: "USHORT",
    value: numGlyphs
  }]);
}
var maxp = {
  parse: parseMaxpTable,
  make: makeMaxpTable
};
var nameTableNames = [
  "copyright",
  "fontFamily",
  "fontSubfamily",
  "uniqueID",
  "fullName",
  "version",
  "postScriptName",
  "trademark",
  "manufacturer",
  "designer",
  "description",
  "manufacturerURL",
  "designerURL",
  "license",
  "licenseURL",
  "reserved",
  "preferredFamily",
  "preferredSubfamily",
  "compatibleFullName",
  "sampleText",
  "postScriptFindFontName",
  "wwsFamily",
  "wwsSubfamily"
];
var macLanguages = {
  0: "en",
  1: "fr",
  2: "de",
  3: "it",
  4: "nl",
  5: "sv",
  6: "es",
  7: "da",
  8: "pt",
  9: "no",
  10: "he",
  11: "ja",
  12: "ar",
  13: "fi",
  14: "el",
  15: "is",
  16: "mt",
  17: "tr",
  18: "hr",
  19: "zh-Hant",
  20: "ur",
  21: "hi",
  22: "th",
  23: "ko",
  24: "lt",
  25: "pl",
  26: "hu",
  27: "es",
  28: "lv",
  29: "se",
  30: "fo",
  31: "fa",
  32: "ru",
  33: "zh",
  34: "nl-BE",
  35: "ga",
  36: "sq",
  37: "ro",
  38: "cz",
  39: "sk",
  40: "si",
  41: "yi",
  42: "sr",
  43: "mk",
  44: "bg",
  45: "uk",
  46: "be",
  47: "uz",
  48: "kk",
  49: "az-Cyrl",
  50: "az-Arab",
  51: "hy",
  52: "ka",
  53: "mo",
  54: "ky",
  55: "tg",
  56: "tk",
  57: "mn-CN",
  58: "mn",
  59: "ps",
  60: "ks",
  61: "ku",
  62: "sd",
  63: "bo",
  64: "ne",
  65: "sa",
  66: "mr",
  67: "bn",
  68: "as",
  69: "gu",
  70: "pa",
  71: "or",
  72: "ml",
  73: "kn",
  74: "ta",
  75: "te",
  76: "si",
  77: "my",
  78: "km",
  79: "lo",
  80: "vi",
  81: "id",
  82: "tl",
  83: "ms",
  84: "ms-Arab",
  85: "am",
  86: "ti",
  87: "om",
  88: "so",
  89: "sw",
  90: "rw",
  91: "rn",
  92: "ny",
  93: "mg",
  94: "eo",
  128: "cy",
  129: "eu",
  130: "ca",
  131: "la",
  132: "qu",
  133: "gn",
  134: "ay",
  135: "tt",
  136: "ug",
  137: "dz",
  138: "jv",
  139: "su",
  140: "gl",
  141: "af",
  142: "br",
  143: "iu",
  144: "gd",
  145: "gv",
  146: "ga",
  147: "to",
  148: "el-polyton",
  149: "kl",
  150: "az",
  151: "nn"
};
var macLanguageToScript = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 5,
  11: 1,
  12: 4,
  13: 0,
  14: 6,
  15: 0,
  16: 0,
  17: 0,
  18: 0,
  19: 2,
  20: 4,
  21: 9,
  22: 21,
  23: 3,
  24: 29,
  25: 29,
  26: 29,
  27: 29,
  28: 29,
  29: 0,
  30: 0,
  31: 4,
  32: 7,
  33: 25,
  34: 0,
  35: 0,
  36: 0,
  37: 0,
  38: 29,
  39: 29,
  40: 0,
  41: 5,
  42: 7,
  43: 7,
  44: 7,
  45: 7,
  46: 7,
  47: 7,
  48: 7,
  49: 7,
  50: 4,
  51: 24,
  52: 23,
  53: 7,
  54: 7,
  55: 7,
  56: 7,
  57: 27,
  58: 7,
  59: 4,
  60: 4,
  61: 4,
  62: 4,
  63: 26,
  64: 9,
  65: 9,
  66: 9,
  67: 13,
  68: 13,
  69: 11,
  70: 10,
  71: 12,
  72: 17,
  73: 16,
  74: 14,
  75: 15,
  76: 18,
  77: 19,
  78: 20,
  79: 22,
  80: 30,
  81: 0,
  82: 0,
  83: 0,
  84: 4,
  85: 28,
  86: 28,
  87: 28,
  88: 0,
  89: 0,
  90: 0,
  91: 0,
  92: 0,
  93: 0,
  94: 0,
  128: 0,
  129: 0,
  130: 0,
  131: 0,
  132: 0,
  133: 0,
  134: 0,
  135: 7,
  136: 4,
  137: 26,
  138: 0,
  139: 0,
  140: 0,
  141: 0,
  142: 0,
  143: 28,
  144: 0,
  145: 0,
  146: 0,
  147: 0,
  148: 6,
  149: 0,
  150: 0,
  151: 0
};
var windowsLanguages = {
  1078: "af",
  1052: "sq",
  1156: "gsw",
  1118: "am",
  5121: "ar-DZ",
  15361: "ar-BH",
  3073: "ar",
  2049: "ar-IQ",
  11265: "ar-JO",
  13313: "ar-KW",
  12289: "ar-LB",
  4097: "ar-LY",
  6145: "ary",
  8193: "ar-OM",
  16385: "ar-QA",
  1025: "ar-SA",
  10241: "ar-SY",
  7169: "aeb",
  14337: "ar-AE",
  9217: "ar-YE",
  1067: "hy",
  1101: "as",
  2092: "az-Cyrl",
  1068: "az",
  1133: "ba",
  1069: "eu",
  1059: "be",
  2117: "bn",
  1093: "bn-IN",
  8218: "bs-Cyrl",
  5146: "bs",
  1150: "br",
  1026: "bg",
  1027: "ca",
  3076: "zh-HK",
  5124: "zh-MO",
  2052: "zh",
  4100: "zh-SG",
  1028: "zh-TW",
  1155: "co",
  1050: "hr",
  4122: "hr-BA",
  1029: "cs",
  1030: "da",
  1164: "prs",
  1125: "dv",
  2067: "nl-BE",
  1043: "nl",
  3081: "en-AU",
  10249: "en-BZ",
  4105: "en-CA",
  9225: "en-029",
  16393: "en-IN",
  6153: "en-IE",
  8201: "en-JM",
  17417: "en-MY",
  5129: "en-NZ",
  13321: "en-PH",
  18441: "en-SG",
  7177: "en-ZA",
  11273: "en-TT",
  2057: "en-GB",
  1033: "en",
  12297: "en-ZW",
  1061: "et",
  1080: "fo",
  1124: "fil",
  1035: "fi",
  2060: "fr-BE",
  3084: "fr-CA",
  1036: "fr",
  5132: "fr-LU",
  6156: "fr-MC",
  4108: "fr-CH",
  1122: "fy",
  1110: "gl",
  1079: "ka",
  3079: "de-AT",
  1031: "de",
  5127: "de-LI",
  4103: "de-LU",
  2055: "de-CH",
  1032: "el",
  1135: "kl",
  1095: "gu",
  1128: "ha",
  1037: "he",
  1081: "hi",
  1038: "hu",
  1039: "is",
  1136: "ig",
  1057: "id",
  1117: "iu",
  2141: "iu-Latn",
  2108: "ga",
  1076: "xh",
  1077: "zu",
  1040: "it",
  2064: "it-CH",
  1041: "ja",
  1099: "kn",
  1087: "kk",
  1107: "km",
  1158: "quc",
  1159: "rw",
  1089: "sw",
  1111: "kok",
  1042: "ko",
  1088: "ky",
  1108: "lo",
  1062: "lv",
  1063: "lt",
  2094: "dsb",
  1134: "lb",
  1071: "mk",
  2110: "ms-BN",
  1086: "ms",
  1100: "ml",
  1082: "mt",
  1153: "mi",
  1146: "arn",
  1102: "mr",
  1148: "moh",
  1104: "mn",
  2128: "mn-CN",
  1121: "ne",
  1044: "nb",
  2068: "nn",
  1154: "oc",
  1096: "or",
  1123: "ps",
  1045: "pl",
  1046: "pt",
  2070: "pt-PT",
  1094: "pa",
  1131: "qu-BO",
  2155: "qu-EC",
  3179: "qu",
  1048: "ro",
  1047: "rm",
  1049: "ru",
  9275: "smn",
  4155: "smj-NO",
  5179: "smj",
  3131: "se-FI",
  1083: "se",
  2107: "se-SE",
  8251: "sms",
  6203: "sma-NO",
  7227: "sms",
  1103: "sa",
  7194: "sr-Cyrl-BA",
  3098: "sr",
  6170: "sr-Latn-BA",
  2074: "sr-Latn",
  1132: "nso",
  1074: "tn",
  1115: "si",
  1051: "sk",
  1060: "sl",
  11274: "es-AR",
  16394: "es-BO",
  13322: "es-CL",
  9226: "es-CO",
  5130: "es-CR",
  7178: "es-DO",
  12298: "es-EC",
  17418: "es-SV",
  4106: "es-GT",
  18442: "es-HN",
  2058: "es-MX",
  19466: "es-NI",
  6154: "es-PA",
  15370: "es-PY",
  10250: "es-PE",
  20490: "es-PR",
  3082: "es",
  1034: "es",
  21514: "es-US",
  14346: "es-UY",
  8202: "es-VE",
  2077: "sv-FI",
  1053: "sv",
  1114: "syr",
  1064: "tg",
  2143: "tzm",
  1097: "ta",
  1092: "tt",
  1098: "te",
  1054: "th",
  1105: "bo",
  1055: "tr",
  1090: "tk",
  1152: "ug",
  1058: "uk",
  1070: "hsb",
  1056: "ur",
  2115: "uz-Cyrl",
  1091: "uz",
  1066: "vi",
  1106: "cy",
  1160: "wo",
  1157: "sah",
  1144: "ii",
  1130: "yo"
};
function getLanguageCode(platformID, languageID, ltag2) {
  switch (platformID) {
    case 0:
      if (languageID === 65535) return "und";
      else if (ltag2) return ltag2[languageID];
      break;
    case 1:
      return macLanguages[languageID];
    case 3:
      return windowsLanguages[languageID];
  }
}
var utf16 = "utf-16";
var macScriptEncodings = {
  0: "macintosh",
  1: "x-mac-japanese",
  2: "x-mac-chinesetrad",
  3: "x-mac-korean",
  6: "x-mac-greek",
  7: "x-mac-cyrillic",
  9: "x-mac-devanagai",
  10: "x-mac-gurmukhi",
  11: "x-mac-gujarati",
  12: "x-mac-oriya",
  13: "x-mac-bengali",
  14: "x-mac-tamil",
  15: "x-mac-telugu",
  16: "x-mac-kannada",
  17: "x-mac-malayalam",
  18: "x-mac-sinhalese",
  19: "x-mac-burmese",
  20: "x-mac-khmer",
  21: "x-mac-thai",
  22: "x-mac-lao",
  23: "x-mac-georgian",
  24: "x-mac-armenian",
  25: "x-mac-chinesesimp",
  26: "x-mac-tibetan",
  27: "x-mac-mongolian",
  28: "x-mac-ethiopic",
  29: "x-mac-ce",
  30: "x-mac-vietnamese",
  31: "x-mac-extarabic"
};
var macLanguageEncodings = {
  15: "x-mac-icelandic",
  17: "x-mac-turkish",
  18: "x-mac-croatian",
  24: "x-mac-ce",
  25: "x-mac-ce",
  26: "x-mac-ce",
  27: "x-mac-ce",
  28: "x-mac-ce",
  30: "x-mac-icelandic",
  37: "x-mac-romanian",
  38: "x-mac-ce",
  39: "x-mac-ce",
  40: "x-mac-ce",
  143: "x-mac-inuit",
  146: "x-mac-gaelic"
};
function getEncoding(platformID, encodingID, languageID) {
  switch (platformID) {
    case 0:
      return utf16;
    case 1:
      return macLanguageEncodings[languageID] || macScriptEncodings[encodingID];
    case 3:
      if (encodingID === 1 || encodingID === 10) return utf16;
  }
}
function parseNameTable(data, start, ltag2) {
  var name = {};
  var p = new parse.Parser(data, start);
  var format = p.parseUShort();
  var count = p.parseUShort();
  var stringOffset = p.offset + p.parseUShort();
  for (var i = 0; i < count; i++) {
    var platformID = p.parseUShort();
    var encodingID = p.parseUShort();
    var languageID = p.parseUShort();
    var nameID = p.parseUShort();
    var property = nameTableNames[nameID] || nameID;
    var byteLength = p.parseUShort();
    var offset2 = p.parseUShort();
    var language = getLanguageCode(platformID, languageID, ltag2);
    var encoding = getEncoding(platformID, encodingID, languageID);
    if (encoding !== void 0 && language !== void 0) {
      var text = void 0;
      if (encoding === utf16) text = decode.UTF16(data, stringOffset + offset2, byteLength);
      else text = decode.MACSTRING(data, stringOffset + offset2, byteLength, encoding);
      if (text) {
        var translations = name[property];
        if (translations === void 0) translations = name[property] = {};
        translations[language] = text;
      }
    }
  }
  if (format === 1) p.parseUShort();
  return name;
}
function reverseDict(dict) {
  var result = {};
  for (var key in dict) result[dict[key]] = parseInt(key);
  return result;
}
function makeNameRecord(platformID, encodingID, languageID, nameID, length, offset2) {
  return new table.Record("NameRecord", [
    {
      name: "platformID",
      type: "USHORT",
      value: platformID
    },
    {
      name: "encodingID",
      type: "USHORT",
      value: encodingID
    },
    {
      name: "languageID",
      type: "USHORT",
      value: languageID
    },
    {
      name: "nameID",
      type: "USHORT",
      value: nameID
    },
    {
      name: "length",
      type: "USHORT",
      value: length
    },
    {
      name: "offset",
      type: "USHORT",
      value: offset2
    }
  ]);
}
function findSubArray(needle, haystack) {
  var needleLength = needle.length;
  var limit = haystack.length - needleLength + 1;
  loop: for (var pos = 0; pos < limit; pos++) for (; pos < limit; pos++) {
    for (var k = 0; k < needleLength; k++) if (haystack[pos + k] !== needle[k]) continue loop;
    return pos;
  }
  return -1;
}
function addStringToPool(s, pool) {
  var offset2 = findSubArray(s, pool);
  if (offset2 < 0) {
    offset2 = pool.length;
    var i = 0;
    var len = s.length;
    for (; i < len; ++i) pool.push(s[i]);
  }
  return offset2;
}
function makeNameTable(names, ltag2) {
  var nameID;
  var nameIDs = [];
  var namesWithNumericKeys = {};
  var nameTableIds = reverseDict(nameTableNames);
  for (var key in names) {
    var id = nameTableIds[key];
    if (id === void 0) id = key;
    nameID = parseInt(id);
    if (isNaN(nameID)) throw new Error('Name table entry "' + key + '" does not exist, see nameTableNames for complete list.');
    namesWithNumericKeys[nameID] = names[key];
    nameIDs.push(nameID);
  }
  var macLanguageIds = reverseDict(macLanguages);
  var windowsLanguageIds = reverseDict(windowsLanguages);
  var nameRecords = [];
  var stringPool = [];
  for (var i = 0; i < nameIDs.length; i++) {
    nameID = nameIDs[i];
    var translations = namesWithNumericKeys[nameID];
    for (var lang in translations) {
      var text = translations[lang];
      var macPlatform = 1;
      var macLanguage = macLanguageIds[lang];
      var macScript = macLanguageToScript[macLanguage];
      var macEncoding = getEncoding(macPlatform, macScript, macLanguage);
      var macName = encode.MACSTRING(text, macEncoding);
      if (macName === void 0) {
        macPlatform = 0;
        macLanguage = ltag2.indexOf(lang);
        if (macLanguage < 0) {
          macLanguage = ltag2.length;
          ltag2.push(lang);
        }
        macScript = 4;
        macName = encode.UTF16(text);
      }
      var macNameOffset = addStringToPool(macName, stringPool);
      nameRecords.push(makeNameRecord(macPlatform, macScript, macLanguage, nameID, macName.length, macNameOffset));
      var winLanguage = windowsLanguageIds[lang];
      if (winLanguage !== void 0) {
        var winName = encode.UTF16(text);
        var winNameOffset = addStringToPool(winName, stringPool);
        nameRecords.push(makeNameRecord(3, 1, winLanguage, nameID, winName.length, winNameOffset));
      }
    }
  }
  nameRecords.sort(function(a, b) {
    return a.platformID - b.platformID || a.encodingID - b.encodingID || a.languageID - b.languageID || a.nameID - b.nameID;
  });
  var t = new table.Table("name", [
    {
      name: "format",
      type: "USHORT",
      value: 0
    },
    {
      name: "count",
      type: "USHORT",
      value: nameRecords.length
    },
    {
      name: "stringOffset",
      type: "USHORT",
      value: 6 + nameRecords.length * 12
    }
  ]);
  for (var r = 0; r < nameRecords.length; r++) t.fields.push({
    name: "record_" + r,
    type: "RECORD",
    value: nameRecords[r]
  });
  t.fields.push({
    name: "strings",
    type: "LITERAL",
    value: stringPool
  });
  return t;
}
var _name = {
  parse: parseNameTable,
  make: makeNameTable
};
var unicodeRanges = [
  {
    begin: 0,
    end: 127
  },
  {
    begin: 128,
    end: 255
  },
  {
    begin: 256,
    end: 383
  },
  {
    begin: 384,
    end: 591
  },
  {
    begin: 592,
    end: 687
  },
  {
    begin: 688,
    end: 767
  },
  {
    begin: 768,
    end: 879
  },
  {
    begin: 880,
    end: 1023
  },
  {
    begin: 11392,
    end: 11519
  },
  {
    begin: 1024,
    end: 1279
  },
  {
    begin: 1328,
    end: 1423
  },
  {
    begin: 1424,
    end: 1535
  },
  {
    begin: 42240,
    end: 42559
  },
  {
    begin: 1536,
    end: 1791
  },
  {
    begin: 1984,
    end: 2047
  },
  {
    begin: 2304,
    end: 2431
  },
  {
    begin: 2432,
    end: 2559
  },
  {
    begin: 2560,
    end: 2687
  },
  {
    begin: 2688,
    end: 2815
  },
  {
    begin: 2816,
    end: 2943
  },
  {
    begin: 2944,
    end: 3071
  },
  {
    begin: 3072,
    end: 3199
  },
  {
    begin: 3200,
    end: 3327
  },
  {
    begin: 3328,
    end: 3455
  },
  {
    begin: 3584,
    end: 3711
  },
  {
    begin: 3712,
    end: 3839
  },
  {
    begin: 4256,
    end: 4351
  },
  {
    begin: 6912,
    end: 7039
  },
  {
    begin: 4352,
    end: 4607
  },
  {
    begin: 7680,
    end: 7935
  },
  {
    begin: 7936,
    end: 8191
  },
  {
    begin: 8192,
    end: 8303
  },
  {
    begin: 8304,
    end: 8351
  },
  {
    begin: 8352,
    end: 8399
  },
  {
    begin: 8400,
    end: 8447
  },
  {
    begin: 8448,
    end: 8527
  },
  {
    begin: 8528,
    end: 8591
  },
  {
    begin: 8592,
    end: 8703
  },
  {
    begin: 8704,
    end: 8959
  },
  {
    begin: 8960,
    end: 9215
  },
  {
    begin: 9216,
    end: 9279
  },
  {
    begin: 9280,
    end: 9311
  },
  {
    begin: 9312,
    end: 9471
  },
  {
    begin: 9472,
    end: 9599
  },
  {
    begin: 9600,
    end: 9631
  },
  {
    begin: 9632,
    end: 9727
  },
  {
    begin: 9728,
    end: 9983
  },
  {
    begin: 9984,
    end: 10175
  },
  {
    begin: 12288,
    end: 12351
  },
  {
    begin: 12352,
    end: 12447
  },
  {
    begin: 12448,
    end: 12543
  },
  {
    begin: 12544,
    end: 12591
  },
  {
    begin: 12592,
    end: 12687
  },
  {
    begin: 43072,
    end: 43135
  },
  {
    begin: 12800,
    end: 13055
  },
  {
    begin: 13056,
    end: 13311
  },
  {
    begin: 44032,
    end: 55215
  },
  {
    begin: 55296,
    end: 57343
  },
  {
    begin: 67840,
    end: 67871
  },
  {
    begin: 19968,
    end: 40959
  },
  {
    begin: 57344,
    end: 63743
  },
  {
    begin: 12736,
    end: 12783
  },
  {
    begin: 64256,
    end: 64335
  },
  {
    begin: 64336,
    end: 65023
  },
  {
    begin: 65056,
    end: 65071
  },
  {
    begin: 65040,
    end: 65055
  },
  {
    begin: 65104,
    end: 65135
  },
  {
    begin: 65136,
    end: 65279
  },
  {
    begin: 65280,
    end: 65519
  },
  {
    begin: 65520,
    end: 65535
  },
  {
    begin: 3840,
    end: 4095
  },
  {
    begin: 1792,
    end: 1871
  },
  {
    begin: 1920,
    end: 1983
  },
  {
    begin: 3456,
    end: 3583
  },
  {
    begin: 4096,
    end: 4255
  },
  {
    begin: 4608,
    end: 4991
  },
  {
    begin: 5024,
    end: 5119
  },
  {
    begin: 5120,
    end: 5759
  },
  {
    begin: 5760,
    end: 5791
  },
  {
    begin: 5792,
    end: 5887
  },
  {
    begin: 6016,
    end: 6143
  },
  {
    begin: 6144,
    end: 6319
  },
  {
    begin: 10240,
    end: 10495
  },
  {
    begin: 40960,
    end: 42127
  },
  {
    begin: 5888,
    end: 5919
  },
  {
    begin: 66304,
    end: 66351
  },
  {
    begin: 66352,
    end: 66383
  },
  {
    begin: 66560,
    end: 66639
  },
  {
    begin: 118784,
    end: 119039
  },
  {
    begin: 119808,
    end: 120831
  },
  {
    begin: 1044480,
    end: 1048573
  },
  {
    begin: 65024,
    end: 65039
  },
  {
    begin: 917504,
    end: 917631
  },
  {
    begin: 6400,
    end: 6479
  },
  {
    begin: 6480,
    end: 6527
  },
  {
    begin: 6528,
    end: 6623
  },
  {
    begin: 6656,
    end: 6687
  },
  {
    begin: 11264,
    end: 11359
  },
  {
    begin: 11568,
    end: 11647
  },
  {
    begin: 19904,
    end: 19967
  },
  {
    begin: 43008,
    end: 43055
  },
  {
    begin: 65536,
    end: 65663
  },
  {
    begin: 65856,
    end: 65935
  },
  {
    begin: 66432,
    end: 66463
  },
  {
    begin: 66464,
    end: 66527
  },
  {
    begin: 66640,
    end: 66687
  },
  {
    begin: 66688,
    end: 66735
  },
  {
    begin: 67584,
    end: 67647
  },
  {
    begin: 68096,
    end: 68191
  },
  {
    begin: 119552,
    end: 119647
  },
  {
    begin: 73728,
    end: 74751
  },
  {
    begin: 119648,
    end: 119679
  },
  {
    begin: 7040,
    end: 7103
  },
  {
    begin: 7168,
    end: 7247
  },
  {
    begin: 7248,
    end: 7295
  },
  {
    begin: 43136,
    end: 43231
  },
  {
    begin: 43264,
    end: 43311
  },
  {
    begin: 43312,
    end: 43359
  },
  {
    begin: 43520,
    end: 43615
  },
  {
    begin: 65936,
    end: 65999
  },
  {
    begin: 66e3,
    end: 66047
  },
  {
    begin: 66208,
    end: 66271
  },
  {
    begin: 127024,
    end: 127135
  }
];
function getUnicodeRange(unicode) {
  for (var i = 0; i < unicodeRanges.length; i += 1) {
    var range2 = unicodeRanges[i];
    if (unicode >= range2.begin && unicode < range2.end) return i;
  }
  return -1;
}
function parseOS2Table(data, start) {
  var os22 = {};
  var p = new parse.Parser(data, start);
  os22.version = p.parseUShort();
  os22.xAvgCharWidth = p.parseShort();
  os22.usWeightClass = p.parseUShort();
  os22.usWidthClass = p.parseUShort();
  os22.fsType = p.parseUShort();
  os22.ySubscriptXSize = p.parseShort();
  os22.ySubscriptYSize = p.parseShort();
  os22.ySubscriptXOffset = p.parseShort();
  os22.ySubscriptYOffset = p.parseShort();
  os22.ySuperscriptXSize = p.parseShort();
  os22.ySuperscriptYSize = p.parseShort();
  os22.ySuperscriptXOffset = p.parseShort();
  os22.ySuperscriptYOffset = p.parseShort();
  os22.yStrikeoutSize = p.parseShort();
  os22.yStrikeoutPosition = p.parseShort();
  os22.sFamilyClass = p.parseShort();
  os22.panose = [];
  for (var i = 0; i < 10; i++) os22.panose[i] = p.parseByte();
  os22.ulUnicodeRange1 = p.parseULong();
  os22.ulUnicodeRange2 = p.parseULong();
  os22.ulUnicodeRange3 = p.parseULong();
  os22.ulUnicodeRange4 = p.parseULong();
  os22.achVendID = String.fromCharCode(p.parseByte(), p.parseByte(), p.parseByte(), p.parseByte());
  os22.fsSelection = p.parseUShort();
  os22.usFirstCharIndex = p.parseUShort();
  os22.usLastCharIndex = p.parseUShort();
  os22.sTypoAscender = p.parseShort();
  os22.sTypoDescender = p.parseShort();
  os22.sTypoLineGap = p.parseShort();
  os22.usWinAscent = p.parseUShort();
  os22.usWinDescent = p.parseUShort();
  if (os22.version >= 1) {
    os22.ulCodePageRange1 = p.parseULong();
    os22.ulCodePageRange2 = p.parseULong();
  }
  if (os22.version >= 2) {
    os22.sxHeight = p.parseShort();
    os22.sCapHeight = p.parseShort();
    os22.usDefaultChar = p.parseUShort();
    os22.usBreakChar = p.parseUShort();
    os22.usMaxContent = p.parseUShort();
  }
  return os22;
}
function makeOS2Table(options) {
  return new table.Table("OS/2", [
    {
      name: "version",
      type: "USHORT",
      value: 3
    },
    {
      name: "xAvgCharWidth",
      type: "SHORT",
      value: 0
    },
    {
      name: "usWeightClass",
      type: "USHORT",
      value: 0
    },
    {
      name: "usWidthClass",
      type: "USHORT",
      value: 0
    },
    {
      name: "fsType",
      type: "USHORT",
      value: 0
    },
    {
      name: "ySubscriptXSize",
      type: "SHORT",
      value: 650
    },
    {
      name: "ySubscriptYSize",
      type: "SHORT",
      value: 699
    },
    {
      name: "ySubscriptXOffset",
      type: "SHORT",
      value: 0
    },
    {
      name: "ySubscriptYOffset",
      type: "SHORT",
      value: 140
    },
    {
      name: "ySuperscriptXSize",
      type: "SHORT",
      value: 650
    },
    {
      name: "ySuperscriptYSize",
      type: "SHORT",
      value: 699
    },
    {
      name: "ySuperscriptXOffset",
      type: "SHORT",
      value: 0
    },
    {
      name: "ySuperscriptYOffset",
      type: "SHORT",
      value: 479
    },
    {
      name: "yStrikeoutSize",
      type: "SHORT",
      value: 49
    },
    {
      name: "yStrikeoutPosition",
      type: "SHORT",
      value: 258
    },
    {
      name: "sFamilyClass",
      type: "SHORT",
      value: 0
    },
    {
      name: "bFamilyType",
      type: "BYTE",
      value: 0
    },
    {
      name: "bSerifStyle",
      type: "BYTE",
      value: 0
    },
    {
      name: "bWeight",
      type: "BYTE",
      value: 0
    },
    {
      name: "bProportion",
      type: "BYTE",
      value: 0
    },
    {
      name: "bContrast",
      type: "BYTE",
      value: 0
    },
    {
      name: "bStrokeVariation",
      type: "BYTE",
      value: 0
    },
    {
      name: "bArmStyle",
      type: "BYTE",
      value: 0
    },
    {
      name: "bLetterform",
      type: "BYTE",
      value: 0
    },
    {
      name: "bMidline",
      type: "BYTE",
      value: 0
    },
    {
      name: "bXHeight",
      type: "BYTE",
      value: 0
    },
    {
      name: "ulUnicodeRange1",
      type: "ULONG",
      value: 0
    },
    {
      name: "ulUnicodeRange2",
      type: "ULONG",
      value: 0
    },
    {
      name: "ulUnicodeRange3",
      type: "ULONG",
      value: 0
    },
    {
      name: "ulUnicodeRange4",
      type: "ULONG",
      value: 0
    },
    {
      name: "achVendID",
      type: "CHARARRAY",
      value: "XXXX"
    },
    {
      name: "fsSelection",
      type: "USHORT",
      value: 0
    },
    {
      name: "usFirstCharIndex",
      type: "USHORT",
      value: 0
    },
    {
      name: "usLastCharIndex",
      type: "USHORT",
      value: 0
    },
    {
      name: "sTypoAscender",
      type: "SHORT",
      value: 0
    },
    {
      name: "sTypoDescender",
      type: "SHORT",
      value: 0
    },
    {
      name: "sTypoLineGap",
      type: "SHORT",
      value: 0
    },
    {
      name: "usWinAscent",
      type: "USHORT",
      value: 0
    },
    {
      name: "usWinDescent",
      type: "USHORT",
      value: 0
    },
    {
      name: "ulCodePageRange1",
      type: "ULONG",
      value: 0
    },
    {
      name: "ulCodePageRange2",
      type: "ULONG",
      value: 0
    },
    {
      name: "sxHeight",
      type: "SHORT",
      value: 0
    },
    {
      name: "sCapHeight",
      type: "SHORT",
      value: 0
    },
    {
      name: "usDefaultChar",
      type: "USHORT",
      value: 0
    },
    {
      name: "usBreakChar",
      type: "USHORT",
      value: 0
    },
    {
      name: "usMaxContext",
      type: "USHORT",
      value: 0
    }
  ], options);
}
var os2 = {
  parse: parseOS2Table,
  make: makeOS2Table,
  unicodeRanges,
  getUnicodeRange
};
function parsePostTable(data, start) {
  var post2 = {};
  var p = new parse.Parser(data, start);
  post2.version = p.parseVersion();
  post2.italicAngle = p.parseFixed();
  post2.underlinePosition = p.parseShort();
  post2.underlineThickness = p.parseShort();
  post2.isFixedPitch = p.parseULong();
  post2.minMemType42 = p.parseULong();
  post2.maxMemType42 = p.parseULong();
  post2.minMemType1 = p.parseULong();
  post2.maxMemType1 = p.parseULong();
  switch (post2.version) {
    case 1:
      post2.names = standardNames.slice();
      break;
    case 2:
      post2.numberOfGlyphs = p.parseUShort();
      post2.glyphNameIndex = new Array(post2.numberOfGlyphs);
      for (var i = 0; i < post2.numberOfGlyphs; i++) post2.glyphNameIndex[i] = p.parseUShort();
      post2.names = [];
      for (var i$1 = 0; i$1 < post2.numberOfGlyphs; i$1++) if (post2.glyphNameIndex[i$1] >= standardNames.length) {
        var nameLength = p.parseChar();
        post2.names.push(p.parseString(nameLength));
      }
      break;
    case 2.5:
      post2.numberOfGlyphs = p.parseUShort();
      post2.offset = new Array(post2.numberOfGlyphs);
      for (var i$2 = 0; i$2 < post2.numberOfGlyphs; i$2++) post2.offset[i$2] = p.parseChar();
  }
  return post2;
}
function makePostTable() {
  return new table.Table("post", [
    {
      name: "version",
      type: "FIXED",
      value: 196608
    },
    {
      name: "italicAngle",
      type: "FIXED",
      value: 0
    },
    {
      name: "underlinePosition",
      type: "FWORD",
      value: 0
    },
    {
      name: "underlineThickness",
      type: "FWORD",
      value: 0
    },
    {
      name: "isFixedPitch",
      type: "ULONG",
      value: 0
    },
    {
      name: "minMemType42",
      type: "ULONG",
      value: 0
    },
    {
      name: "maxMemType42",
      type: "ULONG",
      value: 0
    },
    {
      name: "minMemType1",
      type: "ULONG",
      value: 0
    },
    {
      name: "maxMemType1",
      type: "ULONG",
      value: 0
    }
  ]);
}
var post = {
  parse: parsePostTable,
  make: makePostTable
};
var subtableParsers = new Array(9);
subtableParsers[1] = function parseLookup1() {
  var start = this.offset + this.relativeOffset;
  var substFormat = this.parseUShort();
  if (substFormat === 1) return {
    substFormat: 1,
    coverage: this.parsePointer(Parser.coverage),
    deltaGlyphId: this.parseUShort()
  };
  else if (substFormat === 2) return {
    substFormat: 2,
    coverage: this.parsePointer(Parser.coverage),
    substitute: this.parseOffset16List()
  };
  check.assert(false, "0x" + start.toString(16) + ": lookup type 1 format must be 1 or 2.");
};
subtableParsers[2] = function parseLookup2() {
  var substFormat = this.parseUShort();
  check.argument(substFormat === 1, "GSUB Multiple Substitution Subtable identifier-format must be 1");
  return {
    substFormat,
    coverage: this.parsePointer(Parser.coverage),
    sequences: this.parseListOfLists()
  };
};
subtableParsers[3] = function parseLookup3() {
  var substFormat = this.parseUShort();
  check.argument(substFormat === 1, "GSUB Alternate Substitution Subtable identifier-format must be 1");
  return {
    substFormat,
    coverage: this.parsePointer(Parser.coverage),
    alternateSets: this.parseListOfLists()
  };
};
subtableParsers[4] = function parseLookup4() {
  var substFormat = this.parseUShort();
  check.argument(substFormat === 1, "GSUB ligature table identifier-format must be 1");
  return {
    substFormat,
    coverage: this.parsePointer(Parser.coverage),
    ligatureSets: this.parseListOfLists(function() {
      return {
        ligGlyph: this.parseUShort(),
        components: this.parseUShortList(this.parseUShort() - 1)
      };
    })
  };
};
var lookupRecordDesc = {
  sequenceIndex: Parser.uShort,
  lookupListIndex: Parser.uShort
};
subtableParsers[5] = function parseLookup5() {
  var start = this.offset + this.relativeOffset;
  var substFormat = this.parseUShort();
  if (substFormat === 1) return {
    substFormat,
    coverage: this.parsePointer(Parser.coverage),
    ruleSets: this.parseListOfLists(function() {
      var glyphCount2 = this.parseUShort();
      var substCount2 = this.parseUShort();
      return {
        input: this.parseUShortList(glyphCount2 - 1),
        lookupRecords: this.parseRecordList(substCount2, lookupRecordDesc)
      };
    })
  };
  else if (substFormat === 2) return {
    substFormat,
    coverage: this.parsePointer(Parser.coverage),
    classDef: this.parsePointer(Parser.classDef),
    classSets: this.parseListOfLists(function() {
      var glyphCount2 = this.parseUShort();
      var substCount2 = this.parseUShort();
      return {
        classes: this.parseUShortList(glyphCount2 - 1),
        lookupRecords: this.parseRecordList(substCount2, lookupRecordDesc)
      };
    })
  };
  else if (substFormat === 3) {
    var glyphCount = this.parseUShort();
    var substCount = this.parseUShort();
    return {
      substFormat,
      coverages: this.parseList(glyphCount, Parser.pointer(Parser.coverage)),
      lookupRecords: this.parseRecordList(substCount, lookupRecordDesc)
    };
  }
  check.assert(false, "0x" + start.toString(16) + ": lookup type 5 format must be 1, 2 or 3.");
};
subtableParsers[6] = function parseLookup6() {
  var start = this.offset + this.relativeOffset;
  var substFormat = this.parseUShort();
  if (substFormat === 1) return {
    substFormat: 1,
    coverage: this.parsePointer(Parser.coverage),
    chainRuleSets: this.parseListOfLists(function() {
      return {
        backtrack: this.parseUShortList(),
        input: this.parseUShortList(this.parseShort() - 1),
        lookahead: this.parseUShortList(),
        lookupRecords: this.parseRecordList(lookupRecordDesc)
      };
    })
  };
  else if (substFormat === 2) return {
    substFormat: 2,
    coverage: this.parsePointer(Parser.coverage),
    backtrackClassDef: this.parsePointer(Parser.classDef),
    inputClassDef: this.parsePointer(Parser.classDef),
    lookaheadClassDef: this.parsePointer(Parser.classDef),
    chainClassSet: this.parseListOfLists(function() {
      return {
        backtrack: this.parseUShortList(),
        input: this.parseUShortList(this.parseShort() - 1),
        lookahead: this.parseUShortList(),
        lookupRecords: this.parseRecordList(lookupRecordDesc)
      };
    })
  };
  else if (substFormat === 3) return {
    substFormat: 3,
    backtrackCoverage: this.parseList(Parser.pointer(Parser.coverage)),
    inputCoverage: this.parseList(Parser.pointer(Parser.coverage)),
    lookaheadCoverage: this.parseList(Parser.pointer(Parser.coverage)),
    lookupRecords: this.parseRecordList(lookupRecordDesc)
  };
  check.assert(false, "0x" + start.toString(16) + ": lookup type 6 format must be 1, 2 or 3.");
};
subtableParsers[7] = function parseLookup7() {
  var substFormat = this.parseUShort();
  check.argument(substFormat === 1, "GSUB Extension Substitution subtable identifier-format must be 1");
  var extensionLookupType = this.parseUShort();
  var extensionParser = new Parser(this.data, this.offset + this.parseULong());
  return {
    substFormat: 1,
    lookupType: extensionLookupType,
    extension: subtableParsers[extensionLookupType].call(extensionParser)
  };
};
subtableParsers[8] = function parseLookup8() {
  var substFormat = this.parseUShort();
  check.argument(substFormat === 1, "GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1");
  return {
    substFormat,
    coverage: this.parsePointer(Parser.coverage),
    backtrackCoverage: this.parseList(Parser.pointer(Parser.coverage)),
    lookaheadCoverage: this.parseList(Parser.pointer(Parser.coverage)),
    substitutes: this.parseUShortList()
  };
};
function parseGsubTable(data, start) {
  start = start || 0;
  var p = new Parser(data, start);
  var tableVersion = p.parseVersion(1);
  check.argument(tableVersion === 1 || tableVersion === 1.1, "Unsupported GSUB table version.");
  if (tableVersion === 1) return {
    version: tableVersion,
    scripts: p.parseScriptList(),
    features: p.parseFeatureList(),
    lookups: p.parseLookupList(subtableParsers)
  };
  else return {
    version: tableVersion,
    scripts: p.parseScriptList(),
    features: p.parseFeatureList(),
    lookups: p.parseLookupList(subtableParsers),
    variations: p.parseFeatureVariationsList()
  };
}
var subtableMakers = new Array(9);
subtableMakers[1] = function makeLookup1(subtable) {
  if (subtable.substFormat === 1) return new table.Table("substitutionTable", [
    {
      name: "substFormat",
      type: "USHORT",
      value: 1
    },
    {
      name: "coverage",
      type: "TABLE",
      value: new table.Coverage(subtable.coverage)
    },
    {
      name: "deltaGlyphID",
      type: "USHORT",
      value: subtable.deltaGlyphId
    }
  ]);
  else return new table.Table("substitutionTable", [{
    name: "substFormat",
    type: "USHORT",
    value: 2
  }, {
    name: "coverage",
    type: "TABLE",
    value: new table.Coverage(subtable.coverage)
  }].concat(table.ushortList("substitute", subtable.substitute)));
};
subtableMakers[2] = function makeLookup2(subtable) {
  check.assert(subtable.substFormat === 1, "Lookup type 2 substFormat must be 1.");
  return new table.Table("substitutionTable", [{
    name: "substFormat",
    type: "USHORT",
    value: 1
  }, {
    name: "coverage",
    type: "TABLE",
    value: new table.Coverage(subtable.coverage)
  }].concat(table.tableList("seqSet", subtable.sequences, function(sequenceSet) {
    return new table.Table("sequenceSetTable", table.ushortList("sequence", sequenceSet));
  })));
};
subtableMakers[3] = function makeLookup3(subtable) {
  check.assert(subtable.substFormat === 1, "Lookup type 3 substFormat must be 1.");
  return new table.Table("substitutionTable", [{
    name: "substFormat",
    type: "USHORT",
    value: 1
  }, {
    name: "coverage",
    type: "TABLE",
    value: new table.Coverage(subtable.coverage)
  }].concat(table.tableList("altSet", subtable.alternateSets, function(alternateSet) {
    return new table.Table("alternateSetTable", table.ushortList("alternate", alternateSet));
  })));
};
subtableMakers[4] = function makeLookup4(subtable) {
  check.assert(subtable.substFormat === 1, "Lookup type 4 substFormat must be 1.");
  return new table.Table("substitutionTable", [{
    name: "substFormat",
    type: "USHORT",
    value: 1
  }, {
    name: "coverage",
    type: "TABLE",
    value: new table.Coverage(subtable.coverage)
  }].concat(table.tableList("ligSet", subtable.ligatureSets, function(ligatureSet) {
    return new table.Table("ligatureSetTable", table.tableList("ligature", ligatureSet, function(ligature) {
      return new table.Table("ligatureTable", [{
        name: "ligGlyph",
        type: "USHORT",
        value: ligature.ligGlyph
      }].concat(table.ushortList("component", ligature.components, ligature.components.length + 1)));
    }));
  })));
};
subtableMakers[6] = function makeLookup6(subtable) {
  if (subtable.substFormat === 1) return new table.Table("chainContextTable", [{
    name: "substFormat",
    type: "USHORT",
    value: subtable.substFormat
  }, {
    name: "coverage",
    type: "TABLE",
    value: new table.Coverage(subtable.coverage)
  }].concat(table.tableList("chainRuleSet", subtable.chainRuleSets, function(chainRuleSet) {
    return new table.Table("chainRuleSetTable", table.tableList("chainRule", chainRuleSet, function(chainRule) {
      var tableData2 = table.ushortList("backtrackGlyph", chainRule.backtrack, chainRule.backtrack.length).concat(table.ushortList("inputGlyph", chainRule.input, chainRule.input.length + 1)).concat(table.ushortList("lookaheadGlyph", chainRule.lookahead, chainRule.lookahead.length)).concat(table.ushortList("substitution", [], chainRule.lookupRecords.length));
      chainRule.lookupRecords.forEach(function(record, i) {
        tableData2 = tableData2.concat({
          name: "sequenceIndex" + i,
          type: "USHORT",
          value: record.sequenceIndex
        }).concat({
          name: "lookupListIndex" + i,
          type: "USHORT",
          value: record.lookupListIndex
        });
      });
      return new table.Table("chainRuleTable", tableData2);
    }));
  })));
  else if (subtable.substFormat === 2) check.assert(false, "lookup type 6 format 2 is not yet supported.");
  else if (subtable.substFormat === 3) {
    var tableData = [{
      name: "substFormat",
      type: "USHORT",
      value: subtable.substFormat
    }];
    tableData.push({
      name: "backtrackGlyphCount",
      type: "USHORT",
      value: subtable.backtrackCoverage.length
    });
    subtable.backtrackCoverage.forEach(function(coverage, i) {
      tableData.push({
        name: "backtrackCoverage" + i,
        type: "TABLE",
        value: new table.Coverage(coverage)
      });
    });
    tableData.push({
      name: "inputGlyphCount",
      type: "USHORT",
      value: subtable.inputCoverage.length
    });
    subtable.inputCoverage.forEach(function(coverage, i) {
      tableData.push({
        name: "inputCoverage" + i,
        type: "TABLE",
        value: new table.Coverage(coverage)
      });
    });
    tableData.push({
      name: "lookaheadGlyphCount",
      type: "USHORT",
      value: subtable.lookaheadCoverage.length
    });
    subtable.lookaheadCoverage.forEach(function(coverage, i) {
      tableData.push({
        name: "lookaheadCoverage" + i,
        type: "TABLE",
        value: new table.Coverage(coverage)
      });
    });
    tableData.push({
      name: "substitutionCount",
      type: "USHORT",
      value: subtable.lookupRecords.length
    });
    subtable.lookupRecords.forEach(function(record, i) {
      tableData = tableData.concat({
        name: "sequenceIndex" + i,
        type: "USHORT",
        value: record.sequenceIndex
      }).concat({
        name: "lookupListIndex" + i,
        type: "USHORT",
        value: record.lookupListIndex
      });
    });
    return new table.Table("chainContextTable", tableData);
  }
  check.assert(false, "lookup type 6 format must be 1, 2 or 3.");
};
function makeGsubTable(gsub2) {
  return new table.Table("GSUB", [
    {
      name: "version",
      type: "ULONG",
      value: 65536
    },
    {
      name: "scripts",
      type: "TABLE",
      value: new table.ScriptList(gsub2.scripts)
    },
    {
      name: "features",
      type: "TABLE",
      value: new table.FeatureList(gsub2.features)
    },
    {
      name: "lookups",
      type: "TABLE",
      value: new table.LookupList(gsub2.lookups, subtableMakers)
    }
  ]);
}
var gsub = {
  parse: parseGsubTable,
  make: makeGsubTable
};
function parseMetaTable(data, start) {
  var p = new parse.Parser(data, start);
  var tableVersion = p.parseULong();
  check.argument(tableVersion === 1, "Unsupported META table version.");
  p.parseULong();
  p.parseULong();
  var numDataMaps = p.parseULong();
  var tags = {};
  for (var i = 0; i < numDataMaps; i++) {
    var tag = p.parseTag();
    var dataOffset = p.parseULong();
    var dataLength = p.parseULong();
    tags[tag] = decode.UTF8(data, start + dataOffset, dataLength);
  }
  return tags;
}
function makeMetaTable(tags) {
  var numTags = Object.keys(tags).length;
  var stringPool = "";
  var stringPoolOffset = 16 + numTags * 12;
  var result = new table.Table("meta", [
    {
      name: "version",
      type: "ULONG",
      value: 1
    },
    {
      name: "flags",
      type: "ULONG",
      value: 0
    },
    {
      name: "offset",
      type: "ULONG",
      value: stringPoolOffset
    },
    {
      name: "numTags",
      type: "ULONG",
      value: numTags
    }
  ]);
  for (var tag in tags) {
    var pos = stringPool.length;
    stringPool += tags[tag];
    result.fields.push({
      name: "tag " + tag,
      type: "TAG",
      value: tag
    });
    result.fields.push({
      name: "offset " + tag,
      type: "ULONG",
      value: stringPoolOffset + pos
    });
    result.fields.push({
      name: "length " + tag,
      type: "ULONG",
      value: tags[tag].length
    });
  }
  result.fields.push({
    name: "stringPool",
    type: "CHARARRAY",
    value: stringPool
  });
  return result;
}
var meta = {
  parse: parseMetaTable,
  make: makeMetaTable
};
function log2(v) {
  return Math.log(v) / Math.log(2) | 0;
}
function computeCheckSum(bytes) {
  while (bytes.length % 4 !== 0) bytes.push(0);
  var sum = 0;
  for (var i = 0; i < bytes.length; i += 4) sum += (bytes[i] << 24) + (bytes[i + 1] << 16) + (bytes[i + 2] << 8) + bytes[i + 3];
  sum %= Math.pow(2, 32);
  return sum;
}
function makeTableRecord(tag, checkSum, offset2, length) {
  return new table.Record("Table Record", [
    {
      name: "tag",
      type: "TAG",
      value: tag !== void 0 ? tag : ""
    },
    {
      name: "checkSum",
      type: "ULONG",
      value: checkSum !== void 0 ? checkSum : 0
    },
    {
      name: "offset",
      type: "ULONG",
      value: offset2 !== void 0 ? offset2 : 0
    },
    {
      name: "length",
      type: "ULONG",
      value: length !== void 0 ? length : 0
    }
  ]);
}
function makeSfntTable(tables) {
  var sfnt2 = new table.Table("sfnt", [
    {
      name: "version",
      type: "TAG",
      value: "OTTO"
    },
    {
      name: "numTables",
      type: "USHORT",
      value: 0
    },
    {
      name: "searchRange",
      type: "USHORT",
      value: 0
    },
    {
      name: "entrySelector",
      type: "USHORT",
      value: 0
    },
    {
      name: "rangeShift",
      type: "USHORT",
      value: 0
    }
  ]);
  sfnt2.tables = tables;
  sfnt2.numTables = tables.length;
  var highestPowerOf2 = Math.pow(2, log2(sfnt2.numTables));
  sfnt2.searchRange = 16 * highestPowerOf2;
  sfnt2.entrySelector = log2(highestPowerOf2);
  sfnt2.rangeShift = sfnt2.numTables * 16 - sfnt2.searchRange;
  var recordFields = [];
  var tableFields = [];
  var offset2 = sfnt2.sizeOf() + makeTableRecord().sizeOf() * sfnt2.numTables;
  while (offset2 % 4 !== 0) {
    offset2 += 1;
    tableFields.push({
      name: "padding",
      type: "BYTE",
      value: 0
    });
  }
  for (var i = 0; i < tables.length; i += 1) {
    var t = tables[i];
    check.argument(t.tableName.length === 4, "Table name" + t.tableName + " is invalid.");
    var tableLength = t.sizeOf();
    var tableRecord = makeTableRecord(t.tableName, computeCheckSum(t.encode()), offset2, tableLength);
    recordFields.push({
      name: tableRecord.tag + " Table Record",
      type: "RECORD",
      value: tableRecord
    });
    tableFields.push({
      name: t.tableName + " table",
      type: "RECORD",
      value: t
    });
    offset2 += tableLength;
    check.argument(!isNaN(offset2), "Something went wrong calculating the offset.");
    while (offset2 % 4 !== 0) {
      offset2 += 1;
      tableFields.push({
        name: "padding",
        type: "BYTE",
        value: 0
      });
    }
  }
  recordFields.sort(function(r1, r2) {
    if (r1.value.tag > r2.value.tag) return 1;
    else return -1;
  });
  sfnt2.fields = sfnt2.fields.concat(recordFields);
  sfnt2.fields = sfnt2.fields.concat(tableFields);
  return sfnt2;
}
function metricsForChar(font, chars, notFoundMetrics) {
  for (var i = 0; i < chars.length; i += 1) {
    var glyphIndex = font.charToGlyphIndex(chars[i]);
    if (glyphIndex > 0) return font.glyphs.get(glyphIndex).getMetrics();
  }
  return notFoundMetrics;
}
function average(vs) {
  var sum = 0;
  for (var i = 0; i < vs.length; i += 1) sum += vs[i];
  return sum / vs.length;
}
function fontToSfntTable(font) {
  var xMins = [];
  var yMins = [];
  var xMaxs = [];
  var yMaxs = [];
  var advanceWidths = [];
  var leftSideBearings = [];
  var rightSideBearings = [];
  var firstCharIndex;
  var lastCharIndex = 0;
  var ulUnicodeRange1 = 0;
  var ulUnicodeRange2 = 0;
  var ulUnicodeRange3 = 0;
  var ulUnicodeRange4 = 0;
  for (var i = 0; i < font.glyphs.length; i += 1) {
    var glyph = font.glyphs.get(i);
    var unicode = glyph.unicode | 0;
    if (isNaN(glyph.advanceWidth)) throw new Error("Glyph " + glyph.name + " (" + i + "): advanceWidth is not a number.");
    if (firstCharIndex > unicode || firstCharIndex === void 0) {
      if (unicode > 0) firstCharIndex = unicode;
    }
    if (lastCharIndex < unicode) lastCharIndex = unicode;
    var position = os2.getUnicodeRange(unicode);
    if (position < 32) ulUnicodeRange1 |= 1 << position;
    else if (position < 64) ulUnicodeRange2 |= 1 << position - 32;
    else if (position < 96) ulUnicodeRange3 |= 1 << position - 64;
    else if (position < 123) ulUnicodeRange4 |= 1 << position - 96;
    else throw new Error("Unicode ranges bits > 123 are reserved for internal usage");
    if (glyph.name === ".notdef") continue;
    var metrics = glyph.getMetrics();
    xMins.push(metrics.xMin);
    yMins.push(metrics.yMin);
    xMaxs.push(metrics.xMax);
    yMaxs.push(metrics.yMax);
    leftSideBearings.push(metrics.leftSideBearing);
    rightSideBearings.push(metrics.rightSideBearing);
    advanceWidths.push(glyph.advanceWidth);
  }
  var globals = {
    xMin: Math.min.apply(null, xMins),
    yMin: Math.min.apply(null, yMins),
    xMax: Math.max.apply(null, xMaxs),
    yMax: Math.max.apply(null, yMaxs),
    advanceWidthMax: Math.max.apply(null, advanceWidths),
    advanceWidthAvg: average(advanceWidths),
    minLeftSideBearing: Math.min.apply(null, leftSideBearings),
    maxLeftSideBearing: Math.max.apply(null, leftSideBearings),
    minRightSideBearing: Math.min.apply(null, rightSideBearings)
  };
  globals.ascender = font.ascender;
  globals.descender = font.descender;
  var headTable = head.make({
    flags: 3,
    unitsPerEm: font.unitsPerEm,
    xMin: globals.xMin,
    yMin: globals.yMin,
    xMax: globals.xMax,
    yMax: globals.yMax,
    lowestRecPPEM: 3,
    createdTimestamp: font.createdTimestamp
  });
  var hheaTable = hhea.make({
    ascender: globals.ascender,
    descender: globals.descender,
    advanceWidthMax: globals.advanceWidthMax,
    minLeftSideBearing: globals.minLeftSideBearing,
    minRightSideBearing: globals.minRightSideBearing,
    xMaxExtent: globals.maxLeftSideBearing + (globals.xMax - globals.xMin),
    numberOfHMetrics: font.glyphs.length
  });
  var maxpTable = maxp.make(font.glyphs.length);
  var os2Table = os2.make(Object.assign({
    xAvgCharWidth: Math.round(globals.advanceWidthAvg),
    usFirstCharIndex: firstCharIndex,
    usLastCharIndex: lastCharIndex,
    ulUnicodeRange1,
    ulUnicodeRange2,
    ulUnicodeRange3,
    ulUnicodeRange4,
    sTypoAscender: globals.ascender,
    sTypoDescender: globals.descender,
    sTypoLineGap: 0,
    usWinAscent: globals.yMax,
    usWinDescent: Math.abs(globals.yMin),
    ulCodePageRange1: 1,
    sxHeight: metricsForChar(font, "xyvw", { yMax: Math.round(globals.ascender / 2) }).yMax,
    sCapHeight: metricsForChar(font, "HIKLEFJMNTZBDPRAGOQSUVWXY", globals).yMax,
    usDefaultChar: font.hasChar(" ") ? 32 : 0,
    usBreakChar: font.hasChar(" ") ? 32 : 0
  }, font.tables.os2));
  var hmtxTable = hmtx.make(font.glyphs);
  var cmapTable = cmap.make(font.glyphs);
  var englishFamilyName = font.getEnglishName("fontFamily");
  var englishStyleName = font.getEnglishName("fontSubfamily");
  var englishFullName = englishFamilyName + " " + englishStyleName;
  var postScriptName = font.getEnglishName("postScriptName");
  if (!postScriptName) postScriptName = englishFamilyName.replace(/\s/g, "") + "-" + englishStyleName;
  var names = {};
  for (var n in font.names) names[n] = font.names[n];
  if (!names.uniqueID) names.uniqueID = { en: font.getEnglishName("manufacturer") + ":" + englishFullName };
  if (!names.postScriptName) names.postScriptName = { en: postScriptName };
  if (!names.preferredFamily) names.preferredFamily = font.names.fontFamily;
  if (!names.preferredSubfamily) names.preferredSubfamily = font.names.fontSubfamily;
  var languageTags = [];
  var nameTable = _name.make(names, languageTags);
  var ltagTable = languageTags.length > 0 ? ltag.make(languageTags) : void 0;
  var postTable = post.make();
  var cffTable = cff.make(font.glyphs, {
    version: font.getEnglishName("version"),
    fullName: englishFullName,
    familyName: englishFamilyName,
    weightName: englishStyleName,
    postScriptName,
    unitsPerEm: font.unitsPerEm,
    fontBBox: [
      0,
      globals.yMin,
      globals.ascender,
      globals.advanceWidthMax
    ]
  });
  var metaTable = font.metas && Object.keys(font.metas).length > 0 ? meta.make(font.metas) : void 0;
  var tables = [
    headTable,
    hheaTable,
    maxpTable,
    os2Table,
    nameTable,
    cmapTable,
    postTable,
    cffTable,
    hmtxTable
  ];
  if (ltagTable) tables.push(ltagTable);
  if (font.tables.gsub) tables.push(gsub.make(font.tables.gsub));
  if (metaTable) tables.push(metaTable);
  var sfntTable = makeSfntTable(tables);
  var checkSum = computeCheckSum(sfntTable.encode());
  var tableFields = sfntTable.fields;
  var checkSumAdjusted = false;
  for (var i$1 = 0; i$1 < tableFields.length; i$1 += 1) if (tableFields[i$1].name === "head table") {
    tableFields[i$1].value.checkSumAdjustment = 2981146554 - checkSum;
    checkSumAdjusted = true;
    break;
  }
  if (!checkSumAdjusted) throw new Error("Could not find head table with checkSum to adjust.");
  return sfntTable;
}
var sfnt = {
  make: makeSfntTable,
  fontToTable: fontToSfntTable,
  computeCheckSum
};
function searchTag(arr, tag) {
  var imin = 0;
  var imax = arr.length - 1;
  while (imin <= imax) {
    var imid = imin + imax >>> 1;
    var val = arr[imid].tag;
    if (val === tag) return imid;
    else if (val < tag) imin = imid + 1;
    else imax = imid - 1;
  }
  return -imin - 1;
}
function binSearch(arr, value) {
  var imin = 0;
  var imax = arr.length - 1;
  while (imin <= imax) {
    var imid = imin + imax >>> 1;
    var val = arr[imid];
    if (val === value) return imid;
    else if (val < value) imin = imid + 1;
    else imax = imid - 1;
  }
  return -imin - 1;
}
function searchRange(ranges, value) {
  var range2;
  var imin = 0;
  var imax = ranges.length - 1;
  while (imin <= imax) {
    var imid = imin + imax >>> 1;
    range2 = ranges[imid];
    var start = range2.start;
    if (start === value) return range2;
    else if (start < value) imin = imid + 1;
    else imax = imid - 1;
  }
  if (imin > 0) {
    range2 = ranges[imin - 1];
    if (value > range2.end) return 0;
    return range2;
  }
}
function Layout(font, tableName) {
  this.font = font;
  this.tableName = tableName;
}
Layout.prototype = {
  /**
  * Binary search an object by "tag" property
  * @instance
  * @function searchTag
  * @memberof opentype.Layout
  * @param  {Array} arr
  * @param  {string} tag
  * @return {number}
  */
  searchTag,
  /**
  * Binary search in a list of numbers
  * @instance
  * @function binSearch
  * @memberof opentype.Layout
  * @param  {Array} arr
  * @param  {number} value
  * @return {number}
  */
  binSearch,
  /**
  * Get or create the Layout table (GSUB, GPOS etc).
  * @param  {boolean} create - Whether to create a new one.
  * @return {Object} The GSUB or GPOS table.
  */
  getTable: function(create) {
    var layout = this.font.tables[this.tableName];
    if (!layout && create) layout = this.font.tables[this.tableName] = this.createDefaultTable();
    return layout;
  },
  /**
  * Returns all scripts in the substitution table.
  * @instance
  * @return {Array}
  */
  getScriptNames: function() {
    var layout = this.getTable();
    if (!layout) return [];
    return layout.scripts.map(function(script) {
      return script.tag;
    });
  },
  /**
  * Returns the best bet for a script name.
  * Returns 'DFLT' if it exists.
  * If not, returns 'latn' if it exists.
  * If neither exist, returns undefined.
  */
  getDefaultScriptName: function() {
    var layout = this.getTable();
    if (!layout) return;
    var hasLatn = false;
    for (var i = 0; i < layout.scripts.length; i++) {
      var name = layout.scripts[i].tag;
      if (name === "DFLT") return name;
      if (name === "latn") hasLatn = true;
    }
    if (hasLatn) return "latn";
  },
  /**
  * Returns all LangSysRecords in the given script.
  * @instance
  * @param {string} [script='DFLT']
  * @param {boolean} create - forces the creation of this script table if it doesn't exist.
  * @return {Object} An object with tag and script properties.
  */
  getScriptTable: function(script, create) {
    var layout = this.getTable(create);
    if (layout) {
      script = script || "DFLT";
      var scripts = layout.scripts;
      var pos = searchTag(layout.scripts, script);
      if (pos >= 0) return scripts[pos].script;
      else if (create) {
        var scr = {
          tag: script,
          script: {
            defaultLangSys: {
              reserved: 0,
              reqFeatureIndex: 65535,
              featureIndexes: []
            },
            langSysRecords: []
          }
        };
        scripts.splice(-1 - pos, 0, scr);
        return scr.script;
      }
    }
  },
  /**
  * Returns a language system table
  * @instance
  * @param {string} [script='DFLT']
  * @param {string} [language='dlft']
  * @param {boolean} create - forces the creation of this langSysTable if it doesn't exist.
  * @return {Object}
  */
  getLangSysTable: function(script, language, create) {
    var scriptTable = this.getScriptTable(script, create);
    if (scriptTable) {
      if (!language || language === "dflt" || language === "DFLT") return scriptTable.defaultLangSys;
      var pos = searchTag(scriptTable.langSysRecords, language);
      if (pos >= 0) return scriptTable.langSysRecords[pos].langSys;
      else if (create) {
        var langSysRecord = {
          tag: language,
          langSys: {
            reserved: 0,
            reqFeatureIndex: 65535,
            featureIndexes: []
          }
        };
        scriptTable.langSysRecords.splice(-1 - pos, 0, langSysRecord);
        return langSysRecord.langSys;
      }
    }
  },
  /**
  * Get a specific feature table.
  * @instance
  * @param {string} [script='DFLT']
  * @param {string} [language='dlft']
  * @param {string} feature - One of the codes listed at https://www.microsoft.com/typography/OTSPEC/featurelist.htm
  * @param {boolean} create - forces the creation of the feature table if it doesn't exist.
  * @return {Object}
  */
  getFeatureTable: function(script, language, feature, create) {
    var langSysTable2 = this.getLangSysTable(script, language, create);
    if (langSysTable2) {
      var featureRecord;
      var featIndexes = langSysTable2.featureIndexes;
      var allFeatures = this.font.tables[this.tableName].features;
      for (var i = 0; i < featIndexes.length; i++) {
        featureRecord = allFeatures[featIndexes[i]];
        if (featureRecord.tag === feature) return featureRecord.feature;
      }
      if (create) {
        var index = allFeatures.length;
        check.assert(index === 0 || feature >= allFeatures[index - 1].tag, "Features must be added in alphabetical order.");
        featureRecord = {
          tag: feature,
          feature: {
            params: 0,
            lookupListIndexes: []
          }
        };
        allFeatures.push(featureRecord);
        featIndexes.push(index);
        return featureRecord.feature;
      }
    }
  },
  /**
  * Get the lookup tables of a given type for a script/language/feature.
  * @instance
  * @param {string} [script='DFLT']
  * @param {string} [language='dlft']
  * @param {string} feature - 4-letter feature code
  * @param {number} lookupType - 1 to 9
  * @param {boolean} create - forces the creation of the lookup table if it doesn't exist, with no subtables.
  * @return {Object[]}
  */
  getLookupTables: function(script, language, feature, lookupType, create) {
    var featureTable = this.getFeatureTable(script, language, feature, create);
    var tables = [];
    if (featureTable) {
      var lookupTable;
      var lookupListIndexes = featureTable.lookupListIndexes;
      var allLookups = this.font.tables[this.tableName].lookups;
      for (var i = 0; i < lookupListIndexes.length; i++) {
        lookupTable = allLookups[lookupListIndexes[i]];
        if (lookupTable.lookupType === lookupType) tables.push(lookupTable);
      }
      if (tables.length === 0 && create) {
        lookupTable = {
          lookupType,
          lookupFlag: 0,
          subtables: [],
          markFilteringSet: void 0
        };
        var index = allLookups.length;
        allLookups.push(lookupTable);
        lookupListIndexes.push(index);
        return [lookupTable];
      }
    }
    return tables;
  },
  /**
  * Find a glyph in a class definition table
  * https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#class-definition-table
  * @param {object} classDefTable - an OpenType Layout class definition table
  * @param {number} glyphIndex - the index of the glyph to find
  * @returns {number} -1 if not found
  */
  getGlyphClass: function(classDefTable, glyphIndex) {
    switch (classDefTable.format) {
      case 1:
        if (classDefTable.startGlyph <= glyphIndex && glyphIndex < classDefTable.startGlyph + classDefTable.classes.length) return classDefTable.classes[glyphIndex - classDefTable.startGlyph];
        return 0;
      case 2:
        var range2 = searchRange(classDefTable.ranges, glyphIndex);
        return range2 ? range2.classId : 0;
    }
  },
  /**
  * Find a glyph in a coverage table
  * https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#coverage-table
  * @param {object} coverageTable - an OpenType Layout coverage table
  * @param {number} glyphIndex - the index of the glyph to find
  * @returns {number} -1 if not found
  */
  getCoverageIndex: function(coverageTable, glyphIndex) {
    switch (coverageTable.format) {
      case 1:
        var index = binSearch(coverageTable.glyphs, glyphIndex);
        return index >= 0 ? index : -1;
      case 2:
        var range2 = searchRange(coverageTable.ranges, glyphIndex);
        return range2 ? range2.index + glyphIndex - range2.start : -1;
    }
  },
  /**
  * Returns the list of glyph indexes of a coverage table.
  * Format 1: the list is stored raw
  * Format 2: compact list as range records.
  * @instance
  * @param  {Object} coverageTable
  * @return {Array}
  */
  expandCoverage: function(coverageTable) {
    if (coverageTable.format === 1) return coverageTable.glyphs;
    else {
      var glyphs = [];
      var ranges = coverageTable.ranges;
      for (var i = 0; i < ranges.length; i++) {
        var range2 = ranges[i];
        var start = range2.start;
        var end = range2.end;
        for (var j = start; j <= end; j++) glyphs.push(j);
      }
      return glyphs;
    }
  }
};
function Position(font) {
  Layout.call(this, font, "gpos");
}
Position.prototype = Layout.prototype;
Position.prototype.init = function() {
  var script = this.getDefaultScriptName();
  this.defaultKerningTables = this.getKerningTables(script);
};
Position.prototype.getKerningValue = function(kerningLookups, leftIndex, rightIndex) {
  for (var i = 0; i < kerningLookups.length; i++) {
    var subtables = kerningLookups[i].subtables;
    for (var j = 0; j < subtables.length; j++) {
      var subtable = subtables[j];
      var covIndex = this.getCoverageIndex(subtable.coverage, leftIndex);
      if (covIndex < 0) continue;
      switch (subtable.posFormat) {
        case 1:
          var pairSet = subtable.pairSets[covIndex];
          for (var k = 0; k < pairSet.length; k++) {
            var pair = pairSet[k];
            if (pair.secondGlyph === rightIndex) return pair.value1 && pair.value1.xAdvance || 0;
          }
          break;
        case 2:
          var class1 = this.getGlyphClass(subtable.classDef1, leftIndex);
          var class2 = this.getGlyphClass(subtable.classDef2, rightIndex);
          var pair$1 = subtable.classRecords[class1][class2];
          return pair$1.value1 && pair$1.value1.xAdvance || 0;
      }
    }
  }
  return 0;
};
Position.prototype.getKerningTables = function(script, language) {
  if (this.font.tables.gpos) return this.getLookupTables(script, language, "kern", 2);
};
function Substitution(font) {
  Layout.call(this, font, "gsub");
}
function arraysEqual(ar1, ar2) {
  var n = ar1.length;
  if (n !== ar2.length) return false;
  for (var i = 0; i < n; i++) if (ar1[i] !== ar2[i]) return false;
  return true;
}
function getSubstFormat(lookupTable, format, defaultSubtable) {
  var subtables = lookupTable.subtables;
  for (var i = 0; i < subtables.length; i++) {
    var subtable = subtables[i];
    if (subtable.substFormat === format) return subtable;
  }
  if (defaultSubtable) {
    subtables.push(defaultSubtable);
    return defaultSubtable;
  }
}
Substitution.prototype = Layout.prototype;
Substitution.prototype.createDefaultTable = function() {
  return {
    version: 1,
    scripts: [{
      tag: "DFLT",
      script: {
        defaultLangSys: {
          reserved: 0,
          reqFeatureIndex: 65535,
          featureIndexes: []
        },
        langSysRecords: []
      }
    }],
    features: [],
    lookups: []
  };
};
Substitution.prototype.getSingle = function(feature, script, language) {
  var substitutions = [];
  var lookupTables = this.getLookupTables(script, language, feature, 1);
  for (var idx = 0; idx < lookupTables.length; idx++) {
    var subtables = lookupTables[idx].subtables;
    for (var i = 0; i < subtables.length; i++) {
      var subtable = subtables[i];
      var glyphs = this.expandCoverage(subtable.coverage);
      var j = void 0;
      if (subtable.substFormat === 1) {
        var delta = subtable.deltaGlyphId;
        for (j = 0; j < glyphs.length; j++) {
          var glyph = glyphs[j];
          substitutions.push({
            sub: glyph,
            by: glyph + delta
          });
        }
      } else {
        var substitute = subtable.substitute;
        for (j = 0; j < glyphs.length; j++) substitutions.push({
          sub: glyphs[j],
          by: substitute[j]
        });
      }
    }
  }
  return substitutions;
};
Substitution.prototype.getMultiple = function(feature, script, language) {
  var substitutions = [];
  var lookupTables = this.getLookupTables(script, language, feature, 2);
  for (var idx = 0; idx < lookupTables.length; idx++) {
    var subtables = lookupTables[idx].subtables;
    for (var i = 0; i < subtables.length; i++) {
      var subtable = subtables[i];
      var glyphs = this.expandCoverage(subtable.coverage);
      var j = void 0;
      for (j = 0; j < glyphs.length; j++) {
        var glyph = glyphs[j];
        var replacements = subtable.sequences[j];
        substitutions.push({
          sub: glyph,
          by: replacements
        });
      }
    }
  }
  return substitutions;
};
Substitution.prototype.getAlternates = function(feature, script, language) {
  var alternates = [];
  var lookupTables = this.getLookupTables(script, language, feature, 3);
  for (var idx = 0; idx < lookupTables.length; idx++) {
    var subtables = lookupTables[idx].subtables;
    for (var i = 0; i < subtables.length; i++) {
      var subtable = subtables[i];
      var glyphs = this.expandCoverage(subtable.coverage);
      var alternateSets = subtable.alternateSets;
      for (var j = 0; j < glyphs.length; j++) alternates.push({
        sub: glyphs[j],
        by: alternateSets[j]
      });
    }
  }
  return alternates;
};
Substitution.prototype.getLigatures = function(feature, script, language) {
  var ligatures = [];
  var lookupTables = this.getLookupTables(script, language, feature, 4);
  for (var idx = 0; idx < lookupTables.length; idx++) {
    var subtables = lookupTables[idx].subtables;
    for (var i = 0; i < subtables.length; i++) {
      var subtable = subtables[i];
      var glyphs = this.expandCoverage(subtable.coverage);
      var ligatureSets = subtable.ligatureSets;
      for (var j = 0; j < glyphs.length; j++) {
        var startGlyph = glyphs[j];
        var ligSet = ligatureSets[j];
        for (var k = 0; k < ligSet.length; k++) {
          var lig = ligSet[k];
          ligatures.push({
            sub: [startGlyph].concat(lig.components),
            by: lig.ligGlyph
          });
        }
      }
    }
  }
  return ligatures;
};
Substitution.prototype.addSingle = function(feature, substitution, script, language) {
  var lookupTable = this.getLookupTables(script, language, feature, 1, true)[0];
  var subtable = getSubstFormat(lookupTable, 2, {
    substFormat: 2,
    coverage: {
      format: 1,
      glyphs: []
    },
    substitute: []
  });
  check.assert(subtable.coverage.format === 1, "Single: unable to modify coverage table format " + subtable.coverage.format);
  var coverageGlyph = substitution.sub;
  var pos = this.binSearch(subtable.coverage.glyphs, coverageGlyph);
  if (pos < 0) {
    pos = -1 - pos;
    subtable.coverage.glyphs.splice(pos, 0, coverageGlyph);
    subtable.substitute.splice(pos, 0, 0);
  }
  subtable.substitute[pos] = substitution.by;
};
Substitution.prototype.addMultiple = function(feature, substitution, script, language) {
  check.assert(substitution.by instanceof Array && substitution.by.length > 1, 'Multiple: "by" must be an array of two or more ids');
  var lookupTable = this.getLookupTables(script, language, feature, 2, true)[0];
  var subtable = getSubstFormat(lookupTable, 1, {
    substFormat: 1,
    coverage: {
      format: 1,
      glyphs: []
    },
    sequences: []
  });
  check.assert(subtable.coverage.format === 1, "Multiple: unable to modify coverage table format " + subtable.coverage.format);
  var coverageGlyph = substitution.sub;
  var pos = this.binSearch(subtable.coverage.glyphs, coverageGlyph);
  if (pos < 0) {
    pos = -1 - pos;
    subtable.coverage.glyphs.splice(pos, 0, coverageGlyph);
    subtable.sequences.splice(pos, 0, 0);
  }
  subtable.sequences[pos] = substitution.by;
};
Substitution.prototype.addAlternate = function(feature, substitution, script, language) {
  var lookupTable = this.getLookupTables(script, language, feature, 3, true)[0];
  var subtable = getSubstFormat(lookupTable, 1, {
    substFormat: 1,
    coverage: {
      format: 1,
      glyphs: []
    },
    alternateSets: []
  });
  check.assert(subtable.coverage.format === 1, "Alternate: unable to modify coverage table format " + subtable.coverage.format);
  var coverageGlyph = substitution.sub;
  var pos = this.binSearch(subtable.coverage.glyphs, coverageGlyph);
  if (pos < 0) {
    pos = -1 - pos;
    subtable.coverage.glyphs.splice(pos, 0, coverageGlyph);
    subtable.alternateSets.splice(pos, 0, 0);
  }
  subtable.alternateSets[pos] = substitution.by;
};
Substitution.prototype.addLigature = function(feature, ligature, script, language) {
  var lookupTable = this.getLookupTables(script, language, feature, 4, true)[0];
  var subtable = lookupTable.subtables[0];
  if (!subtable) {
    subtable = {
      substFormat: 1,
      coverage: {
        format: 1,
        glyphs: []
      },
      ligatureSets: []
    };
    lookupTable.subtables[0] = subtable;
  }
  check.assert(subtable.coverage.format === 1, "Ligature: unable to modify coverage table format " + subtable.coverage.format);
  var coverageGlyph = ligature.sub[0];
  var ligComponents = ligature.sub.slice(1);
  var ligatureTable = {
    ligGlyph: ligature.by,
    components: ligComponents
  };
  var pos = this.binSearch(subtable.coverage.glyphs, coverageGlyph);
  if (pos >= 0) {
    var ligatureSet = subtable.ligatureSets[pos];
    for (var i = 0; i < ligatureSet.length; i++) if (arraysEqual(ligatureSet[i].components, ligComponents)) return;
    ligatureSet.push(ligatureTable);
  } else {
    pos = -1 - pos;
    subtable.coverage.glyphs.splice(pos, 0, coverageGlyph);
    subtable.ligatureSets.splice(pos, 0, [ligatureTable]);
  }
};
Substitution.prototype.getFeature = function(feature, script, language) {
  if (/ss\d\d/.test(feature)) return this.getSingle(feature, script, language);
  switch (feature) {
    case "aalt":
    case "salt":
      return this.getSingle(feature, script, language).concat(this.getAlternates(feature, script, language));
    case "dlig":
    case "liga":
    case "rlig":
      return this.getLigatures(feature, script, language);
    case "ccmp":
      return this.getMultiple(feature, script, language).concat(this.getLigatures(feature, script, language));
    case "stch":
      return this.getMultiple(feature, script, language);
  }
};
Substitution.prototype.add = function(feature, sub, script, language) {
  if (/ss\d\d/.test(feature)) return this.addSingle(feature, sub, script, language);
  switch (feature) {
    case "aalt":
    case "salt":
      if (typeof sub.by === "number") return this.addSingle(feature, sub, script, language);
      return this.addAlternate(feature, sub, script, language);
    case "dlig":
    case "liga":
    case "rlig":
      return this.addLigature(feature, sub, script, language);
    case "ccmp":
      if (sub.by instanceof Array) return this.addMultiple(feature, sub, script, language);
      return this.addLigature(feature, sub, script, language);
  }
};
function isBrowser() {
  return typeof window !== "undefined";
}
function nodeBufferToArrayBuffer(buffer) {
  var ab = new ArrayBuffer(buffer.length);
  var view = new Uint8Array(ab);
  for (var i = 0; i < buffer.length; ++i) view[i] = buffer[i];
  return ab;
}
function arrayBufferToNodeBuffer(ab) {
  var buffer = new Buffer(ab.byteLength);
  var view = new Uint8Array(ab);
  for (var i = 0; i < buffer.length; ++i) buffer[i] = view[i];
  return buffer;
}
function checkArgument(expression, message) {
  if (!expression) throw message;
}
function parseGlyphCoordinate(p, flag, previousValue, shortVectorBitMask, sameBitMask) {
  var v;
  if ((flag & shortVectorBitMask) > 0) {
    v = p.parseByte();
    if ((flag & sameBitMask) === 0) v = -v;
    v = previousValue + v;
  } else if ((flag & sameBitMask) > 0) v = previousValue;
  else v = previousValue + p.parseShort();
  return v;
}
function parseGlyph(glyph, data, start) {
  var p = new parse.Parser(data, start);
  glyph.numberOfContours = p.parseShort();
  glyph._xMin = p.parseShort();
  glyph._yMin = p.parseShort();
  glyph._xMax = p.parseShort();
  glyph._yMax = p.parseShort();
  var flags;
  var flag;
  if (glyph.numberOfContours > 0) {
    var endPointIndices = glyph.endPointIndices = [];
    for (var i = 0; i < glyph.numberOfContours; i += 1) endPointIndices.push(p.parseUShort());
    glyph.instructionLength = p.parseUShort();
    glyph.instructions = [];
    for (var i$1 = 0; i$1 < glyph.instructionLength; i$1 += 1) glyph.instructions.push(p.parseByte());
    var numberOfCoordinates = endPointIndices[endPointIndices.length - 1] + 1;
    flags = [];
    for (var i$2 = 0; i$2 < numberOfCoordinates; i$2 += 1) {
      flag = p.parseByte();
      flags.push(flag);
      if ((flag & 8) > 0) {
        var repeatCount = p.parseByte();
        for (var j = 0; j < repeatCount; j += 1) {
          flags.push(flag);
          i$2 += 1;
        }
      }
    }
    check.argument(flags.length === numberOfCoordinates, "Bad flags.");
    if (endPointIndices.length > 0) {
      var points = [];
      var point;
      if (numberOfCoordinates > 0) {
        for (var i$3 = 0; i$3 < numberOfCoordinates; i$3 += 1) {
          flag = flags[i$3];
          point = {};
          point.onCurve = !!(flag & 1);
          point.lastPointOfContour = endPointIndices.indexOf(i$3) >= 0;
          points.push(point);
        }
        var px = 0;
        for (var i$4 = 0; i$4 < numberOfCoordinates; i$4 += 1) {
          flag = flags[i$4];
          point = points[i$4];
          point.x = parseGlyphCoordinate(p, flag, px, 2, 16);
          px = point.x;
        }
        var py = 0;
        for (var i$5 = 0; i$5 < numberOfCoordinates; i$5 += 1) {
          flag = flags[i$5];
          point = points[i$5];
          point.y = parseGlyphCoordinate(p, flag, py, 4, 32);
          py = point.y;
        }
      }
      glyph.points = points;
    } else glyph.points = [];
  } else if (glyph.numberOfContours === 0) glyph.points = [];
  else {
    glyph.isComposite = true;
    glyph.points = [];
    glyph.components = [];
    var moreComponents = true;
    while (moreComponents) {
      flags = p.parseUShort();
      var component = {
        glyphIndex: p.parseUShort(),
        xScale: 1,
        scale01: 0,
        scale10: 0,
        yScale: 1,
        dx: 0,
        dy: 0
      };
      if ((flags & 1) > 0) {
        if ((flags & 2) > 0) {
          component.dx = p.parseShort();
          component.dy = p.parseShort();
        } else component.matchedPoints = [p.parseUShort(), p.parseUShort()];
      } else if ((flags & 2) > 0) {
        component.dx = p.parseChar();
        component.dy = p.parseChar();
      } else component.matchedPoints = [p.parseByte(), p.parseByte()];
      if ((flags & 8) > 0) component.xScale = component.yScale = p.parseF2Dot14();
      else if ((flags & 64) > 0) {
        component.xScale = p.parseF2Dot14();
        component.yScale = p.parseF2Dot14();
      } else if ((flags & 128) > 0) {
        component.xScale = p.parseF2Dot14();
        component.scale01 = p.parseF2Dot14();
        component.scale10 = p.parseF2Dot14();
        component.yScale = p.parseF2Dot14();
      }
      glyph.components.push(component);
      moreComponents = !!(flags & 32);
    }
    if (flags & 256) {
      glyph.instructionLength = p.parseUShort();
      glyph.instructions = [];
      for (var i$6 = 0; i$6 < glyph.instructionLength; i$6 += 1) glyph.instructions.push(p.parseByte());
    }
  }
}
function transformPoints(points, transform) {
  var newPoints = [];
  for (var i = 0; i < points.length; i += 1) {
    var pt = points[i];
    var newPt = {
      x: transform.xScale * pt.x + transform.scale01 * pt.y + transform.dx,
      y: transform.scale10 * pt.x + transform.yScale * pt.y + transform.dy,
      onCurve: pt.onCurve,
      lastPointOfContour: pt.lastPointOfContour
    };
    newPoints.push(newPt);
  }
  return newPoints;
}
function getContours(points) {
  var contours = [];
  var currentContour = [];
  for (var i = 0; i < points.length; i += 1) {
    var pt = points[i];
    currentContour.push(pt);
    if (pt.lastPointOfContour) {
      contours.push(currentContour);
      currentContour = [];
    }
  }
  check.argument(currentContour.length === 0, "There are still points left in the current contour.");
  return contours;
}
function getPath(points) {
  var p = new Path();
  if (!points) return p;
  var contours = getContours(points);
  for (var contourIndex = 0; contourIndex < contours.length; ++contourIndex) {
    var contour = contours[contourIndex];
    var prev = null;
    var curr = contour[contour.length - 1];
    var next = contour[0];
    if (curr.onCurve) p.moveTo(curr.x, curr.y);
    else if (next.onCurve) p.moveTo(next.x, next.y);
    else {
      var start = {
        x: (curr.x + next.x) * 0.5,
        y: (curr.y + next.y) * 0.5
      };
      p.moveTo(start.x, start.y);
    }
    for (var i = 0; i < contour.length; ++i) {
      prev = curr;
      curr = next;
      next = contour[(i + 1) % contour.length];
      if (curr.onCurve) p.lineTo(curr.x, curr.y);
      else {
        var next2 = next;
        if (!prev.onCurve) (curr.x + prev.x) * 0.5, (curr.y + prev.y) * 0.5;
        if (!next.onCurve) next2 = {
          x: (curr.x + next.x) * 0.5,
          y: (curr.y + next.y) * 0.5
        };
        p.quadraticCurveTo(curr.x, curr.y, next2.x, next2.y);
      }
    }
    p.closePath();
  }
  return p;
}
function buildPath(glyphs, glyph) {
  if (glyph.isComposite) for (var j = 0; j < glyph.components.length; j += 1) {
    var component = glyph.components[j];
    var componentGlyph = glyphs.get(component.glyphIndex);
    componentGlyph.getPath();
    if (componentGlyph.points) {
      var transformedPoints = void 0;
      if (component.matchedPoints === void 0) transformedPoints = transformPoints(componentGlyph.points, component);
      else {
        if (component.matchedPoints[0] > glyph.points.length - 1 || component.matchedPoints[1] > componentGlyph.points.length - 1) throw Error("Matched points out of range in " + glyph.name);
        var firstPt = glyph.points[component.matchedPoints[0]];
        var secondPt = componentGlyph.points[component.matchedPoints[1]];
        var transform = {
          xScale: component.xScale,
          scale01: component.scale01,
          scale10: component.scale10,
          yScale: component.yScale,
          dx: 0,
          dy: 0
        };
        secondPt = transformPoints([secondPt], transform)[0];
        transform.dx = firstPt.x - secondPt.x;
        transform.dy = firstPt.y - secondPt.y;
        transformedPoints = transformPoints(componentGlyph.points, transform);
      }
      glyph.points = glyph.points.concat(transformedPoints);
    }
  }
  return getPath(glyph.points);
}
function parseGlyfTableAll(data, start, loca2, font) {
  var glyphs = new glyphset.GlyphSet(font);
  for (var i = 0; i < loca2.length - 1; i += 1) {
    var offset2 = loca2[i];
    if (offset2 !== loca2[i + 1]) glyphs.push(i, glyphset.ttfGlyphLoader(font, i, parseGlyph, data, start + offset2, buildPath));
    else glyphs.push(i, glyphset.glyphLoader(font, i));
  }
  return glyphs;
}
function parseGlyfTableOnLowMemory(data, start, loca2, font) {
  var glyphs = new glyphset.GlyphSet(font);
  font._push = function(i) {
    var offset2 = loca2[i];
    if (offset2 !== loca2[i + 1]) glyphs.push(i, glyphset.ttfGlyphLoader(font, i, parseGlyph, data, start + offset2, buildPath));
    else glyphs.push(i, glyphset.glyphLoader(font, i));
  };
  return glyphs;
}
function parseGlyfTable(data, start, loca2, font, opt) {
  if (opt.lowMemory) return parseGlyfTableOnLowMemory(data, start, loca2, font);
  else return parseGlyfTableAll(data, start, loca2, font);
}
var glyf = {
  getPath,
  parse: parseGlyfTable
};
var instructionTable;
var exec;
var execGlyph;
var execComponent;
function Hinting(font) {
  this.font = font;
  this.getCommands = function(hPoints) {
    return glyf.getPath(hPoints).commands;
  };
  this._fpgmState = this._prepState = void 0;
  this._errorState = 0;
}
function roundOff(v) {
  return v;
}
function roundToGrid(v) {
  return Math.sign(v) * Math.round(Math.abs(v));
}
function roundToDoubleGrid(v) {
  return Math.sign(v) * Math.round(Math.abs(v * 2)) / 2;
}
function roundToHalfGrid(v) {
  return Math.sign(v) * (Math.round(Math.abs(v) + 0.5) - 0.5);
}
function roundUpToGrid(v) {
  return Math.sign(v) * Math.ceil(Math.abs(v));
}
function roundDownToGrid(v) {
  return Math.sign(v) * Math.floor(Math.abs(v));
}
var roundSuper = function(v) {
  var period = this.srPeriod;
  var phase = this.srPhase;
  var threshold = this.srThreshold;
  var sign = 1;
  if (v < 0) {
    v = -v;
    sign = -1;
  }
  v += threshold - phase;
  v = Math.trunc(v / period) * period;
  v += phase;
  if (v < 0) return phase * sign;
  return v * sign;
};
var xUnitVector = {
  x: 1,
  y: 0,
  axis: "x",
  distance: function(p1, p2, o1, o2) {
    return (o1 ? p1.xo : p1.x) - (o2 ? p2.xo : p2.x);
  },
  interpolate: function(p, rp1, rp2, pv) {
    var do1;
    var do2;
    var doa1;
    var doa2;
    var dm1;
    var dm2;
    var dt;
    if (!pv || pv === this) {
      do1 = p.xo - rp1.xo;
      do2 = p.xo - rp2.xo;
      dm1 = rp1.x - rp1.xo;
      dm2 = rp2.x - rp2.xo;
      doa1 = Math.abs(do1);
      doa2 = Math.abs(do2);
      dt = doa1 + doa2;
      if (dt === 0) {
        p.x = p.xo + (dm1 + dm2) / 2;
        return;
      }
      p.x = p.xo + (dm1 * doa2 + dm2 * doa1) / dt;
      return;
    }
    do1 = pv.distance(p, rp1, true, true);
    do2 = pv.distance(p, rp2, true, true);
    dm1 = pv.distance(rp1, rp1, false, true);
    dm2 = pv.distance(rp2, rp2, false, true);
    doa1 = Math.abs(do1);
    doa2 = Math.abs(do2);
    dt = doa1 + doa2;
    if (dt === 0) {
      xUnitVector.setRelative(p, p, (dm1 + dm2) / 2, pv, true);
      return;
    }
    xUnitVector.setRelative(p, p, (dm1 * doa2 + dm2 * doa1) / dt, pv, true);
  },
  normalSlope: Number.NEGATIVE_INFINITY,
  setRelative: function(p, rp, d, pv, org) {
    if (!pv || pv === this) {
      p.x = (org ? rp.xo : rp.x) + d;
      return;
    }
    var rpx = org ? rp.xo : rp.x;
    var rpy = org ? rp.yo : rp.y;
    var rpdx = rpx + d * pv.x;
    var rpdy = rpy + d * pv.y;
    p.x = rpdx + (p.y - rpdy) / pv.normalSlope;
  },
  slope: 0,
  touch: function(p) {
    p.xTouched = true;
  },
  touched: function(p) {
    return p.xTouched;
  },
  untouch: function(p) {
    p.xTouched = false;
  }
};
var yUnitVector = {
  x: 0,
  y: 1,
  axis: "y",
  distance: function(p1, p2, o1, o2) {
    return (o1 ? p1.yo : p1.y) - (o2 ? p2.yo : p2.y);
  },
  interpolate: function(p, rp1, rp2, pv) {
    var do1;
    var do2;
    var doa1;
    var doa2;
    var dm1;
    var dm2;
    var dt;
    if (!pv || pv === this) {
      do1 = p.yo - rp1.yo;
      do2 = p.yo - rp2.yo;
      dm1 = rp1.y - rp1.yo;
      dm2 = rp2.y - rp2.yo;
      doa1 = Math.abs(do1);
      doa2 = Math.abs(do2);
      dt = doa1 + doa2;
      if (dt === 0) {
        p.y = p.yo + (dm1 + dm2) / 2;
        return;
      }
      p.y = p.yo + (dm1 * doa2 + dm2 * doa1) / dt;
      return;
    }
    do1 = pv.distance(p, rp1, true, true);
    do2 = pv.distance(p, rp2, true, true);
    dm1 = pv.distance(rp1, rp1, false, true);
    dm2 = pv.distance(rp2, rp2, false, true);
    doa1 = Math.abs(do1);
    doa2 = Math.abs(do2);
    dt = doa1 + doa2;
    if (dt === 0) {
      yUnitVector.setRelative(p, p, (dm1 + dm2) / 2, pv, true);
      return;
    }
    yUnitVector.setRelative(p, p, (dm1 * doa2 + dm2 * doa1) / dt, pv, true);
  },
  normalSlope: 0,
  setRelative: function(p, rp, d, pv, org) {
    if (!pv || pv === this) {
      p.y = (org ? rp.yo : rp.y) + d;
      return;
    }
    var rpx = org ? rp.xo : rp.x;
    var rpy = org ? rp.yo : rp.y;
    var rpdx = rpx + d * pv.x;
    p.y = rpy + d * pv.y + pv.normalSlope * (p.x - rpdx);
  },
  slope: Number.POSITIVE_INFINITY,
  touch: function(p) {
    p.yTouched = true;
  },
  touched: function(p) {
    return p.yTouched;
  },
  untouch: function(p) {
    p.yTouched = false;
  }
};
Object.freeze(xUnitVector);
Object.freeze(yUnitVector);
function UnitVector(x, y) {
  this.x = x;
  this.y = y;
  this.axis = void 0;
  this.slope = y / x;
  this.normalSlope = -x / y;
  Object.freeze(this);
}
UnitVector.prototype.distance = function(p1, p2, o1, o2) {
  return this.x * xUnitVector.distance(p1, p2, o1, o2) + this.y * yUnitVector.distance(p1, p2, o1, o2);
};
UnitVector.prototype.interpolate = function(p, rp1, rp2, pv) {
  var dm1;
  var dm2;
  var do1;
  var do2;
  var doa1;
  var doa2;
  var dt;
  do1 = pv.distance(p, rp1, true, true);
  do2 = pv.distance(p, rp2, true, true);
  dm1 = pv.distance(rp1, rp1, false, true);
  dm2 = pv.distance(rp2, rp2, false, true);
  doa1 = Math.abs(do1);
  doa2 = Math.abs(do2);
  dt = doa1 + doa2;
  if (dt === 0) {
    this.setRelative(p, p, (dm1 + dm2) / 2, pv, true);
    return;
  }
  this.setRelative(p, p, (dm1 * doa2 + dm2 * doa1) / dt, pv, true);
};
UnitVector.prototype.setRelative = function(p, rp, d, pv, org) {
  pv = pv || this;
  var rpx = org ? rp.xo : rp.x;
  var rpy = org ? rp.yo : rp.y;
  var rpdx = rpx + d * pv.x;
  var rpdy = rpy + d * pv.y;
  var pvns = pv.normalSlope;
  var fvs = this.slope;
  var px = p.x;
  var py = p.y;
  p.x = (fvs * px - pvns * rpdx + rpdy - py) / (fvs - pvns);
  p.y = fvs * (p.x - px) + py;
};
UnitVector.prototype.touch = function(p) {
  p.xTouched = true;
  p.yTouched = true;
};
function getUnitVector(x, y) {
  var d = Math.sqrt(x * x + y * y);
  x /= d;
  y /= d;
  if (x === 1 && y === 0) return xUnitVector;
  else if (x === 0 && y === 1) return yUnitVector;
  else return new UnitVector(x, y);
}
function HPoint(x, y, lastPointOfContour, onCurve) {
  this.x = this.xo = Math.round(x * 64) / 64;
  this.y = this.yo = Math.round(y * 64) / 64;
  this.lastPointOfContour = lastPointOfContour;
  this.onCurve = onCurve;
  this.prevPointOnContour = void 0;
  this.nextPointOnContour = void 0;
  this.xTouched = false;
  this.yTouched = false;
  Object.preventExtensions(this);
}
HPoint.prototype.nextTouched = function(v) {
  var p = this.nextPointOnContour;
  while (!v.touched(p) && p !== this) p = p.nextPointOnContour;
  return p;
};
HPoint.prototype.prevTouched = function(v) {
  var p = this.prevPointOnContour;
  while (!v.touched(p) && p !== this) p = p.prevPointOnContour;
  return p;
};
var HPZero = Object.freeze(new HPoint(0, 0));
var defaultState = {
  cvCutIn: 17 / 16,
  deltaBase: 9,
  deltaShift: 0.125,
  loop: 1,
  minDis: 1,
  autoFlip: true
};
function State(env, prog) {
  this.env = env;
  this.stack = [];
  this.prog = prog;
  switch (env) {
    case "glyf":
      this.zp0 = this.zp1 = this.zp2 = 1;
      this.rp0 = this.rp1 = this.rp2 = 0;
    case "prep":
      this.fv = this.pv = this.dpv = xUnitVector;
      this.round = roundToGrid;
  }
}
Hinting.prototype.exec = function(glyph, ppem) {
  if (typeof ppem !== "number") throw new Error("Point size is not a number!");
  if (this._errorState > 2) return;
  var font = this.font;
  var prepState = this._prepState;
  if (!prepState || prepState.ppem !== ppem) {
    var fpgmState = this._fpgmState;
    if (!fpgmState) {
      State.prototype = defaultState;
      fpgmState = this._fpgmState = new State("fpgm", font.tables.fpgm);
      fpgmState.funcs = [];
      fpgmState.font = font;
      if (exports.DEBUG) {
        console.log("---EXEC FPGM---");
        fpgmState.step = -1;
      }
      try {
        exec(fpgmState);
      } catch (e) {
        console.log("Hinting error in FPGM:" + e);
        this._errorState = 3;
        return;
      }
    }
    State.prototype = fpgmState;
    prepState = this._prepState = new State("prep", font.tables.prep);
    prepState.ppem = ppem;
    var oCvt = font.tables.cvt;
    if (oCvt) {
      var cvt = prepState.cvt = new Array(oCvt.length);
      var scale2 = ppem / font.unitsPerEm;
      for (var c = 0; c < oCvt.length; c++) cvt[c] = oCvt[c] * scale2;
    } else prepState.cvt = [];
    if (exports.DEBUG) {
      console.log("---EXEC PREP---");
      prepState.step = -1;
    }
    try {
      exec(prepState);
    } catch (e) {
      if (this._errorState < 2) console.log("Hinting error in PREP:" + e);
      this._errorState = 2;
    }
  }
  if (this._errorState > 1) return;
  try {
    return execGlyph(glyph, prepState);
  } catch (e) {
    if (this._errorState < 1) {
      console.log("Hinting error:" + e);
      console.log("Note: further hinting errors are silenced");
    }
    this._errorState = 1;
    return;
  }
};
execGlyph = function(glyph, prepState) {
  var xScale = prepState.ppem / prepState.font.unitsPerEm;
  var yScale = xScale;
  var components = glyph.components;
  var contours;
  var gZone;
  var state;
  State.prototype = prepState;
  if (!components) {
    state = new State("glyf", glyph.instructions);
    if (exports.DEBUG) {
      console.log("---EXEC GLYPH---");
      state.step = -1;
    }
    execComponent(glyph, state, xScale, yScale);
    gZone = state.gZone;
  } else {
    var font = prepState.font;
    gZone = [];
    contours = [];
    for (var i = 0; i < components.length; i++) {
      var c = components[i];
      var cg = font.glyphs.get(c.glyphIndex);
      state = new State("glyf", cg.instructions);
      if (exports.DEBUG) {
        console.log("---EXEC COMP " + i + "---");
        state.step = -1;
      }
      execComponent(cg, state, xScale, yScale);
      var dx = Math.round(c.dx * xScale);
      var dy = Math.round(c.dy * yScale);
      var gz = state.gZone;
      var cc = state.contours;
      for (var pi = 0; pi < gz.length; pi++) {
        var p = gz[pi];
        p.xTouched = p.yTouched = false;
        p.xo = p.x = p.x + dx;
        p.yo = p.y = p.y + dy;
      }
      var gLen = gZone.length;
      gZone.push.apply(gZone, gz);
      for (var j = 0; j < cc.length; j++) contours.push(cc[j] + gLen);
    }
    if (glyph.instructions && !state.inhibitGridFit) {
      state = new State("glyf", glyph.instructions);
      state.gZone = state.z0 = state.z1 = state.z2 = gZone;
      state.contours = contours;
      gZone.push(new HPoint(0, 0), new HPoint(Math.round(glyph.advanceWidth * xScale), 0));
      if (exports.DEBUG) {
        console.log("---EXEC COMPOSITE---");
        state.step = -1;
      }
      exec(state);
      gZone.length -= 2;
    }
  }
  return gZone;
};
execComponent = function(glyph, state, xScale, yScale) {
  var points = glyph.points || [];
  var pLen = points.length;
  var gZone = state.gZone = state.z0 = state.z1 = state.z2 = [];
  var contours = state.contours = [];
  var cp;
  for (var i = 0; i < pLen; i++) {
    cp = points[i];
    gZone[i] = new HPoint(cp.x * xScale, cp.y * yScale, cp.lastPointOfContour, cp.onCurve);
  }
  var sp;
  var np;
  for (var i$1 = 0; i$1 < pLen; i$1++) {
    cp = gZone[i$1];
    if (!sp) {
      sp = cp;
      contours.push(i$1);
    }
    if (cp.lastPointOfContour) {
      cp.nextPointOnContour = sp;
      sp.prevPointOnContour = cp;
      sp = void 0;
    } else {
      np = gZone[i$1 + 1];
      cp.nextPointOnContour = np;
      np.prevPointOnContour = cp;
    }
  }
  if (state.inhibitGridFit) return;
  if (exports.DEBUG) {
    console.log("PROCESSING GLYPH", state.stack);
    for (var i$2 = 0; i$2 < pLen; i$2++) console.log(i$2, gZone[i$2].x, gZone[i$2].y);
  }
  gZone.push(new HPoint(0, 0), new HPoint(Math.round(glyph.advanceWidth * xScale), 0));
  exec(state);
  gZone.length -= 2;
  if (exports.DEBUG) {
    console.log("FINISHED GLYPH", state.stack);
    for (var i$3 = 0; i$3 < pLen; i$3++) console.log(i$3, gZone[i$3].x, gZone[i$3].y);
  }
};
exec = function(state) {
  var prog = state.prog;
  if (!prog) return;
  var pLen = prog.length;
  var ins;
  for (state.ip = 0; state.ip < pLen; state.ip++) {
    if (exports.DEBUG) state.step++;
    ins = instructionTable[prog[state.ip]];
    if (!ins) throw new Error("unknown instruction: 0x" + Number(prog[state.ip]).toString(16));
    ins(state);
  }
};
function initTZone(state) {
  var tZone = state.tZone = new Array(state.gZone.length);
  for (var i = 0; i < tZone.length; i++) tZone[i] = new HPoint(0, 0);
}
function skip(state, handleElse) {
  var prog = state.prog;
  var ip = state.ip;
  var nesting = 1;
  var ins;
  do {
    ins = prog[++ip];
    if (ins === 88) nesting++;
    else if (ins === 89) nesting--;
    else if (ins === 64) ip += prog[ip + 1] + 1;
    else if (ins === 65) ip += 2 * prog[ip + 1] + 1;
    else if (ins >= 176 && ins <= 183) ip += ins - 176 + 1;
    else if (ins >= 184 && ins <= 191) ip += (ins - 184 + 1) * 2;
    else if (handleElse && nesting === 1 && ins === 27) break;
  } while (nesting > 0);
  state.ip = ip;
}
function SVTCA(v, state) {
  if (exports.DEBUG) console.log(state.step, "SVTCA[" + v.axis + "]");
  state.fv = state.pv = state.dpv = v;
}
function SPVTCA(v, state) {
  if (exports.DEBUG) console.log(state.step, "SPVTCA[" + v.axis + "]");
  state.pv = state.dpv = v;
}
function SFVTCA(v, state) {
  if (exports.DEBUG) console.log(state.step, "SFVTCA[" + v.axis + "]");
  state.fv = v;
}
function SPVTL(a, state) {
  var stack = state.stack;
  var p2i = stack.pop();
  var p1i = stack.pop();
  var p2 = state.z2[p2i];
  var p1 = state.z1[p1i];
  if (exports.DEBUG) console.log("SPVTL[" + a + "]", p2i, p1i);
  var dx;
  var dy;
  if (!a) {
    dx = p1.x - p2.x;
    dy = p1.y - p2.y;
  } else {
    dx = p2.y - p1.y;
    dy = p1.x - p2.x;
  }
  state.pv = state.dpv = getUnitVector(dx, dy);
}
function SFVTL(a, state) {
  var stack = state.stack;
  var p2i = stack.pop();
  var p1i = stack.pop();
  var p2 = state.z2[p2i];
  var p1 = state.z1[p1i];
  if (exports.DEBUG) console.log("SFVTL[" + a + "]", p2i, p1i);
  var dx;
  var dy;
  if (!a) {
    dx = p1.x - p2.x;
    dy = p1.y - p2.y;
  } else {
    dx = p2.y - p1.y;
    dy = p1.x - p2.x;
  }
  state.fv = getUnitVector(dx, dy);
}
function SPVFS(state) {
  var stack = state.stack;
  var y = stack.pop();
  var x = stack.pop();
  if (exports.DEBUG) console.log(state.step, "SPVFS[]", y, x);
  state.pv = state.dpv = getUnitVector(x, y);
}
function SFVFS(state) {
  var stack = state.stack;
  var y = stack.pop();
  var x = stack.pop();
  if (exports.DEBUG) console.log(state.step, "SPVFS[]", y, x);
  state.fv = getUnitVector(x, y);
}
function GPV(state) {
  var stack = state.stack;
  var pv = state.pv;
  if (exports.DEBUG) console.log(state.step, "GPV[]");
  stack.push(pv.x * 16384);
  stack.push(pv.y * 16384);
}
function GFV(state) {
  var stack = state.stack;
  var fv = state.fv;
  if (exports.DEBUG) console.log(state.step, "GFV[]");
  stack.push(fv.x * 16384);
  stack.push(fv.y * 16384);
}
function SFVTPV(state) {
  state.fv = state.pv;
  if (exports.DEBUG) console.log(state.step, "SFVTPV[]");
}
function ISECT(state) {
  var stack = state.stack;
  var pa0i = stack.pop();
  var pa1i = stack.pop();
  var pb0i = stack.pop();
  var pb1i = stack.pop();
  var pi = stack.pop();
  var z0 = state.z0;
  var z1 = state.z1;
  var pa0 = z0[pa0i];
  var pa1 = z0[pa1i];
  var pb0 = z1[pb0i];
  var pb1 = z1[pb1i];
  var p = state.z2[pi];
  if (exports.DEBUG) console.log("ISECT[], ", pa0i, pa1i, pb0i, pb1i, pi);
  var x1 = pa0.x;
  var y1 = pa0.y;
  var x2 = pa1.x;
  var y2 = pa1.y;
  var x3 = pb0.x;
  var y3 = pb0.y;
  var x4 = pb1.x;
  var y4 = pb1.y;
  var div = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
  var f1 = x1 * y2 - y1 * x2;
  var f2 = x3 * y4 - y3 * x4;
  p.x = (f1 * (x3 - x4) - f2 * (x1 - x2)) / div;
  p.y = (f1 * (y3 - y4) - f2 * (y1 - y2)) / div;
}
function SRP0(state) {
  state.rp0 = state.stack.pop();
  if (exports.DEBUG) console.log(state.step, "SRP0[]", state.rp0);
}
function SRP1(state) {
  state.rp1 = state.stack.pop();
  if (exports.DEBUG) console.log(state.step, "SRP1[]", state.rp1);
}
function SRP2(state) {
  state.rp2 = state.stack.pop();
  if (exports.DEBUG) console.log(state.step, "SRP2[]", state.rp2);
}
function SZP0(state) {
  var n = state.stack.pop();
  if (exports.DEBUG) console.log(state.step, "SZP0[]", n);
  state.zp0 = n;
  switch (n) {
    case 0:
      if (!state.tZone) initTZone(state);
      state.z0 = state.tZone;
      break;
    case 1:
      state.z0 = state.gZone;
      break;
    default:
      throw new Error("Invalid zone pointer");
  }
}
function SZP1(state) {
  var n = state.stack.pop();
  if (exports.DEBUG) console.log(state.step, "SZP1[]", n);
  state.zp1 = n;
  switch (n) {
    case 0:
      if (!state.tZone) initTZone(state);
      state.z1 = state.tZone;
      break;
    case 1:
      state.z1 = state.gZone;
      break;
    default:
      throw new Error("Invalid zone pointer");
  }
}
function SZP2(state) {
  var n = state.stack.pop();
  if (exports.DEBUG) console.log(state.step, "SZP2[]", n);
  state.zp2 = n;
  switch (n) {
    case 0:
      if (!state.tZone) initTZone(state);
      state.z2 = state.tZone;
      break;
    case 1:
      state.z2 = state.gZone;
      break;
    default:
      throw new Error("Invalid zone pointer");
  }
}
function SZPS(state) {
  var n = state.stack.pop();
  if (exports.DEBUG) console.log(state.step, "SZPS[]", n);
  state.zp0 = state.zp1 = state.zp2 = n;
  switch (n) {
    case 0:
      if (!state.tZone) initTZone(state);
      state.z0 = state.z1 = state.z2 = state.tZone;
      break;
    case 1:
      state.z0 = state.z1 = state.z2 = state.gZone;
      break;
    default:
      throw new Error("Invalid zone pointer");
  }
}
function SLOOP(state) {
  state.loop = state.stack.pop();
  if (exports.DEBUG) console.log(state.step, "SLOOP[]", state.loop);
}
function RTG(state) {
  if (exports.DEBUG) console.log(state.step, "RTG[]");
  state.round = roundToGrid;
}
function RTHG(state) {
  if (exports.DEBUG) console.log(state.step, "RTHG[]");
  state.round = roundToHalfGrid;
}
function SMD(state) {
  var d = state.stack.pop();
  if (exports.DEBUG) console.log(state.step, "SMD[]", d);
  state.minDis = d / 64;
}
function ELSE(state) {
  if (exports.DEBUG) console.log(state.step, "ELSE[]");
  skip(state, false);
}
function JMPR(state) {
  var o = state.stack.pop();
  if (exports.DEBUG) console.log(state.step, "JMPR[]", o);
  state.ip += o - 1;
}
function SCVTCI(state) {
  var n = state.stack.pop();
  if (exports.DEBUG) console.log(state.step, "SCVTCI[]", n);
  state.cvCutIn = n / 64;
}
function DUP(state) {
  var stack = state.stack;
  if (exports.DEBUG) console.log(state.step, "DUP[]");
  stack.push(stack[stack.length - 1]);
}
function POP(state) {
  if (exports.DEBUG) console.log(state.step, "POP[]");
  state.stack.pop();
}
function CLEAR(state) {
  if (exports.DEBUG) console.log(state.step, "CLEAR[]");
  state.stack.length = 0;
}
function SWAP(state) {
  var stack = state.stack;
  var a = stack.pop();
  var b = stack.pop();
  if (exports.DEBUG) console.log(state.step, "SWAP[]");
  stack.push(a);
  stack.push(b);
}
function DEPTH(state) {
  var stack = state.stack;
  if (exports.DEBUG) console.log(state.step, "DEPTH[]");
  stack.push(stack.length);
}
function LOOPCALL(state) {
  var stack = state.stack;
  var fn = stack.pop();
  var c = stack.pop();
  if (exports.DEBUG) console.log(state.step, "LOOPCALL[]", fn, c);
  var cip = state.ip;
  var cprog = state.prog;
  state.prog = state.funcs[fn];
  for (var i = 0; i < c; i++) {
    exec(state);
    if (exports.DEBUG) console.log(++state.step, i + 1 < c ? "next loopcall" : "done loopcall", i);
  }
  state.ip = cip;
  state.prog = cprog;
}
function CALL(state) {
  var fn = state.stack.pop();
  if (exports.DEBUG) console.log(state.step, "CALL[]", fn);
  var cip = state.ip;
  var cprog = state.prog;
  state.prog = state.funcs[fn];
  exec(state);
  state.ip = cip;
  state.prog = cprog;
  if (exports.DEBUG) console.log(++state.step, "returning from", fn);
}
function CINDEX(state) {
  var stack = state.stack;
  var k = stack.pop();
  if (exports.DEBUG) console.log(state.step, "CINDEX[]", k);
  stack.push(stack[stack.length - k]);
}
function MINDEX(state) {
  var stack = state.stack;
  var k = stack.pop();
  if (exports.DEBUG) console.log(state.step, "MINDEX[]", k);
  stack.push(stack.splice(stack.length - k, 1)[0]);
}
function FDEF(state) {
  if (state.env !== "fpgm") throw new Error("FDEF not allowed here");
  var stack = state.stack;
  var prog = state.prog;
  var ip = state.ip;
  var fn = stack.pop();
  var ipBegin = ip;
  if (exports.DEBUG) console.log(state.step, "FDEF[]", fn);
  while (prog[++ip] !== 45) ;
  state.ip = ip;
  state.funcs[fn] = prog.slice(ipBegin + 1, ip);
}
function MDAP(round, state) {
  var pi = state.stack.pop();
  var p = state.z0[pi];
  var fv = state.fv;
  var pv = state.pv;
  if (exports.DEBUG) console.log(state.step, "MDAP[" + round + "]", pi);
  var d = pv.distance(p, HPZero);
  if (round) d = state.round(d);
  fv.setRelative(p, HPZero, d, pv);
  fv.touch(p);
  state.rp0 = state.rp1 = pi;
}
function IUP(v, state) {
  var z2 = state.z2;
  var pLen = z2.length - 2;
  var cp;
  var pp;
  var np;
  if (exports.DEBUG) console.log(state.step, "IUP[" + v.axis + "]");
  for (var i = 0; i < pLen; i++) {
    cp = z2[i];
    if (v.touched(cp)) continue;
    pp = cp.prevTouched(v);
    if (pp === cp) continue;
    np = cp.nextTouched(v);
    if (pp === np) v.setRelative(cp, cp, v.distance(pp, pp, false, true), v, true);
    v.interpolate(cp, pp, np, v);
  }
}
function SHP(a, state) {
  var stack = state.stack;
  var rpi = a ? state.rp1 : state.rp2;
  var rp = (a ? state.z0 : state.z1)[rpi];
  var fv = state.fv;
  var pv = state.pv;
  var loop = state.loop;
  var z2 = state.z2;
  while (loop--) {
    var pi = stack.pop();
    var p = z2[pi];
    var d = pv.distance(rp, rp, false, true);
    fv.setRelative(p, p, d, pv);
    fv.touch(p);
    if (exports.DEBUG) console.log(state.step, (state.loop > 1 ? "loop " + (state.loop - loop) + ": " : "") + "SHP[" + (a ? "rp1" : "rp2") + "]", pi);
  }
  state.loop = 1;
}
function SHC(a, state) {
  var stack = state.stack;
  var rpi = a ? state.rp1 : state.rp2;
  var rp = (a ? state.z0 : state.z1)[rpi];
  var fv = state.fv;
  var pv = state.pv;
  var ci = stack.pop();
  var sp = state.z2[state.contours[ci]];
  var p = sp;
  if (exports.DEBUG) console.log(state.step, "SHC[" + a + "]", ci);
  var d = pv.distance(rp, rp, false, true);
  do {
    if (p !== rp) fv.setRelative(p, p, d, pv);
    p = p.nextPointOnContour;
  } while (p !== sp);
}
function SHZ(a, state) {
  var stack = state.stack;
  var rpi = a ? state.rp1 : state.rp2;
  var rp = (a ? state.z0 : state.z1)[rpi];
  var fv = state.fv;
  var pv = state.pv;
  var e = stack.pop();
  if (exports.DEBUG) console.log(state.step, "SHZ[" + a + "]", e);
  var z;
  switch (e) {
    case 0:
      z = state.tZone;
      break;
    case 1:
      z = state.gZone;
      break;
    default:
      throw new Error("Invalid zone");
  }
  var p;
  var d = pv.distance(rp, rp, false, true);
  var pLen = z.length - 2;
  for (var i = 0; i < pLen; i++) {
    p = z[i];
    fv.setRelative(p, p, d, pv);
  }
}
function SHPIX(state) {
  var stack = state.stack;
  var loop = state.loop;
  var fv = state.fv;
  var d = stack.pop() / 64;
  var z2 = state.z2;
  while (loop--) {
    var pi = stack.pop();
    var p = z2[pi];
    if (exports.DEBUG) console.log(state.step, (state.loop > 1 ? "loop " + (state.loop - loop) + ": " : "") + "SHPIX[]", pi, d);
    fv.setRelative(p, p, d);
    fv.touch(p);
  }
  state.loop = 1;
}
function IP(state) {
  var stack = state.stack;
  var rp1i = state.rp1;
  var rp2i = state.rp2;
  var loop = state.loop;
  var rp1 = state.z0[rp1i];
  var rp2 = state.z1[rp2i];
  var fv = state.fv;
  var pv = state.dpv;
  var z2 = state.z2;
  while (loop--) {
    var pi = stack.pop();
    var p = z2[pi];
    if (exports.DEBUG) console.log(state.step, (state.loop > 1 ? "loop " + (state.loop - loop) + ": " : "") + "IP[]", pi, rp1i, "<->", rp2i);
    fv.interpolate(p, rp1, rp2, pv);
    fv.touch(p);
  }
  state.loop = 1;
}
function MSIRP(a, state) {
  var stack = state.stack;
  var d = stack.pop() / 64;
  var pi = stack.pop();
  var p = state.z1[pi];
  var rp0 = state.z0[state.rp0];
  var fv = state.fv;
  var pv = state.pv;
  fv.setRelative(p, rp0, d, pv);
  fv.touch(p);
  if (exports.DEBUG) console.log(state.step, "MSIRP[" + a + "]", d, pi);
  state.rp1 = state.rp0;
  state.rp2 = pi;
  if (a) state.rp0 = pi;
}
function ALIGNRP(state) {
  var stack = state.stack;
  var rp0i = state.rp0;
  var rp0 = state.z0[rp0i];
  var loop = state.loop;
  var fv = state.fv;
  var pv = state.pv;
  var z1 = state.z1;
  while (loop--) {
    var pi = stack.pop();
    var p = z1[pi];
    if (exports.DEBUG) console.log(state.step, (state.loop > 1 ? "loop " + (state.loop - loop) + ": " : "") + "ALIGNRP[]", pi);
    fv.setRelative(p, rp0, 0, pv);
    fv.touch(p);
  }
  state.loop = 1;
}
function RTDG(state) {
  if (exports.DEBUG) console.log(state.step, "RTDG[]");
  state.round = roundToDoubleGrid;
}
function MIAP(round, state) {
  var stack = state.stack;
  var n = stack.pop();
  var pi = stack.pop();
  var p = state.z0[pi];
  var fv = state.fv;
  var pv = state.pv;
  var cv = state.cvt[n];
  if (exports.DEBUG) console.log(state.step, "MIAP[" + round + "]", n, "(", cv, ")", pi);
  var d = pv.distance(p, HPZero);
  if (round) {
    if (Math.abs(d - cv) < state.cvCutIn) d = cv;
    d = state.round(d);
  }
  fv.setRelative(p, HPZero, d, pv);
  if (state.zp0 === 0) {
    p.xo = p.x;
    p.yo = p.y;
  }
  fv.touch(p);
  state.rp0 = state.rp1 = pi;
}
function NPUSHB(state) {
  var prog = state.prog;
  var ip = state.ip;
  var stack = state.stack;
  var n = prog[++ip];
  if (exports.DEBUG) console.log(state.step, "NPUSHB[]", n);
  for (var i = 0; i < n; i++) stack.push(prog[++ip]);
  state.ip = ip;
}
function NPUSHW(state) {
  var ip = state.ip;
  var prog = state.prog;
  var stack = state.stack;
  var n = prog[++ip];
  if (exports.DEBUG) console.log(state.step, "NPUSHW[]", n);
  for (var i = 0; i < n; i++) {
    var w = prog[++ip] << 8 | prog[++ip];
    if (w & 32768) w = -((w ^ 65535) + 1);
    stack.push(w);
  }
  state.ip = ip;
}
function WS(state) {
  var stack = state.stack;
  var store = state.store;
  if (!store) store = state.store = [];
  var v = stack.pop();
  var l = stack.pop();
  if (exports.DEBUG) console.log(state.step, "WS", v, l);
  store[l] = v;
}
function RS(state) {
  var stack = state.stack;
  var store = state.store;
  var l = stack.pop();
  if (exports.DEBUG) console.log(state.step, "RS", l);
  var v = store && store[l] || 0;
  stack.push(v);
}
function WCVTP(state) {
  var stack = state.stack;
  var v = stack.pop();
  var l = stack.pop();
  if (exports.DEBUG) console.log(state.step, "WCVTP", v, l);
  state.cvt[l] = v / 64;
}
function RCVT(state) {
  var stack = state.stack;
  var cvte = stack.pop();
  if (exports.DEBUG) console.log(state.step, "RCVT", cvte);
  stack.push(state.cvt[cvte] * 64);
}
function GC(a, state) {
  var stack = state.stack;
  var pi = stack.pop();
  var p = state.z2[pi];
  if (exports.DEBUG) console.log(state.step, "GC[" + a + "]", pi);
  stack.push(state.dpv.distance(p, HPZero, a, false) * 64);
}
function MD(a, state) {
  var stack = state.stack;
  var pi2 = stack.pop();
  var pi1 = stack.pop();
  var p2 = state.z1[pi2];
  var p1 = state.z0[pi1];
  var d = state.dpv.distance(p1, p2, a, a);
  if (exports.DEBUG) console.log(state.step, "MD[" + a + "]", pi2, pi1, "->", d);
  state.stack.push(Math.round(d * 64));
}
function MPPEM(state) {
  if (exports.DEBUG) console.log(state.step, "MPPEM[]");
  state.stack.push(state.ppem);
}
function FLIPON(state) {
  if (exports.DEBUG) console.log(state.step, "FLIPON[]");
  state.autoFlip = true;
}
function LT(state) {
  var stack = state.stack;
  var e2 = stack.pop();
  var e1 = stack.pop();
  if (exports.DEBUG) console.log(state.step, "LT[]", e2, e1);
  stack.push(e1 < e2 ? 1 : 0);
}
function LTEQ(state) {
  var stack = state.stack;
  var e2 = stack.pop();
  var e1 = stack.pop();
  if (exports.DEBUG) console.log(state.step, "LTEQ[]", e2, e1);
  stack.push(e1 <= e2 ? 1 : 0);
}
function GT(state) {
  var stack = state.stack;
  var e2 = stack.pop();
  var e1 = stack.pop();
  if (exports.DEBUG) console.log(state.step, "GT[]", e2, e1);
  stack.push(e1 > e2 ? 1 : 0);
}
function GTEQ(state) {
  var stack = state.stack;
  var e2 = stack.pop();
  var e1 = stack.pop();
  if (exports.DEBUG) console.log(state.step, "GTEQ[]", e2, e1);
  stack.push(e1 >= e2 ? 1 : 0);
}
function EQ(state) {
  var stack = state.stack;
  var e2 = stack.pop();
  var e1 = stack.pop();
  if (exports.DEBUG) console.log(state.step, "EQ[]", e2, e1);
  stack.push(e2 === e1 ? 1 : 0);
}
function NEQ(state) {
  var stack = state.stack;
  var e2 = stack.pop();
  var e1 = stack.pop();
  if (exports.DEBUG) console.log(state.step, "NEQ[]", e2, e1);
  stack.push(e2 !== e1 ? 1 : 0);
}
function ODD(state) {
  var stack = state.stack;
  var n = stack.pop();
  if (exports.DEBUG) console.log(state.step, "ODD[]", n);
  stack.push(Math.trunc(n) % 2 ? 1 : 0);
}
function EVEN(state) {
  var stack = state.stack;
  var n = stack.pop();
  if (exports.DEBUG) console.log(state.step, "EVEN[]", n);
  stack.push(Math.trunc(n) % 2 ? 0 : 1);
}
function IF(state) {
  var test = state.stack.pop();
  if (exports.DEBUG) console.log(state.step, "IF[]", test);
  if (!test) {
    skip(state, true);
    if (exports.DEBUG) console.log(state.step, "EIF[]");
  }
}
function EIF(state) {
  if (exports.DEBUG) console.log(state.step, "EIF[]");
}
function AND(state) {
  var stack = state.stack;
  var e2 = stack.pop();
  var e1 = stack.pop();
  if (exports.DEBUG) console.log(state.step, "AND[]", e2, e1);
  stack.push(e2 && e1 ? 1 : 0);
}
function OR(state) {
  var stack = state.stack;
  var e2 = stack.pop();
  var e1 = stack.pop();
  if (exports.DEBUG) console.log(state.step, "OR[]", e2, e1);
  stack.push(e2 || e1 ? 1 : 0);
}
function NOT(state) {
  var stack = state.stack;
  var e = stack.pop();
  if (exports.DEBUG) console.log(state.step, "NOT[]", e);
  stack.push(e ? 0 : 1);
}
function DELTAP123(b, state) {
  var stack = state.stack;
  var n = stack.pop();
  var fv = state.fv;
  var pv = state.pv;
  var ppem = state.ppem;
  var base = state.deltaBase + (b - 1) * 16;
  var ds = state.deltaShift;
  var z0 = state.z0;
  if (exports.DEBUG) console.log(state.step, "DELTAP[" + b + "]", n, stack);
  for (var i = 0; i < n; i++) {
    var pi = stack.pop();
    var arg = stack.pop();
    if (base + ((arg & 240) >> 4) !== ppem) continue;
    var mag = (arg & 15) - 8;
    if (mag >= 0) mag++;
    if (exports.DEBUG) console.log(state.step, "DELTAPFIX", pi, "by", mag * ds);
    var p = z0[pi];
    fv.setRelative(p, p, mag * ds, pv);
  }
}
function SDB(state) {
  var n = state.stack.pop();
  if (exports.DEBUG) console.log(state.step, "SDB[]", n);
  state.deltaBase = n;
}
function SDS(state) {
  var n = state.stack.pop();
  if (exports.DEBUG) console.log(state.step, "SDS[]", n);
  state.deltaShift = Math.pow(0.5, n);
}
function ADD(state) {
  var stack = state.stack;
  var n2 = stack.pop();
  var n1 = stack.pop();
  if (exports.DEBUG) console.log(state.step, "ADD[]", n2, n1);
  stack.push(n1 + n2);
}
function SUB(state) {
  var stack = state.stack;
  var n2 = stack.pop();
  var n1 = stack.pop();
  if (exports.DEBUG) console.log(state.step, "SUB[]", n2, n1);
  stack.push(n1 - n2);
}
function DIV(state) {
  var stack = state.stack;
  var n2 = stack.pop();
  var n1 = stack.pop();
  if (exports.DEBUG) console.log(state.step, "DIV[]", n2, n1);
  stack.push(n1 * 64 / n2);
}
function MUL(state) {
  var stack = state.stack;
  var n2 = stack.pop();
  var n1 = stack.pop();
  if (exports.DEBUG) console.log(state.step, "MUL[]", n2, n1);
  stack.push(n1 * n2 / 64);
}
function ABS(state) {
  var stack = state.stack;
  var n = stack.pop();
  if (exports.DEBUG) console.log(state.step, "ABS[]", n);
  stack.push(Math.abs(n));
}
function NEG(state) {
  var stack = state.stack;
  var n = stack.pop();
  if (exports.DEBUG) console.log(state.step, "NEG[]", n);
  stack.push(-n);
}
function FLOOR(state) {
  var stack = state.stack;
  var n = stack.pop();
  if (exports.DEBUG) console.log(state.step, "FLOOR[]", n);
  stack.push(Math.floor(n / 64) * 64);
}
function CEILING(state) {
  var stack = state.stack;
  var n = stack.pop();
  if (exports.DEBUG) console.log(state.step, "CEILING[]", n);
  stack.push(Math.ceil(n / 64) * 64);
}
function ROUND(dt, state) {
  var stack = state.stack;
  var n = stack.pop();
  if (exports.DEBUG) console.log(state.step, "ROUND[]");
  stack.push(state.round(n / 64) * 64);
}
function WCVTF(state) {
  var stack = state.stack;
  var v = stack.pop();
  var l = stack.pop();
  if (exports.DEBUG) console.log(state.step, "WCVTF[]", v, l);
  state.cvt[l] = v * state.ppem / state.font.unitsPerEm;
}
function DELTAC123(b, state) {
  var stack = state.stack;
  var n = stack.pop();
  var ppem = state.ppem;
  var base = state.deltaBase + (b - 1) * 16;
  var ds = state.deltaShift;
  if (exports.DEBUG) console.log(state.step, "DELTAC[" + b + "]", n, stack);
  for (var i = 0; i < n; i++) {
    var c = stack.pop();
    var arg = stack.pop();
    if (base + ((arg & 240) >> 4) !== ppem) continue;
    var mag = (arg & 15) - 8;
    if (mag >= 0) mag++;
    var delta = mag * ds;
    if (exports.DEBUG) console.log(state.step, "DELTACFIX", c, "by", delta);
    state.cvt[c] += delta;
  }
}
function SROUND(state) {
  var n = state.stack.pop();
  if (exports.DEBUG) console.log(state.step, "SROUND[]", n);
  state.round = roundSuper;
  var period;
  switch (n & 192) {
    case 0:
      period = 0.5;
      break;
    case 64:
      period = 1;
      break;
    case 128:
      period = 2;
      break;
    default:
      throw new Error("invalid SROUND value");
  }
  state.srPeriod = period;
  switch (n & 48) {
    case 0:
      state.srPhase = 0;
      break;
    case 16:
      state.srPhase = 0.25 * period;
      break;
    case 32:
      state.srPhase = 0.5 * period;
      break;
    case 48:
      state.srPhase = 0.75 * period;
      break;
    default:
      throw new Error("invalid SROUND value");
  }
  n &= 15;
  if (n === 0) state.srThreshold = 0;
  else state.srThreshold = (n / 8 - 0.5) * period;
}
function S45ROUND(state) {
  var n = state.stack.pop();
  if (exports.DEBUG) console.log(state.step, "S45ROUND[]", n);
  state.round = roundSuper;
  var period;
  switch (n & 192) {
    case 0:
      period = Math.sqrt(2) / 2;
      break;
    case 64:
      period = Math.sqrt(2);
      break;
    case 128:
      period = 2 * Math.sqrt(2);
      break;
    default:
      throw new Error("invalid S45ROUND value");
  }
  state.srPeriod = period;
  switch (n & 48) {
    case 0:
      state.srPhase = 0;
      break;
    case 16:
      state.srPhase = 0.25 * period;
      break;
    case 32:
      state.srPhase = 0.5 * period;
      break;
    case 48:
      state.srPhase = 0.75 * period;
      break;
    default:
      throw new Error("invalid S45ROUND value");
  }
  n &= 15;
  if (n === 0) state.srThreshold = 0;
  else state.srThreshold = (n / 8 - 0.5) * period;
}
function ROFF(state) {
  if (exports.DEBUG) console.log(state.step, "ROFF[]");
  state.round = roundOff;
}
function RUTG(state) {
  if (exports.DEBUG) console.log(state.step, "RUTG[]");
  state.round = roundUpToGrid;
}
function RDTG(state) {
  if (exports.DEBUG) console.log(state.step, "RDTG[]");
  state.round = roundDownToGrid;
}
function SCANCTRL(state) {
  var n = state.stack.pop();
  if (exports.DEBUG) console.log(state.step, "SCANCTRL[]", n);
}
function SDPVTL(a, state) {
  var stack = state.stack;
  var p2i = stack.pop();
  var p1i = stack.pop();
  var p2 = state.z2[p2i];
  var p1 = state.z1[p1i];
  if (exports.DEBUG) console.log(state.step, "SDPVTL[" + a + "]", p2i, p1i);
  var dx;
  var dy;
  if (!a) {
    dx = p1.x - p2.x;
    dy = p1.y - p2.y;
  } else {
    dx = p2.y - p1.y;
    dy = p1.x - p2.x;
  }
  state.dpv = getUnitVector(dx, dy);
}
function GETINFO(state) {
  var stack = state.stack;
  var sel = stack.pop();
  var r = 0;
  if (exports.DEBUG) console.log(state.step, "GETINFO[]", sel);
  if (sel & 1) r = 35;
  if (sel & 32) r |= 4096;
  stack.push(r);
}
function ROLL(state) {
  var stack = state.stack;
  var a = stack.pop();
  var b = stack.pop();
  var c = stack.pop();
  if (exports.DEBUG) console.log(state.step, "ROLL[]");
  stack.push(b);
  stack.push(a);
  stack.push(c);
}
function MAX(state) {
  var stack = state.stack;
  var e2 = stack.pop();
  var e1 = stack.pop();
  if (exports.DEBUG) console.log(state.step, "MAX[]", e2, e1);
  stack.push(Math.max(e1, e2));
}
function MIN(state) {
  var stack = state.stack;
  var e2 = stack.pop();
  var e1 = stack.pop();
  if (exports.DEBUG) console.log(state.step, "MIN[]", e2, e1);
  stack.push(Math.min(e1, e2));
}
function SCANTYPE(state) {
  var n = state.stack.pop();
  if (exports.DEBUG) console.log(state.step, "SCANTYPE[]", n);
}
function INSTCTRL(state) {
  var s = state.stack.pop();
  var v = state.stack.pop();
  if (exports.DEBUG) console.log(state.step, "INSTCTRL[]", s, v);
  switch (s) {
    case 1:
      state.inhibitGridFit = !!v;
      return;
    case 2:
      state.ignoreCvt = !!v;
      return;
    default:
      throw new Error("invalid INSTCTRL[] selector");
  }
}
function PUSHB(n, state) {
  var stack = state.stack;
  var prog = state.prog;
  var ip = state.ip;
  if (exports.DEBUG) console.log(state.step, "PUSHB[" + n + "]");
  for (var i = 0; i < n; i++) stack.push(prog[++ip]);
  state.ip = ip;
}
function PUSHW(n, state) {
  var ip = state.ip;
  var prog = state.prog;
  var stack = state.stack;
  if (exports.DEBUG) console.log(state.ip, "PUSHW[" + n + "]");
  for (var i = 0; i < n; i++) {
    var w = prog[++ip] << 8 | prog[++ip];
    if (w & 32768) w = -((w ^ 65535) + 1);
    stack.push(w);
  }
  state.ip = ip;
}
function MDRP_MIRP(indirect, setRp0, keepD, ro, dt, state) {
  var stack = state.stack;
  var cvte = indirect && stack.pop();
  var pi = stack.pop();
  var rp0i = state.rp0;
  var rp = state.z0[rp0i];
  var p = state.z1[pi];
  var md = state.minDis;
  var fv = state.fv;
  var pv = state.dpv;
  var od;
  var d;
  var sign;
  var cv;
  d = od = pv.distance(p, rp, true, true);
  sign = d >= 0 ? 1 : -1;
  d = Math.abs(d);
  if (indirect) {
    cv = state.cvt[cvte];
    if (ro && Math.abs(d - cv) < state.cvCutIn) d = cv;
  }
  if (keepD && d < md) d = md;
  if (ro) d = state.round(d);
  fv.setRelative(p, rp, sign * d, pv);
  fv.touch(p);
  if (exports.DEBUG) console.log(state.step, (indirect ? "MIRP[" : "MDRP[") + (setRp0 ? "M" : "m") + (keepD ? ">" : "_") + (ro ? "R" : "_") + (dt === 0 ? "Gr" : dt === 1 ? "Bl" : dt === 2 ? "Wh" : "") + "]", indirect ? cvte + "(" + state.cvt[cvte] + "," + cv + ")" : "", pi, "(d =", od, "->", sign * d, ")");
  state.rp1 = state.rp0;
  state.rp2 = pi;
  if (setRp0) state.rp0 = pi;
}
instructionTable = [
  SVTCA.bind(void 0, yUnitVector),
  SVTCA.bind(void 0, xUnitVector),
  SPVTCA.bind(void 0, yUnitVector),
  SPVTCA.bind(void 0, xUnitVector),
  SFVTCA.bind(void 0, yUnitVector),
  SFVTCA.bind(void 0, xUnitVector),
  SPVTL.bind(void 0, 0),
  SPVTL.bind(void 0, 1),
  SFVTL.bind(void 0, 0),
  SFVTL.bind(void 0, 1),
  SPVFS,
  SFVFS,
  GPV,
  GFV,
  SFVTPV,
  ISECT,
  SRP0,
  SRP1,
  SRP2,
  SZP0,
  SZP1,
  SZP2,
  SZPS,
  SLOOP,
  RTG,
  RTHG,
  SMD,
  ELSE,
  JMPR,
  SCVTCI,
  void 0,
  void 0,
  DUP,
  POP,
  CLEAR,
  SWAP,
  DEPTH,
  CINDEX,
  MINDEX,
  void 0,
  void 0,
  void 0,
  LOOPCALL,
  CALL,
  FDEF,
  void 0,
  MDAP.bind(void 0, 0),
  MDAP.bind(void 0, 1),
  IUP.bind(void 0, yUnitVector),
  IUP.bind(void 0, xUnitVector),
  SHP.bind(void 0, 0),
  SHP.bind(void 0, 1),
  SHC.bind(void 0, 0),
  SHC.bind(void 0, 1),
  SHZ.bind(void 0, 0),
  SHZ.bind(void 0, 1),
  SHPIX,
  IP,
  MSIRP.bind(void 0, 0),
  MSIRP.bind(void 0, 1),
  ALIGNRP,
  RTDG,
  MIAP.bind(void 0, 0),
  MIAP.bind(void 0, 1),
  NPUSHB,
  NPUSHW,
  WS,
  RS,
  WCVTP,
  RCVT,
  GC.bind(void 0, 0),
  GC.bind(void 0, 1),
  void 0,
  MD.bind(void 0, 0),
  MD.bind(void 0, 1),
  MPPEM,
  void 0,
  FLIPON,
  void 0,
  void 0,
  LT,
  LTEQ,
  GT,
  GTEQ,
  EQ,
  NEQ,
  ODD,
  EVEN,
  IF,
  EIF,
  AND,
  OR,
  NOT,
  DELTAP123.bind(void 0, 1),
  SDB,
  SDS,
  ADD,
  SUB,
  DIV,
  MUL,
  ABS,
  NEG,
  FLOOR,
  CEILING,
  ROUND.bind(void 0, 0),
  ROUND.bind(void 0, 1),
  ROUND.bind(void 0, 2),
  ROUND.bind(void 0, 3),
  void 0,
  void 0,
  void 0,
  void 0,
  WCVTF,
  DELTAP123.bind(void 0, 2),
  DELTAP123.bind(void 0, 3),
  DELTAC123.bind(void 0, 1),
  DELTAC123.bind(void 0, 2),
  DELTAC123.bind(void 0, 3),
  SROUND,
  S45ROUND,
  void 0,
  void 0,
  ROFF,
  void 0,
  RUTG,
  RDTG,
  POP,
  POP,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  SCANCTRL,
  SDPVTL.bind(void 0, 0),
  SDPVTL.bind(void 0, 1),
  GETINFO,
  void 0,
  ROLL,
  MAX,
  MIN,
  SCANTYPE,
  INSTCTRL,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  PUSHB.bind(void 0, 1),
  PUSHB.bind(void 0, 2),
  PUSHB.bind(void 0, 3),
  PUSHB.bind(void 0, 4),
  PUSHB.bind(void 0, 5),
  PUSHB.bind(void 0, 6),
  PUSHB.bind(void 0, 7),
  PUSHB.bind(void 0, 8),
  PUSHW.bind(void 0, 1),
  PUSHW.bind(void 0, 2),
  PUSHW.bind(void 0, 3),
  PUSHW.bind(void 0, 4),
  PUSHW.bind(void 0, 5),
  PUSHW.bind(void 0, 6),
  PUSHW.bind(void 0, 7),
  PUSHW.bind(void 0, 8),
  MDRP_MIRP.bind(void 0, 0, 0, 0, 0, 0),
  MDRP_MIRP.bind(void 0, 0, 0, 0, 0, 1),
  MDRP_MIRP.bind(void 0, 0, 0, 0, 0, 2),
  MDRP_MIRP.bind(void 0, 0, 0, 0, 0, 3),
  MDRP_MIRP.bind(void 0, 0, 0, 0, 1, 0),
  MDRP_MIRP.bind(void 0, 0, 0, 0, 1, 1),
  MDRP_MIRP.bind(void 0, 0, 0, 0, 1, 2),
  MDRP_MIRP.bind(void 0, 0, 0, 0, 1, 3),
  MDRP_MIRP.bind(void 0, 0, 0, 1, 0, 0),
  MDRP_MIRP.bind(void 0, 0, 0, 1, 0, 1),
  MDRP_MIRP.bind(void 0, 0, 0, 1, 0, 2),
  MDRP_MIRP.bind(void 0, 0, 0, 1, 0, 3),
  MDRP_MIRP.bind(void 0, 0, 0, 1, 1, 0),
  MDRP_MIRP.bind(void 0, 0, 0, 1, 1, 1),
  MDRP_MIRP.bind(void 0, 0, 0, 1, 1, 2),
  MDRP_MIRP.bind(void 0, 0, 0, 1, 1, 3),
  MDRP_MIRP.bind(void 0, 0, 1, 0, 0, 0),
  MDRP_MIRP.bind(void 0, 0, 1, 0, 0, 1),
  MDRP_MIRP.bind(void 0, 0, 1, 0, 0, 2),
  MDRP_MIRP.bind(void 0, 0, 1, 0, 0, 3),
  MDRP_MIRP.bind(void 0, 0, 1, 0, 1, 0),
  MDRP_MIRP.bind(void 0, 0, 1, 0, 1, 1),
  MDRP_MIRP.bind(void 0, 0, 1, 0, 1, 2),
  MDRP_MIRP.bind(void 0, 0, 1, 0, 1, 3),
  MDRP_MIRP.bind(void 0, 0, 1, 1, 0, 0),
  MDRP_MIRP.bind(void 0, 0, 1, 1, 0, 1),
  MDRP_MIRP.bind(void 0, 0, 1, 1, 0, 2),
  MDRP_MIRP.bind(void 0, 0, 1, 1, 0, 3),
  MDRP_MIRP.bind(void 0, 0, 1, 1, 1, 0),
  MDRP_MIRP.bind(void 0, 0, 1, 1, 1, 1),
  MDRP_MIRP.bind(void 0, 0, 1, 1, 1, 2),
  MDRP_MIRP.bind(void 0, 0, 1, 1, 1, 3),
  MDRP_MIRP.bind(void 0, 1, 0, 0, 0, 0),
  MDRP_MIRP.bind(void 0, 1, 0, 0, 0, 1),
  MDRP_MIRP.bind(void 0, 1, 0, 0, 0, 2),
  MDRP_MIRP.bind(void 0, 1, 0, 0, 0, 3),
  MDRP_MIRP.bind(void 0, 1, 0, 0, 1, 0),
  MDRP_MIRP.bind(void 0, 1, 0, 0, 1, 1),
  MDRP_MIRP.bind(void 0, 1, 0, 0, 1, 2),
  MDRP_MIRP.bind(void 0, 1, 0, 0, 1, 3),
  MDRP_MIRP.bind(void 0, 1, 0, 1, 0, 0),
  MDRP_MIRP.bind(void 0, 1, 0, 1, 0, 1),
  MDRP_MIRP.bind(void 0, 1, 0, 1, 0, 2),
  MDRP_MIRP.bind(void 0, 1, 0, 1, 0, 3),
  MDRP_MIRP.bind(void 0, 1, 0, 1, 1, 0),
  MDRP_MIRP.bind(void 0, 1, 0, 1, 1, 1),
  MDRP_MIRP.bind(void 0, 1, 0, 1, 1, 2),
  MDRP_MIRP.bind(void 0, 1, 0, 1, 1, 3),
  MDRP_MIRP.bind(void 0, 1, 1, 0, 0, 0),
  MDRP_MIRP.bind(void 0, 1, 1, 0, 0, 1),
  MDRP_MIRP.bind(void 0, 1, 1, 0, 0, 2),
  MDRP_MIRP.bind(void 0, 1, 1, 0, 0, 3),
  MDRP_MIRP.bind(void 0, 1, 1, 0, 1, 0),
  MDRP_MIRP.bind(void 0, 1, 1, 0, 1, 1),
  MDRP_MIRP.bind(void 0, 1, 1, 0, 1, 2),
  MDRP_MIRP.bind(void 0, 1, 1, 0, 1, 3),
  MDRP_MIRP.bind(void 0, 1, 1, 1, 0, 0),
  MDRP_MIRP.bind(void 0, 1, 1, 1, 0, 1),
  MDRP_MIRP.bind(void 0, 1, 1, 1, 0, 2),
  MDRP_MIRP.bind(void 0, 1, 1, 1, 0, 3),
  MDRP_MIRP.bind(void 0, 1, 1, 1, 1, 0),
  MDRP_MIRP.bind(void 0, 1, 1, 1, 1, 1),
  MDRP_MIRP.bind(void 0, 1, 1, 1, 1, 2),
  MDRP_MIRP.bind(void 0, 1, 1, 1, 1, 3)
];
function Token(char) {
  this.char = char;
  this.state = {};
  this.activeState = null;
}
function ContextRange(startIndex, endOffset, contextName) {
  this.contextName = contextName;
  this.startIndex = startIndex;
  this.endOffset = endOffset;
}
function ContextChecker(contextName, checkStart, checkEnd) {
  this.contextName = contextName;
  this.openRange = null;
  this.ranges = [];
  this.checkStart = checkStart;
  this.checkEnd = checkEnd;
}
function ContextParams(context, currentIndex) {
  this.context = context;
  this.index = currentIndex;
  this.length = context.length;
  this.current = context[currentIndex];
  this.backtrack = context.slice(0, currentIndex);
  this.lookahead = context.slice(currentIndex + 1);
}
function Event(eventId) {
  this.eventId = eventId;
  this.subscribers = [];
}
function initializeCoreEvents(events) {
  var this$1 = this;
  var coreEvents = [
    "start",
    "end",
    "next",
    "newToken",
    "contextStart",
    "contextEnd",
    "insertToken",
    "removeToken",
    "removeRange",
    "replaceToken",
    "replaceRange",
    "composeRUD",
    "updateContextsRanges"
  ];
  coreEvents.forEach(function(eventId) {
    Object.defineProperty(this$1.events, eventId, { value: new Event(eventId) });
  });
  if (!!events) coreEvents.forEach(function(eventId) {
    var event = events[eventId];
    if (typeof event === "function") this$1.events[eventId].subscribe(event);
  });
  [
    "insertToken",
    "removeToken",
    "removeRange",
    "replaceToken",
    "replaceRange",
    "composeRUD"
  ].forEach(function(eventId) {
    this$1.events[eventId].subscribe(this$1.updateContextsRanges);
  });
}
function Tokenizer(events) {
  this.tokens = [];
  this.registeredContexts = {};
  this.contextCheckers = [];
  this.events = {};
  this.registeredModifiers = [];
  initializeCoreEvents.call(this, events);
}
Token.prototype.setState = function(key, value) {
  this.state[key] = value;
  this.activeState = {
    key,
    value: this.state[key]
  };
  return this.activeState;
};
Token.prototype.getState = function(stateId) {
  return this.state[stateId] || null;
};
Tokenizer.prototype.inboundIndex = function(index) {
  return index >= 0 && index < this.tokens.length;
};
Tokenizer.prototype.composeRUD = function(RUDs) {
  var this$1 = this;
  var silent = true;
  var state = RUDs.map(function(RUD) {
    return this$1[RUD[0]].apply(this$1, RUD.slice(1).concat(silent));
  });
  var hasFAILObject = function(obj) {
    return typeof obj === "object" && obj.hasOwnProperty("FAIL");
  };
  if (state.every(hasFAILObject)) return {
    FAIL: "composeRUD: one or more operations hasn't completed successfully",
    report: state.filter(hasFAILObject)
  };
  this.dispatch("composeRUD", [state.filter(function(op) {
    return !hasFAILObject(op);
  })]);
};
Tokenizer.prototype.replaceRange = function(startIndex, offset2, tokens, silent) {
  offset2 = offset2 !== null ? offset2 : this.tokens.length;
  var isTokenType = tokens.every(function(token) {
    return token instanceof Token;
  });
  if (!isNaN(startIndex) && this.inboundIndex(startIndex) && isTokenType) {
    var replaced = this.tokens.splice.apply(this.tokens, [startIndex, offset2].concat(tokens));
    if (!silent) this.dispatch("replaceToken", [
      startIndex,
      offset2,
      tokens
    ]);
    return [replaced, tokens];
  } else return { FAIL: "replaceRange: invalid tokens or startIndex." };
};
Tokenizer.prototype.replaceToken = function(index, token, silent) {
  if (!isNaN(index) && this.inboundIndex(index) && token instanceof Token) {
    var replaced = this.tokens.splice(index, 1, token);
    if (!silent) this.dispatch("replaceToken", [index, token]);
    return [replaced[0], token];
  } else return { FAIL: "replaceToken: invalid token or index." };
};
Tokenizer.prototype.removeRange = function(startIndex, offset2, silent) {
  offset2 = !isNaN(offset2) ? offset2 : this.tokens.length;
  var tokens = this.tokens.splice(startIndex, offset2);
  if (!silent) this.dispatch("removeRange", [
    tokens,
    startIndex,
    offset2
  ]);
  return tokens;
};
Tokenizer.prototype.removeToken = function(index, silent) {
  if (!isNaN(index) && this.inboundIndex(index)) {
    var token = this.tokens.splice(index, 1);
    if (!silent) this.dispatch("removeToken", [token, index]);
    return token;
  } else return { FAIL: "removeToken: invalid token index." };
};
Tokenizer.prototype.insertToken = function(tokens, index, silent) {
  if (tokens.every(function(token) {
    return token instanceof Token;
  })) {
    this.tokens.splice.apply(this.tokens, [index, 0].concat(tokens));
    if (!silent) this.dispatch("insertToken", [tokens, index]);
    return tokens;
  } else return { FAIL: "insertToken: invalid token(s)." };
};
Tokenizer.prototype.registerModifier = function(modifierId, condition, modifier) {
  this.events.newToken.subscribe(function(token, contextParams) {
    var conditionParams = [token, contextParams];
    var canApplyModifier = condition === null || condition.apply(this, conditionParams) === true;
    var modifierParams = [token, contextParams];
    if (canApplyModifier) {
      var newStateValue = modifier.apply(this, modifierParams);
      token.setState(modifierId, newStateValue);
    }
  });
  this.registeredModifiers.push(modifierId);
};
Event.prototype.subscribe = function(eventHandler) {
  if (typeof eventHandler === "function") return this.subscribers.push(eventHandler) - 1;
  else return { FAIL: "invalid '" + this.eventId + "' event handler" };
};
Event.prototype.unsubscribe = function(subsId) {
  this.subscribers.splice(subsId, 1);
};
ContextParams.prototype.setCurrentIndex = function(index) {
  this.index = index;
  this.current = this.context[index];
  this.backtrack = this.context.slice(0, index);
  this.lookahead = this.context.slice(index + 1);
};
ContextParams.prototype.get = function(offset2) {
  switch (true) {
    case offset2 === 0:
      return this.current;
    case (offset2 < 0 && Math.abs(offset2) <= this.backtrack.length):
      return this.backtrack.slice(offset2)[0];
    case (offset2 > 0 && offset2 <= this.lookahead.length):
      return this.lookahead[offset2 - 1];
    default:
      return null;
  }
};
Tokenizer.prototype.rangeToText = function(range2) {
  if (range2 instanceof ContextRange) return this.getRangeTokens(range2).map(function(token) {
    return token.char;
  }).join("");
};
Tokenizer.prototype.getText = function() {
  return this.tokens.map(function(token) {
    return token.char;
  }).join("");
};
Tokenizer.prototype.getContext = function(contextName) {
  var context = this.registeredContexts[contextName];
  return !!context ? context : null;
};
Tokenizer.prototype.on = function(eventName, eventHandler) {
  var event = this.events[eventName];
  if (!!event) return event.subscribe(eventHandler);
  else return null;
};
Tokenizer.prototype.dispatch = function(eventName, args) {
  var this$1 = this;
  var event = this.events[eventName];
  if (event instanceof Event) event.subscribers.forEach(function(subscriber) {
    subscriber.apply(this$1, args || []);
  });
};
Tokenizer.prototype.registerContextChecker = function(contextName, contextStartCheck, contextEndCheck) {
  if (!!this.getContext(contextName)) return { FAIL: "context name '" + contextName + "' is already registered." };
  if (typeof contextStartCheck !== "function") return { FAIL: "missing context start check." };
  if (typeof contextEndCheck !== "function") return { FAIL: "missing context end check." };
  var contextCheckers = new ContextChecker(contextName, contextStartCheck, contextEndCheck);
  this.registeredContexts[contextName] = contextCheckers;
  this.contextCheckers.push(contextCheckers);
  return contextCheckers;
};
Tokenizer.prototype.getRangeTokens = function(range2) {
  var endIndex = range2.startIndex + range2.endOffset;
  return [].concat(this.tokens.slice(range2.startIndex, endIndex));
};
Tokenizer.prototype.getContextRanges = function(contextName) {
  var context = this.getContext(contextName);
  if (!!context) return context.ranges;
  else return { FAIL: "context checker '" + contextName + "' is not registered." };
};
Tokenizer.prototype.resetContextsRanges = function() {
  var registeredContexts = this.registeredContexts;
  for (var contextName in registeredContexts) if (registeredContexts.hasOwnProperty(contextName)) {
    var context = registeredContexts[contextName];
    context.ranges = [];
  }
};
Tokenizer.prototype.updateContextsRanges = function() {
  this.resetContextsRanges();
  var chars = this.tokens.map(function(token) {
    return token.char;
  });
  for (var i = 0; i < chars.length; i++) {
    var contextParams = new ContextParams(chars, i);
    this.runContextCheck(contextParams);
  }
  this.dispatch("updateContextsRanges", [this.registeredContexts]);
};
Tokenizer.prototype.setEndOffset = function(offset2, contextName) {
  var startIndex = this.getContext(contextName).openRange.startIndex;
  var range2 = new ContextRange(startIndex, offset2, contextName);
  var ranges = this.getContext(contextName).ranges;
  range2.rangeId = contextName + "." + ranges.length;
  ranges.push(range2);
  this.getContext(contextName).openRange = null;
  return range2;
};
Tokenizer.prototype.runContextCheck = function(contextParams) {
  var this$1 = this;
  var index = contextParams.index;
  this.contextCheckers.forEach(function(contextChecker) {
    var contextName = contextChecker.contextName;
    var openRange = this$1.getContext(contextName).openRange;
    if (!openRange && contextChecker.checkStart(contextParams)) {
      openRange = new ContextRange(index, null, contextName);
      this$1.getContext(contextName).openRange = openRange;
      this$1.dispatch("contextStart", [contextName, index]);
    }
    if (!!openRange && contextChecker.checkEnd(contextParams)) {
      var offset2 = index - openRange.startIndex + 1;
      var range2 = this$1.setEndOffset(offset2, contextName);
      this$1.dispatch("contextEnd", [contextName, range2]);
    }
  });
};
Tokenizer.prototype.tokenize = function(text) {
  this.tokens = [];
  this.resetContextsRanges();
  var chars = Array.from(text);
  this.dispatch("start");
  for (var i = 0; i < chars.length; i++) {
    var char = chars[i];
    var contextParams = new ContextParams(chars, i);
    this.dispatch("next", [contextParams]);
    this.runContextCheck(contextParams);
    var token = new Token(char);
    this.tokens.push(token);
    this.dispatch("newToken", [token, contextParams]);
  }
  this.dispatch("end", [this.tokens]);
  return this.tokens;
};
function isArabicChar(c) {
  return /[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(c);
}
function isIsolatedArabicChar(char) {
  return /[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(char);
}
function isTashkeelArabicChar(char) {
  return /[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(char);
}
function isLatinChar(c) {
  return /[A-z]/.test(c);
}
function isWhiteSpace(c) {
  return /\s/.test(c);
}
function FeatureQuery(font) {
  this.font = font;
  this.features = {};
}
function SubstitutionAction(action) {
  this.id = action.id;
  this.tag = action.tag;
  this.substitution = action.substitution;
}
function lookupCoverage(glyphIndex, coverage) {
  if (!glyphIndex) return -1;
  switch (coverage.format) {
    case 1:
      return coverage.glyphs.indexOf(glyphIndex);
    case 2:
      var ranges = coverage.ranges;
      for (var i = 0; i < ranges.length; i++) {
        var range2 = ranges[i];
        if (glyphIndex >= range2.start && glyphIndex <= range2.end) {
          var offset2 = glyphIndex - range2.start;
          return range2.index + offset2;
        }
      }
      break;
    default:
      return -1;
  }
  return -1;
}
function singleSubstitutionFormat1(glyphIndex, subtable) {
  if (lookupCoverage(glyphIndex, subtable.coverage) === -1) return null;
  return glyphIndex + subtable.deltaGlyphId;
}
function singleSubstitutionFormat2(glyphIndex, subtable) {
  var substituteIndex = lookupCoverage(glyphIndex, subtable.coverage);
  if (substituteIndex === -1) return null;
  return subtable.substitute[substituteIndex];
}
function lookupCoverageList(coverageList, contextParams) {
  var lookupList = [];
  for (var i = 0; i < coverageList.length; i++) {
    var coverage = coverageList[i];
    var glyphIndex = contextParams.current;
    glyphIndex = Array.isArray(glyphIndex) ? glyphIndex[0] : glyphIndex;
    var lookupIndex = lookupCoverage(glyphIndex, coverage);
    if (lookupIndex !== -1) lookupList.push(lookupIndex);
  }
  if (lookupList.length !== coverageList.length) return -1;
  return lookupList;
}
function chainingSubstitutionFormat3(contextParams, subtable) {
  var lookupsCount = subtable.inputCoverage.length + subtable.lookaheadCoverage.length + subtable.backtrackCoverage.length;
  if (contextParams.context.length < lookupsCount) return [];
  var inputLookups = lookupCoverageList(subtable.inputCoverage, contextParams);
  if (inputLookups === -1) return [];
  var lookaheadOffset = subtable.inputCoverage.length - 1;
  if (contextParams.lookahead.length < subtable.lookaheadCoverage.length) return [];
  var lookaheadContext = contextParams.lookahead.slice(lookaheadOffset);
  while (lookaheadContext.length && isTashkeelArabicChar(lookaheadContext[0].char)) lookaheadContext.shift();
  var lookaheadParams = new ContextParams(lookaheadContext, 0);
  var lookaheadLookups = lookupCoverageList(subtable.lookaheadCoverage, lookaheadParams);
  var backtrackContext = [].concat(contextParams.backtrack);
  backtrackContext.reverse();
  while (backtrackContext.length && isTashkeelArabicChar(backtrackContext[0].char)) backtrackContext.shift();
  if (backtrackContext.length < subtable.backtrackCoverage.length) return [];
  var backtrackParams = new ContextParams(backtrackContext, 0);
  var backtrackLookups = lookupCoverageList(subtable.backtrackCoverage, backtrackParams);
  var contextRulesMatch = inputLookups.length === subtable.inputCoverage.length && lookaheadLookups.length === subtable.lookaheadCoverage.length && backtrackLookups.length === subtable.backtrackCoverage.length;
  var substitutions = [];
  if (contextRulesMatch) for (var i = 0; i < subtable.lookupRecords.length; i++) {
    var lookupListIndex = subtable.lookupRecords[i].lookupListIndex;
    var lookupTable = this.getLookupByIndex(lookupListIndex);
    for (var s = 0; s < lookupTable.subtables.length; s++) {
      var subtable$1 = lookupTable.subtables[s];
      var lookup = this.getLookupMethod(lookupTable, subtable$1);
      if (this.getSubstitutionType(lookupTable, subtable$1) === "12") for (var n = 0; n < inputLookups.length; n++) {
        var substitution = lookup(contextParams.get(n));
        if (substitution) substitutions.push(substitution);
      }
    }
  }
  return substitutions;
}
function ligatureSubstitutionFormat1(contextParams, subtable) {
  var glyphIndex = contextParams.current;
  var ligSetIndex = lookupCoverage(glyphIndex, subtable.coverage);
  if (ligSetIndex === -1) return null;
  var ligature;
  var ligatureSet = subtable.ligatureSets[ligSetIndex];
  for (var s = 0; s < ligatureSet.length; s++) {
    ligature = ligatureSet[s];
    for (var l = 0; l < ligature.components.length; l++) {
      if (contextParams.lookahead[l] !== ligature.components[l]) break;
      if (l === ligature.components.length - 1) return ligature;
    }
  }
  return null;
}
function decompositionSubstitutionFormat1(glyphIndex, subtable) {
  var substituteIndex = lookupCoverage(glyphIndex, subtable.coverage);
  if (substituteIndex === -1) return null;
  return subtable.sequences[substituteIndex];
}
FeatureQuery.prototype.getDefaultScriptFeaturesIndexes = function() {
  var scripts = this.font.tables.gsub.scripts;
  for (var s = 0; s < scripts.length; s++) {
    var script = scripts[s];
    if (script.tag === "DFLT") return script.script.defaultLangSys.featureIndexes;
  }
  return [];
};
FeatureQuery.prototype.getScriptFeaturesIndexes = function(scriptTag) {
  if (!this.font.tables.gsub) return [];
  if (!scriptTag) return this.getDefaultScriptFeaturesIndexes();
  var scripts = this.font.tables.gsub.scripts;
  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    if (script.tag === scriptTag && script.script.defaultLangSys) return script.script.defaultLangSys.featureIndexes;
    else {
      var langSysRecords = script.langSysRecords;
      if (!!langSysRecords) for (var j = 0; j < langSysRecords.length; j++) {
        var langSysRecord = langSysRecords[j];
        if (langSysRecord.tag === scriptTag) return langSysRecord.langSys.featureIndexes;
      }
    }
  }
  return this.getDefaultScriptFeaturesIndexes();
};
FeatureQuery.prototype.mapTagsToFeatures = function(features, scriptTag) {
  var tags = {};
  for (var i = 0; i < features.length; i++) {
    var tag = features[i].tag;
    tags[tag] = features[i].feature;
  }
  this.features[scriptTag].tags = tags;
};
FeatureQuery.prototype.getScriptFeatures = function(scriptTag) {
  var features = this.features[scriptTag];
  if (this.features.hasOwnProperty(scriptTag)) return features;
  var featuresIndexes = this.getScriptFeaturesIndexes(scriptTag);
  if (!featuresIndexes) return null;
  var gsub2 = this.font.tables.gsub;
  features = featuresIndexes.map(function(index) {
    return gsub2.features[index];
  });
  this.features[scriptTag] = features;
  this.mapTagsToFeatures(features, scriptTag);
  return features;
};
FeatureQuery.prototype.getSubstitutionType = function(lookupTable, subtable) {
  return lookupTable.lookupType.toString() + subtable.substFormat.toString();
};
FeatureQuery.prototype.getLookupMethod = function(lookupTable, subtable) {
  var this$1 = this;
  switch (this.getSubstitutionType(lookupTable, subtable)) {
    case "11":
      return function(glyphIndex) {
        return singleSubstitutionFormat1.apply(this$1, [glyphIndex, subtable]);
      };
    case "12":
      return function(glyphIndex) {
        return singleSubstitutionFormat2.apply(this$1, [glyphIndex, subtable]);
      };
    case "63":
      return function(contextParams) {
        return chainingSubstitutionFormat3.apply(this$1, [contextParams, subtable]);
      };
    case "41":
      return function(contextParams) {
        return ligatureSubstitutionFormat1.apply(this$1, [contextParams, subtable]);
      };
    case "21":
      return function(glyphIndex) {
        return decompositionSubstitutionFormat1.apply(this$1, [glyphIndex, subtable]);
      };
    default:
      throw new Error("lookupType: " + lookupTable.lookupType + " - substFormat: " + subtable.substFormat + " is not yet supported");
  }
};
FeatureQuery.prototype.lookupFeature = function(query) {
  var contextParams = query.contextParams;
  var currentIndex = contextParams.index;
  var feature = this.getFeature({
    tag: query.tag,
    script: query.script
  });
  if (!feature) return /* @__PURE__ */ new Error("font '" + this.font.names.fullName.en + "' doesn't support feature '" + query.tag + "' for script '" + query.script + "'.");
  var lookups = this.getFeatureLookups(feature);
  var substitutions = [].concat(contextParams.context);
  for (var l = 0; l < lookups.length; l++) {
    var lookupTable = lookups[l];
    var subtables = this.getLookupSubtables(lookupTable);
    for (var s = 0; s < subtables.length; s++) {
      var subtable = subtables[s];
      var substType = this.getSubstitutionType(lookupTable, subtable);
      var lookup = this.getLookupMethod(lookupTable, subtable);
      var substitution = void 0;
      switch (substType) {
        case "11":
          substitution = lookup(contextParams.current);
          if (substitution) substitutions.splice(currentIndex, 1, new SubstitutionAction({
            id: 11,
            tag: query.tag,
            substitution
          }));
          break;
        case "12":
          substitution = lookup(contextParams.current);
          if (substitution) substitutions.splice(currentIndex, 1, new SubstitutionAction({
            id: 12,
            tag: query.tag,
            substitution
          }));
          break;
        case "63":
          substitution = lookup(contextParams);
          if (Array.isArray(substitution) && substitution.length) substitutions.splice(currentIndex, 1, new SubstitutionAction({
            id: 63,
            tag: query.tag,
            substitution
          }));
          break;
        case "41":
          substitution = lookup(contextParams);
          if (substitution) substitutions.splice(currentIndex, 1, new SubstitutionAction({
            id: 41,
            tag: query.tag,
            substitution
          }));
          break;
        case "21":
          substitution = lookup(contextParams.current);
          if (substitution) substitutions.splice(currentIndex, 1, new SubstitutionAction({
            id: 21,
            tag: query.tag,
            substitution
          }));
      }
      contextParams = new ContextParams(substitutions, currentIndex);
      if (Array.isArray(substitution) && !substitution.length) continue;
      substitution = null;
    }
  }
  return substitutions.length ? substitutions : null;
};
FeatureQuery.prototype.supports = function(query) {
  if (!query.script) return false;
  this.getScriptFeatures(query.script);
  var supportedScript = this.features.hasOwnProperty(query.script);
  if (!query.tag) return supportedScript;
  var supportedFeature = this.features[query.script].some(function(feature) {
    return feature.tag === query.tag;
  });
  return supportedScript && supportedFeature;
};
FeatureQuery.prototype.getLookupSubtables = function(lookupTable) {
  return lookupTable.subtables || null;
};
FeatureQuery.prototype.getLookupByIndex = function(index) {
  return this.font.tables.gsub.lookups[index] || null;
};
FeatureQuery.prototype.getFeatureLookups = function(feature) {
  return feature.lookupListIndexes.map(this.getLookupByIndex.bind(this));
};
FeatureQuery.prototype.getFeature = function getFeature(query) {
  if (!this.font) return { FAIL: "No font was found" };
  if (!this.features.hasOwnProperty(query.script)) this.getScriptFeatures(query.script);
  var scriptFeatures = this.features[query.script];
  if (!scriptFeatures) return { FAIL: "No feature for script " + query.script };
  if (!scriptFeatures.tags[query.tag]) return null;
  return this.features[query.script].tags[query.tag];
};
function arabicWordStartCheck(contextParams) {
  var char = contextParams.current;
  var prevChar = contextParams.get(-1);
  return prevChar === null && isArabicChar(char) || !isArabicChar(prevChar) && isArabicChar(char);
}
function arabicWordEndCheck(contextParams) {
  var nextChar = contextParams.get(1);
  return nextChar === null || !isArabicChar(nextChar);
}
var arabicWordCheck = {
  startCheck: arabicWordStartCheck,
  endCheck: arabicWordEndCheck
};
function arabicSentenceStartCheck(contextParams) {
  var char = contextParams.current;
  var prevChar = contextParams.get(-1);
  return (isArabicChar(char) || isTashkeelArabicChar(char)) && !isArabicChar(prevChar);
}
function arabicSentenceEndCheck(contextParams) {
  var nextChar = contextParams.get(1);
  switch (true) {
    case nextChar === null:
      return true;
    case (!isArabicChar(nextChar) && !isTashkeelArabicChar(nextChar)):
      var nextIsWhitespace = isWhiteSpace(nextChar);
      if (!nextIsWhitespace) return true;
      if (nextIsWhitespace) {
        var arabicCharAhead = false;
        arabicCharAhead = contextParams.lookahead.some(function(c) {
          return isArabicChar(c) || isTashkeelArabicChar(c);
        });
        if (!arabicCharAhead) return true;
      }
      break;
    default:
      return false;
  }
}
var arabicSentenceCheck = {
  startCheck: arabicSentenceStartCheck,
  endCheck: arabicSentenceEndCheck
};
function singleSubstitutionFormat1$1(action, tokens, index) {
  tokens[index].setState(action.tag, action.substitution);
}
function singleSubstitutionFormat2$1(action, tokens, index) {
  tokens[index].setState(action.tag, action.substitution);
}
function chainingSubstitutionFormat3$1(action, tokens, index) {
  action.substitution.forEach(function(subst, offset2) {
    tokens[index + offset2].setState(action.tag, subst);
  });
}
function ligatureSubstitutionFormat1$1(action, tokens, index) {
  var token = tokens[index];
  token.setState(action.tag, action.substitution.ligGlyph);
  var compsCount = action.substitution.components.length;
  for (var i = 0; i < compsCount; i++) {
    token = tokens[index + i + 1];
    token.setState("deleted", true);
  }
}
var SUBSTITUTIONS = {
  11: singleSubstitutionFormat1$1,
  12: singleSubstitutionFormat2$1,
  63: chainingSubstitutionFormat3$1,
  41: ligatureSubstitutionFormat1$1
};
function applySubstitution(action, tokens, index) {
  if (action instanceof SubstitutionAction && SUBSTITUTIONS[action.id]) SUBSTITUTIONS[action.id](action, tokens, index);
}
function willConnectPrev(charContextParams) {
  var backtrack = [].concat(charContextParams.backtrack);
  for (var i = backtrack.length - 1; i >= 0; i--) {
    var prevChar = backtrack[i];
    var isolated = isIsolatedArabicChar(prevChar);
    var tashkeel = isTashkeelArabicChar(prevChar);
    if (!isolated && !tashkeel) return true;
    if (isolated) return false;
  }
  return false;
}
function willConnectNext(charContextParams) {
  if (isIsolatedArabicChar(charContextParams.current)) return false;
  for (var i = 0; i < charContextParams.lookahead.length; i++) {
    var nextChar = charContextParams.lookahead[i];
    if (!isTashkeelArabicChar(nextChar)) return true;
  }
  return false;
}
function arabicPresentationForms(range2) {
  var this$1 = this;
  var script = "arab";
  var tags = this.featuresTags[script];
  var tokens = this.tokenizer.getRangeTokens(range2);
  if (tokens.length === 1) return;
  var contextParams = new ContextParams(tokens.map(function(token) {
    return token.getState("glyphIndex");
  }), 0);
  var charContextParams = new ContextParams(tokens.map(function(token) {
    return token.char;
  }), 0);
  tokens.forEach(function(token, index) {
    if (isTashkeelArabicChar(token.char)) return;
    contextParams.setCurrentIndex(index);
    charContextParams.setCurrentIndex(index);
    var CONNECT = 0;
    if (willConnectPrev(charContextParams)) CONNECT |= 1;
    if (willConnectNext(charContextParams)) CONNECT |= 2;
    var tag;
    switch (CONNECT) {
      case 1:
        tag = "fina";
        break;
      case 2:
        tag = "init";
        break;
      case 3:
        tag = "medi";
    }
    if (tags.indexOf(tag) === -1) return;
    var substitutions = this$1.query.lookupFeature({
      tag,
      script,
      contextParams
    });
    if (substitutions instanceof Error) return console.info(substitutions.message);
    substitutions.forEach(function(action, index2) {
      if (action instanceof SubstitutionAction) {
        applySubstitution(action, tokens, index2);
        contextParams.context[index2] = action.substitution;
      }
    });
  });
}
function getContextParams(tokens, index) {
  return new ContextParams(tokens.map(function(token) {
    return token.activeState.value;
  }), index || 0);
}
function arabicRequiredLigatures(range2) {
  var this$1 = this;
  var script = "arab";
  var tokens = this.tokenizer.getRangeTokens(range2);
  var contextParams = getContextParams(tokens);
  contextParams.context.forEach(function(glyphIndex, index) {
    contextParams.setCurrentIndex(index);
    var substitutions = this$1.query.lookupFeature({
      tag: "rlig",
      script,
      contextParams
    });
    if (substitutions.length) {
      substitutions.forEach(function(action) {
        return applySubstitution(action, tokens, index);
      });
      contextParams = getContextParams(tokens);
    }
  });
}
function latinWordStartCheck(contextParams) {
  var char = contextParams.current;
  var prevChar = contextParams.get(-1);
  return prevChar === null && isLatinChar(char) || !isLatinChar(prevChar) && isLatinChar(char);
}
function latinWordEndCheck(contextParams) {
  var nextChar = contextParams.get(1);
  return nextChar === null || !isLatinChar(nextChar);
}
var latinWordCheck = {
  startCheck: latinWordStartCheck,
  endCheck: latinWordEndCheck
};
function getContextParams$1(tokens, index) {
  return new ContextParams(tokens.map(function(token) {
    return token.activeState.value;
  }), index || 0);
}
function latinLigature(range2) {
  var this$1 = this;
  var script = "latn";
  var tokens = this.tokenizer.getRangeTokens(range2);
  var contextParams = getContextParams$1(tokens);
  contextParams.context.forEach(function(glyphIndex, index) {
    contextParams.setCurrentIndex(index);
    var substitutions = this$1.query.lookupFeature({
      tag: "liga",
      script,
      contextParams
    });
    if (substitutions.length) {
      substitutions.forEach(function(action) {
        return applySubstitution(action, tokens, index);
      });
      contextParams = getContextParams$1(tokens);
    }
  });
}
function Bidi(baseDir) {
  this.baseDir = baseDir || "ltr";
  this.tokenizer = new Tokenizer();
  this.featuresTags = {};
}
Bidi.prototype.setText = function(text) {
  this.text = text;
};
Bidi.prototype.contextChecks = {
  latinWordCheck,
  arabicWordCheck,
  arabicSentenceCheck
};
function registerContextChecker(checkId) {
  var check2 = this.contextChecks[checkId + "Check"];
  return this.tokenizer.registerContextChecker(checkId, check2.startCheck, check2.endCheck);
}
function tokenizeText() {
  registerContextChecker.call(this, "latinWord");
  registerContextChecker.call(this, "arabicWord");
  registerContextChecker.call(this, "arabicSentence");
  return this.tokenizer.tokenize(this.text);
}
function reverseArabicSentences() {
  var this$1 = this;
  this.tokenizer.getContextRanges("arabicSentence").forEach(function(range2) {
    var rangeTokens = this$1.tokenizer.getRangeTokens(range2);
    this$1.tokenizer.replaceRange(range2.startIndex, range2.endOffset, rangeTokens.reverse());
  });
}
Bidi.prototype.registerFeatures = function(script, tags) {
  var this$1 = this;
  var supportedTags = tags.filter(function(tag) {
    return this$1.query.supports({
      script,
      tag
    });
  });
  if (!this.featuresTags.hasOwnProperty(script)) this.featuresTags[script] = supportedTags;
  else this.featuresTags[script] = this.featuresTags[script].concat(supportedTags);
};
Bidi.prototype.applyFeatures = function(font, features) {
  if (!font) throw new Error("No valid font was provided to apply features");
  if (!this.query) this.query = new FeatureQuery(font);
  for (var f = 0; f < features.length; f++) {
    var feature = features[f];
    if (!this.query.supports({ script: feature.script })) continue;
    this.registerFeatures(feature.script, feature.tags);
  }
};
Bidi.prototype.registerModifier = function(modifierId, condition, modifier) {
  this.tokenizer.registerModifier(modifierId, condition, modifier);
};
function checkGlyphIndexStatus() {
  if (this.tokenizer.registeredModifiers.indexOf("glyphIndex") === -1) throw new Error("glyphIndex modifier is required to apply arabic presentation features.");
}
function applyArabicPresentationForms() {
  var this$1 = this;
  if (!this.featuresTags.hasOwnProperty("arab")) return;
  checkGlyphIndexStatus.call(this);
  this.tokenizer.getContextRanges("arabicWord").forEach(function(range2) {
    arabicPresentationForms.call(this$1, range2);
  });
}
function applyArabicRequireLigatures() {
  var this$1 = this;
  var script = "arab";
  if (!this.featuresTags.hasOwnProperty(script)) return;
  if (this.featuresTags[script].indexOf("rlig") === -1) return;
  checkGlyphIndexStatus.call(this);
  this.tokenizer.getContextRanges("arabicWord").forEach(function(range2) {
    arabicRequiredLigatures.call(this$1, range2);
  });
}
function applyLatinLigatures() {
  var this$1 = this;
  var script = "latn";
  if (!this.featuresTags.hasOwnProperty(script)) return;
  if (this.featuresTags[script].indexOf("liga") === -1) return;
  checkGlyphIndexStatus.call(this);
  this.tokenizer.getContextRanges("latinWord").forEach(function(range2) {
    latinLigature.call(this$1, range2);
  });
}
Bidi.prototype.checkContextReady = function(contextId) {
  return !!this.tokenizer.getContext(contextId);
};
Bidi.prototype.applyFeaturesToContexts = function() {
  if (this.checkContextReady("arabicWord")) {
    applyArabicPresentationForms.call(this);
    applyArabicRequireLigatures.call(this);
  }
  if (this.checkContextReady("latinWord")) applyLatinLigatures.call(this);
  if (this.checkContextReady("arabicSentence")) reverseArabicSentences.call(this);
};
Bidi.prototype.processText = function(text) {
  if (!this.text || this.text !== text) {
    this.setText(text);
    tokenizeText.call(this);
    this.applyFeaturesToContexts();
  }
};
Bidi.prototype.getBidiText = function(text) {
  this.processText(text);
  return this.tokenizer.getText();
};
Bidi.prototype.getTextGlyphs = function(text) {
  this.processText(text);
  var indexes = [];
  for (var i = 0; i < this.tokenizer.tokens.length; i++) {
    var token = this.tokenizer.tokens[i];
    if (token.state.deleted) continue;
    var index = token.activeState.value;
    indexes.push(Array.isArray(index) ? index[0] : index);
  }
  return indexes;
};
function Font(options) {
  options = options || {};
  options.tables = options.tables || {};
  if (!options.empty) {
    checkArgument(options.familyName, "When creating a new Font object, familyName is required.");
    checkArgument(options.styleName, "When creating a new Font object, styleName is required.");
    checkArgument(options.unitsPerEm, "When creating a new Font object, unitsPerEm is required.");
    checkArgument(options.ascender, "When creating a new Font object, ascender is required.");
    checkArgument(options.descender <= 0, "When creating a new Font object, negative descender value is required.");
    this.names = {
      fontFamily: { en: options.familyName || " " },
      fontSubfamily: { en: options.styleName || " " },
      fullName: { en: options.fullName || options.familyName + " " + options.styleName },
      postScriptName: { en: options.postScriptName || (options.familyName + options.styleName).replace(/\s/g, "") },
      designer: { en: options.designer || " " },
      designerURL: { en: options.designerURL || " " },
      manufacturer: { en: options.manufacturer || " " },
      manufacturerURL: { en: options.manufacturerURL || " " },
      license: { en: options.license || " " },
      licenseURL: { en: options.licenseURL || " " },
      version: { en: options.version || "Version 0.1" },
      description: { en: options.description || " " },
      copyright: { en: options.copyright || " " },
      trademark: { en: options.trademark || " " }
    };
    this.unitsPerEm = options.unitsPerEm || 1e3;
    this.ascender = options.ascender;
    this.descender = options.descender;
    this.createdTimestamp = options.createdTimestamp;
    this.tables = Object.assign(options.tables, { os2: Object.assign({
      usWeightClass: options.weightClass || this.usWeightClasses.MEDIUM,
      usWidthClass: options.widthClass || this.usWidthClasses.MEDIUM,
      fsSelection: options.fsSelection || this.fsSelectionValues.REGULAR
    }, options.tables.os2) });
  }
  this.supported = true;
  this.glyphs = new glyphset.GlyphSet(this, options.glyphs || []);
  this.encoding = new DefaultEncoding(this);
  this.position = new Position(this);
  this.substitution = new Substitution(this);
  this.tables = this.tables || {};
  this._push = null;
  this._hmtxTableData = {};
  Object.defineProperty(this, "hinting", { get: function() {
    if (this._hinting) return this._hinting;
    if (this.outlinesFormat === "truetype") return this._hinting = new Hinting(this);
  } });
}
Font.prototype.hasChar = function(c) {
  return this.encoding.charToGlyphIndex(c) !== null;
};
Font.prototype.charToGlyphIndex = function(s) {
  return this.encoding.charToGlyphIndex(s);
};
Font.prototype.charToGlyph = function(c) {
  var glyphIndex = this.charToGlyphIndex(c);
  var glyph = this.glyphs.get(glyphIndex);
  if (!glyph) glyph = this.glyphs.get(0);
  return glyph;
};
Font.prototype.updateFeatures = function(options) {
  return this.defaultRenderOptions.features.map(function(feature) {
    if (feature.script === "latn") return {
      script: "latn",
      tags: feature.tags.filter(function(tag) {
        return options[tag];
      })
    };
    else return feature;
  });
};
Font.prototype.stringToGlyphs = function(s, options) {
  var this$1 = this;
  var bidi = new Bidi();
  var charToGlyphIndexMod = function(token) {
    return this$1.charToGlyphIndex(token.char);
  };
  bidi.registerModifier("glyphIndex", null, charToGlyphIndexMod);
  var features = options ? this.updateFeatures(options.features) : this.defaultRenderOptions.features;
  bidi.applyFeatures(this, features);
  var indexes = bidi.getTextGlyphs(s);
  var length = indexes.length;
  var glyphs = new Array(length);
  var notdef = this.glyphs.get(0);
  for (var i = 0; i < length; i += 1) glyphs[i] = this.glyphs.get(indexes[i]) || notdef;
  return glyphs;
};
Font.prototype.nameToGlyphIndex = function(name) {
  return this.glyphNames.nameToGlyphIndex(name);
};
Font.prototype.nameToGlyph = function(name) {
  var glyphIndex = this.nameToGlyphIndex(name);
  var glyph = this.glyphs.get(glyphIndex);
  if (!glyph) glyph = this.glyphs.get(0);
  return glyph;
};
Font.prototype.glyphIndexToName = function(gid) {
  if (!this.glyphNames.glyphIndexToName) return "";
  return this.glyphNames.glyphIndexToName(gid);
};
Font.prototype.getKerningValue = function(leftGlyph, rightGlyph) {
  leftGlyph = leftGlyph.index || leftGlyph;
  rightGlyph = rightGlyph.index || rightGlyph;
  var gposKerning = this.position.defaultKerningTables;
  if (gposKerning) return this.position.getKerningValue(gposKerning, leftGlyph, rightGlyph);
  return this.kerningPairs[leftGlyph + "," + rightGlyph] || 0;
};
Font.prototype.defaultRenderOptions = {
  kerning: true,
  features: [
    /**
    * these 4 features are required to render Arabic text properly
    * and shouldn't be turned off when rendering arabic text.
    */
    {
      script: "arab",
      tags: [
        "init",
        "medi",
        "fina",
        "rlig"
      ]
    },
    {
      script: "latn",
      tags: ["liga", "rlig"]
    }
  ]
};
Font.prototype.forEachGlyph = function(text, x, y, fontSize, options, callback) {
  x = x !== void 0 ? x : 0;
  y = y !== void 0 ? y : 0;
  fontSize = fontSize !== void 0 ? fontSize : 72;
  options = Object.assign({}, this.defaultRenderOptions, options);
  var fontScale = 1 / this.unitsPerEm * fontSize;
  var glyphs = this.stringToGlyphs(text, options);
  var kerningLookups;
  if (options.kerning) {
    var script = options.script || this.position.getDefaultScriptName();
    kerningLookups = this.position.getKerningTables(script, options.language);
  }
  for (var i = 0; i < glyphs.length; i += 1) {
    var glyph = glyphs[i];
    callback.call(this, glyph, x, y, fontSize, options);
    if (glyph.advanceWidth) x += glyph.advanceWidth * fontScale;
    if (options.kerning && i < glyphs.length - 1) {
      var kerningValue = kerningLookups ? this.position.getKerningValue(kerningLookups, glyph.index, glyphs[i + 1].index) : this.getKerningValue(glyph, glyphs[i + 1]);
      x += kerningValue * fontScale;
    }
    if (options.letterSpacing) x += options.letterSpacing * fontSize;
    else if (options.tracking) x += options.tracking / 1e3 * fontSize;
  }
  return x;
};
Font.prototype.getPath = function(text, x, y, fontSize, options) {
  var fullPath = new Path();
  this.forEachGlyph(text, x, y, fontSize, options, function(glyph, gX, gY, gFontSize) {
    var glyphPath = glyph.getPath(gX, gY, gFontSize, options, this);
    fullPath.extend(glyphPath);
  });
  return fullPath;
};
Font.prototype.getPaths = function(text, x, y, fontSize, options) {
  var glyphPaths = [];
  this.forEachGlyph(text, x, y, fontSize, options, function(glyph, gX, gY, gFontSize) {
    var glyphPath = glyph.getPath(gX, gY, gFontSize, options, this);
    glyphPaths.push(glyphPath);
  });
  return glyphPaths;
};
Font.prototype.getAdvanceWidth = function(text, fontSize, options) {
  return this.forEachGlyph(text, 0, 0, fontSize, options, function() {
  });
};
Font.prototype.draw = function(ctx, text, x, y, fontSize, options) {
  this.getPath(text, x, y, fontSize, options).draw(ctx);
};
Font.prototype.drawPoints = function(ctx, text, x, y, fontSize, options) {
  this.forEachGlyph(text, x, y, fontSize, options, function(glyph, gX, gY, gFontSize) {
    glyph.drawPoints(ctx, gX, gY, gFontSize);
  });
};
Font.prototype.drawMetrics = function(ctx, text, x, y, fontSize, options) {
  this.forEachGlyph(text, x, y, fontSize, options, function(glyph, gX, gY, gFontSize) {
    glyph.drawMetrics(ctx, gX, gY, gFontSize);
  });
};
Font.prototype.getEnglishName = function(name) {
  var translations = this.names[name];
  if (translations) return translations.en;
};
Font.prototype.validate = function() {
  var _this = this;
  function assertNamePresent(name) {
    var englishName = _this.getEnglishName(name);
    englishName && englishName.trim().length;
  }
  assertNamePresent("fontFamily");
  assertNamePresent("weightName");
  assertNamePresent("manufacturer");
  assertNamePresent("copyright");
  assertNamePresent("version");
  this.unitsPerEm;
};
Font.prototype.toTables = function() {
  return sfnt.fontToTable(this);
};
Font.prototype.toBuffer = function() {
  console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead.");
  return this.toArrayBuffer();
};
Font.prototype.toArrayBuffer = function() {
  var bytes = this.toTables().encode();
  var buffer = new ArrayBuffer(bytes.length);
  var intArray = new Uint8Array(buffer);
  for (var i = 0; i < bytes.length; i++) intArray[i] = bytes[i];
  return buffer;
};
Font.prototype.download = function(fileName) {
  var familyName = this.getEnglishName("fontFamily");
  var styleName = this.getEnglishName("fontSubfamily");
  fileName = fileName || familyName.replace(/\s/g, "") + "-" + styleName + ".otf";
  var arrayBuffer = this.toArrayBuffer();
  if (isBrowser()) {
    window.URL = window.URL || window.webkitURL;
    if (window.URL) {
      var dataView = new DataView(arrayBuffer);
      var blob = new Blob([dataView], { type: "font/opentype" });
      var link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      var event = document.createEvent("MouseEvents");
      event.initEvent("click", true, false);
      link.dispatchEvent(event);
    } else console.warn("Font file could not be downloaded. Try using a different browser.");
  } else {
    var fs = require___vite_browser_external();
    var buffer = arrayBufferToNodeBuffer(arrayBuffer);
    fs.writeFileSync(fileName, buffer);
  }
};
Font.prototype.fsSelectionValues = {
  ITALIC: 1,
  UNDERSCORE: 2,
  NEGATIVE: 4,
  OUTLINED: 8,
  STRIKEOUT: 16,
  BOLD: 32,
  REGULAR: 64,
  USER_TYPO_METRICS: 128,
  WWS: 256,
  OBLIQUE: 512
};
Font.prototype.usWidthClasses = {
  ULTRA_CONDENSED: 1,
  EXTRA_CONDENSED: 2,
  CONDENSED: 3,
  SEMI_CONDENSED: 4,
  MEDIUM: 5,
  SEMI_EXPANDED: 6,
  EXPANDED: 7,
  EXTRA_EXPANDED: 8,
  ULTRA_EXPANDED: 9
};
Font.prototype.usWeightClasses = {
  THIN: 100,
  EXTRA_LIGHT: 200,
  LIGHT: 300,
  NORMAL: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
  EXTRA_BOLD: 800,
  BLACK: 900
};
function addName(name, names) {
  var nameString = JSON.stringify(name);
  var nameID = 256;
  for (var nameKey in names) {
    var n = parseInt(nameKey);
    if (!n || n < 256) continue;
    if (JSON.stringify(names[nameKey]) === nameString) return n;
    if (nameID <= n) nameID = n + 1;
  }
  names[nameID] = name;
  return nameID;
}
function makeFvarAxis(n, axis, names) {
  var nameID = addName(axis.name, names);
  return [
    {
      name: "tag_" + n,
      type: "TAG",
      value: axis.tag
    },
    {
      name: "minValue_" + n,
      type: "FIXED",
      value: axis.minValue << 16
    },
    {
      name: "defaultValue_" + n,
      type: "FIXED",
      value: axis.defaultValue << 16
    },
    {
      name: "maxValue_" + n,
      type: "FIXED",
      value: axis.maxValue << 16
    },
    {
      name: "flags_" + n,
      type: "USHORT",
      value: 0
    },
    {
      name: "nameID_" + n,
      type: "USHORT",
      value: nameID
    }
  ];
}
function parseFvarAxis(data, start, names) {
  var axis = {};
  var p = new parse.Parser(data, start);
  axis.tag = p.parseTag();
  axis.minValue = p.parseFixed();
  axis.defaultValue = p.parseFixed();
  axis.maxValue = p.parseFixed();
  p.skip("uShort", 1);
  axis.name = names[p.parseUShort()] || {};
  return axis;
}
function makeFvarInstance(n, inst, axes, names) {
  var nameID = addName(inst.name, names);
  var fields = [{
    name: "nameID_" + n,
    type: "USHORT",
    value: nameID
  }, {
    name: "flags_" + n,
    type: "USHORT",
    value: 0
  }];
  for (var i = 0; i < axes.length; ++i) {
    var axisTag = axes[i].tag;
    fields.push({
      name: "axis_" + n + " " + axisTag,
      type: "FIXED",
      value: inst.coordinates[axisTag] << 16
    });
  }
  return fields;
}
function parseFvarInstance(data, start, axes, names) {
  var inst = {};
  var p = new parse.Parser(data, start);
  inst.name = names[p.parseUShort()] || {};
  p.skip("uShort", 1);
  inst.coordinates = {};
  for (var i = 0; i < axes.length; ++i) inst.coordinates[axes[i].tag] = p.parseFixed();
  return inst;
}
function makeFvarTable(fvar2, names) {
  var result = new table.Table("fvar", [
    {
      name: "version",
      type: "ULONG",
      value: 65536
    },
    {
      name: "offsetToData",
      type: "USHORT",
      value: 0
    },
    {
      name: "countSizePairs",
      type: "USHORT",
      value: 2
    },
    {
      name: "axisCount",
      type: "USHORT",
      value: fvar2.axes.length
    },
    {
      name: "axisSize",
      type: "USHORT",
      value: 20
    },
    {
      name: "instanceCount",
      type: "USHORT",
      value: fvar2.instances.length
    },
    {
      name: "instanceSize",
      type: "USHORT",
      value: 4 + fvar2.axes.length * 4
    }
  ]);
  result.offsetToData = result.sizeOf();
  for (var i = 0; i < fvar2.axes.length; i++) result.fields = result.fields.concat(makeFvarAxis(i, fvar2.axes[i], names));
  for (var j = 0; j < fvar2.instances.length; j++) result.fields = result.fields.concat(makeFvarInstance(j, fvar2.instances[j], fvar2.axes, names));
  return result;
}
function parseFvarTable(data, start, names) {
  var p = new parse.Parser(data, start);
  var tableVersion = p.parseULong();
  check.argument(tableVersion === 65536, "Unsupported fvar table version.");
  var offsetToData = p.parseOffset16();
  p.skip("uShort", 1);
  var axisCount = p.parseUShort();
  var axisSize = p.parseUShort();
  var instanceCount = p.parseUShort();
  var instanceSize = p.parseUShort();
  var axes = [];
  for (var i = 0; i < axisCount; i++) axes.push(parseFvarAxis(data, start + offsetToData + i * axisSize, names));
  var instances = [];
  var instanceStart = start + offsetToData + axisCount * axisSize;
  for (var j = 0; j < instanceCount; j++) instances.push(parseFvarInstance(data, instanceStart + j * instanceSize, axes, names));
  return {
    axes,
    instances
  };
}
var fvar = {
  make: makeFvarTable,
  parse: parseFvarTable
};
var attachList = function() {
  return {
    coverage: this.parsePointer(Parser.coverage),
    attachPoints: this.parseList(Parser.pointer(Parser.uShortList))
  };
};
var caretValue = function() {
  var format = this.parseUShort();
  check.argument(format === 1 || format === 2 || format === 3, "Unsupported CaretValue table version.");
  if (format === 1) return { coordinate: this.parseShort() };
  else if (format === 2) return { pointindex: this.parseShort() };
  else if (format === 3) return { coordinate: this.parseShort() };
};
var ligGlyph = function() {
  return this.parseList(Parser.pointer(caretValue));
};
var ligCaretList = function() {
  return {
    coverage: this.parsePointer(Parser.coverage),
    ligGlyphs: this.parseList(Parser.pointer(ligGlyph))
  };
};
var markGlyphSets = function() {
  this.parseUShort();
  return this.parseList(Parser.pointer(Parser.coverage));
};
function parseGDEFTable(data, start) {
  start = start || 0;
  var p = new Parser(data, start);
  var tableVersion = p.parseVersion(1);
  check.argument(tableVersion === 1 || tableVersion === 1.2 || tableVersion === 1.3, "Unsupported GDEF table version.");
  var gdef2 = {
    version: tableVersion,
    classDef: p.parsePointer(Parser.classDef),
    attachList: p.parsePointer(attachList),
    ligCaretList: p.parsePointer(ligCaretList),
    markAttachClassDef: p.parsePointer(Parser.classDef)
  };
  if (tableVersion >= 1.2) gdef2.markGlyphSets = p.parsePointer(markGlyphSets);
  return gdef2;
}
var gdef = { parse: parseGDEFTable };
var subtableParsers$1 = new Array(10);
subtableParsers$1[1] = function parseLookup12() {
  var start = this.offset + this.relativeOffset;
  var posformat = this.parseUShort();
  if (posformat === 1) return {
    posFormat: 1,
    coverage: this.parsePointer(Parser.coverage),
    value: this.parseValueRecord()
  };
  else if (posformat === 2) return {
    posFormat: 2,
    coverage: this.parsePointer(Parser.coverage),
    values: this.parseValueRecordList()
  };
  check.assert(false, "0x" + start.toString(16) + ": GPOS lookup type 1 format must be 1 or 2.");
};
subtableParsers$1[2] = function parseLookup22() {
  var start = this.offset + this.relativeOffset;
  var posFormat = this.parseUShort();
  check.assert(posFormat === 1 || posFormat === 2, "0x" + start.toString(16) + ": GPOS lookup type 2 format must be 1 or 2.");
  var coverage = this.parsePointer(Parser.coverage);
  var valueFormat1 = this.parseUShort();
  var valueFormat2 = this.parseUShort();
  if (posFormat === 1) return {
    posFormat,
    coverage,
    valueFormat1,
    valueFormat2,
    pairSets: this.parseList(Parser.pointer(Parser.list(function() {
      return {
        secondGlyph: this.parseUShort(),
        value1: this.parseValueRecord(valueFormat1),
        value2: this.parseValueRecord(valueFormat2)
      };
    })))
  };
  else if (posFormat === 2) {
    var classDef1 = this.parsePointer(Parser.classDef);
    var classDef2 = this.parsePointer(Parser.classDef);
    var class1Count = this.parseUShort();
    var class2Count = this.parseUShort();
    return {
      posFormat,
      coverage,
      valueFormat1,
      valueFormat2,
      classDef1,
      classDef2,
      class1Count,
      class2Count,
      classRecords: this.parseList(class1Count, Parser.list(class2Count, function() {
        return {
          value1: this.parseValueRecord(valueFormat1),
          value2: this.parseValueRecord(valueFormat2)
        };
      }))
    };
  }
};
subtableParsers$1[3] = function parseLookup32() {
  return { error: "GPOS Lookup 3 not supported" };
};
subtableParsers$1[4] = function parseLookup42() {
  return { error: "GPOS Lookup 4 not supported" };
};
subtableParsers$1[5] = function parseLookup52() {
  return { error: "GPOS Lookup 5 not supported" };
};
subtableParsers$1[6] = function parseLookup62() {
  return { error: "GPOS Lookup 6 not supported" };
};
subtableParsers$1[7] = function parseLookup72() {
  return { error: "GPOS Lookup 7 not supported" };
};
subtableParsers$1[8] = function parseLookup82() {
  return { error: "GPOS Lookup 8 not supported" };
};
subtableParsers$1[9] = function parseLookup9() {
  return { error: "GPOS Lookup 9 not supported" };
};
function parseGposTable(data, start) {
  start = start || 0;
  var p = new Parser(data, start);
  var tableVersion = p.parseVersion(1);
  check.argument(tableVersion === 1 || tableVersion === 1.1, "Unsupported GPOS table version " + tableVersion);
  if (tableVersion === 1) return {
    version: tableVersion,
    scripts: p.parseScriptList(),
    features: p.parseFeatureList(),
    lookups: p.parseLookupList(subtableParsers$1)
  };
  else return {
    version: tableVersion,
    scripts: p.parseScriptList(),
    features: p.parseFeatureList(),
    lookups: p.parseLookupList(subtableParsers$1),
    variations: p.parseFeatureVariationsList()
  };
}
var subtableMakers$1 = new Array(10);
function makeGposTable(gpos2) {
  return new table.Table("GPOS", [
    {
      name: "version",
      type: "ULONG",
      value: 65536
    },
    {
      name: "scripts",
      type: "TABLE",
      value: new table.ScriptList(gpos2.scripts)
    },
    {
      name: "features",
      type: "TABLE",
      value: new table.FeatureList(gpos2.features)
    },
    {
      name: "lookups",
      type: "TABLE",
      value: new table.LookupList(gpos2.lookups, subtableMakers$1)
    }
  ]);
}
var gpos = {
  parse: parseGposTable,
  make: makeGposTable
};
function parseWindowsKernTable(p) {
  var pairs = {};
  p.skip("uShort");
  var subtableVersion = p.parseUShort();
  check.argument(subtableVersion === 0, "Unsupported kern sub-table version.");
  p.skip("uShort", 2);
  var nPairs = p.parseUShort();
  p.skip("uShort", 3);
  for (var i = 0; i < nPairs; i += 1) {
    var leftIndex = p.parseUShort();
    var rightIndex = p.parseUShort();
    var value = p.parseShort();
    pairs[leftIndex + "," + rightIndex] = value;
  }
  return pairs;
}
function parseMacKernTable(p) {
  var pairs = {};
  p.skip("uShort");
  if (p.parseULong() > 1) console.warn("Only the first kern subtable is supported.");
  p.skip("uLong");
  var subtableVersion = p.parseUShort() & 255;
  p.skip("uShort");
  if (subtableVersion === 0) {
    var nPairs = p.parseUShort();
    p.skip("uShort", 3);
    for (var i = 0; i < nPairs; i += 1) {
      var leftIndex = p.parseUShort();
      var rightIndex = p.parseUShort();
      var value = p.parseShort();
      pairs[leftIndex + "," + rightIndex] = value;
    }
  }
  return pairs;
}
function parseKernTable(data, start) {
  var p = new parse.Parser(data, start);
  var tableVersion = p.parseUShort();
  if (tableVersion === 0) return parseWindowsKernTable(p);
  else if (tableVersion === 1) return parseMacKernTable(p);
  else throw new Error("Unsupported kern table version (" + tableVersion + ").");
}
var kern = { parse: parseKernTable };
function parseLocaTable(data, start, numGlyphs, shortVersion) {
  var p = new parse.Parser(data, start);
  var parseFn = shortVersion ? p.parseUShort : p.parseULong;
  var glyphOffsets = [];
  for (var i = 0; i < numGlyphs + 1; i += 1) {
    var glyphOffset = parseFn.call(p);
    if (shortVersion) glyphOffset *= 2;
    glyphOffsets.push(glyphOffset);
  }
  return glyphOffsets;
}
var loca = { parse: parseLocaTable };
function loadFromFile(path, callback) {
  require___vite_browser_external().readFile(path, function(err, buffer) {
    if (err) return callback(err.message);
    callback(null, nodeBufferToArrayBuffer(buffer));
  });
}
function loadFromUrl(url, callback) {
  var request = new XMLHttpRequest();
  request.open("get", url, true);
  request.responseType = "arraybuffer";
  request.onload = function() {
    if (request.response) return callback(null, request.response);
    else return callback("Font could not be loaded: " + request.statusText);
  };
  request.onerror = function() {
    callback("Font could not be loaded");
  };
  request.send();
}
function parseOpenTypeTableEntries(data, numTables) {
  var tableEntries = [];
  var p = 12;
  for (var i = 0; i < numTables; i += 1) {
    var tag = parse.getTag(data, p);
    var checksum = parse.getULong(data, p + 4);
    var offset2 = parse.getULong(data, p + 8);
    var length = parse.getULong(data, p + 12);
    tableEntries.push({
      tag,
      checksum,
      offset: offset2,
      length,
      compression: false
    });
    p += 16;
  }
  return tableEntries;
}
function parseWOFFTableEntries(data, numTables) {
  var tableEntries = [];
  var p = 44;
  for (var i = 0; i < numTables; i += 1) {
    var tag = parse.getTag(data, p);
    var offset2 = parse.getULong(data, p + 4);
    var compLength = parse.getULong(data, p + 8);
    var origLength = parse.getULong(data, p + 12);
    var compression = void 0;
    if (compLength < origLength) compression = "WOFF";
    else compression = false;
    tableEntries.push({
      tag,
      offset: offset2,
      compression,
      compressedLength: compLength,
      length: origLength
    });
    p += 20;
  }
  return tableEntries;
}
function uncompressTable(data, tableEntry) {
  if (tableEntry.compression === "WOFF") {
    var inBuffer = new Uint8Array(data.buffer, tableEntry.offset + 2, tableEntry.compressedLength - 2);
    var outBuffer = new Uint8Array(tableEntry.length);
    tinyInflate(inBuffer, outBuffer);
    if (outBuffer.byteLength !== tableEntry.length) throw new Error("Decompression error: " + tableEntry.tag + " decompressed length doesn't match recorded length");
    return {
      data: new DataView(outBuffer.buffer, 0),
      offset: 0
    };
  } else return {
    data,
    offset: tableEntry.offset
  };
}
function parseBuffer(buffer, opt) {
  opt = opt === void 0 || opt === null ? {} : opt;
  var indexToLocFormat;
  var ltagTable;
  var font = new Font({ empty: true });
  var data = new DataView(buffer, 0);
  var numTables;
  var tableEntries = [];
  var signature = parse.getTag(data, 0);
  if (signature === String.fromCharCode(0, 1, 0, 0) || signature === "true" || signature === "typ1") {
    font.outlinesFormat = "truetype";
    numTables = parse.getUShort(data, 4);
    tableEntries = parseOpenTypeTableEntries(data, numTables);
  } else if (signature === "OTTO") {
    font.outlinesFormat = "cff";
    numTables = parse.getUShort(data, 4);
    tableEntries = parseOpenTypeTableEntries(data, numTables);
  } else if (signature === "wOFF") {
    var flavor = parse.getTag(data, 4);
    if (flavor === String.fromCharCode(0, 1, 0, 0)) font.outlinesFormat = "truetype";
    else if (flavor === "OTTO") font.outlinesFormat = "cff";
    else throw new Error("Unsupported OpenType flavor " + signature);
    numTables = parse.getUShort(data, 12);
    tableEntries = parseWOFFTableEntries(data, numTables);
  } else throw new Error("Unsupported OpenType signature " + signature);
  var cffTableEntry;
  var fvarTableEntry;
  var glyfTableEntry;
  var gdefTableEntry;
  var gposTableEntry;
  var gsubTableEntry;
  var hmtxTableEntry;
  var kernTableEntry;
  var locaTableEntry;
  var nameTableEntry;
  var metaTableEntry;
  var p;
  for (var i = 0; i < numTables; i += 1) {
    var tableEntry = tableEntries[i];
    var table2 = void 0;
    switch (tableEntry.tag) {
      case "cmap":
        table2 = uncompressTable(data, tableEntry);
        font.tables.cmap = cmap.parse(table2.data, table2.offset);
        font.encoding = new CmapEncoding(font.tables.cmap);
        break;
      case "cvt ":
        table2 = uncompressTable(data, tableEntry);
        p = new parse.Parser(table2.data, table2.offset);
        font.tables.cvt = p.parseShortList(tableEntry.length / 2);
        break;
      case "fvar":
        fvarTableEntry = tableEntry;
        break;
      case "fpgm":
        table2 = uncompressTable(data, tableEntry);
        p = new parse.Parser(table2.data, table2.offset);
        font.tables.fpgm = p.parseByteList(tableEntry.length);
        break;
      case "head":
        table2 = uncompressTable(data, tableEntry);
        font.tables.head = head.parse(table2.data, table2.offset);
        font.unitsPerEm = font.tables.head.unitsPerEm;
        indexToLocFormat = font.tables.head.indexToLocFormat;
        break;
      case "hhea":
        table2 = uncompressTable(data, tableEntry);
        font.tables.hhea = hhea.parse(table2.data, table2.offset);
        font.ascender = font.tables.hhea.ascender;
        font.descender = font.tables.hhea.descender;
        font.numberOfHMetrics = font.tables.hhea.numberOfHMetrics;
        break;
      case "hmtx":
        hmtxTableEntry = tableEntry;
        break;
      case "ltag":
        table2 = uncompressTable(data, tableEntry);
        ltagTable = ltag.parse(table2.data, table2.offset);
        break;
      case "maxp":
        table2 = uncompressTable(data, tableEntry);
        font.tables.maxp = maxp.parse(table2.data, table2.offset);
        font.numGlyphs = font.tables.maxp.numGlyphs;
        break;
      case "name":
        nameTableEntry = tableEntry;
        break;
      case "OS/2":
        table2 = uncompressTable(data, tableEntry);
        font.tables.os2 = os2.parse(table2.data, table2.offset);
        break;
      case "post":
        table2 = uncompressTable(data, tableEntry);
        font.tables.post = post.parse(table2.data, table2.offset);
        font.glyphNames = new GlyphNames(font.tables.post);
        break;
      case "prep":
        table2 = uncompressTable(data, tableEntry);
        p = new parse.Parser(table2.data, table2.offset);
        font.tables.prep = p.parseByteList(tableEntry.length);
        break;
      case "glyf":
        glyfTableEntry = tableEntry;
        break;
      case "loca":
        locaTableEntry = tableEntry;
        break;
      case "CFF ":
        cffTableEntry = tableEntry;
        break;
      case "kern":
        kernTableEntry = tableEntry;
        break;
      case "GDEF":
        gdefTableEntry = tableEntry;
        break;
      case "GPOS":
        gposTableEntry = tableEntry;
        break;
      case "GSUB":
        gsubTableEntry = tableEntry;
        break;
      case "meta":
        metaTableEntry = tableEntry;
    }
  }
  var nameTable = uncompressTable(data, nameTableEntry);
  font.tables.name = _name.parse(nameTable.data, nameTable.offset, ltagTable);
  font.names = font.tables.name;
  if (glyfTableEntry && locaTableEntry) {
    var shortVersion = indexToLocFormat === 0;
    var locaTable = uncompressTable(data, locaTableEntry);
    var locaOffsets = loca.parse(locaTable.data, locaTable.offset, font.numGlyphs, shortVersion);
    var glyfTable = uncompressTable(data, glyfTableEntry);
    font.glyphs = glyf.parse(glyfTable.data, glyfTable.offset, locaOffsets, font, opt);
  } else if (cffTableEntry) {
    var cffTable = uncompressTable(data, cffTableEntry);
    cff.parse(cffTable.data, cffTable.offset, font, opt);
  } else throw new Error("Font doesn't contain TrueType or CFF outlines.");
  var hmtxTable = uncompressTable(data, hmtxTableEntry);
  hmtx.parse(font, hmtxTable.data, hmtxTable.offset, font.numberOfHMetrics, font.numGlyphs, font.glyphs, opt);
  addGlyphNames(font, opt);
  if (kernTableEntry) {
    var kernTable = uncompressTable(data, kernTableEntry);
    font.kerningPairs = kern.parse(kernTable.data, kernTable.offset);
  } else font.kerningPairs = {};
  if (gdefTableEntry) {
    var gdefTable = uncompressTable(data, gdefTableEntry);
    font.tables.gdef = gdef.parse(gdefTable.data, gdefTable.offset);
  }
  if (gposTableEntry) {
    var gposTable = uncompressTable(data, gposTableEntry);
    font.tables.gpos = gpos.parse(gposTable.data, gposTable.offset);
    font.position.init();
  }
  if (gsubTableEntry) {
    var gsubTable = uncompressTable(data, gsubTableEntry);
    font.tables.gsub = gsub.parse(gsubTable.data, gsubTable.offset);
  }
  if (fvarTableEntry) {
    var fvarTable = uncompressTable(data, fvarTableEntry);
    font.tables.fvar = fvar.parse(fvarTable.data, fvarTable.offset, font.names);
  }
  if (metaTableEntry) {
    var metaTable = uncompressTable(data, metaTableEntry);
    font.tables.meta = meta.parse(metaTable.data, metaTable.offset);
    font.metas = font.tables.meta;
  }
  return font;
}
function load(url, callback, opt) {
  opt = opt === void 0 || opt === null ? {} : opt;
  var loadFn = typeof window === "undefined" && !opt.isUrl ? loadFromFile : loadFromUrl;
  return new Promise(function(resolve, reject) {
    loadFn(url, function(err, arrayBuffer) {
      if (err) {
        if (callback) return callback(err);
        else reject(err);
      }
      var font;
      try {
        font = parseBuffer(arrayBuffer, opt);
      } catch (e) {
        if (callback) return callback(e, null);
        else reject(e);
      }
      if (callback) return callback(null, font);
      else resolve(font);
    });
  });
}
function loadSync(url, opt) {
  return parseBuffer(nodeBufferToArrayBuffer(require___vite_browser_external().readFileSync(url)), opt);
}
var opentype = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Font,
  Glyph,
  Path,
  BoundingBox: BoundingBox$1,
  _parse: parse,
  parse: parseBuffer,
  load,
  loadSync
});
var FONT_REGISTER = {};
async function loadFont(fontPath, fontFamily = "default", force = false) {
  if (!force && FONT_REGISTER[fontFamily]) {
    console.log(`Font ${fontFamily} already loaded`);
    return FONT_REGISTER[fontFamily];
  }
  let fontData;
  if (typeof fontPath === "string") fontData = await (await fetch(fontPath)).arrayBuffer();
  else fontData = fontPath;
  const font = opentype.parse(fontData);
  FONT_REGISTER[fontFamily] = font;
  if (!FONT_REGISTER.default) FONT_REGISTER.default = font;
  return font;
}
var getFont = (fontFamily = "default") => {
  return FONT_REGISTER[fontFamily];
};
var sketchFontCommands = function* (commands) {
  let sk = null;
  let lastPoint = null;
  for (const command of commands) {
    if (command.type === "Z") {
      if (sk) yield sk.close();
      sk = null;
      continue;
    }
    const p = [-command.x, command.y];
    if (command.type === "M") {
      if (sk) yield sk.done();
      sk = new BlueprintSketcher();
      sk.movePointerTo(p);
      lastPoint = p;
      continue;
    }
    if (lastPoint && Math.abs(p[0] - lastPoint[0]) < 1e-9 && Math.abs(p[1] - lastPoint[1]) < 1e-9) continue;
    if (command.type === "L") sk?.lineTo(p);
    if (command.type === "C") sk?.cubicBezierCurveTo(p, [-command.x1, command.y1], [-command.x2, command.y2]);
    if (command.type === "Q") sk?.quadraticBezierCurveTo(p, [-command.x1, command.y1]);
    lastPoint = p;
  }
};
function textBlueprints(text, { startX = 0, startY = 0, fontSize = 16, fontFamily = "default" } = {}) {
  let font = getFont(fontFamily);
  if (!font) {
    console.warn(`Font family "${fontFamily}" not found, please load it first, using the default`);
    font = getFont();
  }
  const writtenText = font.getPath(text, -startX, -startY, fontSize);
  return organiseBlueprints(Array.from(sketchFontCommands(writtenText.commands))).mirror([0, 0]);
}
function sketchText(text, textConfig, planeConfig = {}) {
  const textBp = textBlueprints(text, textConfig);
  return planeConfig.plane instanceof Plane ? textBp.sketchOnPlane(planeConfig.plane) : textBp.sketchOnPlane(planeConfig.plane, planeConfig.origin);
}
var uniqueId = () => Date.now().toString(36) + Math.random().toString(36).substring(2);
async function importSTEP(STLBlob) {
  const oc = getOC();
  const [r, gc] = localGC();
  const fileName = uniqueId();
  const bufferView = new Uint8Array(await STLBlob.arrayBuffer());
  oc.FS.writeFile(`/${fileName}`, bufferView);
  const reader = r(new oc.STEPControl_Reader());
  if (reader.ReadFile(fileName)) {
    oc.FS.unlink("/" + fileName);
    reader.TransferRoots();
    const shape = cast(r(reader.OneShape()));
    gc();
    return shape;
  } else {
    oc.FS.unlink("/" + fileName);
    gc();
    throw new Error("Failed to load STEP file");
  }
}
async function importSTL(STLBlob) {
  const oc = getOC();
  const [r, gc] = localGC();
  const fileName = uniqueId();
  const bufferView = new Uint8Array(await STLBlob.arrayBuffer());
  oc.FS.writeFile(`/${fileName}`, bufferView);
  const reader = r(new oc.StlAPI_Reader());
  const readShape = r(new oc.TopoDS_Shell());
  if (reader.Read(readShape, fileName)) {
    oc.FS.unlink("/" + fileName);
    const shapeUpgrader = r(new oc.ShapeUpgrade_UnifySameDomain(readShape, true, true, false));
    shapeUpgrader.Build();
    const upgradedShape = r(shapeUpgrader.Shape());
    const solidSTL = r(new oc.BRepBuilderAPI_MakeSolid());
    solidSTL.Add(oc.TopoDS.Shell(upgradedShape));
    const shape = cast(r(solidSTL.Solid()));
    gc();
    return shape;
  } else {
    oc.FS.unlink("/" + fileName);
    gc();
    throw new Error("Failed to load STL file");
  }
}
function isBinarySTL(buffer) {
  if (buffer.byteLength < 84) return false;
  const expectedSize = 84 + new DataView(buffer).getUint32(80, true) * 50;
  if (buffer.byteLength === expectedSize) return true;
  const header = new Uint8Array(buffer, 0, 5);
  return !String.fromCharCode(...header).startsWith("solid");
}
function parseBinarySTL(buffer) {
  const view = new DataView(buffer);
  const numTriangles = view.getUint32(80, true);
  const vertices = new Float32Array(numTriangles * 9);
  const triangles = new Uint32Array(numTriangles * 3);
  let offset2 = 84;
  for (let i = 0; i < numTriangles; i++) {
    offset2 += 12;
    for (let v = 0; v < 9; v++) {
      vertices[i * 9 + v] = view.getFloat32(offset2, true);
      offset2 += 4;
    }
    offset2 += 2;
    const base = i * 3;
    triangles[base] = base;
    triangles[base + 1] = base + 1;
    triangles[base + 2] = base + 2;
  }
  return {
    vertices,
    triangles
  };
}
function parseASCIISTL(text) {
  const vertexList = [];
  const vertexRegex = /vertex\s+([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)\s+([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)\s+([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)/g;
  let match;
  while ((match = vertexRegex.exec(text)) !== null) vertexList.push(parseFloat(match[1]), parseFloat(match[2]), parseFloat(match[3]));
  const numVertices = vertexList.length / 3;
  const vertices = new Float32Array(vertexList);
  const triangles = new Uint32Array(numVertices);
  for (let i = 0; i < numVertices; i++) triangles[i] = i;
  return {
    vertices,
    triangles
  };
}
async function importSTLAsMesh(stlBlob) {
  const buffer = await stlBlob.arrayBuffer();
  const { vertices, triangles } = isBinarySTL(buffer) ? parseBinarySTL(buffer) : parseASCIISTL(new TextDecoder().decode(buffer));
  if (triangles.length === 0) throw new Error("STL file contains no triangles");
  const numVerts = vertices.length / 3;
  const scale2 = 1e6;
  const mergeFrom = [];
  const mergeTo = [];
  const seen = /* @__PURE__ */ new Map();
  for (let i = 0; i < numVerts; i++) {
    const x = vertices[i * 3];
    const y = vertices[i * 3 + 1];
    const z = vertices[i * 3 + 2];
    const key = `${Math.round(x * scale2)}|${Math.round(y * scale2)}|${Math.round(z * scale2)}`;
    const existing = seen.get(key);
    if (existing !== void 0) {
      mergeFrom.push(i);
      mergeTo.push(existing);
    } else seen.set(key, i);
  }
  const manifold = getManifold();
  const mesh2 = new manifold.Mesh({
    numProp: 3,
    vertProperties: vertices,
    triVerts: triangles,
    mergeFromVert: mergeFrom.length ? new Uint32Array(mergeFrom) : void 0,
    mergeToVert: mergeTo.length ? new Uint32Array(mergeTo) : void 0
  });
  return new MeshShape(new manifold.Manifold(mesh2));
}
var PROJECTION_PLANES = {
  XY: {
    dir: [
      0,
      0,
      1
    ],
    xAxis: [
      1,
      0,
      0
    ]
  },
  XZ: {
    dir: [
      0,
      -1,
      0
    ],
    xAxis: [
      1,
      0,
      0
    ]
  },
  YZ: {
    dir: [
      1,
      0,
      0
    ],
    xAxis: [
      0,
      1,
      0
    ]
  },
  YX: {
    dir: [
      0,
      0,
      -1
    ],
    xAxis: [
      0,
      1,
      0
    ]
  },
  ZX: {
    dir: [
      0,
      1,
      0
    ],
    xAxis: [
      0,
      0,
      1
    ]
  },
  ZY: {
    dir: [
      -1,
      0,
      0
    ],
    xAxis: [
      0,
      0,
      1
    ]
  },
  front: {
    dir: [
      0,
      -1,
      0
    ],
    xAxis: [
      1,
      0,
      0
    ]
  },
  back: {
    dir: [
      0,
      1,
      0
    ],
    xAxis: [
      -1,
      0,
      0
    ]
  },
  right: {
    dir: [
      -1,
      0,
      0
    ],
    xAxis: [
      0,
      -1,
      0
    ]
  },
  left: {
    dir: [
      1,
      0,
      0
    ],
    xAxis: [
      0,
      1,
      0
    ]
  },
  bottom: {
    dir: [
      0,
      0,
      1
    ],
    xAxis: [
      1,
      0,
      0
    ]
  },
  top: {
    dir: [
      0,
      0,
      -1
    ],
    xAxis: [
      1,
      0,
      0
    ]
  }
};
function isProjectionPlane(plane) {
  return typeof plane === "string" && plane in PROJECTION_PLANES;
}
function lookFromPlane(projectionPlane) {
  const { dir, xAxis } = PROJECTION_PLANES[projectionPlane];
  return new ProjectionCamera([
    0,
    0,
    0
  ], dir, xAxis);
}
function defaultXDir(direction) {
  const dir = makeDirVector(direction);
  let yAxis = new Vector([
    0,
    0,
    1
  ]);
  let xAxis = yAxis.cross(dir);
  if (xAxis.Length === 0) {
    yAxis = new Vector([
      0,
      1,
      0
    ]);
    xAxis = yAxis.cross(dir);
  }
  return xAxis.normalize();
}
var ProjectionCamera = class extends WrappingObj {
  constructor(position = [
    0,
    0,
    0
  ], direction = [
    0,
    0,
    1
  ], xAxis) {
    const xDir = xAxis ? makeDirVector(xAxis) : defaultXDir(direction);
    const ax2 = makeAx2(position, direction, xDir);
    super(ax2);
  }
  get position() {
    return new Vector(this.wrapped.Location());
  }
  get direction() {
    return new Vector(this.wrapped.Direction());
  }
  get xAxis() {
    return new Vector(this.wrapped.XDirection());
  }
  get yAxis() {
    return new Vector(this.wrapped.YDirection());
  }
  autoAxes() {
    const xAxis = defaultXDir(this.direction);
    this.wrapped.SetXDirection(asDir(xAxis));
  }
  setPosition(position) {
    this.wrapped.SetLocation(asPnt(position));
    return this;
  }
  setXAxis(xAxis) {
    this.wrapped.SetYDirection(asDir(xAxis));
    return this;
  }
  setYAxis(yAxis) {
    this.wrapped.SetYDirection(asDir(yAxis));
    return this;
  }
  lookAt(shape) {
    const lootAtPoint = new Vector("boundingBox" in shape ? shape.boundingBox.center : shape);
    const direction = this.position.sub(lootAtPoint).normalized();
    this.wrapped.SetDirection(direction.toDir());
    this.autoAxes();
    return this;
  }
};
var getEdges = (shape) => {
  if (shape.IsNull()) return [];
  return cast(shape).edges;
};
function makeProjectedEdges(shape, camera, withHiddenLines = true) {
  const oc = getOC();
  const r = GCWithScope();
  const hiddenLineRemoval = r(new oc.HLRBRep_Algo());
  hiddenLineRemoval.Add(shape.wrapped, 0);
  const projector = r(new oc.HLRAlgo_Projector(camera.wrapped));
  hiddenLineRemoval.Projector(projector);
  hiddenLineRemoval.Update();
  hiddenLineRemoval.Hide();
  const hlrShapes = new oc.HLRBRep_HLRToShape(hiddenLineRemoval);
  const visible = [
    ...getEdges(hlrShapes.VCompound()),
    ...getEdges(hlrShapes.Rg1LineVCompound()),
    ...getEdges(hlrShapes.OutLineVCompound())
  ];
  visible.forEach((e) => oc.BRepLib.BuildCurves3d(e.wrapped));
  const hidden = withHiddenLines ? [
    ...getEdges(hlrShapes.HCompound()),
    ...getEdges(hlrShapes.Rg1LineHCompound()),
    ...getEdges(hlrShapes.OutLineHCompound())
  ] : [];
  hidden.forEach((e) => oc.BRepLib.BuildCurves3d(e.wrapped));
  return {
    visible,
    hidden
  };
}
var PRECISION = 1e-8;
var samePoint = (x, y) => samePoint$2(x, y, PRECISION * 10);
var getIntersectionPoint = (line1Start, line1End, line2Start, line2End) => {
  return [determinant2x2([[determinant2x2([[line1Start[0], line1Start[1]], [line1End[0], line1End[1]]]), determinant2x2([[line1Start[0], 1], [line1End[0], 1]])], [determinant2x2([[line2Start[0], line2Start[1]], [line2End[0], line2End[1]]]), determinant2x2([[line2Start[0], 1], [line2End[0], 1]])]]) / determinant2x2([[determinant2x2([[line1Start[0], 1], [line1End[0], 1]]), determinant2x2([[line1Start[1], 1], [line1End[1], 1]])], [determinant2x2([[line2Start[0], 1], [line2End[0], 1]]), determinant2x2([[line2Start[1], 1], [line2End[1], 1]])]]), determinant2x2([[determinant2x2([[line1Start[0], line1Start[1]], [line1End[0], line1End[1]]]), determinant2x2([[line1Start[1], 1], [line1End[1], 1]])], [determinant2x2([[line2Start[0], line2Start[1]], [line2End[0], line2End[1]]]), determinant2x2([[line2Start[1], 1], [line2End[1], 1]])]]) / determinant2x2([[determinant2x2([[line1Start[0], 1], [line1End[0], 1]]), determinant2x2([[line1Start[1], 1], [line1End[1], 1]])], [determinant2x2([[line2Start[0], 1], [line2End[0], 1]]), determinant2x2([[line2Start[1], 1], [line2End[1], 1]])]])];
};
function joinRound(appendCurve, previousLastPoint, firstPoint, previousCurve, _curve) {
  const arcJoiner = make2dArcFromCenter(previousLastPoint, firstPoint, previousCurve.original.lastPoint);
  appendCurve(previousCurve);
  appendCurve(arcJoiner);
}
function joinBevel(appendCurve, previousLastPoint, firstPoint, previousCurve, _curve) {
  const bevelJoiner = make2dSegmentCurve(previousLastPoint, firstPoint);
  appendCurve(previousCurve);
  appendCurve(bevelJoiner);
}
function joinMiter(appendCurve, previousLastPoint, firstPoint, previousCurve, curve) {
  const offsetIntersectionPoint = getIntersectionPoint(previousCurve.offset instanceof Curve2D ? subtract2d(previousLastPoint, previousCurve.offset.tangentAt(1)) : previousCurve.offset.firstPoint, previousLastPoint, firstPoint, curve.offset instanceof Curve2D ? add2d(firstPoint, curve.offset.tangentAt(0)) : curve.offset.lastPoint);
  const miterJoiner1 = make2dSegmentCurve(previousLastPoint, offsetIntersectionPoint);
  const miterJoiner2 = make2dSegmentCurve(offsetIntersectionPoint, firstPoint);
  appendCurve(previousCurve);
  appendCurve(miterJoiner1);
  appendCurve(miterJoiner2);
}
var OFFSET_JOINERS = {
  round: joinRound,
  bevel: joinBevel,
  miter: joinMiter
};
function rawOffsets(blueprint, offset2, offsetConfig = {}) {
  const correctedOffset = blueprint.orientation === "clockwise" ? -offset2 : offset2;
  const offsetCurves = blueprint.curves.map((c) => ({
    offset: make2dOffset(c, correctedOffset),
    original: c
  }));
  const offsettedArray = [];
  let savedLastCurve = null;
  let previousCurve = offsetCurves.at(-1);
  if (!previousCurve) return [];
  if (offsettedArray.length === 1) return offsettedArray;
  function appendCurve(curve) {
    if (curve instanceof Curve2D) {
      offsettedArray.push(curve);
      return;
    }
    if (!savedLastCurve) savedLastCurve = curve;
    else if (curve.offset instanceof Curve2D) offsettedArray.push(curve.offset);
    else if (!samePoint(curve.offset.firstPoint, curve.offset.lastPoint)) offsettedArray.push(make2dSegmentCurve(curve.offset.firstPoint, curve.offset.lastPoint));
  }
  const iterateOffsetCurves = function* () {
    for (const curve of offsetCurves.slice(0, -1)) yield curve;
    if (!savedLastCurve) throw new Error("Bug in the offset algorithm");
    yield savedLastCurve;
  };
  for (const curve of iterateOffsetCurves()) {
    const previousLastPoint = previousCurve.offset.lastPoint;
    const firstPoint = curve.offset.firstPoint;
    if (samePoint(previousLastPoint, firstPoint)) {
      appendCurve(previousCurve);
      previousCurve = curve;
      continue;
    }
    let intersections = [];
    if (previousCurve.offset instanceof Curve2D && curve.offset instanceof Curve2D) {
      const { intersections: pointIntersections, commonSegmentsPoints } = intersectCurves(previousCurve.offset, curve.offset, PRECISION / 100);
      intersections = [...pointIntersections, ...commonSegmentsPoints];
    }
    if (intersections.length > 0) {
      let intersection = intersections[0];
      if (intersections.length > 1) {
        const originalEndpoint = previousCurve?.original.lastPoint;
        const distances = intersections.map((i) => squareDistance2d(i, originalEndpoint));
        intersection = intersections[distances.indexOf(Math.min(...distances))];
      }
      const splitPreviousCurve = previousCurve.offset.splitAt([intersection], PRECISION)[0];
      const splitCurve = curve.offset.splitAt([intersection], PRECISION).at(-1);
      if (!splitCurve) throw new Error("Bug in the splitting algo in offset");
      appendCurve({
        offset: splitPreviousCurve,
        original: previousCurve.original
      });
      previousCurve = {
        offset: splitCurve,
        original: curve.original
      };
      continue;
    }
    const joiner = OFFSET_JOINERS[offsetConfig.lineJoinType ?? "round"];
    joiner(appendCurve, previousLastPoint, firstPoint, previousCurve, curve);
    previousCurve = curve;
  }
  appendCurve(previousCurve);
  return offsettedArray;
}
function offsetBlueprint(blueprint, offset2, offsetConfig = {}) {
  const offsettedArray = rawOffsets(blueprint, offset2, offsetConfig);
  if (offsettedArray.length < 2) return null;
  const allIntersections = /* @__PURE__ */ new Map();
  const updateIntersections = (index, newPoints) => {
    const intersections = allIntersections.get(index) || [];
    allIntersections.set(index, [...intersections, ...newPoints]);
  };
  offsettedArray.forEach((firstCurve, firstIndex) => {
    offsettedArray.slice(firstIndex + 1).forEach((secondCurve, secondIndex) => {
      const { intersections: rawIntersections, commonSegmentsPoints } = intersectCurves(firstCurve, secondCurve, PRECISION);
      const intersections = [...rawIntersections, ...commonSegmentsPoints].filter((intersection) => {
        const onFirstCurveExtremity = samePoint(intersection, firstCurve.firstPoint) || samePoint(intersection, firstCurve.lastPoint);
        const onSecondCurveExtremity = samePoint(intersection, secondCurve.firstPoint) || samePoint(intersection, secondCurve.lastPoint);
        return !(onFirstCurveExtremity && onSecondCurveExtremity);
      });
      if (!intersections.length) return;
      updateIntersections(firstIndex, intersections);
      updateIntersections(secondIndex + firstIndex + 1, intersections);
    });
  });
  if (!allIntersections.size) {
    const offsettedBlueprint = new Blueprint(offsettedArray);
    if (!blueprint.intersects(offsettedBlueprint)) return offsettedBlueprint;
    return null;
  }
  const prunedCurves = offsettedArray.flatMap((curve, index) => {
    if (!allIntersections.has(index)) return curve;
    const intersections = allIntersections.get(index) || [];
    return curve.splitAt(intersections, PRECISION * 100);
  }).filter((curve) => {
    return !blueprint.curves.find((c) => c.distanceFrom(curve) < Math.abs(offset2) - PRECISION);
  });
  if (!prunedCurves.length) return null;
  const blueprints = stitchCurves(prunedCurves).filter((c) => c.length > 1).map((c) => new Blueprint(c)).filter((b) => b.isClosed());
  if (!blueprints.length) return null;
  if (blueprints.length === 1) return blueprints[0];
  return new Blueprints(blueprints);
}
var fuseAll = (blueprints) => {
  let fused = blueprints[0];
  for (let i = 1; i < blueprints.length; i++) fused = fuse2D(fused, blueprints[i]);
  return fused;
};
function offset(bp, offsetDistance, offsetConfig = {}) {
  if (bp instanceof Blueprint) return offsetBlueprint(bp, offsetDistance, offsetConfig);
  else if (bp instanceof Blueprints) return fuseAll(bp.blueprints.map((b) => offset(b, offsetDistance, offsetConfig)));
  else if (bp instanceof CompoundBlueprint) {
    const innerShape = fuseAll(bp.blueprints.slice(1).map((b) => offset(b, offsetDistance, offsetConfig)));
    return cut2D(offset(bp.blueprints[0], offsetDistance, offsetConfig), innerShape);
  }
  return null;
}
function modifyCorners(makeCorner, blueprint, radius, finder) {
  let modifyCorner = () => true;
  if (finder) modifyCorner = finder.shouldKeep.bind(finder);
  const curves = [blueprint.curves[0]];
  const addModifiedCorner = (firstCurve, secondCurve) => {
    if (modifyCorner({
      firstCurve,
      secondCurve,
      point: firstCurve.lastPoint
    })) curves.push(...makeCorner(firstCurve, secondCurve, radius));
    else curves.push(firstCurve, secondCurve);
  };
  blueprint.curves.slice(1).forEach((secondCurve) => {
    const firstCurve = curves.pop();
    if (!firstCurve) throw new Error("Bug in the blueprint filletting algo");
    addModifiedCorner(firstCurve, secondCurve);
  });
  const lastCurve = curves.at(-1);
  if (!lastCurve) throw new Error("Bug in the blueprint corner algo");
  if (samePoint$2(curves[0].firstPoint, lastCurve.lastPoint) && curves.length > 1) {
    const firstCurve = curves.pop();
    const secondCurve = curves.shift();
    if (!firstCurve || !secondCurve) throw new Error("Bug in the blueprint filletting algo");
    addModifiedCorner(firstCurve, secondCurve);
  }
  return new Blueprint(curves);
}
function modifyCorner2D(makeCorner, shape, radius, finder) {
  if (shape instanceof Blueprint) return modifyCorners(makeCorner, shape, radius, finder);
  if (shape instanceof CompoundBlueprint) return new CompoundBlueprint(shape.blueprints.map((b) => modifyCorners(makeCorner, b, radius, finder)));
  if (shape instanceof Blueprints) return new Blueprints(shape.blueprints.map((b) => modifyCorner2D(makeCorner, b, radius, finder)).filter((b) => b !== null));
  return null;
}
function fillet2D(shape, radius, finder) {
  return modifyCorner2D(filletCurves, shape, radius, finder);
}
function chamfer2D(shape, radius, finder) {
  return modifyCorner2D(chamferCurves, shape, radius, finder);
}
function approximateForSVG(bp, options) {
  if (bp instanceof Blueprint) return new Blueprint(approximateAsSvgCompatibleCurve(bp.curves, options));
  else if (bp instanceof CompoundBlueprint) return new CompoundBlueprint(bp.blueprints.map((b) => approximateForSVG(b, options)));
  else if (bp instanceof Blueprints) return new Blueprints(bp.blueprints.map((b) => approximateForSVG(b, options)));
  return bp;
}
var Drawing = class Drawing2 {
  constructor(innerShape = null) {
    this.innerShape = innerShape;
  }
  clone() {
    return new Drawing2(this.innerShape?.clone() || null);
  }
  serialize() {
    function serializeHelper(shape) {
      if (shape instanceof CompoundBlueprint) return {
        type: "CompoundBlueprint",
        blueprints: shape.blueprints.map(serializeHelper)
      };
      else if (shape instanceof Blueprints) return {
        type: "Blueprints",
        blueprints: shape.blueprints.map(serializeHelper)
      };
      else if (shape instanceof Blueprint) return {
        type: "Blueprint",
        curves: shape.curves.map((c) => c.serialize())
      };
      else throw new Error("Unknown shape type for serialization");
    }
    return JSON.stringify(serializeHelper(this.innerShape));
  }
  get boundingBox() {
    if (!this.innerShape) return new BoundingBox2d();
    return this.innerShape.boundingBox;
  }
  stretch(ratio, direction, origin) {
    if (!this.innerShape) return new Drawing2();
    return new Drawing2(this.innerShape.stretch(ratio, direction, origin));
  }
  get repr() {
    if (this.innerShape === null) return "=== empty shape";
    return this.innerShape.repr;
  }
  rotate(angle, center) {
    if (!this.innerShape) return new Drawing2();
    return new Drawing2(this.innerShape.rotate(angle, center));
  }
  translate(xDistOrPoint, yDist = 0) {
    if (!this.innerShape) return new Drawing2();
    return new Drawing2(this.innerShape.translate(xDistOrPoint, yDist));
  }
  scale(scaleFactor, center) {
    if (!this.innerShape) return new Drawing2();
    return new Drawing2(this.innerShape.scale(scaleFactor, center));
  }
  mirror(centerOrDirection, origin, mode) {
    if (!this.innerShape) return new Drawing2();
    return new Drawing2(this.innerShape.mirror(centerOrDirection, origin, mode));
  }
  /**
  * Builds a new drawing by cuting another drawing into this one
  *
  * @category Drawing Modifications
  */
  cut(other) {
    return new Drawing2(cut2D(this.innerShape, other.innerShape));
  }
  /**
  * Builds a new drawing by merging another drawing into this one
  *
  * @category Drawing Modifications
  */
  fuse(other) {
    return new Drawing2(fuse2D(this.innerShape, other.innerShape));
  }
  /**
  * Builds a new drawing by intersection this drawing with another
  *
  * @category Drawing Modifications
  */
  intersect(other) {
    return new Drawing2(intersect2D(this.innerShape, other.innerShape));
  }
  /**
  * Creates a new drawing with some corners filletted, as specified by the
  * radius and the corner finder function
  *
  * @category Drawing Modifications
  */
  fillet(radius, filter) {
    const finder = filter && filter(new CornerFinder(), this.innerShape);
    return new Drawing2(fillet2D(this.innerShape, radius, finder));
  }
  /**
  * Creates a new drawing with some corners filletted, as specified by the
  * radius and the corner finder function
  *
  * @category Drawing Modifications
  */
  chamfer(radius, filter) {
    const finder = filter && filter(new CornerFinder(), this.innerShape);
    return new Drawing2(chamfer2D(this.innerShape, radius, finder));
  }
  sketchOnPlane(inputPlane, origin) {
    if (!this.innerShape) throw new Error("Trying to sketch an empty drawing");
    return this.innerShape.sketchOnPlane(inputPlane, origin);
  }
  sketchOnFace(face, scaleMode) {
    if (!this.innerShape) throw new Error("Trying to sketch an empty drawing");
    return this.innerShape.sketchOnFace(face, scaleMode);
  }
  punchHole(shape, faceFinder, options = {}) {
    if (!this.innerShape) return shape;
    return this.innerShape.punchHole(shape, faceFinder, options);
  }
  toSVG(margin) {
    return this.innerShape?.toSVG(margin) || "";
  }
  toSVGViewBox(margin = 1) {
    return this.innerShape?.toSVGViewBox(margin) || "";
  }
  toSVGPaths() {
    return this.innerShape?.toSVGPaths() || [];
  }
  offset(distance, offsetConfig = {}) {
    return new Drawing2(offset(this.innerShape, distance, offsetConfig));
  }
  approximate(target, options = {}) {
    if (target !== "svg") throw new Error("Only 'svg' is supported for now");
    return new Drawing2(approximateForSVG(this.innerShape, options));
  }
  get blueprint() {
    if (!(this.innerShape instanceof Blueprint)) {
      if (this.innerShape instanceof Blueprints && this.innerShape.blueprints.length === 1 && this.innerShape.blueprints[0] instanceof Blueprint) return this.innerShape.blueprints[0];
      throw new Error("This drawing is not a blueprint");
    }
    return this.innerShape;
  }
};
var DrawingPen = class extends BaseSketcher2d {
  constructor(origin = [0, 0]) {
    super();
    this.pointer = origin;
    this.firstPoint = origin;
    this.pendingCurves = [];
  }
  done() {
    return new Drawing(new Blueprint(this.pendingCurves));
  }
  close() {
    this._closeSketch();
    return this.done();
  }
  closeWithMirror() {
    this._closeWithMirror();
    return this.close();
  }
  /**
  * Stop drawing, make sure the sketch is closed (by adding a straight line to
  * from the last point to the first), change the corner between the last and the
  * first segments and returns the sketch.
  */
  closeWithCustomCorner(radius, mode = "fillet") {
    this._closeSketch();
    this._customCornerLastWithFirst(radius, mode);
    return this.done();
  }
};
function deserializeDrawing(data) {
  function deserializeHelper(json) {
    if (json["type"] === "CompoundBlueprint") return new CompoundBlueprint(json["blueprints"].map(deserializeHelper));
    else if (json["type"] === "Blueprints") return new Blueprints(json["blueprints"].map(deserializeHelper));
    else if (json["type"] === "Blueprint") return new Blueprint(json["curves"].map((c) => deserializeCurve2D(c)));
    else throw new Error("Unknown shape type for deserialization");
  }
  return new Drawing(deserializeHelper(JSON.parse(data)));
}
function draw(initialPoint) {
  const pen = new DrawingPen();
  if (initialPoint) pen.movePointerTo(initialPoint);
  return pen;
}
function drawRoundedRectangle(width, height, r = 0) {
  return new Drawing(roundedRectangleBlueprint(width, height, r));
}
var drawRectangle = drawRoundedRectangle;
function drawSingleCircle(radius) {
  return new Drawing(new Blueprint([make2dCircle(radius)]));
}
function drawSingleEllipse(majorRadius, minorRadius) {
  const [minor, major] = [majorRadius, minorRadius].sort((a, b) => a - b);
  return new Drawing(new Blueprint([make2dEllipse(major, minor, major === majorRadius ? [1, 0] : [0, 1])]));
}
function drawCircle(radius) {
  return draw().movePointerTo([-radius, 0]).sagittaArc(2 * radius, 0, radius).sagittaArc(-2 * radius, 0, radius).close();
}
function drawEllipse(majorRadius, minorRadius) {
  return draw().movePointerTo([-majorRadius, 0]).halfEllipse(2 * majorRadius, 0, minorRadius).halfEllipse(-2 * majorRadius, 0, minorRadius).close();
}
function drawPolysides(radius, sidesCount, sagitta = 0) {
  return new Drawing(polysidesBlueprint(radius, sidesCount, sagitta));
}
function drawText(text, { startX = 0, startY = 0, fontSize = 16, fontFamily = "default" } = {}) {
  return new Drawing(textBlueprints(text, {
    startX,
    startY,
    fontSize,
    fontFamily
  }));
}
var drawPointsInterpolation = (points, approximationConfig = {}, options = {}) => {
  const curves = [make2dInerpolatedBSplineCurve(points, approximationConfig)];
  if (options.closeShape && !samePoint$2(points[0], points[points.length - 1])) curves.push(make2dSegmentCurve(points[points.length - 1], points[0]));
  return new Drawing(new Blueprint(curves));
};
var drawParametricFunction = (func, { pointsCount = 400, start = 0, stop = 1, closeShape = false } = {}, approximationConfig = {}) => {
  const stepSize = (stop - start) / pointsCount;
  return drawPointsInterpolation([...Array(pointsCount + 1).keys()].map((t) => {
    return func(start + t * stepSize);
  }), approximationConfig, { closeShape });
};
var edgesToDrawing = (edges) => {
  const planeFace = drawRectangle(1e3, 1e3).sketchOnPlane().face();
  const stitchedCurves = stitchCurves(edges.map((e) => {
    try {
      return edgeToCurveOnPlane(e);
    } catch (_error) {
      return edgeToCurve(e, planeFace);
    }
  })).map((s) => new Blueprint(s));
  if (stitchedCurves.length === 0) return new Drawing();
  if (stitchedCurves.length === 1) return new Drawing(stitchedCurves[0]);
  return new Drawing(new Blueprints(stitchedCurves));
};
function drawProjection(shape, projectionCamera = "front") {
  let camera;
  if (projectionCamera instanceof ProjectionCamera) camera = projectionCamera;
  else camera = lookFromPlane(projectionCamera);
  const { visible, hidden } = makeProjectedEdges(shape, camera);
  return {
    visible: edgesToDrawing(visible),
    hidden: edgesToDrawing(hidden)
  };
}
function drawFaceOutline(face) {
  const stitchedCurves = stitchCurves(face.clone().outerWire().edges.map((e) => edgeToCurve(e, face))).map((s) => new Blueprint(s));
  if (stitchedCurves.length === 0) return new Drawing();
  if (stitchedCurves.length === 1) return new Drawing(stitchedCurves[0]);
  return new Drawing(new Blueprints(stitchedCurves));
}
function uuidv() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) => (c ^ crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
}
var wrapString = (str) => {
  return new (getOC()).TCollection_ExtendedString(str, true);
};
function parseSlice(hex, index) {
  return parseInt(hex.slice(index * 2, (index + 1) * 2), 16);
}
function colorFromHex(hex) {
  let color = hex;
  if (color.indexOf("#") === 0) color = color.slice(1);
  if (color.length === 3) color = color.replace(/([0-9a-f])/gi, "$1$1");
  return [
    parseSlice(color, 0),
    parseSlice(color, 1),
    parseSlice(color, 2)
  ];
}
var wrapColor = (hex, alpha = 1) => {
  const oc = getOC();
  const [r, g, b] = colorFromHex(hex);
  return new oc.Quantity_ColorRGBA(r / 255, g / 255, b / 255, alpha);
};
var AssemblyExporter = class extends WrappingObj {
};
function createAssembly(shapes = []) {
  const oc = getOC();
  const doc = new oc.TDocStd_Document(wrapString("XmlOcaf"));
  oc.XCAFDoc_ShapeTool.SetAutoNaming(false);
  const mainLabel = doc.Main();
  const tool = oc.XCAFDoc_DocumentTool.ShapeTool(mainLabel);
  const ctool = oc.XCAFDoc_DocumentTool.ColorTool(mainLabel);
  for (const { shape, name, color, alpha } of shapes) {
    const shapeNode = tool.NewShape();
    tool.SetShape(shapeNode, shape.wrapped);
    oc.TDataStd_Name.Set(shapeNode, wrapString(name || uuidv()));
    ctool.SetColor(shapeNode, wrapColor(color || "#f00", alpha ?? 1), oc.XCAFDoc_ColorType.XCAFDoc_ColorSurf);
  }
  tool.UpdateAssemblies();
  return new AssemblyExporter(doc);
}
function exportSTEP(shapes = [], { unit, modelUnit } = {}) {
  const oc = getOC();
  const r = GCWithScope();
  const doc = createAssembly(shapes);
  if (unit || modelUnit) {
    r(new oc.STEPCAFControl_Writer());
    oc.Interface_Static.SetCVal("xstep.cascade.unit", (modelUnit || unit || "MM").toUpperCase());
    oc.Interface_Static.SetCVal("write.step.unit", (unit || modelUnit || "MM").toUpperCase());
  }
  const session = r(new oc.XSControl_WorkSession());
  const writer = r(new oc.STEPCAFControl_Writer(session, false));
  writer.SetColorMode(true);
  writer.SetLayerMode(true);
  writer.SetNameMode(true);
  oc.Interface_Static.SetIVal("write.surfacecurve.mode", 1);
  oc.Interface_Static.SetIVal("write.precision.mode", 0);
  oc.Interface_Static.SetIVal("write.step.assembly", 2);
  oc.Interface_Static.SetIVal("write.step.schema", 5);
  const filename = "export.step";
  const progress = r(new oc.Message_ProgressRange());
  if (writer.Perform(doc.wrapped, filename, progress)) {
    const file = oc.FS.readFile("/export.step");
    oc.FS.unlink("/export.step");
    return new Blob([file], { type: "application/STEP" });
  } else throw new Error("WRITE STEP FILE FAILED.");
}

// node_modules/replicad-opencascadejs/dist/replicad_single.js
async function Module(moduleArg = {}) {
  var moduleRtn;
  var g = moduleArg, aa = !!globalThis.window, ba = !!globalThis.WorkerGlobalScope, ca = globalThis.process?.versions?.node && "renderer" != globalThis.process?.type;
  if (ca) {
    const { createRequire: a } = await import("node:module");
    var require2 = a(import.meta.url);
  }
  var da = "./this.program", ea = (a, b) => {
    throw b;
  }, ha = import.meta.url, ia = "", ja, ka;
  if (ca) {
    var fs = require2("node:fs");
    ha.startsWith("file:") && (ia = require2("node:path").dirname(require2("node:url").fileURLToPath(ha)) + "/");
    ka = (a) => {
      a = la(a) ? new URL(a) : a;
      return fs.readFileSync(a);
    };
    ja = async (a) => {
      a = la(a) ? new URL(a) : a;
      return fs.readFileSync(a, void 0);
    };
    1 < process.argv.length && (da = process.argv[1].replace(/\\/g, "/"));
    process.argv.slice(2);
    ea = (a, b) => {
      process.exitCode = a;
      throw b;
    };
  } else if (aa || ba) {
    try {
      ia = new URL(".", ha).href;
    } catch {
    }
    ba && (ka = (a) => {
      var b = new XMLHttpRequest();
      b.open("GET", a, false);
      b.responseType = "arraybuffer";
      b.send(null);
      return new Uint8Array(b.response);
    });
    ja = async (a) => {
      a = await fetch(a, { credentials: "same-origin" });
      if (a.ok) return a.arrayBuffer();
      throw Error(a.status + " : " + a.url);
    };
  }
  var ma = console.log.bind(console), p = console.error.bind(console), na, oa = false, la = (a) => a.startsWith("file://"), pa, qa, u, x, z, ra, D, E, sa, ta, F, ua, va = false;
  function wa() {
    var a = xa.buffer;
    u = new Int8Array(a);
    z = new Int16Array(a);
    x = new Uint8Array(a);
    ra = new Uint16Array(a);
    D = new Int32Array(a);
    E = new Uint32Array(a);
    sa = new Float32Array(a);
    ta = new Float64Array(a);
    F = new BigInt64Array(a);
    ua = new BigUint64Array(a);
  }
  function H(a) {
    g.onAbort?.(a);
    a = "Aborted(" + a + ")";
    p(a);
    oa = true;
    a += ". Build with -sASSERTIONS for more info.";
    va && ya();
    a = new WebAssembly.RuntimeError(a);
    qa?.(a);
    throw a;
  }
  var za;
  async function Aa(a) {
    if (!na) try {
      var b = await ja(a);
      return new Uint8Array(b);
    } catch {
    }
    if (a == za && na) a = new Uint8Array(na);
    else if (ka) a = ka(a);
    else throw "both async and sync fetching of the wasm failed";
    return a;
  }
  async function Ba(a, b) {
    try {
      var c = await Aa(a);
      return await WebAssembly.instantiate(c, b);
    } catch (d) {
      p(`failed to asynchronously prepare wasm: ${d}`), H(d);
    }
  }
  async function Ca(a) {
    var b = za;
    if (!na && !ca) try {
      var c = fetch(b, { credentials: "same-origin" });
      return await WebAssembly.instantiateStreaming(c, a);
    } catch (d) {
      p(`wasm streaming compile failed: ${d}`), p("falling back to ArrayBuffer instantiation");
    }
    return Ba(b, a);
  }
  class Da {
    name = "ExitStatus";
    constructor(a) {
      this.message = `Program terminated with exit(${a})`;
      this.status = a;
    }
  }
  var Ea = (a) => {
    for (; 0 < a.length; ) a.shift()(g);
  }, Fa = [], Ga = [], Ha = () => {
    var a = g.preRun.shift();
    Ga.push(a);
  }, Ia = true, Ja = (a, b) => {
    for (var c = 0, d = a.length - 1; 0 <= d; d--) {
      var e = a[d];
      "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
    }
    if (b) for (; c; c--) a.unshift("..");
    return a;
  }, Ka = (a) => {
    var b = "/" === a.charAt(0), c = "/" === a.slice(-1);
    (a = Ja(a.split("/").filter((d) => !!d), !b).join("/")) || b || (a = ".");
    a && c && (a += "/");
    return (b ? "/" : "") + a;
  }, La = (a) => {
    var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
    a = b[0];
    b = b[1];
    if (!a && !b) return ".";
    b &&= b.slice(0, -1);
    return a + b;
  }, Ma = (a) => a && a.match(/([^\/]+|\/)\/*$/)[1], Na = (a, b) => Ka(a + "/" + b), Oa = () => {
    if (ca) {
      var a = require2("node:crypto");
      return (b) => a.randomFillSync(b);
    }
    return (b) => crypto.getRandomValues(b);
  }, Pa = (a) => {
    (Pa = Oa())(a);
  }, Qa = (...a) => {
    for (var b = "", c = false, d = a.length - 1; -1 <= d && !c; d--) {
      c = 0 <= d ? a[d] : I.cwd();
      if ("string" != typeof c) throw new TypeError("Arguments to path.resolve must be strings");
      if (!c) return "";
      b = c + "/" + b;
      c = "/" === c.charAt(0);
    }
    b = Ja(b.split("/").filter((e) => !!e), !c).join("/");
    return (c ? "/" : "") + b || ".";
  }, Ra = (a, b) => {
    function c(h) {
      for (var k = 0; k < h.length && "" === h[k]; k++) ;
      for (var m = h.length - 1; 0 <= m && "" === h[m]; m--) ;
      return k > m ? [] : h.slice(k, m - k + 1);
    }
    a = Qa(a).slice(1);
    b = Qa(b).slice(1);
    a = c(a.split("/"));
    b = c(b.split("/"));
    for (var d = Math.min(a.length, b.length), e = d, f = 0; f < d; f++) if (a[f] !== b[f]) {
      e = f;
      break;
    }
    d = [];
    for (f = e; f < a.length; f++) d.push("..");
    d = d.concat(b.slice(e));
    return d.join("/");
  }, Sa = globalThis.TextDecoder && new TextDecoder(), Ta = (a, b, c, d) => {
    c = b + c;
    if (d) return c;
    for (; a[b] && !(b >= c); ) ++b;
    return b;
  }, Ua = (a, b = 0, c, d) => {
    b >>>= 0;
    c = Ta(a, b, c, d);
    if (16 < c - b && a.buffer && Sa) return Sa.decode(a.subarray(b, c));
    for (d = ""; b < c; ) {
      var e = a[b++];
      if (e & 128) {
        var f = a[b++] & 63;
        if (192 == (e & 224)) d += String.fromCharCode((e & 31) << 6 | f);
        else {
          var h = a[b++] & 63;
          e = 224 == (e & 240) ? (e & 15) << 12 | f << 6 | h : (e & 7) << 18 | f << 12 | h << 6 | a[b++] & 63;
          65536 > e ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023));
        }
      } else d += String.fromCharCode(e);
    }
    return d;
  }, Va = [], Wa = (a) => {
    for (var b = 0, c = 0; c < a.length; ++c) {
      var d = a.charCodeAt(c);
      127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4, ++c) : b += 3;
    }
    return b;
  }, Xa = (a, b, c, d) => {
    c >>>= 0;
    if (!(0 < d)) return 0;
    var e = c;
    d = c + d - 1;
    for (var f = 0; f < a.length; ++f) {
      var h = a.codePointAt(f);
      if (127 >= h) {
        if (c >= d) break;
        b[c++ >>> 0] = h;
      } else if (2047 >= h) {
        if (c + 1 >= d) break;
        b[c++ >>> 0] = 192 | h >> 6;
        b[c++ >>> 0] = 128 | h & 63;
      } else if (65535 >= h) {
        if (c + 2 >= d) break;
        b[c++ >>> 0] = 224 | h >> 12;
        b[c++ >>> 0] = 128 | h >> 6 & 63;
        b[c++ >>> 0] = 128 | h & 63;
      } else {
        if (c + 3 >= d) break;
        b[c++ >>> 0] = 240 | h >> 18;
        b[c++ >>> 0] = 128 | h >> 12 & 63;
        b[c++ >>> 0] = 128 | h >> 6 & 63;
        b[c++ >>> 0] = 128 | h & 63;
        f++;
      }
    }
    b[c >>> 0] = 0;
    return c - e;
  }, Ya = (a) => {
    var b = Array(Wa(a) + 1);
    a = Xa(a, b, 0, b.length);
    b.length = a;
    return b;
  }, Za = [];
  function $a(a, b) {
    Za[a] = { input: [], output: [], Db: b };
    ab(a, bb);
  }
  var bb = { open(a) {
    var b = Za[a.node.rdev];
    if (!b) throw new I.Wa(43);
    a.tty = b;
    a.seekable = false;
  }, close(a) {
    a.tty.Db.fsync(a.tty);
  }, fsync(a) {
    a.tty.Db.fsync(a.tty);
  }, read(a, b, c, d) {
    if (!a.tty || !a.tty.Db.sc) throw new I.Wa(60);
    for (var e = 0, f = 0; f < d; f++) {
      try {
        var h = a.tty.Db.sc(a.tty);
      } catch (k) {
        throw new I.Wa(29);
      }
      if (void 0 === h && 0 === e) throw new I.Wa(6);
      if (null === h || void 0 === h) break;
      e++;
      b[c + f] = h;
    }
    e && (a.node.atime = Date.now());
    return e;
  }, write(a, b, c, d) {
    if (!a.tty || !a.tty.Db.hc) throw new I.Wa(60);
    try {
      for (var e = 0; e < d; e++) a.tty.Db.hc(
        a.tty,
        b[c + e]
      );
    } catch (f) {
      throw new I.Wa(29);
    }
    d && (a.node.mtime = a.node.ctime = Date.now());
    return e;
  } }, cb = { sc() {
    a: {
      if (!Va.length) {
        var a = null;
        if (ca) {
          var b = Buffer.alloc(256), c = 0, d = process.stdin.fd;
          try {
            c = fs.readSync(d, b, 0, 256);
          } catch (e) {
            if (e.toString().includes("EOF")) c = 0;
            else throw e;
          }
          0 < c && (a = b.slice(0, c).toString("utf-8"));
        } else globalThis.window?.prompt && (a = window.prompt("Input: "), null !== a && (a += "\n"));
        if (!a) {
          a = null;
          break a;
        }
        Va = Ya(a);
      }
      a = Va.shift();
    }
    return a;
  }, hc(a, b) {
    null === b || 10 === b ? (ma(Ua(a.output)), a.output = []) : 0 != b && a.output.push(b);
  }, fsync(a) {
    0 < a.output?.length && (ma(Ua(a.output)), a.output = []);
  }, Sc() {
    return { qd: 25856, sd: 5, pd: 191, rd: 35387, od: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
  }, Tc() {
    return 0;
  }, Uc() {
    return [24, 80];
  } }, db = { hc(a, b) {
    null === b || 10 === b ? (p(Ua(a.output)), a.output = []) : 0 != b && a.output.push(b);
  }, fsync(a) {
    0 < a.output?.length && (p(Ua(a.output)), a.output = []);
  } }, J = { xb: null, ib() {
    return J.createNode(null, "/", 16895, 0);
  }, createNode(a, b, c, d) {
    if (24576 === (c & 61440) || I.isFIFO(c)) throw new I.Wa(63);
    J.xb || (J.xb = { dir: { node: { tb: J.Ya.tb, vb: J.Ya.vb, lookup: J.Ya.lookup, Bb: J.Ya.Bb, rename: J.Ya.rename, unlink: J.Ya.unlink, rmdir: J.Ya.rmdir, readdir: J.Ya.readdir, symlink: J.Ya.symlink }, stream: { pb: J.ab.pb } }, file: { node: { tb: J.Ya.tb, vb: J.Ya.vb }, stream: { pb: J.ab.pb, read: J.ab.read, write: J.ab.write, Kb: J.ab.Kb, Pb: J.ab.Pb } }, link: { node: { tb: J.Ya.tb, vb: J.Ya.vb, readlink: J.Ya.readlink }, stream: {} }, mc: { node: { tb: J.Ya.tb, vb: J.Ya.vb }, stream: I.Fc } });
    c = I.createNode(a, b, c, d);
    K(c.mode) ? (c.Ya = J.xb.dir.node, c.ab = J.xb.dir.stream, c.bb = {}) : I.isFile(c.mode) ? (c.Ya = J.xb.file.node, c.ab = J.xb.file.stream, c.lb = 0, c.bb = null) : 40960 === (c.mode & 61440) ? (c.Ya = J.xb.link.node, c.ab = J.xb.link.stream) : 8192 === (c.mode & 61440) && (c.Ya = J.xb.mc.node, c.ab = J.xb.mc.stream);
    c.atime = c.mtime = c.ctime = Date.now();
    a && (a.bb[b] = c, a.atime = a.mtime = a.ctime = c.atime);
    return c;
  }, Dd(a) {
    return a.bb ? a.bb.subarray ? a.bb.subarray(0, a.lb) : new Uint8Array(a.bb) : new Uint8Array(0);
  }, Ya: {
    tb(a) {
      var b = {};
      b.dev = 8192 === (a.mode & 61440) ? a.id : 1;
      b.ino = a.id;
      b.mode = a.mode;
      b.nlink = 1;
      b.uid = 0;
      b.gid = 0;
      b.rdev = a.rdev;
      K(a.mode) ? b.size = 4096 : I.isFile(a.mode) ? b.size = a.lb : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
      b.atime = new Date(a.atime);
      b.mtime = new Date(a.mtime);
      b.ctime = new Date(a.ctime);
      b.blksize = 4096;
      b.blocks = Math.ceil(b.size / b.blksize);
      return b;
    },
    vb(a, b) {
      for (var c of ["mode", "atime", "mtime", "ctime"]) null != b[c] && (a[c] = b[c]);
      void 0 !== b.size && (b = b.size, a.lb != b && (0 == b ? (a.bb = null, a.lb = 0) : (c = a.bb, a.bb = new Uint8Array(b), c && a.bb.set(c.subarray(0, Math.min(b, a.lb))), a.lb = b)));
    },
    lookup() {
      J.Yb || (J.Yb = new I.Wa(44), J.Yb.stack = "<generic error, no stack>");
      throw J.Yb;
    },
    Bb(a, b, c, d) {
      return J.createNode(a, b, c, d);
    },
    rename(a, b, c) {
      try {
        var d = L(b, c);
      } catch (f) {
      }
      if (d) {
        if (K(a.mode)) for (var e in d.bb) throw new I.Wa(55);
        eb(d);
      }
      delete a.parent.bb[a.name];
      b.bb[c] = a;
      a.name = c;
      b.ctime = b.mtime = a.parent.ctime = a.parent.mtime = Date.now();
    },
    unlink(a, b) {
      delete a.bb[b];
      a.ctime = a.mtime = Date.now();
    },
    rmdir(a, b) {
      var c = L(a, b), d;
      for (d in c.bb) throw new I.Wa(55);
      delete a.bb[b];
      a.ctime = a.mtime = Date.now();
    },
    readdir(a) {
      return [".", "..", ...Object.keys(a.bb)];
    },
    symlink(a, b, c) {
      a = J.createNode(a, b, 41471, 0);
      a.link = c;
      return a;
    },
    readlink(a) {
      if (40960 !== (a.mode & 61440)) throw new I.Wa(28);
      return a.link;
    }
  }, ab: {
    read(a, b, c, d, e) {
      var f = a.node.bb;
      if (e >= a.node.lb) return 0;
      a = Math.min(a.node.lb - e, d);
      if (8 < a && f.subarray) b.set(f.subarray(e, e + a), c);
      else for (d = 0; d < a; d++) b[c + d] = f[e + d];
      return a;
    },
    write(a, b, c, d, e, f) {
      b.buffer === u.buffer && (f = false);
      if (!d) return 0;
      a = a.node;
      a.mtime = a.ctime = Date.now();
      if (b.subarray && (!a.bb || a.bb.subarray)) {
        if (f) return a.bb = b.subarray(c, c + d), a.lb = d;
        if (0 === a.lb && 0 === e) return a.bb = b.slice(c, c + d), a.lb = d;
        if (e + d <= a.lb) return a.bb.set(b.subarray(c, c + d), e), d;
      }
      f = e + d;
      var h = a.bb ? a.bb.length : 0;
      h >= f || (f = Math.max(f, h * (1048576 > h ? 2 : 1.125) >>> 0), 0 != h && (f = Math.max(f, 256)), h = a.bb, a.bb = new Uint8Array(f), 0 < a.lb && a.bb.set(h.subarray(0, a.lb), 0));
      if (a.bb.subarray && b.subarray) a.bb.set(b.subarray(c, c + d), e);
      else for (f = 0; f < d; f++) a.bb[e + f] = b[c + f];
      a.lb = Math.max(a.lb, e + d);
      return d;
    },
    pb(a, b, c) {
      1 === c ? b += a.position : 2 === c && I.isFile(a.node.mode) && (b += a.node.lb);
      if (0 > b) throw new I.Wa(28);
      return b;
    },
    Kb(a, b, c, d, e) {
      if (!I.isFile(a.node.mode)) throw new I.Wa(43);
      a = a.node.bb;
      if (e & 2 || !a || a.buffer !== u.buffer) {
        d = true;
        H();
        e = void 0;
        if (!e) throw new I.Wa(48);
        if (a) {
          if (0 < c || c + b < a.length) a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
          u.set(a, e >>> 0);
        }
      } else d = false, e = a.byteOffset;
      return { eb: e, kd: d };
    },
    Pb(a, b, c, d) {
      J.ab.write(a, b, 0, d, c, false);
      return 0;
    }
  } }, fb = (a, b) => {
    var c = 0;
    a && (c |= 365);
    b && (c |= 146);
    return c;
  }, gb = async (a) => {
    a = await ja(a);
    return new Uint8Array(a);
  }, hb = 0, ib = null, jb = [], lb = async (a, b) => {
    "undefined" != typeof Browser && kb();
    for (var c of jb) if (c.canHandle(b)) return c.handle(a, b);
    return a;
  }, nb = async (a, b, c, d, e, f, h, k) => {
    var m = b ? Qa(Ka(a + "/" + b)) : a;
    hb++;
    g.monitorRunDependencies?.(hb);
    try {
      var l = c;
      "string" == typeof c && (l = await gb(c));
      l = await lb(l, m);
      k?.();
      if (!f) {
        c = b;
        a && (a = "string" == typeof a ? a : mb(a), c = b ? Ka(a + "/" + b) : a);
        var n = fb(d, e), r = I.create(c, n);
        if (l) {
          if ("string" == typeof l) {
            var q = Array(l.length);
            b = 0;
            for (var t = l.length; b < t; ++b) q[b] = l.charCodeAt(b);
            l = q;
          }
          I.chmod(r, n | 146);
          var v = I.open(r, 577);
          I.write(
            v,
            l,
            0,
            l.length,
            0,
            h
          );
          I.close(v);
          I.chmod(r, n);
        }
      }
    } finally {
      hb--, g.monitorRunDependencies?.(hb), 0 == hb && ib && (h = ib, ib = null, h());
    }
  };
  function kb() {
    var a, b, c;
    I.$b = true;
    a ??= g.stdin;
    b ??= g.stdout;
    c ??= g.stderr;
    a ? I.Gb("/dev", "stdin", a) : I.symlink("/dev/tty", "/dev/stdin");
    b ? I.Gb("/dev", "stdout", null, b) : I.symlink("/dev/tty", "/dev/stdout");
    c ? I.Gb("/dev", "stderr", null, c) : I.symlink("/dev/tty1", "/dev/stderr");
    I.open("/dev/stdin", 0);
    I.open("/dev/stdout", 1);
    I.open("/dev/stderr", 1);
  }
  function ab(a, b) {
    I.pc[a] = { ab: b };
  }
  function K(a) {
    return 16384 === (a & 61440);
  }
  function L(a, b) {
    var c = K(a.mode) ? (c = ob(a, "x")) ? c : a.Ya.lookup ? 0 : 2 : 54;
    if (c) throw new I.Wa(c);
    for (c = I.Cb[pb(a.id, b)]; c; c = c.Ib) {
      var d = c.name;
      if (c.parent.id === a.id && d === b) return c;
    }
    return I.lookup(a, b);
  }
  function eb(a) {
    var b = pb(a.parent.id, a.name);
    if (I.Cb[b] === a) I.Cb[b] = a.Ib;
    else for (b = I.Cb[b]; b; ) {
      if (b.Ib === a) {
        b.Ib = a.Ib;
        break;
      }
      b = b.Ib;
    }
  }
  function N(a, b = {}) {
    if (!a) throw new I.Wa(44);
    b.Tb ?? (b.Tb = true);
    "/" === a.charAt(0) || (a = I.cwd() + "/" + a);
    var c = 0;
    a: for (; 40 > c; c++) {
      a = a.split("/").filter((k) => !!k);
      for (var d = I.root, e = "/", f = 0; f < a.length; f++) {
        var h = f === a.length - 1;
        if (h && b.parent) break;
        if ("." !== a[f]) if (".." === a[f]) if (e = La(e), I.cc(d)) {
          a = e + "/" + a.slice(f + 1).join("/");
          c--;
          continue a;
        } else d = d.parent;
        else {
          e = Ka(e + "/" + a[f]);
          try {
            d = L(d, a[f]);
          } catch (k) {
            if (44 === k?.jb && h && b.Xc) return { path: e };
            throw k;
          }
          !d.ub || h && !b.Tb || (d = d.ub.root);
          if (40960 === (d.mode & 61440) && (!h || b.rb)) {
            if (!d.Ya.readlink) throw new I.Wa(52);
            d = d.Ya.readlink(d);
            "/" === d.charAt(0) || (d = La(e) + "/" + d);
            a = d + "/" + a.slice(f + 1).join("/");
            continue a;
          }
        }
      }
      return { path: e, node: d };
    }
    throw new I.Wa(32);
  }
  function mb(a) {
    for (var b; ; ) {
      if (I.cc(a)) return a = a.ib.vc, b ? "/" !== a[a.length - 1] ? `${a}/${b}` : a + b : a;
      b = b ? `${a.name}/${b}` : a.name;
      a = a.parent;
    }
  }
  function pb(a, b) {
    for (var c = 0, d = 0; d < b.length; d++) c = (c << 5) - c + b.charCodeAt(d) | 0;
    return (a + c >>> 0) % I.Cb.length;
  }
  function qb(a) {
    var b = pb(a.parent.id, a.name);
    a.Ib = I.Cb[b];
    I.Cb[b] = a;
  }
  function ob(a, b) {
    return I.tc ? 0 : b.includes("r") && !(a.mode & 292) || b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73) ? 2 : 0;
  }
  function rb(a, b) {
    if (!K(a.mode)) return 54;
    try {
      return L(a, b), 20;
    } catch (c) {
    }
    return ob(a, "wx");
  }
  function sb(a, b, c) {
    try {
      var d = L(a, b);
    } catch (e) {
      return e.jb;
    }
    if (a = ob(a, "wx")) return a;
    if (c) {
      if (!K(d.mode)) return 54;
      if (I.cc(d) || mb(d) === I.cwd()) return 10;
    } else if (K(d.mode)) return 31;
    return 0;
  }
  function tb(a, b) {
    if (!a) throw new I.Wa(b);
    return a;
  }
  function O(a) {
    a = I.Oc(a);
    if (!a) throw new I.Wa(8);
    return a;
  }
  function ub(a, b = -1) {
    a = Object.assign(new I.Cc(), a);
    if (-1 == b) a: {
      for (b = 0; b <= I.Dc; b++) if (!I.streams[b]) break a;
      throw new I.Wa(33);
    }
    a.fd = b;
    return I.streams[b] = a;
  }
  function vb(a, b = -1) {
    a = ub(a, b);
    a.ab?.xd?.(a);
    return a;
  }
  function wb(a, b, c) {
    var d = a?.ab.vb;
    a = d ? a : b;
    d ??= b.Ya.vb;
    tb(d, 63);
    d(a, c);
  }
  function xb(a) {
    var b = [];
    for (a = [a]; a.length; ) {
      var c = a.pop();
      b.push(c);
      a.push(...c.Ob);
    }
    return b;
  }
  function Ab(a) {
    var b = { nd: 4096, Ad: 4096, blocks: 1e6, md: 5e5, ld: 5e5, files: I.fc, yd: I.fc - 1, Bd: 42, flags: 2, Gd: 255 };
    a.Ya.yc && Object.assign(b, a.Ya.yc(a.ib.Zc.root));
    return b;
  }
  function Bb(a, b, c) {
    "undefined" == typeof c && (c = b, b = 438);
    return I.Bb(a, b | 8192, c);
  }
  function Cb(a, b, c, d) {
    wb(a, b, { mode: c & 4095 | b.mode & -4096, ctime: Date.now(), qc: d });
  }
  function Db(a, b, c) {
    if (K(b.mode)) throw new I.Wa(31);
    if (!I.isFile(b.mode)) throw new I.Wa(28);
    var d = ob(b, "w");
    if (d) throw new I.Wa(d);
    wb(a, b, { size: c, timestamp: Date.now() });
  }
  function Eb(a, b, c, d) {
    a = "string" == typeof a ? a : mb(a);
    b = Ka(a + "/" + b);
    return I.create(b, fb(c, d));
  }
  function Fb(a) {
    if (!(a.Vc || a.Wc || a.link || a.bb)) if (globalThis.XMLHttpRequest) H("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
    else try {
      a.bb = ka(a.url);
    } catch (b) {
      throw new I.Wa(29);
    }
  }
  var I = { root: null, Ob: [], pc: {}, streams: [], fc: 1, Cb: null, nc: "/", $b: false, tc: true, Kc: null, Wb: 0, Wa: class {
    name = "ErrnoError";
    constructor(a) {
      this.jb = a;
    }
  }, Cc: class {
    zb = {};
    node = null;
    get object() {
      return this.node;
    }
    set object(a) {
      this.node = a;
    }
    get flags() {
      return this.zb.flags;
    }
    set flags(a) {
      this.zb.flags = a;
    }
    get position() {
      return this.zb.position;
    }
    set position(a) {
      this.zb.position = a;
    }
  }, Bc: class {
    Ya = {};
    ab = {};
    ub = null;
    constructor(a, b, c, d) {
      a ||= this;
      this.parent = a;
      this.ib = a.ib;
      this.id = I.fc++;
      this.name = b;
      this.mode = c;
      this.rdev = d;
      this.atime = this.mtime = this.ctime = Date.now();
    }
    get read() {
      return 365 === (this.mode & 365);
    }
    set read(a) {
      a ? this.mode |= 365 : this.mode &= -366;
    }
    get write() {
      return 146 === (this.mode & 146);
    }
    set write(a) {
      a ? this.mode |= 146 : this.mode &= -147;
    }
    get Wc() {
      return K(this.mode);
    }
    get Vc() {
      return 8192 === (this.mode & 61440);
    }
  }, createNode(a, b, c, d) {
    a = new I.Bc(a, b, c, d);
    qb(a);
    return a;
  }, cc(a) {
    return a === a.parent;
  }, isFile(a) {
    return 32768 === (a & 61440);
  }, isFIFO(a) {
    return 4096 === (a & 61440);
  }, isSocket(a) {
    return 49152 === (a & 49152);
  }, Dc: 4096, Oc: (a) => I.streams[a], Fc: { open(a) {
    a.ab = I.Mc(a.node.rdev).ab;
    a.ab.open?.(a);
  }, pb() {
    throw new I.Wa(70);
  } }, ec: (a) => a >> 8, Ed: (a) => a & 255, Hb: (a, b) => a << 8 | b, Mc: (a) => I.pc[a], zc(a, b) {
    function c(k) {
      I.Wb--;
      return b(k);
    }
    function d(k) {
      if (k) {
        if (!d.Ic) return d.Ic = true, c(k);
      } else ++f >= e.length && c(null);
    }
    "function" == typeof a && (b = a, a = false);
    I.Wb++;
    1 < I.Wb && p(`warning: ${I.Wb} FS.syncfs operations in flight at once, probably just doing extra work`);
    var e = xb(I.root.ib), f = 0, h;
    for (h of e) h.type.zc ? h.type.zc(h, a, d) : d(null);
  }, ib(a, b, c) {
    var d = "/" === c;
    if (d && I.root) throw new I.Wa(10);
    if (!d && c) {
      var e = N(c, { Tb: false });
      c = e.path;
      e = e.node;
      if (e.ub) throw new I.Wa(10);
      if (!K(e.mode)) throw new I.Wa(54);
    }
    b = { type: a, Zc: b, vc: c, Ob: [] };
    a = a.ib(b);
    a.ib = b;
    b.root = a;
    d ? I.root = a : e && (e.ub = b, e.ib && e.ib.Ob.push(b));
    return a;
  }, Kd(a) {
    a = N(a, { Tb: false });
    if (!a.node.ub) throw new I.Wa(28);
    a = a.node;
    var b = a.ub, c = xb(b);
    for ([, e] of Object.entries(I.Cb)) for (; e; ) {
      var d = e.Ib;
      c.includes(e.ib) && eb(e);
      var e = d;
    }
    a.ub = null;
    a.ib.Ob.splice(a.ib.Ob.indexOf(b), 1);
  }, lookup(a, b) {
    return a.Ya.lookup(a, b);
  }, Bb(a, b, c) {
    var d = N(a, { parent: true }).node;
    a = Ma(a);
    if (!a) throw new I.Wa(28);
    if ("." === a || ".." === a) throw new I.Wa(20);
    var e = rb(d, a);
    if (e) throw new I.Wa(e);
    if (!d.Ya.Bb) throw new I.Wa(63);
    return d.Ya.Bb(d, a, b, c);
  }, yc(a) {
    return Ab(N(a, { rb: true }).node);
  }, Jd(a) {
    return Ab(a.node);
  }, create(a, b = 438) {
    return I.Bb(a, b & 4095 | 32768, 0);
  }, mkdir(a, b = 511) {
    return I.Bb(a, b & 1023 | 16384, 0);
  }, Fd(a, b) {
    var c = a.split("/"), d = "", e;
    for (e of c) if (e) {
      if (d || "/" === a.charAt(0)) d += "/";
      d += e;
      try {
        I.mkdir(d, b);
      } catch (f) {
        if (20 != f.jb) throw f;
      }
    }
  }, symlink(a, b) {
    if (!Qa(a)) throw new I.Wa(44);
    var c = N(b, { parent: true }).node;
    if (!c) throw new I.Wa(44);
    b = Ma(b);
    var d = rb(c, b);
    if (d) throw new I.Wa(d);
    if (!c.Ya.symlink) throw new I.Wa(63);
    return c.Ya.symlink(c, b, a);
  }, rename(a, b) {
    var c = La(a), d = La(b), e = Ma(a), f = Ma(b);
    var h = N(a, { parent: true });
    var k = h.node;
    h = N(b, { parent: true });
    h = h.node;
    if (!k || !h) throw new I.Wa(44);
    if (k.ib !== h.ib) throw new I.Wa(75);
    var m = L(k, e);
    a = Ra(a, d);
    if ("." !== a.charAt(0)) throw new I.Wa(28);
    a = Ra(b, c);
    if ("." !== a.charAt(0)) throw new I.Wa(55);
    try {
      var l = L(h, f);
    } catch (n) {
    }
    if (m !== l) {
      b = K(m.mode);
      if (e = sb(
        k,
        e,
        b
      )) throw new I.Wa(e);
      if (e = l ? sb(h, f, b) : rb(h, f)) throw new I.Wa(e);
      if (!k.Ya.rename) throw new I.Wa(63);
      if (m.ub || l && l.ub) throw new I.Wa(10);
      if (h !== k && (e = ob(k, "w"))) throw new I.Wa(e);
      eb(m);
      try {
        k.Ya.rename(m, h, f), m.parent = h;
      } catch (n) {
        throw n;
      } finally {
        qb(m);
      }
    }
  }, rmdir(a) {
    var b = N(a, { parent: true }).node;
    a = Ma(a);
    var c = L(b, a), d = sb(b, a, true);
    if (d) throw new I.Wa(d);
    if (!b.Ya.rmdir) throw new I.Wa(63);
    if (c.ub) throw new I.Wa(10);
    b.Ya.rmdir(b, a);
    eb(c);
  }, readdir(a) {
    a = N(a, { rb: true }).node;
    return tb(a.Ya.readdir, 54)(a);
  }, unlink(a) {
    var b = N(a, { parent: true }).node;
    if (!b) throw new I.Wa(44);
    a = Ma(a);
    var c = L(b, a), d = sb(b, a, false);
    if (d) throw new I.Wa(d);
    if (!b.Ya.unlink) throw new I.Wa(63);
    if (c.ub) throw new I.Wa(10);
    b.Ya.unlink(b, a);
    eb(c);
  }, readlink(a) {
    a = N(a).node;
    if (!a) throw new I.Wa(44);
    if (!a.Ya.readlink) throw new I.Wa(28);
    return a.Ya.readlink(a);
  }, stat(a, b) {
    a = N(a, { rb: !b }).node;
    return tb(a.Ya.tb, 63)(a);
  }, fstat(a) {
    var b = O(a);
    a = b.node;
    var c = b.ab.tb;
    b = c ? b : a;
    c ??= a.Ya.tb;
    tb(c, 63);
    return c(b);
  }, lstat(a) {
    return I.stat(a, true);
  }, chmod(a, b, c) {
    a = "string" == typeof a ? N(a, { rb: !c }).node : a;
    Cb(null, a, b, c);
  }, lchmod(a, b) {
    I.chmod(a, b, true);
  }, fchmod(a, b) {
    a = O(a);
    Cb(a, a.node, b, false);
  }, chown(a, b, c, d) {
    a = "string" == typeof a ? N(a, { rb: !d }).node : a;
    wb(null, a, { timestamp: Date.now(), qc: d });
  }, lchown(a, b, c) {
    I.chown(a, b, c, true);
  }, fchown(a) {
    a = O(a);
    wb(a, a.node, { timestamp: Date.now(), qc: false });
  }, truncate(a, b) {
    if (0 > b) throw new I.Wa(28);
    a = "string" == typeof a ? N(a, { rb: true }).node : a;
    Db(null, a, b);
  }, Cd(a, b) {
    a = O(a);
    if (0 > b || 0 === (a.flags & 2097155)) throw new I.Wa(28);
    Db(a, a.node, b);
  }, Ld(a, b, c) {
    a = N(a, { rb: true }).node;
    tb(
      a.Ya.vb,
      63
    )(a, { atime: b, mtime: c });
  }, open(a, b, c = 438) {
    if ("" === a) throw new I.Wa(44);
    if ("string" == typeof b) {
      var d = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[b];
      if ("undefined" == typeof d) throw Error(`Unknown file open mode: ${b}`);
      b = d;
    }
    c = b & 64 ? c & 4095 | 32768 : 0;
    if ("object" == typeof a) d = a;
    else {
      var e = a.endsWith("/");
      var f = N(a, { rb: !(b & 131072), Xc: true });
      d = f.node;
      a = f.path;
    }
    f = false;
    if (b & 64) if (d) {
      if (b & 128) throw new I.Wa(20);
    } else {
      if (e) throw new I.Wa(31);
      d = I.Bb(a, c | 511, 0);
      f = true;
    }
    if (!d) throw new I.Wa(44);
    8192 === (d.mode & 61440) && (b &= -513);
    if (b & 65536 && !K(d.mode)) throw new I.Wa(54);
    if (!f && (d ? 40960 === (d.mode & 61440) ? e = 32 : (e = ["r", "w", "rw"][b & 3], b & 512 && (e += "w"), e = K(d.mode) && ("r" !== e || b & 576) ? 31 : ob(d, e)) : e = 44, e)) throw new I.Wa(e);
    b & 512 && !f && I.truncate(d, 0);
    b &= -131713;
    b = ub({ node: d, path: mb(d), flags: b, seekable: true, position: 0, ab: d.ab, hd: [], error: false });
    b.ab.open && b.ab.open(b);
    f && I.chmod(d, c & 511);
    return b;
  }, close(a) {
    if (null === a.fd) throw new I.Wa(8);
    a.Zb && (a.Zb = null);
    try {
      a.ab.close && a.ab.close(a);
    } catch (b) {
      throw b;
    } finally {
      I.streams[a.fd] = null;
    }
    a.fd = null;
  }, pb(a, b, c) {
    if (null === a.fd) throw new I.Wa(8);
    if (!a.seekable || !a.ab.pb) throw new I.Wa(70);
    if (0 != c && 1 != c && 2 != c) throw new I.Wa(28);
    a.position = a.ab.pb(a, b, c);
    a.hd = [];
    return a.position;
  }, read(a, b, c, d, e) {
    if (0 > d || 0 > e) throw new I.Wa(28);
    if (null === a.fd) throw new I.Wa(8);
    if (1 === (a.flags & 2097155)) throw new I.Wa(8);
    if (K(a.node.mode)) throw new I.Wa(31);
    if (!a.ab.read) throw new I.Wa(28);
    var f = "undefined" != typeof e;
    if (!f) e = a.position;
    else if (!a.seekable) throw new I.Wa(70);
    b = a.ab.read(a, b, c, d, e);
    f || (a.position += b);
    return b;
  }, write(a, b, c, d, e, f) {
    if (0 > d || 0 > e) throw new I.Wa(28);
    if (null === a.fd) throw new I.Wa(8);
    if (0 === (a.flags & 2097155)) throw new I.Wa(8);
    if (K(a.node.mode)) throw new I.Wa(31);
    if (!a.ab.write) throw new I.Wa(28);
    a.seekable && a.flags & 1024 && I.pb(a, 0, 2);
    var h = "undefined" != typeof e;
    if (!h) e = a.position;
    else if (!a.seekable) throw new I.Wa(70);
    b = a.ab.write(a, b, c, d, e, f);
    h || (a.position += b);
    return b;
  }, Kb(a, b, c, d, e) {
    if (0 !== (d & 2) && 0 === (e & 2) && 2 !== (a.flags & 2097155)) throw new I.Wa(2);
    if (1 === (a.flags & 2097155)) throw new I.Wa(2);
    if (!a.ab.Kb) throw new I.Wa(43);
    if (!b) throw new I.Wa(28);
    return a.ab.Kb(a, b, c, d, e);
  }, Pb(a, b, c, d, e) {
    return a.ab.Pb ? a.ab.Pb(a, b, c, d, e) : 0;
  }, ac(a, b, c) {
    if (!a.ab.ac) throw new I.Wa(59);
    return a.ab.ac(a, b, c);
  }, readFile(a, b = {}) {
    b.flags = b.flags || 0;
    b.encoding = b.encoding || "binary";
    "utf8" !== b.encoding && "binary" !== b.encoding && H(`Invalid encoding type "${b.encoding}"`);
    var c = I.open(a, b.flags);
    a = I.stat(a).size;
    var d = new Uint8Array(a);
    I.read(c, d, 0, a, 0);
    "utf8" === b.encoding && (d = Ua(d));
    I.close(c);
    return d;
  }, writeFile(a, b, c = {}) {
    c.flags = c.flags || 577;
    a = I.open(a, c.flags, c.mode);
    "string" == typeof b && (b = new Uint8Array(Ya(b)));
    ArrayBuffer.isView(b) ? I.write(a, b, 0, b.byteLength, void 0, c.td) : H("Unsupported data type");
    I.close(a);
  }, cwd: () => I.nc, chdir(a) {
    a = N(a, { rb: true });
    if (null === a.node) throw new I.Wa(44);
    if (!K(a.node.mode)) throw new I.Wa(54);
    var b = ob(a.node, "x");
    if (b) throw new I.Wa(b);
    I.nc = a.path;
  }, Id() {
    I.$b = false;
    for (var a of I.streams) a && I.close(a);
  }, zd(a, b) {
    try {
      var c = N(a, { rb: !b });
      a = c.path;
    } catch (f) {
    }
    var d = false, e = null;
    try {
      c = N(a, { parent: true }), Ma(a), c = N(a, { rb: !b }), d = true, e = c.node;
    } catch (f) {
    }
    return d ? e : null;
  }, vd(a, b) {
    a = "string" == typeof a ? a : mb(a);
    for (b = b.split("/").reverse(); b.length; ) {
      var c = b.pop();
      if (c) {
        var d = Ka(a + "/" + c);
        try {
          I.mkdir(d);
        } catch (e) {
          if (20 != e.jb) throw e;
        }
        a = d;
      }
    }
    return d;
  }, Gb(a, b, c, d) {
    a = Na("string" == typeof a ? a : mb(a), b);
    b = fb(!!c, !!d);
    var e;
    (e = I.Gb).ec ?? (e.ec = 64);
    e = I.Hb(I.Gb.ec++, 0);
    ab(e, { open(f) {
      f.seekable = false;
    }, close() {
      d?.buffer?.length && d(10);
    }, read(f, h, k, m) {
      for (var l = 0, n = 0; n < m; n++) {
        try {
          var r = c();
        } catch (q) {
          throw new I.Wa(29);
        }
        if (void 0 === r && 0 === l) throw new I.Wa(6);
        if (null === r || void 0 === r) break;
        l++;
        h[k + n] = r;
      }
      l && (f.node.atime = Date.now());
      return l;
    }, write(f, h, k, m) {
      for (var l = 0; l < m; l++) try {
        d(h[k + l]);
      } catch (n) {
        throw new I.Wa(29);
      }
      m && (f.node.mtime = f.node.ctime = Date.now());
      return l;
    } });
    return Bb(a, b, e);
  }, ud(a, b, c, d, e) {
    class f {
      Xb = false;
      zb = [];
      Nb = void 0;
      lc = 0;
      kc = 0;
      get(l) {
        if (!(l > this.length - 1 || 0 > l)) {
          var n = l % this.chunkSize;
          return this.Nb(l / this.chunkSize | 0)[n];
        }
      }
      Ec(l) {
        this.Nb = l;
      }
      jc() {
        var l = new XMLHttpRequest();
        l.open("HEAD", c, false);
        l.send(null);
        200 <= l.status && 300 > l.status || 304 === l.status || H("Couldn't load " + c + ". Status: " + l.status);
        var n = Number(l.getResponseHeader("Content-length")), r, q = (r = l.getResponseHeader("Accept-Ranges")) && "bytes" === r;
        l = (r = l.getResponseHeader("Content-Encoding")) && "gzip" === r;
        var t = 1048576;
        q || (t = n);
        var v = this;
        v.Ec((w) => {
          var B = w * t, A = (w + 1) * t - 1;
          A = Math.min(A, n - 1);
          if ("undefined" == typeof v.zb[w]) {
            var y = v.zb;
            B > A && H("invalid range (" + B + ", " + A + ") or no bytes requested!");
            A > n - 1 && H("only " + n + " bytes available! programmer error!");
            var C = new XMLHttpRequest();
            C.open("GET", c, false);
            n !== t && C.setRequestHeader("Range", "bytes=" + B + "-" + A);
            C.responseType = "arraybuffer";
            C.overrideMimeType && C.overrideMimeType("text/plain; charset=x-user-defined");
            C.send(null);
            200 <= C.status && 300 > C.status || 304 === C.status || H("Couldn't load " + c + ". Status: " + C.status);
            B = void 0 !== C.response ? new Uint8Array(C.response || []) : Ya(C.responseText || "");
            y[w] = B;
          }
          "undefined" == typeof v.zb[w] && H("doXHR failed!");
          return v.zb[w];
        });
        if (l || !n) t = n = 1, t = n = this.Nb(0).length, ma("LazyFiles on gzip forces download of the whole file when length is accessed");
        this.lc = n;
        this.kc = t;
        this.Xb = true;
      }
      get length() {
        this.Xb || this.jc();
        return this.lc;
      }
      get chunkSize() {
        this.Xb || this.jc();
        return this.kc;
      }
    }
    if (globalThis.XMLHttpRequest) {
      ba || H("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");
      var h = new f();
      var k = void 0;
    } else k = c, h = void 0;
    var m = Eb(a, b, d, e);
    h ? m.bb = h : k && (m.bb = null, m.url = k);
    Object.defineProperties(m, { lb: { get: function() {
      return this.bb.length;
    } } });
    a = {};
    for (const [l, n] of Object.entries(m.ab)) a[l] = (...r) => {
      Fb(m);
      return n(...r);
    };
    a.read = (l, n, r, q, t) => {
      Fb(m);
      l = l.node.bb;
      if (t >= l.length) n = 0;
      else {
        q = Math.min(l.length - t, q);
        if (l.slice) for (var v = 0; v < q; v++) n[r + v] = l[t + v];
        else for (v = 0; v < q; v++) n[r + v] = l.get(t + v);
        n = q;
      }
      return n;
    };
    a.Kb = () => {
      Fb(m);
      H();
      throw new I.Wa(48);
    };
    m.ab = a;
    return m;
  } }, P = (a, b, c) => (a >>>= 0) ? Ua(x, a, b, c) : "";
  function Gb(a, b, c) {
    if ("/" === b.charAt(0)) return b;
    a = -100 === a ? I.cwd() : O(a).path;
    if (0 == b.length) {
      if (!c) throw new I.Wa(44);
      return a;
    }
    return a + "/" + b;
  }
  function Hb(a, b) {
    E[a >>> 2 >>> 0] = b.dev;
    E[a + 4 >>> 2 >>> 0] = b.mode;
    E[a + 8 >>> 2 >>> 0] = b.nlink;
    E[a + 12 >>> 2 >>> 0] = b.uid;
    E[a + 16 >>> 2 >>> 0] = b.gid;
    E[a + 20 >>> 2 >>> 0] = b.rdev;
    F[a + 24 >>> 3 >>> 0] = BigInt(b.size);
    D[a + 32 >>> 2 >>> 0] = 4096;
    D[a + 36 >>> 2 >>> 0] = b.blocks;
    var c = b.atime.getTime(), d = b.mtime.getTime(), e = b.ctime.getTime();
    F[a + 40 >>> 3 >>> 0] = BigInt(Math.floor(c / 1e3));
    E[a + 48 >>> 2 >>> 0] = c % 1e3 * 1e6;
    F[a + 56 >>> 3 >>> 0] = BigInt(Math.floor(d / 1e3));
    E[a + 64 >>> 2 >>> 0] = d % 1e3 * 1e6;
    F[a + 72 >>> 3 >>> 0] = BigInt(Math.floor(e / 1e3));
    E[a + 80 >>> 2 >>> 0] = e % 1e3 * 1e6;
    F[a + 88 >>> 3 >>> 0] = BigInt(b.ino);
    return 0;
  }
  var Ib = void 0, Q = () => {
    var a = D[+Ib >>> 2 >>> 0];
    Ib += 4;
    return a;
  }, Jb = {}, Kb = (a) => {
    for (; a.length; ) {
      var b = a.pop();
      a.pop()(b);
    }
  };
  function Lb(a) {
    return this.cb(E[a >>> 2 >>> 0]);
  }
  var Mb = {}, R = {}, Nb = {}, Ob = class extends Error {
    constructor(a) {
      super(a);
      this.name = "InternalError";
    }
  }, T = (a, b, c) => {
    function d(k) {
      k = c(k);
      if (k.length !== a.length) throw new Ob("Mismatched type converter count");
      for (var m = 0; m < a.length; ++m) S(a[m], k[m]);
    }
    a.forEach((k) => Nb[k] = b);
    var e = Array(b.length), f = [], h = 0;
    for (let [k, m] of b.entries()) R.hasOwnProperty(m) ? e[k] = R[m] : (f.push(m), Mb.hasOwnProperty(m) || (Mb[m] = []), Mb[m].push(() => {
      e[k] = R[m];
      ++h;
      h === f.length && d(e);
    }));
    0 === f.length && d(e);
  }, U = (a) => {
    a >>>= 0;
    for (var b = ""; ; ) {
      var c = x[a++ >>> 0];
      if (!c) return b;
      b += String.fromCharCode(c);
    }
  }, V = class extends Error {
    constructor(a) {
      super(a);
      this.name = "BindingError";
    }
  }, Pb = (a) => {
    throw new V(a);
  };
  function Qb(a, b, c = {}) {
    var d = b.name;
    if (!a) throw new V(`type "${d}" must have a positive integer typeid pointer`);
    if (R.hasOwnProperty(a)) {
      if (c.Rc) return;
      throw new V(`Cannot register type '${d}' twice`);
    }
    R[a] = b;
    delete Nb[a];
    Mb.hasOwnProperty(a) && (b = Mb[a], delete Mb[a], b.forEach((e) => e()));
  }
  function S(a, b, c = {}) {
    return Qb(a, b, c);
  }
  var Rb = (a, b, c) => {
    switch (b) {
      case 1:
        return c ? (d) => u[d >>> 0] : (d) => x[d >>> 0];
      case 2:
        return c ? (d) => z[d >>> 1 >>> 0] : (d) => ra[d >>> 1 >>> 0];
      case 4:
        return c ? (d) => D[d >>> 2 >>> 0] : (d) => E[d >>> 2 >>> 0];
      case 8:
        return c ? (d) => F[d >>> 3 >>> 0] : (d) => ua[d >>> 3 >>> 0];
      default:
        throw new TypeError(`invalid integer width (${b}): ${a}`);
    }
  }, Sb = (a) => {
    throw new V(a.Xa.gb.Za.name + " instance already deleted");
  }, Tb = false, Ub = () => {
  }, Vb = (a) => {
    if (!globalThis.FinalizationRegistry) return Vb = (b) => b, a;
    Tb = new FinalizationRegistry((b) => {
      b = b.Xa;
      --b.count.value;
      0 === b.count.value && (b.nb ? b.sb.yb(b.nb) : b.gb.Za.yb(b.eb));
    });
    Vb = (b) => {
      var c = b.Xa;
      c.nb && Tb.register(b, { Xa: c }, b);
      return b;
    };
    Ub = (b) => {
      Tb.unregister(b);
    };
    return Vb(a);
  }, Wb = [];
  function Xb() {
  }
  var Yb = (a, b) => Object.defineProperty(b, "name", { value: a }), Zb = {}, $b = (a, b, c) => {
    if (void 0 === a[b].$a || !Object.prototype.hasOwnProperty.call(a, b)) {
      var d = void 0 !== a[b].$a ? a[b] : void 0, e = void 0 === a[b].$a ? a[b] : void 0;
      a[b] = function(...h) {
        if (!a[b].$a.hasOwnProperty(h.length)) {
          var k = -1, m;
          for (m in a[b].$a) {
            var l = +m;
            l > h.length && (0 > k || l < k) && (k = l);
          }
          if (0 <= k) for (; h.length < k; ) h.push(void 0);
        }
        if (!a[b].$a.hasOwnProperty(h.length)) throw new V(`Function '${c}' called with an invalid number of arguments (${h.length}) - expects one of (${a[b].$a})!`);
        return a[b].$a[h.length].apply(this, h);
      };
      a[b].$a = [];
      if (d) for (var f in d.$a) a[b].$a[f] = d.$a[f];
      else a[b].$a[e.Ab] = e;
    }
  }, ac = (a, b) => {
    var c = "";
    b.some((d) => d.length !== a.length ? false : d.every((e, f) => {
      var h = R[e];
      return void 0 !== h && true === h.optional || "emscripten::val" === e || "bigint" === typeof a[f] && "number" === e || "object" === typeof a[f] && void 0 !== h && void 0 !== h.Za && a[f] instanceof h.Za.constructor || typeof a[f] === e || "number" === typeof e && void 0 !== h && (e = h.name, ("std::string" === e || "std::wstring" === e) && "string" === typeof a[f] || "bool" === e && "boolean" === typeof a[f] || "number" === typeof a[f] && ("char" === e || "signed char" === e || "unsigned char" === e || "short" === e || "unsigned short" === e || "int" === e || "unsigned int" === e || "long" === e || "unsigned long" === e || "float" === e || "double" === e || "int64_t" === e || "uint64_t" === e) || "string" === h.valueType && "string" === typeof a[f] || "number" === h.valueType && "number" === typeof a[f]) ? true : false;
    }) ? (c = d.join(", "), true) : false);
    return c;
  }, bc = (a, b, c, d) => {
    $b(a, b, c);
    if (void 0 !== a[b].$a && void 0 !== a[b].$a[d]) {
      var e = a[b].$a[d], f = void 0 !== e.hb;
      if (!f || e.Yc !== a) {
        var h = function(...k) {
          var m = ac(k, a[b].$a[k.length].wb);
          if (!a[b].$a[k.length].hb.hasOwnProperty(m)) throw m = a[b].$a[k.length].wb.map((l) => "(" + l.map((n) => "string" === typeof n ? n : R[n].name) + ")"), k = k.map((l) => "object" === typeof l && l.constructor && l.constructor.name ? l.constructor.name : typeof l), new V(`Function '${c}' called with an invalid signature (${k}) - expects one of (${m})!`);
          return a[b].$a[k.length].hb[m].apply(this, k);
        };
        h.Yc = a;
        f ? (h.hb = Object.assign({}, e.hb), h.wb = e.wb.slice()) : (h.hb = {}, h.hb[e.Jb] = e, h.wb = [], e.Fb && h.wb.push(e.Fb));
        a[b].$a[d] = h;
      }
    }
  }, cc = (a, b) => {
    if (g.hasOwnProperty(a)) throw new V(`Cannot register public name '${a}' twice`);
    g[a] = b;
  }, dc = (a) => {
    a = a.replace(/[^a-zA-Z0-9_]/g, "$");
    var b = a.charCodeAt(0);
    return 48 <= b && 57 >= b ? `_${a}` : a;
  };
  function ec(a, b, c, d, e, f, h, k) {
    this.name = a;
    this.constructor = b;
    this.Eb = c;
    this.yb = d;
    this.ob = e;
    this.Lc = f;
    this.Rb = h;
    this.Hc = k;
    this.ad = [];
  }
  var fc = (a, b, c) => {
    for (; b !== c; ) {
      if (!b.Rb) throw new V(`Expected null or instance of ${c.name}, got an instance of ${b.name}`);
      a = b.Rb(a);
      b = b.ob;
    }
    return a;
  }, gc = (a) => {
    if (null === a) return "null";
    var b = typeof a;
    return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a;
  };
  function hc(a, b) {
    if (null === b) {
      if (this.bc) throw new V(`null is not a valid ${this.name}`);
      return 0;
    }
    if (!b.Xa) throw new V(`Cannot pass "${gc(b)}" as a ${this.name}`);
    if (!b.Xa.eb) throw new V(`Cannot pass deleted object as a pointer of type ${this.name}`);
    return fc(b.Xa.eb, b.Xa.gb.Za, this.Za);
  }
  function ic(a, b) {
    if (null === b) {
      if (this.bc) throw new V(`null is not a valid ${this.name}`);
      if (this.Vb) {
        var c = this.ic();
        null !== a && a.push(this.yb, c);
        return c;
      }
      return 0;
    }
    if (!b || !b.Xa) throw new V(`Cannot pass "${gc(b)}" as a ${this.name}`);
    if (!b.Xa.eb) throw new V(`Cannot pass deleted object as a pointer of type ${this.name}`);
    if (!this.Ub && b.Xa.gb.Ub) throw new V(`Cannot convert argument of type ${b.Xa.sb ? b.Xa.sb.name : b.Xa.gb.name} to parameter type ${this.name}`);
    c = fc(b.Xa.eb, b.Xa.gb.Za, this.Za);
    if (this.Vb) {
      if (void 0 === b.Xa.nb) throw new V("Passing raw pointer to smart pointer is illegal");
      switch (this.gd) {
        case 0:
          if (b.Xa.sb === this) c = b.Xa.nb;
          else throw new V(`Cannot convert argument of type ${b.Xa.sb ? b.Xa.sb.name : b.Xa.gb.name} to parameter type ${this.name}`);
          break;
        case 1:
          c = b.Xa.nb;
          break;
        case 2:
          if (b.Xa.sb === this) c = b.Xa.nb;
          else {
            var d = b.clone();
            c = this.bd(c, W(() => d["delete"]()));
            null !== a && a.push(this.yb, c);
          }
          break;
        default:
          throw new V("Unsupported sharing policy");
      }
    }
    return c;
  }
  function jc(a, b) {
    if (null === b) {
      if (this.bc) throw new V(`null is not a valid ${this.name}`);
      return 0;
    }
    if (!b.Xa) throw new V(`Cannot pass "${gc(b)}" as a ${this.name}`);
    if (!b.Xa.eb) throw new V(`Cannot pass deleted object as a pointer of type ${this.name}`);
    if (b.Xa.gb.Ub) throw new V(`Cannot convert argument of type ${b.Xa.gb.name} to parameter type ${this.name}`);
    return fc(b.Xa.eb, b.Xa.gb.Za, this.Za);
  }
  var kc = (a, b, c) => {
    if (b === c) return a;
    if (void 0 === c.ob) return null;
    a = kc(a, b, c.ob);
    return null === a ? null : c.Hc(a);
  }, lc = {}, mc = (a, b) => {
    if (void 0 === b) throw new V("ptr should not be undefined");
    for (; a.ob; ) b = a.Rb(b), a = a.ob;
    return lc[b];
  }, nc = (a, b) => {
    if (!b.gb || !b.eb) throw new Ob("makeClassHandle requires ptr and ptrType");
    if (!!b.sb !== !!b.nb) throw new Ob("Both smartPtrType and smartPtr must be specified");
    b.count = { value: 1 };
    return Vb(Object.create(a, { Xa: { value: b, writable: true } }));
  };
  function oc(a, b, c, d, e, f, h, k, m, l, n) {
    this.name = a;
    this.Za = b;
    this.bc = c;
    this.Ub = d;
    this.Vb = e;
    this.$c = f;
    this.gd = h;
    this.wc = k;
    this.ic = m;
    this.bd = l;
    this.yb = n;
    e || void 0 !== b.ob ? this.kb = ic : (this.kb = d ? hc : jc, this.mb = null);
  }
  var pc = (a, b) => {
    if (!g.hasOwnProperty(a)) throw new Ob("Replacing nonexistent public symbol");
    g[a] = b;
    g[a].Ab = void 0;
    g[a].Jb = void 0;
    g[a].Fb = void 0;
  }, qc = [], sc = (a) => {
    var b = qc[a];
    b || (qc[a] = b = rc.get(a));
    return b;
  }, tc = (a, b, c = []) => {
    b = sc(b)(...c);
    return "p" == a[0] ? b >>> 0 : b;
  }, uc = (a, b) => (...c) => tc(a, b, c), X = (a, b) => {
    a = U(a);
    var c = a.includes("p") ? uc(a, b) : sc(b);
    if ("function" != typeof c) throw new V(`unknown function pointer with signature ${a}: ${b}`);
    return c;
  };
  class vc extends Error {
  }
  var xc = (a) => {
    a = wc(a);
    var b = U(a);
    Y(a);
    return b;
  }, yc = (a, b) => {
    function c(f) {
      e[f] || R[f] || (Nb[f] ? Nb[f].forEach(c) : (d.push(f), e[f] = true));
    }
    var d = [], e = {};
    b.forEach(c);
    throw new vc(`${a}: ` + d.map(xc).join([", "]));
  };
  function zc(a) {
    for (var b = 1; b < a.length; ++b) if (null !== a[b] && void 0 === a[b].mb) return true;
    return false;
  }
  function Ac(a, b, c, d, e, f) {
    var h = b.length;
    if (2 > h) throw new V("argTypes array size mismatch! Must at least get return value and 'this' types!");
    var k = null !== b[1] && null !== c, m = zc(b);
    c = !b[0].uc;
    var l = b[0], n = b[1];
    d = [a, Pb, d, e, Kb, l.cb.bind(l), n?.kb.bind(n)];
    for (e = 2; e < h; ++e) l = b[e], d.push(l.kb.bind(l));
    if (!m) for (e = k ? 1 : 2; e < b.length; ++e) null !== b[e].mb && d.push(b[e].mb);
    m = zc(b);
    e = b.length - 2;
    n = [];
    l = ["fn"];
    k && l.push("thisWired");
    for (h = 0; h < e; ++h) n.push(`arg${h}`), l.push(`arg${h}Wired`);
    n = n.join(",");
    l = l.join(",");
    n = `return function (${n}) {
`;
    m && (n += "var destructors = [];\n");
    var r = m ? "destructors" : "null", q = "humanName throwBindingError invoker fn runDestructors fromRetWire toClassParamWire".split(" ");
    k && (n += `var thisWired = toClassParamWire(${r}, this);
`);
    for (h = 0; h < e; ++h) {
      var t = `toArg${h}Wire`;
      n += `var arg${h}Wired = ${t}(${r}, arg${h});
`;
      q.push(t);
    }
    n += (c || f ? "var rv = " : "") + `invoker(${l});
`;
    if (m) n += "runDestructors(destructors);\n";
    else for (h = k ? 1 : 2; h < b.length; ++h) f = 1 === h ? "thisWired" : "arg" + (h - 2) + "Wired", null !== b[h].mb && (n += `${f}_dtor(${f});
`, q.push(`${f}_dtor`));
    c && (n += "var ret = fromRetWire(rv);\nreturn ret;\n");
    b = new Function(q, n + "}\n")(...d);
    return Yb(a, b);
  }
  var Bc = (a, b) => {
    for (var c = [], d = 0; d < a; d++) c.push(E[b + 4 * d >>> 2 >>> 0]);
    return c;
  }, Cc = (a) => {
    a = a.trim();
    const b = a.indexOf("(");
    return -1 === b ? a : a.slice(0, b);
  }, Ec = (a) => {
    var b = R[a];
    return "emscripten::val" === b.name ? "emscripten::val" : "std::string" === b.name || "std::wstring" === b.name ? "string" : "bool" === b.name ? "boolean" : "char;signed char;unsigned char;short;unsigned short;int;unsigned int;long;unsigned long;float;double;int64_t;uint64_t".split(";").includes(b.name) ? "number" : "string" === b.valueType ? "string" : "number" === b.valueType ? "number" : a;
  }, Fc = (a, b, c) => {
    if (!(a instanceof Object)) throw new V(`${c} with invalid "this": ${a}`);
    if (!(a instanceof b.Za.constructor)) throw new V(`${c} incompatible with "this" of type ${a.constructor.name}`);
    if (!a.Xa.eb) throw new V(`cannot call emscripten binding method ${c} on deleted object`);
    return fc(a.Xa.eb, a.Xa.gb.Za, b.Za);
  }, Gc = [], Hc = [0, 1, , 1, null, 1, true, 1, false, 1];
  function Ic(a) {
    a >>>= 0;
    9 < a && 0 === --Hc[a + 1] && (Hc[a] = void 0, Gc.push(a));
  }
  var Z = (a) => {
    if (!a) throw new V(`Cannot use deleted val. handle = ${a}`);
    return Hc[a];
  }, W = (a) => {
    switch (a) {
      case void 0:
        return 2;
      case null:
        return 4;
      case true:
        return 6;
      case false:
        return 8;
      default:
        const b = Gc.pop() || Hc.length;
        Hc[b] = a;
        Hc[b + 1] = 1;
        return b;
    }
  }, Jc = { name: "emscripten::val", cb: (a) => {
    var b = Z(a);
    Ic(a);
    return b;
  }, kb: (a, b) => W(b), qb: Lb, mb: null }, Kc = (a, b, c) => {
    switch (b) {
      case 1:
        return c ? function(d) {
          return this.cb(u[d >>> 0]);
        } : function(d) {
          return this.cb(x[d >>> 0]);
        };
      case 2:
        return c ? function(d) {
          return this.cb(z[d >>> 1 >>> 0]);
        } : function(d) {
          return this.cb(ra[d >>> 1 >>> 0]);
        };
      case 4:
        return c ? function(d) {
          return this.cb(D[d >>> 2 >>> 0]);
        } : function(d) {
          return this.cb(E[d >>> 2 >>> 0]);
        };
      default:
        throw new TypeError(`invalid integer width (${b}): ${a}`);
    }
  }, Lc = (a, b) => {
    var c = R[a];
    if (void 0 === c) throw a = `${b} has unknown type ${xc(a)}`, new V(a);
    return c;
  }, Mc = (a, b) => {
    switch (b) {
      case 4:
        return function(c) {
          return this.cb(sa[c >>> 2 >>> 0]);
        };
      case 8:
        return function(c) {
          return this.cb(ta[c >>> 3 >>> 0]);
        };
      default:
        throw new TypeError(`invalid float width (${b}): ${a}`);
    }
  }, Nc = Object.assign({ optional: true }, Jc), Oc = globalThis.TextDecoder ? new TextDecoder("utf-16le") : void 0, Pc = (a, b, c) => {
    a >>>= 1;
    b = Ta(ra, a, b / 2, c);
    if (16 < b - a && Oc) return Oc.decode(ra.subarray(a >>> 0, b >>> 0));
    for (c = ""; a < b; ++a) c += String.fromCharCode(ra[a >>> 0]);
    return c;
  }, Qc = (a, b, c) => {
    c ??= 2147483647;
    if (2 > c) return 0;
    c -= 2;
    var d = b;
    c = c < 2 * a.length ? c / 2 : a.length;
    for (var e = 0; e < c; ++e) z[b >>> 1 >>> 0] = a.charCodeAt(e), b += 2;
    z[b >>> 1 >>> 0] = 0;
    return b - d;
  }, Rc = (a) => 2 * a.length, Sc = (a, b, c) => {
    var d = "";
    a >>>= 2;
    for (var e = 0; !(e >= b / 4); e++) {
      var f = E[a + e >>> 0];
      if (!f && !c) break;
      d += String.fromCodePoint(f);
    }
    return d;
  }, Tc = (a, b, c) => {
    b >>>= 0;
    c ??= 2147483647;
    if (4 > c) return 0;
    var d = b;
    c = d + c - 4;
    for (var e = 0; e < a.length; ++e) {
      var f = a.codePointAt(e);
      65535 < f && e++;
      D[b >>> 2 >>> 0] = f;
      b += 4;
      if (b + 4 > c) break;
    }
    D[b >>> 2 >>> 0] = 0;
    return b - d;
  }, Uc = (a) => {
    for (var b = 0, c = 0; c < a.length; ++c) 65535 < a.codePointAt(c) && c++, b += 4;
    return b;
  }, Vc = (a) => {
    a = a.split(".");
    for (var b = 0; 4 > b; b++) {
      var c = Number(a[b]);
      if (isNaN(c)) return null;
      a[b] = c;
    }
    return (a[0] | a[1] << 8 | a[2] << 16 | a[3] << 24) >>> 0;
  }, Xc = (a) => {
    var b, c, d = [];
    if (!/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i.test(a)) return null;
    if ("::" === a) return [0, 0, 0, 0, 0, 0, 0, 0];
    a = a.startsWith("::") ? a.replace("::", "Z:") : a.replace("::", ":Z:");
    0 < a.indexOf(".") ? (a = a.replace(RegExp("[.]", "g"), ":"), a = a.split(":"), a[a.length - 4] = Number(a[a.length - 4]) + 256 * Number(a[a.length - 3]), a[a.length - 3] = Number(a[a.length - 2]) + 256 * Number(a[a.length - 1]), a = a.slice(0, a.length - 2)) : a = a.split(":");
    for (b = c = 0; b < a.length; b++) if ("string" == typeof a[b]) if ("Z" === a[b]) {
      for (c = 0; c < 8 - a.length + 1; c++) d[b + c] = 0;
      --c;
    } else d[b + c] = Wc(parseInt(a[b], 16));
    else d[b + c] = a[b];
    return [d[1] << 16 | d[0], d[3] << 16 | d[2], d[5] << 16 | d[4], d[7] << 16 | d[6]];
  }, Yc = 1, Zc = {}, $c = [], ad = (a) => {
    var b = $c.length;
    $c.push(a);
    return b;
  }, bd = (a, b) => {
    for (var c = Array(a), d = 0; d < a; ++d) c[d] = Lc(E[b + 4 * d >>> 2 >>> 0], `parameter ${d}`);
    return c;
  }, cd = (a, b, c) => {
    var d = [];
    a = a(d, c);
    d.length && (E[b >>> 2 >>> 0] = W(d));
    return a;
  }, dd = {}, ed = (a) => {
    var b = dd[a];
    return void 0 === b ? U(a) : b;
  }, fd = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], gd = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], hd = {}, kd = () => {
    if (!jd) {
      var a = {
        USER: "web_user",
        LOGNAME: "web_user",
        PATH: "/",
        PWD: "/",
        HOME: "/home/web_user",
        LANG: (globalThis.navigator?.language ?? "C").replace("-", "_") + ".UTF-8",
        _: da || "./this.program"
      }, b;
      for (b in hd) void 0 === hd[b] ? delete a[b] : a[b] = hd[b];
      var c = [];
      for (b in a) c.push(`${b}=${a[b]}`);
      jd = c;
    }
    return jd;
  }, jd, nd = (a) => {
    a = a.getArg(ld, 0);
    return md(a);
  };
  I.wd = (a, b, c, d, e, f, h, k, m, l) => {
    nb(a, b, c, d, e, k, m, l).then(f).catch(h);
  };
  I.Hd = nb;
  I.Cb = Array(4096);
  I.ib(J, {}, "/");
  I.mkdir("/tmp");
  I.mkdir("/home");
  I.mkdir("/home/web_user");
  (function() {
    I.mkdir("/dev");
    ab(I.Hb(1, 3), { read: () => 0, write: (d, e, f, h) => h, pb: () => 0 });
    Bb("/dev/null", I.Hb(1, 3));
    $a(I.Hb(5, 0), cb);
    $a(I.Hb(6, 0), db);
    Bb("/dev/tty", I.Hb(5, 0));
    Bb("/dev/tty1", I.Hb(6, 0));
    var a = new Uint8Array(1024), b = 0, c = () => {
      0 === b && (Pa(a), b = a.byteLength);
      return a[--b];
    };
    I.Gb("/dev", "random", c);
    I.Gb("/dev", "urandom", c);
    I.mkdir("/dev/shm");
    I.mkdir("/dev/shm/tmp");
  })();
  (function() {
    I.mkdir("/proc");
    var a = I.mkdir("/proc/self");
    I.mkdir("/proc/self/fd");
    I.ib({ ib() {
      var b = I.createNode(a, "fd", 16895, 73);
      b.ab = { pb: J.ab.pb };
      b.Ya = { lookup(c, d) {
        c = +d;
        var e = O(c);
        c = { parent: null, ib: { vc: "fake" }, Ya: { readlink: () => e.path }, id: c + 1 };
        return c.parent = c;
      }, readdir() {
        return Array.from(I.streams.entries()).filter(([, c]) => c).map(([c]) => c.toString());
      } };
      return b;
    } }, {}, "/proc/self/fd");
  })();
  I.Kc = { MEMFS: J };
  (() => {
    let a = Xb.prototype;
    Object.assign(a, { isAliasOf: function(c) {
      if (!(this instanceof Xb && c instanceof Xb)) return false;
      var d = this.Xa.gb.Za, e = this.Xa.eb;
      c.Xa = c.Xa;
      var f = c.Xa.gb.Za;
      for (c = c.Xa.eb; d.ob; ) e = d.Rb(e), d = d.ob;
      for (; f.ob; ) c = f.Rb(c), f = f.ob;
      return d === f && e === c;
    }, clone: function() {
      this.Xa.eb || Sb(this);
      if (this.Xa.Qb) return this.Xa.count.value += 1, this;
      var c = Vb, d = Object, e = d.create, f = Object.getPrototypeOf(this), h = this.Xa;
      c = c(e.call(d, f, { Xa: { value: { count: h.count, Lb: h.Lb, Qb: h.Qb, eb: h.eb, gb: h.gb, nb: h.nb, sb: h.sb } } }));
      c.Xa.count.value += 1;
      c.Xa.Lb = false;
      return c;
    }, ["delete"]() {
      this.Xa.eb || Sb(this);
      if (this.Xa.Lb && !this.Xa.Qb) throw new V("Object already scheduled for deletion");
      Ub(this);
      var c = this.Xa;
      --c.count.value;
      0 === c.count.value && (c.nb ? c.sb.yb(c.nb) : c.gb.Za.yb(c.eb));
      this.Xa.Qb || (this.Xa.nb = void 0, this.Xa.eb = void 0);
    }, isDeleted: function() {
      return !this.Xa.eb;
    }, deleteLater: function() {
      this.Xa.eb || Sb(this);
      if (this.Xa.Lb && !this.Xa.Qb) throw new V("Object already scheduled for deletion");
      Wb.push(this);
      this.Xa.Lb = true;
      return this;
    } });
    const b = Symbol.dispose;
    b && (a[b] = a["delete"]);
  })();
  Object.assign(oc.prototype, { Nc(a) {
    this.wc && (a = this.wc(a));
    return a;
  }, oc(a) {
    this.yb?.(a);
  }, qb: Lb, cb: function(a) {
    function b() {
      return this.Vb ? nc(this.Za.Eb, { gb: this.$c, eb: c, sb: this, nb: a }) : nc(this.Za.Eb, { gb: this, eb: a });
    }
    var c = this.Nc(a);
    if (!c) return this.oc(a), null;
    var d = mc(this.Za, c);
    if (void 0 !== d) {
      if (0 === d.Xa.count.value) return d.Xa.eb = c, d.Xa.nb = a, d.clone();
      d = d.clone();
      this.oc(a);
      return d;
    }
    d = this.Za.Lc(c);
    d = Zb[d];
    if (!d) return b.call(this);
    d = this.Ub ? d.Gc : d.pointerType;
    var e = kc(c, this.Za, d.Za);
    return null === e ? b.call(this) : this.Vb ? nc(d.Za.Eb, { gb: d, eb: e, sb: this, nb: a }) : nc(d.Za.Eb, { gb: d, eb: e });
  } });
  g.noExitRuntime && (Ia = g.noExitRuntime);
  g.preloadPlugins && (jb = g.preloadPlugins);
  g.print && (ma = g.print);
  g.printErr && (p = g.printErr);
  g.wasmBinary && (na = g.wasmBinary);
  g.thisProgram && (da = g.thisProgram);
  if (g.preInit) for ("function" == typeof g.preInit && (g.preInit = [g.preInit]); 0 < g.preInit.length; ) g.preInit.shift()();
  g.FS = I;
  g.incrementExceptionRefcount = (a) => {
    a = nd(a);
    od(a);
  };
  g.decrementExceptionRefcount = (a) => {
    a = nd(a);
    pd(a);
  };
  g.getExceptionMessage = (a) => {
    var b = nd(a);
    a = qd();
    var c = rd(4), d = rd(4);
    sd(b, c, d);
    b = E[c >>> 2 >>> 0];
    d = E[d >>> 2 >>> 0];
    c = P(b);
    Y(b);
    if (d) {
      var e = P(d);
      Y(d);
    }
    td(a);
    return [c, e];
  };
  var wc, ud, Y, Wc, ya, td, rd, qd, pd, od, md, sd, ld, xa, rc, vd = {
    ea: function() {
      return g.jd.length;
    },
    $: function(a, b) {
      a >>>= 0;
      try {
        return a = P(a), I.chmod(a, b), 0;
      } catch (c) {
        if ("undefined" == typeof I || "ErrnoError" !== c.name) throw c;
        return -c.jb;
      }
    },
    aa: function(a, b, c) {
      b >>>= 0;
      try {
        b = P(b);
        b = Gb(a, b);
        if (c & -8) return -28;
        var d = N(b, { rb: true }).node;
        if (!d) return -44;
        a = "";
        c & 4 && (a += "r");
        c & 2 && (a += "w");
        c & 1 && (a += "x");
        return a && ob(d, a) ? -2 : 0;
      } catch (e) {
        if ("undefined" == typeof I || "ErrnoError" !== e.name) throw e;
        return -e.jb;
      }
    },
    D: function(a, b, c) {
      Ib = c >>> 0;
      try {
        var d = O(a);
        switch (b) {
          case 0:
            var e = Q();
            if (0 > e) break;
            for (; I.streams[e]; ) e++;
            return vb(d, e).fd;
          case 1:
          case 2:
            return 0;
          case 3:
            return d.flags;
          case 4:
            return e = Q(), d.flags |= e, 0;
          case 12:
            return e = Q(), z[e + 0 >>> 1 >>> 0] = 2, 0;
          case 13:
          case 14:
            return 0;
        }
        return -28;
      } catch (f) {
        if ("undefined" == typeof I || "ErrnoError" !== f.name) throw f;
        return -f.jb;
      }
    },
    Z: function(a, b) {
      try {
        return Hb(b >>> 0, I.fstat(a));
      } catch (c) {
        if ("undefined" == typeof I || "ErrnoError" !== c.name) throw c;
        return -c.jb;
      }
    },
    da: function(a, b, c) {
      Ib = c >>> 0;
      try {
        var d = O(a);
        switch (b) {
          case 21509:
            return d.tty ? 0 : -59;
          case 21505:
            if (!d.tty) return -59;
            if (d.tty.Db.Sc) {
              a = [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
              var e = Q();
              D[e >>> 2 >>> 0] = 25856;
              D[e + 4 >>> 2 >>> 0] = 5;
              D[e + 8 >>> 2 >>> 0] = 191;
              D[e + 12 >>> 2 >>> 0] = 35387;
              for (var f = 0; 32 > f; f++) u[e + f + 17 >>> 0] = a[f] || 0;
            }
            return 0;
          case 21510:
          case 21511:
          case 21512:
            return d.tty ? 0 : -59;
          case 21506:
          case 21507:
          case 21508:
            if (!d.tty) return -59;
            if (d.tty.Db.Tc) for (e = Q(), a = [], f = 0; 32 > f; f++) a.push(u[e + f + 17 >>> 0]);
            return 0;
          case 21519:
            if (!d.tty) return -59;
            e = Q();
            return D[e >>> 2 >>> 0] = 0;
          case 21520:
            return d.tty ? -28 : -59;
          case 21537:
          case 21531:
            return e = Q(), I.ac(d, b, e);
          case 21523:
            if (!d.tty) return -59;
            d.tty.Db.Uc && (f = [24, 80], e = Q(), z[e >>> 1 >>> 0] = f[0], z[e + 2 >>> 1 >>> 0] = f[1]);
            return 0;
          case 21524:
            return d.tty ? 0 : -59;
          case 21515:
            return d.tty ? 0 : -59;
          default:
            return -28;
        }
      } catch (h) {
        if ("undefined" == typeof I || "ErrnoError" !== h.name) throw h;
        return -h.jb;
      }
    },
    W: function(a, b) {
      a >>>= 0;
      b >>>= 0;
      try {
        return a = P(a), Hb(b, I.lstat(a));
      } catch (c) {
        if ("undefined" == typeof I || "ErrnoError" !== c.name) throw c;
        return -c.jb;
      }
    },
    X: function(a, b, c, d) {
      b >>>= 0;
      c >>>= 0;
      try {
        b = P(b);
        var e = d & 256;
        b = Gb(a, b, d & 4096);
        return Hb(c, e ? I.lstat(b) : I.stat(b));
      } catch (f) {
        if ("undefined" == typeof I || "ErrnoError" !== f.name) throw f;
        return -f.jb;
      }
    },
    H: function(a, b, c, d) {
      b >>>= 0;
      Ib = d >>>= 0;
      try {
        b = P(b);
        b = Gb(a, b);
        var e = d ? Q() : 0;
        return I.open(b, c, e).fd;
      } catch (f) {
        if ("undefined" == typeof I || "ErrnoError" !== f.name) throw f;
        return -f.jb;
      }
    },
    Y: function(a, b) {
      a >>>= 0;
      b >>>= 0;
      try {
        return a = P(a), Hb(b, I.stat(a));
      } catch (c) {
        if ("undefined" == typeof I || "ErrnoError" !== c.name) throw c;
        return -c.jb;
      }
    },
    R: () => H(""),
    p: function(a) {
      a >>>= 0;
      var b = Jb[a];
      delete Jb[a];
      var c = b.ic, d = b.yb, e = b.rc, f = e.map((h) => h.Qc).concat(e.map((h) => h.dd));
      T([a], f, (h) => {
        var k = {}, m, l;
        for ([m, l] of e.entries()) {
          const n = h[m], r = l.Nb, q = l.Pc, t = h[m + e.length], v = l.cd, w = l.ed;
          k[l.Jc] = { read: (B) => n.cb(r(q, B)), write: (B, A) => {
            var y = [];
            v(w, B, t.kb(y, A));
            Kb(y);
          }, optional: n.optional };
        }
        return [{ name: b.name, cb: (n) => {
          var r = {}, q;
          for (q in k) r[q] = k[q].read(n);
          d(n);
          return r;
        }, kb: (n, r) => {
          for (var q in k) if (!(q in r || k[q].optional)) throw new TypeError(`Missing field: "${q}"`);
          var t = c();
          for (q in k) k[q].write(t, r[q]);
          null !== n && n.push(d, t);
          return t;
        }, qb: Lb, mb: d }];
      });
    },
    K: function(a, b, c, d, e) {
      a >>>= 0;
      c >>>= 0;
      b = U(b >>> 0);
      d = 0n === d;
      let f = (h) => h;
      if (d) {
        const h = 8 * c;
        f = (k) => BigInt.asUintN(h, k);
        e = f(e);
      }
      S(a, { name: b, cb: f, kb: (h, k) => {
        "number" == typeof k && (k = BigInt(k));
        return k;
      }, qb: Rb(b, c, !d), mb: null });
    },
    L: function(a, b, c, d) {
      b = U(b >>> 0);
      S(a >>> 0, { name: b, cb: function(e) {
        return !!e;
      }, kb: function(e, f) {
        return f ? c : d;
      }, qb: function(e) {
        return this.cb(x[e >>> 0]);
      }, mb: null });
    },
    h: function(a, b, c, d, e, f, h, k, m, l, n, r, q) {
      a >>>= 0;
      b >>>= 0;
      c >>>= 0;
      d >>>= 0;
      f >>>= 0;
      h >>>= 0;
      k >>>= 0;
      m >>>= 0;
      l >>>= 0;
      n >>>= 0;
      r >>>= 0;
      q >>>= 0;
      n = U(n);
      f = X(e >>> 0, f);
      k &&= X(h, k);
      l &&= X(m, l);
      q = X(r, q);
      var t = dc(n);
      cc(t, function() {
        yc(`Cannot construct ${n} due to unbound types`, [d]);
      });
      T([a, b, c], d ? [d] : [], (v) => {
        v = v[0];
        if (d) {
          var w = v.Za;
          var B = w.Eb;
        } else B = Xb.prototype;
        v = Yb(n, function(...G) {
          if (Object.getPrototypeOf(this) !== A) throw new V(`Use 'new' to construct ${n}`);
          if (void 0 === y.fb) throw new V(`${n} has no accessible constructor`);
          if (void 0 === y.fb[G.length]) {
            var M = -1, Dc;
            for (Dc in y.fb) {
              var yb = +Dc;
              yb > G.length && (0 > M || yb < M) && (M = yb);
            }
            if (0 <= M) for (; G.length < M; ) G.push(void 0);
          }
          M = void 0;
          void 0 !== y.fb[G.length] && (void 0 !== y.fb[G.length].Mb ? M = y.fb[G.length].Mb : (M = ac(G, y.fb[G.length].wb), M = y.fb[G.length].hb[M]));
          if (void 0 === M) {
            if (void 0 === y.fb[G.length]) throw new V(`Tried to invoke ctor of ${n} with invalid number of parameters (${G.length}) - expected (${Object.keys(y.fb).toString()}) parameters instead!`);
            M = y.fb[G.length].wb.map((fa) => "(" + fa.map((zb) => "string" === typeof zb ? zb : R[zb].name) + ")");
            G = G.map((fa) => "object" === typeof fa && fa.constructor && fa.constructor.name ? fa.constructor.name : typeof fa);
            throw new V(`Tried to invoke ctor of ${n} with invalid signature (${G}) - expected [${M}] parameters instead!`);
          }
          return M.apply(this, G);
        });
        var A = Object.create(B, { constructor: { value: v } });
        v.prototype = A;
        var y = new ec(n, v, A, q, w, f, k, l);
        if (y.ob) {
          var C;
          (C = y.ob).Sb ?? (C.Sb = []);
          y.ob.Sb.push(y);
        }
        w = new oc(n, y, true, false, false);
        C = new oc(n + "*", y, false, false, false);
        B = new oc(n + " const*", y, false, true, false);
        Zb[a] = { pointerType: C, Gc: B };
        pc(t, v);
        return [
          w,
          C,
          B
        ];
      });
    },
    f: function(a, b, c, d, e, f, h, k) {
      a >>>= 0;
      b >>>= 0;
      e >>>= 0;
      f >>>= 0;
      h >>>= 0;
      var m = Bc(c, d >>> 0);
      b = U(b);
      b = Cc(b);
      f = X(e, f);
      T([], [a], (l) => {
        function n() {
          yc(`Cannot call ${r} due to unbound types`, m);
        }
        l = l[0];
        var r = `${l.name}.${b}`;
        b.startsWith("@@") && (b = Symbol[b.substring(2)]);
        var q = l.Za.constructor, t = m.slice(1), v = t.join(", ");
        n.Jb = v;
        n.Fb = t;
        void 0 === q[b] ? (n.Ab = c - 1, q[b] = n, bc(q, b, r, c - 1)) : void 0 === q[b].$a && q[b].Ab !== c - 1 || void 0 !== q[b].$a && void 0 === q[b].$a[c - 1] ? ($b(q, b, r), q[b].$a[c - 1] = n) : (bc(q, b, r, c - 1), q[b].$a[c - 1].hb[v] = n, q[b].$a[c - 1].wb.push(t));
        T([], m, (w) => {
          w = [w[0], null].concat(w.slice(1));
          w = Ac(r, w, null, f, h, k);
          for (var B = t.map((y) => Ec(y)), A = 0; A < B.length; A++) t[A] = B[A];
          B = t.join(", ");
          void 0 === q[b].$a ? (w.Ab = c - 1, w.Jb = B, w.Fb = t, q[b] = w) : void 0 === q[b].$a[c - 1].hb ? (w.Jb = B, w.Fb = t, q[b].$a[c - 1] = w) : (delete q[b].$a[c - 1].hb[v], q[b].$a[c - 1].hb[B] = w);
          if (l.Za.Sb) for (const y of l.Za.Sb) y.constructor.hasOwnProperty(b) || (y.constructor[b] = w);
          return [];
        });
        return [];
      });
    },
    c: function(a, b, c, d, e, f) {
      a >>>= 0;
      d >>>= 0;
      e >>>= 0;
      f >>>= 0;
      var h = Bc(b, c >>> 0);
      e = X(
        d,
        e
      );
      T([], [a], (k) => {
        function m() {
          yc(`Cannot construct ${k.name} due to unbound types`, h);
        }
        k = k[0];
        var l = `constructor ${k.name}`;
        void 0 === k.Za.fb && (k.Za.fb = []);
        var n = h.slice(1), r = n.join(", ");
        if (void 0 !== k.Za.fb[b - 1] && void 0 !== k.Za.fb[b - 1].hb[r]) throw new V(`Cannot register multiple constructors with identical javascript types of parameters for class '${k.name}'!`);
        void 0 === k.Za.fb[b - 1] ? k.Za.fb[b - 1] = { Mb: m, hb: {}, wb: [] } : delete k.Za.fb[b - 1].Mb;
        k.Za.fb[b - 1].hb[r] = m;
        k.Za.fb[b - 1].wb.push(n);
        T([], h, (q) => {
          q.splice(
            1,
            0,
            null
          );
          delete k.Za.fb[b - 1].hb[r];
          q = Ac(l, q, null, e, f);
          for (var t = n.map((w) => Ec(w)), v = 0; v < t.length; v++) n[v] = t[v];
          t = n.join(", ");
          void 0 !== k.Za.fb[b - 1].Mb && (k.Za.fb[b - 1].Mb = q);
          k.Za.fb[b - 1].hb[t] = q;
          return [];
        });
        return [];
      });
    },
    a: function(a, b, c, d, e, f, h, k, m) {
      a >>>= 0;
      b >>>= 0;
      e >>>= 0;
      f >>>= 0;
      h >>>= 0;
      var l = Bc(c, d >>> 0);
      b = U(b);
      b = Cc(b);
      f = X(e, f);
      T([], [a], (n) => {
        function r() {
          yc(`Cannot call ${q} due to unbound types`, l);
        }
        n = n[0];
        var q = `${n.name}.${b}`;
        b.startsWith("@@") && (b = Symbol[b.substring(2)]);
        k && n.Za.ad.push(b);
        var t = n.Za.Eb, v = t[b], w = l.slice(2), B = w.join(", ");
        r.Jb = B;
        r.Fb = w;
        void 0 === v ? (r.Ab = c - 2, r.className = n.name, t[b] = r, bc(t, b, q, c - 2)) : void 0 === t[b].$a && t[b].Ab !== c - 2 || void 0 !== t[b].$a && void 0 === t[b].$a[c - 2] ? ($b(t, b, q), t[b].$a[c - 2] = r) : (bc(t, b, q, c - 2), t[b].$a[c - 2].hb[B] = r, t[b].$a[c - 2].wb.push(w));
        T([], l, (A) => {
          A = Ac(q, A, n, f, h, m);
          for (var y = w.map((G) => Ec(G)), C = 0; C < y.length; C++) w[C] = y[C];
          y = w.join(", ");
          void 0 === t[b].$a ? (A.Ab = c - 2, A.Jb = y, A.Fb = w, t[b] = A) : void 0 === t[b].$a[c - 2].hb ? (A.Jb = y, A.Fb = w, t[b].$a[c - 2] = A) : (delete t[b].$a[c - 2].hb[B], t[b].$a[c - 2].hb[y] = A);
          return [];
        });
        return [];
      });
    },
    ia: function(a, b, c, d, e, f, h, k, m, l) {
      a >>>= 0;
      b >>>= 0;
      c >>>= 0;
      e >>>= 0;
      f >>>= 0;
      h >>>= 0;
      k >>>= 0;
      m >>>= 0;
      l >>>= 0;
      b = U(b);
      e = X(d >>> 0, e);
      T([], [a], (n) => {
        n = n[0];
        var r = `${n.name}.${b}`, q = { get() {
          yc(`Cannot access ${r} due to unbound types`, [c, h]);
        }, enumerable: true, configurable: true };
        q.set = m ? () => yc(`Cannot access ${r} due to unbound types`, [c, h]) : () => {
          throw new V(r + " is a read-only property");
        };
        Object.defineProperty(n.Za.Eb, b, q);
        T([], m ? [c, h] : [c], (t) => {
          var v = t[0], w = { get() {
            var A = Fc(
              this,
              n,
              r + " getter"
            );
            return v.cb(e(f, A));
          }, enumerable: true };
          if (m) {
            m = X(k, m);
            var B = t[1];
            w.set = function(A) {
              var y = Fc(this, n, r + " setter"), C = [];
              m(l, y, B.kb(C, A));
              Kb(C);
            };
          }
          Object.defineProperty(n.Za.Eb, b, w);
          return [];
        });
        return [];
      });
    },
    ka: function(a) {
      return S(a >>> 0, Jc);
    },
    x: function(a, b, c, d, e) {
      a >>>= 0;
      c >>>= 0;
      b = U(b >>> 0);
      e = 0 === e ? "object" : 1 === e ? "number" : "string";
      switch (e) {
        case "object":
          let h = function() {
          };
          h.values = {};
          S(a, {
            name: b,
            constructor: h,
            valueType: e,
            cb: function(k) {
              return this.constructor.values[k];
            },
            kb: (k, m) => m.value,
            qb: Kc(b, c, d),
            mb: null
          });
          cc(b, h);
          break;
        case "number":
          var f = {};
          S(a, { name: b, dc: f, valueType: e, cb: (k) => k, kb: (k, m) => m, qb: Kc(b, c, d), mb: null });
          cc(b, f);
          delete g[b].Ab;
          break;
        case "string":
          f = {}, S(a, { name: b, Ac: {}, xc: {}, dc: f, valueType: e, cb: function(k) {
            return this.xc[k];
          }, kb: function(k, m) {
            return this.Ac[m];
          }, qb: Kc(b, c, d), mb: null }), cc(b, f), delete g[b].Ab;
      }
    },
    q: function(a, b, c) {
      b >>>= 0;
      var d = Lc(a >>> 0, "enum");
      b = U(b);
      switch (d.valueType) {
        case "object":
          a = d.constructor;
          d = Object.create(d.constructor.prototype, { value: { value: c }, constructor: { value: Yb(
            `${d.name}_${b}`,
            function() {
            }
          ) } });
          a.values[c] = d;
          a[b] = d;
          break;
        case "number":
          d.dc[b] = c;
          break;
        case "string":
          d.Ac[b] = c, d.xc[c] = b, d.dc[b] = b;
      }
    },
    J: function(a, b, c) {
      b = U(b >>> 0);
      S(a >>> 0, { name: b, cb: (d) => d, kb: (d, e) => e, qb: Mc(b, c >>> 0), mb: null });
    },
    B: function(a, b, c, d, e) {
      a >>>= 0;
      c >>>= 0;
      b = U(b >>> 0);
      let f = (k) => k;
      if (0 === d) {
        var h = 32 - 8 * c;
        f = (k) => k << h >>> h;
        e = f(e);
      }
      S(a, { name: b, cb: f, kb: (k, m) => m, qb: Rb(b, c, 0 !== d), mb: null });
    },
    y: function(a, b, c) {
      function d(f) {
        return new e(u.buffer, E[f + 4 >>> 2 >>> 0], E[f >>> 2 >>> 0]);
      }
      var e = [
        Int8Array,
        Uint8Array,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array,
        BigInt64Array,
        BigUint64Array
      ][b];
      c = U(c >>> 0);
      S(a >>> 0, { name: c, cb: d, qb: d }, { Rc: true });
    },
    z: function(a) {
      S(a >>> 0, Nc);
    },
    s: function(a, b, c, d, e, f, h, k, m, l, n, r) {
      a >>>= 0;
      b >>>= 0;
      c >>>= 0;
      f >>>= 0;
      h >>>= 0;
      k >>>= 0;
      m >>>= 0;
      l >>>= 0;
      n >>>= 0;
      r >>>= 0;
      c = U(c);
      f = X(e >>> 0, f);
      k = X(h, k);
      l = X(m, l);
      r = X(n, r);
      T([a], [b], (q) => {
        q = q[0];
        return [new oc(c, q.Za, false, false, true, q, d, f, k, l, r)];
      });
    },
    la: function(a, b) {
      b = U(b >>> 0);
      S(a >>> 0, { name: b, cb(c) {
        var d = P(c + 4, E[c >>> 2 >>> 0], true);
        Y(c);
        return d;
      }, kb(c, d) {
        d instanceof ArrayBuffer && (d = new Uint8Array(d));
        var e = "string" == typeof d;
        if (!(e || ArrayBuffer.isView(d) && 1 == d.BYTES_PER_ELEMENT)) throw new V("Cannot pass non-string to std::string");
        var f = e ? Wa(d) : d.length;
        var h = ud(4 + f + 1), k = h + 4;
        E[h >>> 2 >>> 0] = f;
        e ? Xa(d, x, k, f + 1) : x.set(d, k >>> 0);
        null !== c && c.push(Y, h);
        return h;
      }, qb: Lb, mb(c) {
        Y(c);
      } });
    },
    E: function(a, b, c) {
      b >>>= 0;
      c >>>= 0;
      c = U(c);
      if (2 === b) {
        var d = Pc;
        var e = Qc;
        var f = Rc;
      } else d = Sc, e = Tc, f = Uc;
      S(a >>> 0, { name: c, cb: (h) => {
        var k = d(h + 4, E[h >>> 2 >>> 0] * b, true);
        Y(h);
        return k;
      }, kb: (h, k) => {
        if ("string" != typeof k) throw new V(`Cannot pass non-string to C++ string type ${c}`);
        var m = f(k), l = ud(4 + m + b);
        E[l >>> 2 >>> 0] = m / b;
        e(k, l + 4, m + b);
        null !== h && h.push(Y, l);
        return l;
      }, qb: Lb, mb(h) {
        Y(h);
      } });
    },
    r: function(a, b, c, d, e, f) {
      e >>>= 0;
      f >>>= 0;
      Jb[a >>> 0] = { name: U(b >>> 0), ic: X(c >>> 0, d >>> 0), yb: X(e, f), rc: [] };
    },
    o: function(a, b, c, d, e, f, h, k, m, l) {
      f >>>= 0;
      h >>>= 0;
      k >>>= 0;
      m >>>= 0;
      l >>>= 0;
      Jb[a >>> 0].rc.push({ Jc: U(b >>> 0), Qc: c >>> 0, Nb: X(d >>> 0, e >>> 0), Pc: f, dd: h, cd: X(k, m), ed: l });
    },
    M: function(a, b) {
      b = U(b >>> 0);
      S(a >>> 0, { uc: true, name: b, cb: () => {
      }, kb: () => {
      } });
    },
    N: function(a) {
      a = P(a >>> 0);
      var b = Vc(a);
      null === b && (b = Xc(a), null === b && (Zc[a] ? b = Zc[a] : (b = Yc++, b = "172.29." + (b & 255) + "." + (b & 65280), Zc[a] = b), a = b));
      return Vc(a);
    },
    m: function(a, b, c) {
      var [d, ...e] = bd(a, b >>> 0);
      b = d.kb.bind(d);
      var f = e.map((m) => m.qb.bind(m));
      a--;
      var h = { toValue: Z };
      a = f.map((m, l) => {
        var n = `argFromPtr${l}`;
        h[n] = m;
        return `${n}(args${l ? "+" + 8 * l : ""})`;
      });
      switch (c) {
        case 0:
          var k = "toValue(handle)";
          break;
        case 2:
          k = "new (toValue(handle))";
          break;
        case 3:
          k = "";
          break;
        case 1:
          h.getStringOrSymbol = ed, k = "toValue(handle)[getStringOrSymbol(methodName)]";
      }
      k += `(${a})`;
      d.uc || (h.toReturnWire = b, h.emval_returnValue = cd, k = `return emval_returnValue(toReturnWire, destructorsRef, ${k})`);
      k = `return function (handle, methodName, destructorsRef, args) {
${k}
}`;
      c = new Function(Object.keys(h), k)(...Object.values(h));
      k = `methodCaller<(${e.map((m) => m.name)}) => ${d.name}>`;
      return ad(Yb(k, c));
    },
    b: Ic,
    g: function(a) {
      a >>>= 0;
      if (!a) return W(globalThis);
      a = ed(a);
      return W(globalThis[a]);
    },
    d: function(a) {
      a = ed(a >>> 0);
      return W(g[a]);
    },
    w: function(a, b) {
      b >>>= 0;
      a = Z(a >>> 0);
      b = Z(b);
      return W(a[b]);
    },
    k: function(a) {
      a >>>= 0;
      9 < a && (Hc[a + 1] += 1);
    },
    n: function(a, b) {
      b >>>= 0;
      a = Z(a >>> 0);
      b = Z(b);
      return a instanceof b;
    },
    l: function(a, b, c, d, e) {
      return $c[a >>> 0](b >>> 0, c >>> 0, d >>> 0, e >>> 0);
    },
    e: function(a) {
      return W(ed(a >>> 0));
    },
    u: function() {
      return W({});
    },
    j: function(a) {
      a >>>= 0;
      var b = Z(a);
      Kb(b);
      Ic(a);
    },
    t: function(a, b, c) {
      b >>>= 0;
      c >>>= 0;
      a = Z(a >>> 0);
      b = Z(b);
      c = Z(c);
      a[b] = c;
    },
    ja: function(a) {
      a = Z(a >>> 0);
      throw a;
    },
    i: function(a) {
      a = Z(a >>> 0);
      return W(typeof a);
    },
    S: function(a, b) {
      a = -9007199254740992 > a || 9007199254740992 < a ? NaN : Number(a);
      b >>>= 0;
      a = new Date(1e3 * a);
      D[b >>> 2 >>> 0] = a.getSeconds();
      D[b + 4 >>> 2 >>> 0] = a.getMinutes();
      D[b + 8 >>> 2 >>> 0] = a.getHours();
      D[b + 12 >>> 2 >>> 0] = a.getDate();
      D[b + 16 >>> 2 >>> 0] = a.getMonth();
      D[b + 20 >>> 2 >>> 0] = a.getFullYear() - 1900;
      D[b + 24 >>> 2 >>> 0] = a.getDay();
      var c = a.getFullYear();
      D[b + 28 >>> 2 >>> 0] = (0 !== c % 4 || 0 === c % 100 && 0 !== c % 400 ? gd : fd)[a.getMonth()] + a.getDate() - 1 | 0;
      D[b + 36 >>> 2 >>> 0] = -(60 * a.getTimezoneOffset());
      c = new Date(a.getFullYear(), 6, 1).getTimezoneOffset();
      var d = new Date(a.getFullYear(), 0, 1).getTimezoneOffset();
      D[b + 32 >>> 2 >>> 0] = (c != d && a.getTimezoneOffset() == Math.min(d, c)) | 0;
    },
    ba: function(a, b, c, d) {
      c >>>= 0;
      d >>>= 0;
      var e = (/* @__PURE__ */ new Date()).getFullYear(), f = new Date(e, 0, 1).getTimezoneOffset();
      e = new Date(e, 6, 1).getTimezoneOffset();
      E[a >>> 0 >>> 2 >>> 0] = 60 * Math.max(f, e);
      D[b >>> 0 >>> 2 >>> 0] = Number(f != e);
      b = (h) => {
        var k = Math.abs(h);
        return `UTC${0 <= h ? "-" : "+"}${String(Math.floor(k / 60)).padStart(2, "0")}${String(k % 60).padStart(2, "0")}`;
      };
      a = b(f);
      b = b(e);
      e < f ? (Xa(a, x, c, 17), Xa(b, x, d, 17)) : (Xa(a, x, d, 17), Xa(b, x, c, 17));
    },
    _: function(a, b, c) {
      if (!(0 <= a && 3 >= a)) return 28;
      F[c >>> 0 >>> 3 >>> 0] = BigInt(Math.round(1e6 * (0 === a ? Date.now() : performance.now())));
      return 0;
    },
    A: () => Date.now(),
    F: function(a) {
      return p(P(a >>> 0));
    },
    ga: function(a, b, c) {
      b >>>= 0;
      var d = Error().stack.toString(), e = d.split("\n");
      d = "";
      var f = RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"), h = RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)"), k;
      for (k of e) {
        var m = h.exec(k);
        if (5 == m?.length) {
          e = m[1];
          var l = m[2];
          var n = m[3];
          m = m[4];
        } else if (m = f.exec(k), 4 <= m?.length) e = m[1], l = m[2], n = m[3], m = m[4] | 0;
        else {
          d += k + "\n";
          continue;
        }
        "_emscripten_log" == e || "_emscripten_get_callstack" == e ? d = "" : a & 24 && (a & 64 && (l = l.substring(l.replace(
          /\\/g,
          "/"
        ).lastIndexOf("/") + 1)), d += `    at ${e} (${l}:${n}:${m})
`);
      }
      a = d = d.replace(/\s+$/, "");
      return !b || 0 >= c ? Wa(a) + 1 : Xa(a, x, b, c) + 1;
    },
    Q: function() {
      return 4294901760;
    },
    G: () => performance.now(),
    O: function(a) {
      a >>>= 0;
      var b = x.length;
      if (4294901760 < a) return false;
      for (var c = 1; 4 >= c; c *= 2) {
        var d = b * (1 + 0.2 / c);
        d = Math.min(d, a + 100663296);
        a: {
          d = (Math.min(4294901760, 65536 * Math.ceil(Math.max(a, d) / 65536)) - xa.buffer.byteLength + 65535) / 65536 | 0;
          try {
            xa.grow(d);
            wa();
            var e = 1;
            break a;
          } catch (f) {
          }
          e = void 0;
        }
        if (e) return true;
      }
      return false;
    },
    U: function(a, b) {
      a >>>= 0;
      b >>>= 0;
      var c = 0, d = 0, e;
      for (e of kd()) {
        var f = b + c;
        E[a + d >>> 2 >>> 0] = f;
        c += Xa(e, x, f, Infinity) + 1;
        d += 4;
      }
      return 0;
    },
    V: function(a, b) {
      a >>>= 0;
      b >>>= 0;
      var c = kd();
      E[a >>> 2 >>> 0] = c.length;
      a = 0;
      for (var d of c) a += Wa(d) + 1;
      E[b >>> 2 >>> 0] = a;
      return 0;
    },
    ha: (a) => {
      Ia || (g.onExit?.(a), oa = true);
      ea(a, new Da(a));
    },
    C: function(a) {
      try {
        var b = O(a);
        I.close(b);
        return 0;
      } catch (c) {
        if ("undefined" == typeof I || "ErrnoError" !== c.name) throw c;
        return c.jb;
      }
    },
    ca: function(a, b, c, d) {
      b >>>= 0;
      c >>>= 0;
      d >>>= 0;
      try {
        a: {
          var e = O(a);
          a = b;
          for (var f, h = b = 0; h < c; h++) {
            var k = E[a >>> 2 >>> 0], m = E[a + 4 >>> 2 >>> 0];
            a += 8;
            var l = I.read(e, u, k, m, f);
            if (0 > l) {
              var n = -1;
              break a;
            }
            b += l;
            if (l < m) break;
            "undefined" != typeof f && (f += l);
          }
          n = b;
        }
        E[d >>> 2 >>> 0] = n;
        return 0;
      } catch (r) {
        if ("undefined" == typeof I || "ErrnoError" !== r.name) throw r;
        return r.jb;
      }
    },
    T: function(a, b, c, d) {
      b = -9007199254740992 > b || 9007199254740992 < b ? NaN : Number(b);
      d >>>= 0;
      try {
        if (isNaN(b)) return 61;
        var e = O(a);
        I.pb(e, b, c);
        F[d >>> 3 >>> 0] = BigInt(e.position);
        e.Zb && 0 === b && 0 === c && (e.Zb = null);
        return 0;
      } catch (f) {
        if ("undefined" == typeof I || "ErrnoError" !== f.name) throw f;
        return f.jb;
      }
    },
    I: function(a, b, c, d) {
      b >>>= 0;
      c >>>= 0;
      d >>>= 0;
      try {
        a: {
          var e = O(a);
          a = b;
          for (var f, h = b = 0; h < c; h++) {
            var k = E[a >>> 2 >>> 0], m = E[a + 4 >>> 2 >>> 0];
            a += 8;
            var l = I.write(e, u, k, m, f);
            if (0 > l) {
              var n = -1;
              break a;
            }
            b += l;
            if (l < m) break;
            "undefined" != typeof f && (f += l);
          }
          n = b;
        }
        E[d >>> 2 >>> 0] = n;
        return 0;
      } catch (r) {
        if ("undefined" == typeof I || "ErrnoError" !== r.name) throw r;
        return r.jb;
      }
    },
    fa: function() {
      H("missing function: mallinfo");
    },
    v: function() {
      g.__ocjsRbvDispose__ = function() {
        for (const a in this) if (Object.prototype.hasOwnProperty.call(
          this,
          a
        )) {
          const b = this[a];
          if (b && "function" === typeof b.delete) {
            try {
              b.delete();
            } catch {
            }
            this[a] = void 0;
          }
        }
      };
    },
    P: function(a, b) {
      a >>>= 0;
      try {
        return Pa(x.subarray(a >>> 0, a + (b >>> 0) >>> 0)), 0;
      } catch (c) {
        if ("undefined" == typeof I || "ErrnoError" !== c.name) throw c;
        return c.jb;
      }
    }
  };
  function wd() {
    var a = xd;
    a = Object.assign({}, a);
    var b = (d) => (e) => d(e) >>> 0, c = (d) => (e, f) => d(e, f) >>> 0;
    a.oa = b(a.oa);
    a.ra = b(a.ra);
    a.realloc = c(a.realloc);
    a.calloc = c(a.calloc);
    a.za = b(a.za);
    a.Ia = c(a.Ia);
    a.Qa = b(a.Qa);
    a.Ra = /* @__PURE__ */ ((d) => () => d() >>> 0)(a.Ra);
    return a;
  }
  function yd() {
    function a() {
      g.calledRun = true;
      if (!oa) {
        va = true;
        g.noFSInit || I.$b || kb();
        xd.na();
        I.tc = false;
        pa?.(g);
        g.onRuntimeInitialized?.();
        if (g.postRun) for ("function" == typeof g.postRun && (g.postRun = [g.postRun]); g.postRun.length; ) {
          var b = g.postRun.shift();
          Fa.push(b);
        }
        Ea(Fa);
      }
    }
    if (0 < hb) ib = yd;
    else {
      if (g.preRun) for ("function" == typeof g.preRun && (g.preRun = [g.preRun]); g.preRun.length; ) Ha();
      Ea(Ga);
      0 < hb ? ib = yd : g.setStatus ? (g.setStatus("Running..."), setTimeout(() => {
        setTimeout(() => g.setStatus(""), 1);
        a();
      }, 1)) : a();
    }
  }
  var xd;
  xd = await (async function() {
    function a(c) {
      xd = c.exports;
      c = xd = wd();
      wc = c.oa;
      g.__ZdlPvm = c.pa;
      ud = c.ra;
      Y = c.sa;
      g.__ZdlPv = c.ua;
      g.__ZdaPv = c.va;
      g.__ZdaPvm = c.wa;
      g.___libc_free = c.xa;
      g.___libc_malloc = c.ya;
      g._emscripten_builtin_malloc = c.za;
      Wc = c.Aa;
      g._strndup = c.Ba;
      g.__Znaj = c.Ca;
      g.__ZnajSt11align_val_t = c.Da;
      g.__Znwj = c.Ea;
      g.__ZnwjSt11align_val_t = c.Fa;
      g.___libc_calloc = c.Ga;
      g.___libc_realloc = c.Ha;
      g._emscripten_builtin_calloc = c.Ia;
      g._emscripten_builtin_free = c.Ja;
      g._emscripten_builtin_realloc = c.Ka;
      g._malloc_size = c.La;
      g._malloc_usable_size = c.Ma;
      g._reallocf = c.Na;
      ya = c.Oa;
      td = c.Pa;
      rd = c.Qa;
      qd = c.Ra;
      pd = c.Sa;
      od = c.Ta;
      md = c.Ua;
      sd = c.Va;
      xa = g.wasmMemory = c.ma;
      rc = c.qa;
      ld = c.ta;
      wa();
      return xd;
    }
    var b = { a: vd };
    if (g.instantiateWasm) return new Promise((c) => {
      g.instantiateWasm(b, (d, e) => {
        c(a(d, e));
      });
    });
    za ??= g.locateFile ? g.locateFile ? g.locateFile("replicad_single.wasm", ia) : ia + "replicad_single.wasm" : new URL("replicad_single.wasm", import.meta.url).href;
    return a((await Ca(b)).instance);
  })();
  yd();
  va ? moduleRtn = g : moduleRtn = new Promise((a, b) => {
    pa = a;
    qa = b;
  });
  ;
  return moduleRtn;
}
var replicad_single_default = Module;

// js/kernel-entry.js
async function bootKernel(wasmUrl) {
  const oc = await replicad_single_default({ locateFile: () => wasmUrl });
  setOC(oc);
  return replicad_exports;
}
export {
  bootKernel,
  replicad_exports as replicad
};
/*! Bundled license information:

replicad/dist/replicad.js:
  (*! https://mths.be/codepointat v0.2.0 by @mathias *)
*/

import { describe, expect, test } from "@jest/globals";
import { DisjointSet } from "./disjointSet.js";

describe("DisjointSet", () => {
  test("should correctly create sets, union them, and find roots", () => {
    const ds = new DisjointSet();
    ds.makeSet(1);
    ds.makeSet(2);
    ds.makeSet(3);

    expect(ds.findRoot(1)).toBe(1);
    expect(ds.findRoot(2)).toBe(2);
    expect(ds.findRoot(3)).toBe(3);

    ds.union(1, 2);
    const root1 = ds.findRoot(1);
    const root2 = ds.findRoot(2);
    expect(root1).toBe(root2);

    ds.union(2, 3);
    const root3 = ds.findRoot(3);
    expect(root3).toBe(ds.findRoot(1));
    expect(root3).toBe(ds.findRoot(2));
  });

  test("union by rank merges sets and updates size/rank", () => {
    const ds = new DisjointSet();
    ds.makeSet(0);
    ds.makeSet(1);
    ds.makeSet(2);

    ds.union(0, 1);
    expect(ds.findRoot(0)).toBe(ds.findRoot(1));
    expect(ds.size[ds.findRoot(0)]).toBe(2);

    ds.union(1, 2);
    expect(ds.findRoot(2)).toBe(ds.findRoot(0));
    expect(ds.size[ds.findRoot(0)]).toBe(3);
    expect(ds.rank[ds.findRoot(0)]).toBeGreaterThanOrEqual(1);
  });

  test("union by size merges sets and updates size/rank", () => {
    const ds = new DisjointSet();
    ds.makeSet(10);
    ds.makeSet(20);
    ds.makeSet(30);

    ds._unionBySize(10, 20);
    expect(ds.findRoot(10)).toBe(ds.findRoot(20));
    expect(ds.size[ds.findRoot(10)]).toBe(2);

    ds._unionBySize(10, 30);
    expect(ds.findRoot(30)).toBe(ds.findRoot(10));
    expect(ds.size[ds.findRoot(10)]).toBe(3);
    ds.makeSet(40);
    ds.makeSet(50);
    ds._unionBySize(40, 50);
    expect(ds.rank[ds.findRoot(40)]).toBeGreaterThanOrEqual(1);
  });

  test("repeated union does not change root", () => {
    const ds = new DisjointSet();
    ds.makeSet(5);
    ds.makeSet(6);
    ds.union(5, 6);
    const root = ds.findRoot(5);
    ds.union(5, 6);
    expect(ds.findRoot(6)).toBe(root);
  });

  test("repeated makeSet does not overwrite existing set", () => {
    const ds = new DisjointSet();
    ds.makeSet(99);
    ds.makeSet(99);
    expect(ds.parent[99]).toBe(99);
    expect(ds.rank[99]).toBe(0);
    expect(ds.size[99]).toBe(1);
  });
});

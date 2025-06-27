import { HashTable } from "./hashTable.js";
import { describe, expect, test } from "@jest/globals";

describe("HashTable", () => {
  describe("core functionality", () => {
    test("handles complete CRUD operations with keys() and values() integration", () => {
      const ht = new HashTable(5);

      expect(ht.size).toBe(0);
      expect(ht.keys()).toBeNull();
      expect(ht.values()).toBeNull();

      expect(ht.set("name", "John")).toBe(ht);
      expect(ht.set("age", 30)).toBe(ht);
      expect(ht.set("data", { x: 1 })).toBe(ht);
      expect(ht.set("empty", null)).toBe(ht);
      expect(ht.size).toBe(4);

      expect(ht.get("name")).toBe("John");
      expect(ht.get("age")).toBe(30);
      expect(ht.get("data")).toEqual({ x: 1 });
      expect(ht.get("empty")).toBeNull();

      const keys = ht.keys();
      expect(keys).toHaveLength(4);
      expect(keys).toContain("name");
      expect(keys).toContain("age");
      expect(keys).toContain("data");
      expect(keys).toContain("empty");

      const values = ht.values();
      expect(values).toHaveLength(4);
      expect(values).toContain("John");
      expect(values).toContain(30);
      expect(values).toContain(null);
      expect(values).toContainEqual({ x: 1 });

      ht.set("name", "Jane");
      expect(ht.get("name")).toBe("Jane");
      expect(ht.size).toBe(4);
      expect(ht.keys()).toHaveLength(4);
      expect(ht.values()).toContain("Jane");
      expect(ht.values()).not.toContain("John");
    });

    test("handles invalid inputs and edge cases", () => {
      const ht = new HashTable();

      expect(ht.set("", "value")).toBeNull();
      expect(ht.set(123, "value")).toBeNull();
      expect(ht.get("")).toBeNull();
      expect(ht.get("nonexistent")).toBeNull();

      expect(ht.keys()).toBeNull();
      expect(ht.values()).toBeNull();
      expect(ht.size).toBe(0);
    });

    test("handles collisions and duplicate values correctly", () => {
      const ht = new HashTable(2);

      ht.set("key1", "duplicate");
      ht.set("key2", "duplicate");
      ht.set("key3", "unique");
      ht.set("key4", 42);

      expect(ht.size).toBe(4);

      expect(ht.get("key1")).toBe("duplicate");
      expect(ht.get("key2")).toBe("duplicate");
      expect(ht.get("key3")).toBe("unique");
      expect(ht.get("key4")).toBe(42);

      const keys = ht.keys();
      expect(keys).toHaveLength(4);
      expect(keys).toContain("key1");
      expect(keys).toContain("key2");
      expect(keys).toContain("key3");
      expect(keys).toContain("key4");

      const values = ht.values();
      expect(values).toHaveLength(3);
      expect(values).toContain("duplicate");
      expect(values).toContain("unique");
      expect(values).toContain(42);
    });
  });

  describe("hash function and initialization", () => {
    test("produces consistent hashes and initializes correctly", () => {
      const ht = new HashTable(10);
      expect(ht.hashString("test")).toBe(ht.hashString("test"));
      expect(ht.hashString("JavaScript")).toBeGreaterThanOrEqual(0);
      expect(ht.hashString("JavaScript")).toBeLessThan(10);
      expect(ht.hashString("")).toBe(0);
      expect(ht.hashString("pink")).not.toBe(ht.hashString("PINK"));

      const defaultHt = new HashTable();
      const customHt = new HashTable(17);
      expect(defaultHt.keyMap.length).toBe(53);
      expect(customHt.keyMap.length).toBe(17);
      expect(defaultHt.size).toBe(0);
    });
  });

  describe("realistic integration scenario", () => {
    test("handles real-world user database scenario", () => {
      const userDB = new HashTable();

      userDB
        .set("user123", { name: "John", role: "admin", active: true })
        .set("user456", { name: "Jane", role: "user", active: true })
        .set("user789", { name: "Bob", role: "user", active: false });

      expect(userDB.size).toBe(3);
      expect(userDB.get("user123").name).toBe("John");
      expect(userDB.get("user456").role).toBe("user");
      expect(userDB.get("user999")).toBeNull();

      const allUserIds = userDB.keys();
      const allUserData = userDB.values();

      expect(allUserIds).toContain("user123");
      expect(allUserIds).toContain("user456");
      expect(allUserIds).toContain("user789");
      expect(allUserIds).toHaveLength(3);

      expect(allUserData).toHaveLength(3);
      expect(allUserData).toContainEqual({ name: "John", role: "admin", active: true });
      expect(allUserData).toContainEqual({ name: "Jane", role: "user", active: true });
      expect(allUserData).toContainEqual({ name: "Bob", role: "user", active: false });
    });
  });
});

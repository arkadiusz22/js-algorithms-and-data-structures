import { HashTable } from "./hashTable.js";
import { describe, expect, test } from "@jest/globals";

describe("HashTable", () => {
  describe("set and get", () => {
    test("inserts, retrieves, and updates key-value pairs correctly", () => {
      const ht = new HashTable(5);

      // Insert new values
      expect(ht.set("name", "John")).toBe(ht);
      expect(ht.set("age", 30)).toBe(ht);
      expect(ht.size).toBe(2);

      // Retrieve values
      expect(ht.get("name")).toBe("John");
      expect(ht.get("age")).toBe(30);

      // Update existing value
      ht.set("name", "Jane");
      expect(ht.get("name")).toBe("Jane");
      expect(ht.size).toBe(2); // Size unchanged on update
    });

    test("handles invalid keys and missing values", () => {
      const ht = new HashTable();

      // Invalid keys return null
      expect(ht.set("", "value")).toBeNull();
      expect(ht.set(123, "value")).toBeNull();
      expect(ht.get("")).toBeNull();
      expect(ht.get("missing")).toBeNull();
      expect(ht.size).toBe(0);
    });

    test("handles collisions and stores various data types", () => {
      const ht = new HashTable(2); // Small size forces collisions

      // Store different types
      ht.set("string", "hello");
      ht.set("number", 42);
      ht.set("object", { x: 1 });
      ht.set("null", null);

      // All values retrievable despite collisions
      expect(ht.get("string")).toBe("hello");
      expect(ht.get("number")).toBe(42);
      expect(ht.get("object")).toEqual({ x: 1 });
      expect(ht.get("null")).toBeNull();
      expect(ht.size).toBe(4);
    });
  });

  describe("hashString", () => {
    test("produces consistent hashes within range and handles edge cases", () => {
      const ht = new HashTable(10);

      // Consistency
      expect(ht.hashString("test")).toBe(ht.hashString("test"));

      // Range validation
      const hash = ht.hashString("JavaScript");
      expect(hash).toBeGreaterThanOrEqual(0);
      expect(hash).toBeLessThan(10);

      // Edge cases
      expect(ht.hashString("")).toBe(0);
      expect(ht.hashString("a".repeat(150))).toBeLessThan(10);

      // Different strings produce different hashes
      expect(ht.hashString("listen")).not.toBe(ht.hashString("silent"));
    });
  });

  describe("constructor and integration", () => {
    test("initializes correctly and handles realistic scenarios", () => {
      // Default and custom sizes
      const defaultHt = new HashTable();
      const customHt = new HashTable(17);

      expect(defaultHt.keyMap.length).toBe(53);
      expect(customHt.keyMap.length).toBe(17);
      expect(defaultHt.size).toBe(0);

      // Realistic user data scenario
      const userDB = new HashTable();
      userDB.set("user123", { name: "John", role: "admin" }).set("user456", { name: "Jane", role: "user" });

      expect(userDB.get("user123").name).toBe("John");
      expect(userDB.get("user456").role).toBe("user");
      expect(userDB.get("user999")).toBeNull();
      expect(userDB.size).toBe(2);
    });
  });
});

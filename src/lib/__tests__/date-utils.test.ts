import { describe, it, expect } from "vitest";
import { formatDate, formatDateRange } from "../date-utils";

describe("date-utils", () => {
  describe("formatDate", () => {
    it("formats valid date string correctly", () => {
      expect(formatDate("2026-09-15")).toBe("September 15, 2026");
      expect(formatDate("2026-12-31")).toBe("December 31, 2026");
      expect(formatDate("2027-01-01")).toBe("January 1, 2027");
    });

    it("returns empty string when date is empty string or undefined", () => {
      expect(formatDate("")).toBe("");
      expect(formatDate(undefined)).toBe("");
    });
  });

  describe("formatDateRange", () => {
    it("formats range with both start date and end date", () => {
      const result = formatDateRange("2026-09-15", "2026-12-31");
      expect(result).toBe("September 15, 2026 – December 31, 2026");
    });

    it("formats range with start date only", () => {
      const result = formatDateRange("2026-09-15", undefined);
      expect(result).toBe("From September 15, 2026");
    });

    it("formats range with end date only", () => {
      const result = formatDateRange(undefined, "2026-12-31");
      expect(result).toBe("Until December 31, 2026");
    });

    it("returns empty string when neither date is provided", () => {
      expect(formatDateRange(undefined, undefined)).toBe("");
      expect(formatDateRange("", "")).toBe("");
      expect(formatDateRange()).toBe("");
    });
  });
});

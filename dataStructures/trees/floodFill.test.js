import { describe, test } from "@jest/globals";
import { floodFill } from "./floodFill";

describe("floodFill", () => {
  const image1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const updatedImage1 = [
    [1, 2, 3],
    [4, 9, 6],
    [7, 8, 9],
  ];

  const image2 = [
    [1, 2, 3],
    [5, 5, 6],
    [7, 8, 9],
  ];
  const updatedImage2 = [
    [1, 2, 3],
    [9, 9, 6],
    [7, 8, 9],
  ];

  const image3 = [
    [1, 5, 3],
    [5, 5, 6],
    [7, 8, 9],
  ];
  const updatedImage3 = [
    [1, 9, 3],
    [9, 9, 6],
    [7, 8, 9],
  ];

  const image4 = [
    [0, 1, 3, 4, 1],
    [3, 8, 8, 3, 3],
    [6, 7, 8, 8, 3],
    [12, 2, 8, 9, 1],
    [12, 3, 1, 3, 2],
  ];
  const updatedImage4 = [
    [0, 1, 3, 4, 1],
    [3, 9, 9, 3, 3],
    [6, 7, 9, 9, 3],
    [12, 2, 9, 9, 1],
    [12, 3, 1, 3, 2],
  ];

  test.each([
    [image1, updatedImage1],
    [image2, updatedImage2],
    [image3, updatedImage3],
  ])("should correctly replace the color and return updated image for basic cases", (image, updatedImage) => {
    expect(floodFill(1, 1, 9, image)).toStrictEqual(updatedImage);
  });

  test("should correctly replace the color and return updated image for advanced cases", () => {
    expect(floodFill(2, 2, 9, image4)).toStrictEqual(updatedImage4);
  });
});

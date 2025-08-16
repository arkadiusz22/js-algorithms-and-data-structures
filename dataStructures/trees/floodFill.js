import { Queue } from "../queue/queue";

/**
 * Replaces colour of the pixel described by row and column coordinates in given image,
 * and all adjacent  pixels that have the same color, with given replacementColour.
 *
 * @param {number} row
 * @param {number} column
 * @param {number} replacementColor
 * @param {Array<Array<number>>} image
 * @returns {Array<Array<number>>}
 */
export function floodFill(row, column, replacementColor, image) {
  const outputImage = structuredClone(image);
  const originalColor = image[row][column];
  const imageHeight = image.length;
  const imageWidth = image[0].length;

  /** @type {Queue<{column: number, row: number}>} */
  const queue = new Queue();
  const visited = Array.from({ length: imageHeight }, () => Array.from({ length: imageWidth }, () => false));

  queue.enqueue({ row, column });
  visited[row][column] = true;
  outputImage[row][column] = replacementColor;

  while (!queue.isEmpty()) {
    const px = queue.dequeue();

    const neighbours = getNeighbours(px.row, px.column, imageHeight, imageWidth);

    for (const neighbour of neighbours) {
      if (
        visited[neighbour.row][neighbour.column] === false &&
        outputImage[neighbour.row][neighbour.column] === originalColor
      ) {
        visited[neighbour.row][neighbour.column] = true;
        outputImage[neighbour.row][neighbour.column] = replacementColor;
        queue.enqueue(neighbour);
      }
    }
  }

  return outputImage;
}

/**
 * @param {number} row
 * @param {number} column
 * @param {number} imageHeight
 * @param {number} imageWidth
 * @returns {Array<{column: number, row: number}>}
 */
function getNeighbours(row, column, imageHeight, imageWidth) {
  return [
    { row, column: column - 1 },
    { row, column: column + 1 },
    { row: row - 1, column },
    { row: row + 1, column },
  ].filter(({ row, column }) => row >= 0 && column >= 0 && row < imageHeight && column < imageWidth);
}

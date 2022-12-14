//playground link = https://stephengrider.github.io/JSPlaygrounds/
//code
const features = tf.tensor([
  [-121, 47],
  [-121.2, 46.5],
  [-122, 46.4],
  [-120.9, 46.7],
]);

const labels = tf.tensor([[200], [250], [215], [240]]);

const predictionPoint = tf.tensor([-121, 47]);

features.sub(predictionPoint);
features.sub(predictionPoint).pow(2);
features.sub(predictionPoint).pow(2).sum(1, true);
features
  .sub(predictionPoint)
  .pow(2)
  .sum(1)
  .pow(0.5)
  .expandDims(1)
  .concat(labels, 1);

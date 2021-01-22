import { dataset } from '@pipcook/datacook';

const mnist = new dataset.vision.Mnist();
const builder = new dataset.vision.DatasetBuilder();

export default builder.from(mnist);

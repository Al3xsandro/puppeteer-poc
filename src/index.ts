import { Cluster } from "puppeteer-cluster";
import { render, ITask } from "./worker";

async function main() {
  const cluster: Cluster<ITask> = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    maxConcurrency: 10,
  });

  await cluster.task(render);
  await cluster.queue({ url: "https://google.com", name: 'google' });
  await cluster.queue({ url: "https://youtube.com", name: 'youtube' });

  await cluster.idle();
  await cluster.close();
}

export { main };

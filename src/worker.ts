import { Page } from "puppeteer";

export interface ITask {
  url: string;
  name: string;
}

type IRender = {
  page: Page;
  data: ITask;
};

export async function render({ page, data }: IRender) {
  const response = await page.goto(data.url);
  console.info(`[INFO] ${response?.status()}`);
  await page.screenshot({ path: `screenshots/${data.name}.png` });
  await page.close();
}

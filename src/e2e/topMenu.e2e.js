const BASE_URL = `http://35.185.148.102:${process.env.PORT || 8080}`;

describe('Homepage', () => {
  it('topmenu should have footer', async () => {
    const params = '/form/basic-form?navTheme=light&layout=topmenu';
    await page.goto(`${BASE_URL}${params}`);
    await page.waitForSelector('footer', {
      timeout: 2000,
    });
    const haveFooter = await page.evaluate(
      () => document.getElementsByTagName('footer').length > 0,
    );
    expect(haveFooter).toBeTruthy();
  });
});

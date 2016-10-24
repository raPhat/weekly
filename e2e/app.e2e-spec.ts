import { WeeklyReportPage } from './app.po';

describe('weekly-report App', function() {
  let page: WeeklyReportPage;

  beforeEach(() => {
    page = new WeeklyReportPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

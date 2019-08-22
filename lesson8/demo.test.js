import { generateConfig, generateAnotherConfig } from "./demo";

/*test('Test generateConfig function', ()=>{
    expect(generateConfig()).toMatchSnapshot({
        time:expect.any(Date)
    });
})


test('Test generateAnotherConfig function', ()=>{
    expect(generateAnotherConfig()).toMatchSnapshot({
        time:expect.any(Date)
    });
})
*/

// 行内snapshot

test("Test generateAnotherConfig function", () => {
  expect(generateAnotherConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "domain": "localhost",
      "port": 8080,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});

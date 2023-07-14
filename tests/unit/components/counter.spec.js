import { mount } from "@vue/test-utils";

import Counter from "@/components/Counter";

describe("Counter Component", () => {
  test("Debe de hacer match con el snapshot", () => {
    const wrapper = mount(Counter);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('H2 debe de tener el valor por defecto de "Counter"', () => {
    const wrapper = mount(Counter);

    expect(wrapper.find("h2").exists()).toBeTruthy();

    const h2Value = wrapper.find("h2").text();

    // console.log(h2.text());

    expect(h2Value).toBe("Counter");
  });

  test("El valor por defecto debe de ser 100 en el <p>", () => {
    const wrapper = mount(Counter);
    // const pTags   = wrapper.findAll("p");
    const value = wrapper.find('[data-testid="counter"]');

    expect(value.text()).toBe("100");
  });

  test("Debe incrementar en uno el valor del Counter", async () => {
    const wrapper = mount(Counter);

    const increaseBtn = wrapper.find("button");

    await increaseBtn.trigger("click");

    let value = wrapper.find('[data-testid="counter"]').text();

    expect(value).toBe("101");

    const decreaseBtn = wrapper.find('[data-minus="minus"]');

    await decreaseBtn.trigger("click");
    await decreaseBtn.trigger("click");

    value = wrapper.find('[data-testid="counter"]').text();
    // console.log( minusValue)

    expect(value).toBe("99");
  });
});

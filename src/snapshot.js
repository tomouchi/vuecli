import HelloWorld from './components/HelloWorld'

test('renders correctly', () => {
  const wrapper = mount(HelloWorld)
  expect(wrapper.element).toMatchSnapshot()
})
import { shallow } from 'enzyme';
import ItemComponent from '../components/Item';
import formatMoney from '../lib/formatMoney';

const fakeItem = {
  id: 'ABC123',
  title: 'A cool item',
  description: 'This is a really cool Item',
  price: 5000,
  image: 'cat.jpg',
  largeImage: 'largeCat.jpg',
};

describe('<Item />', () => {
  it('renders the image properly', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const img = wrapper.find('img');
    expect(img.props().src).toBe(fakeItem.image);
    expect(img.props().alt).toBe(fakeItem.title);
  });
  it('renders the pricetag and title', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const PriceTag = wrapper.find('PriceTag');
    expect(PriceTag.children().text()).toBe(formatMoney(fakeItem.price));
    expect(wrapper.find('Title a').text()).toBe(fakeItem.title);
  });
  it('renders the buttons properly', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const buttonList = wrapper.find('.buttonList');
    expect(buttonList.children()).toHaveLength(3);
    expect(buttonList.find('Link')).toHaveLength(1);
    expect(buttonList.find('Link').exists()).toBe(true);
    expect(buttonList.find('AddToCart').exists()).toBe(true);
    expect(buttonList.find('DeleteItem').exists()).toBe(true);
  });
});

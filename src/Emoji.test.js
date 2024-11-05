import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';
import '@testing-library/jest-dom';
import emojiList from './emojiList.json';


describe("Header Test",()=>{

test("emoji header",()=>{
    render(<Header/>)
    //test edeceğim componenti render ediyoruz
    const headerElement=screen.getByText("Emoji Search");
    expect(headerElement).toBeInTheDocument();
    //headerElementi bu document içinde var mı?
})

test("emoji list control",()=>{
   let emoji = emojiList.slice(0,19); // ilk 20 elamnı alalım
    //listedeki ilk 20 eleman ekranda gösterilmişmi kontrol
    emoji.map((item) =>{expect(screen.getAllByText(item.title)).toBeInTheDocument();});
})

})










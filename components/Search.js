/* eslint-disable react/display-name */
import Downshift, { resetIdCounter } from 'downshift';
import debounce from 'lodash.debounce';
import Router from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { useInfos } from './context/LocalState';
import { DropDown, DropDownItem } from './styles/DropDownStyles';

const SearchStyles = styled.div`
  position: relative;
  margin: 0 auto;
  input {
    padding: 2rem;
    font-size: 2rem;
    border-color: ${({ theme }) => theme.green};
    text-align: center;
    &:focus {
      border-color: ${({ theme }) => theme.primary};
      outline: none;
    }
  }
`;

const AutoComplete = () => {
  const { search, getItems } = useInfos();

  // const router = useRouter();
  const handleChange = item => {
    Router.push(`/recettes/${item.id}`);
  };

  const findRecipes = query => {
    if (!query) return;
    getItems(query);
  };

  const findItemsButSlowly = debounce(findRecipes, 250);
  resetIdCounter();
  return (
    <SearchStyles>
      <Downshift
        onChange={handleChange}
        itemToString={item => (item === null ? '' : item.title)}
      >
        {({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          highlightedIndex,
        }) => (
          <div>
            <input
              {...getInputProps({
                type: 'search',
                placeholder: 'Une Recette ?',
                id: 'search',
                // className: loading ? 'loading' : 'input',
                onChange: e => {
                  e.persist();
                  findItemsButSlowly(e.target.value);
                },
              })}
            />

            {isOpen && (
              <DropDown>
                {search?.map((item, index) => {
                  const { image } = item;
                  const [firstImage] = image;
                  return (
                    <DropDownItem
                      {...getItemProps({ item })}
                      key={item.id}
                      highlighted={index === highlightedIndex}
                    >
                      <img width="50" src={firstImage.url} alt={item.title} />
                      {item.title}
                    </DropDownItem>
                  );
                })}

                {!search?.length > 0 && (
                  <DropDownItem>
                    Oulalalah!! Nous n'avons pas encore de recette pour
                    {inputValue}
                  </DropDownItem>
                )}
                {/* {!search?.length > 0 &&
                  setTimeout(
                    () => (
                      <DropDownItem>
                        Oulalalah!! Nous n'avons pas encore de recette pour
                        {inputValue}
                      </DropDownItem>
                    ),
                    800
                  )} */}
              </DropDown>
            )}
          </div>
        )}
      </Downshift>
    </SearchStyles>
  );
};

export default AutoComplete;

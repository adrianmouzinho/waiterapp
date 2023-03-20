import { useState } from 'react';
import { FlatList } from 'react-native';

import { Category } from '../../types/Categories';
import { Text } from '../Text';

import { CategoryContainer, Icon } from './styles';

interface CategoriesProps {
  categories: Category[];
  onSelectCategory: (categoryId: string) => Promise<void>;
}

export function Categories({ categories, onSelectCategory }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId;

    setSelectedCategory(category);
    onSelectCategory(category);
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      contentContainerStyle={{ paddingRight: 24, paddingLeft: 20 }}
      keyExtractor={category => category._id}
      renderItem={({ item: category }) => {
        const isSelected = selectedCategory === category._id;

        return (
          <CategoryContainer onPress={() => handleSelectCategory(category._id)}>
            <Icon>
              <Text opacity={1}>
                {category.icon}
              </Text>
            </Icon>

            <Text
              size={14}
              weight="600"
              opacity={1}
              color={isSelected ? '#D73035' : '#333'}
              style={isSelected && { borderBottomColor: '#D73035', borderBottomWidth: 2 }}
            >
              {category.name}
            </Text>
          </CategoryContainer>
        );
      }}
    />
  );
}

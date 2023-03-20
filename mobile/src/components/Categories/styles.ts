import styled from 'styled-components/native';
import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const CategoryContainer = styled.TouchableOpacity`
  width: 79.25px;
  align-items: center;
  margin-right: 12px;
`;

export const Icon = styled.View`
  background-color: #FFF;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${ isAndroid ? 0.6 : 0.1 });
  elevation: 2;
`;

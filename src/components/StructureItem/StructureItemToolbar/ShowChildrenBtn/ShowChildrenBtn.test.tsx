import { screen, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For expect assertions

import ShowChildrenBtn from './ShowChildrenBtn';
import {
  FolderItemIF,
  STRUCTURE_ITEM_TYPE,
  StructureItemType
} from '../../../../store/_common/types/folderStructureTypes';
import { USER_ROLE_TYPE } from '../../../../store/_common/types/userTypes';

jest.mock('../../../../hooks/useStore/useStore.tsx', () => ({
  useStore: () => ({
    folderStructureStore: {
      toggleFolder: jest.fn(() => {
        return Promise.resolve();
      })
    }
  })
}));

const mockData: FolderItemIF = {
  id: 'testId1234',
  parentId: '',
  type: STRUCTURE_ITEM_TYPE.FOLDER,
  name: 'folder',
  isOpen: false,
  visible: true,
  parent: null,
  rights: USER_ROLE_TYPE.VIEWER,
  allowed: true,
  children: [
    {
      id: 'filedfk23',
      parentId: 'testId1234',
      name: 'index.html',
      rights: USER_ROLE_TYPE.VIEWER,
      type: STRUCTURE_ITEM_TYPE.FILE,
      visible: true,
      parent: null,
      allowed: true
    }
  ]
};

afterEach(cleanup);

describe('ShowChildrenBtn', () => {
  const setUp = (children?: Array<StructureItemType>) => {
    const utils = render(
      // eslint-disable-next-line testing-library/no-node-access
      <ShowChildrenBtn folder={{ ...mockData, children: children || mockData.children }} />
    );

    return {
      mockData,
      ...utils
    };
  };

  test('renders btn', () => {
    setUp();
    const btnElement = screen.getByTitle('show-children-btn');
    expect(btnElement).toBeInTheDocument();
  });

  test('does not render the button with no children', () => {
    setUp([] as Array<StructureItemType>);
    const btnElement = screen.queryByTitle('show-children-btn');
    expect(btnElement).toBeNull();
  });
});

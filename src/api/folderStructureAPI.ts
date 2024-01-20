import { StructureItemType } from '../store/_common/types/folderStructureTypes';
import structureData from './apiData.json';

export const getFolderStructure = async (): Promise<StructureItemType> => {
  // data received from API
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(structureData);
    }, 1000);
  });
  const data = (await response) as StructureItemType;

  return data;
};

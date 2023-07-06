import styled from 'styled-components';
import { useState } from 'react';
import { StationSelect } from './StaionSelect';

interface propsType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WriteModal = ({ isOpen, setIsOpen }: propsType) => {
  const [inputText, setInputText] = useState<string>('');
  const [selectedStation, setSelectedStation] = useState<number>(1);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const handleClickCreateBtn = () => {
    if (inputText.length > 0) {
      console.log('작성완료');
      setIsOpen(false);
      setInputText('');
    }
  };

  return (
    <ModalContainer>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={(e: any) => e.stopPropagation()}>
            <ModalHeader>방명록 작성하기</ModalHeader>
            <StationSelect setSelectedStation={setSelectedStation} />
            <ModalInputBox
              value={inputText}
              onChange={(e: any) => {
                setInputText(e.target.value);
              }}
              maxLength={120}
            ></ModalInputBox>
            <CreateBtn
              className={inputText.length > 0 ? 'enable' : ''}
              onClick={handleClickCreateBtn}
            >
              업로드
            </CreateBtn>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

const ModalContainer = styled.div``;

const ModalBackdrop = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalView = styled.div`
  width: 340px;
  height: 332px;
  margin-bottom: 120px;
  background-color: white;
  border-radius: 8px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalHeader = styled.div`
  height: 48px;
  font-family: 'NanumSquare';
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray_900};
  line-height: 48px;
  text-align: center;
`;

const ModalInputBox = styled.textarea`
  width: 300px;
  height: 150px;
  border: none;
  outline: none;
  margin-top: 18px;
  padding: 16px;
  border-radius: 10px;

  font-family: 'Pretendard';
  font-size: 13px;

  background-color: ${({ theme }) => theme.colors.gray_100};
`;

const CreateBtn = styled.button`
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.gray_300};
  border: none;
  border-radius: 0 0 8px 8px;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  font-family: 'NanumSquare';
  font-size: 16px;
  font-weight: 700;
  color: white;

  &:hover.enable {
    cursor: pointer;
  }

  &.enable {
    background-color: ${({ theme }) => theme.colors.orange_400};
  }
`;

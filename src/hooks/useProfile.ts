import { request } from 'graphql-request';
import { useEffect, useReducer } from 'react';

type PersonalInfo = { key: string; value: string; id: string };
type Details = { quantity: number; label: string; id: string };
type State = {
  personalInfo: PersonalInfo[];
  details: Details[];
  skills: Details[];
};

const enum ProfileActionEnum {
  SET_PERSONAL_INFO = 'SET_PERSONAL_INFO',
  SET_DETAILS = 'SET_DETAILS',
  SET_SKILLS = 'SET_SKILLS',
}

type Action = {
  type: ProfileActionEnum;
  payload?: PersonalInfo[] | Details[];
};

const initialState = { personalInfo: [], details: [], skills: [] };

const stateReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ProfileActionEnum.SET_PERSONAL_INFO: {
      return {
        ...state,
        personalInfo: (action?.payload ?? []) as PersonalInfo[],
      };
    }
    case ProfileActionEnum.SET_DETAILS: {
      return {
        ...state,
        details: (action?.payload ?? []) as Details[],
      };
    }
    case ProfileActionEnum.SET_SKILLS: {
      return {
        ...state,
        skills: (action?.payload ?? []) as Details[],
      };
    }
    default:
      return { ...state };
  }
};

const useProfile = () => {
  const [state, dispatchReducer] = useReducer(stateReducer, initialState);
  const { personalInfo, details, skills } = state;
  const handleDispatchAction = (
    type: ProfileActionEnum,
    payload: PersonalInfo[] | Details[]
  ) => {
    dispatchReducer({
      type,
      payload,
    });
  };
  const fetchData = async () => {
    const response = await request(
      'https://ap-south-1.cdn.hygraph.com/content/clcu7olf4101601tafmut9ui9/master',
      `{
            personalInfos {
              id
              value
              key
            }
            details{
              id
              quantity
              label
            }
            skills{
              id
              quantity
              label
            }
          }`
    );

    const { personalInfos, details, skills } = response;
    if (personalInfos) {
      handleDispatchAction(ProfileActionEnum.SET_PERSONAL_INFO, personalInfos);
    }
    if (details) {
      handleDispatchAction(ProfileActionEnum.SET_DETAILS, details);
    }
    if (skills) {
      handleDispatchAction(ProfileActionEnum.SET_SKILLS, skills);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { personalInfo, details, skills };
};

export { useProfile };

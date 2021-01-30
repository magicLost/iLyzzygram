import { useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useEditPhotoFirestoreReq } from "../useEditPhotoFirestoreReq";
import { useEditPhotoWorkerReq } from "../useEditPhotoWorkerReq";
import { useGetEditedPhotoReq } from "../useGetEditedPhotoReq";
import { editPhoto } from "./controller";

export const useEditPhotoReqs = () => {
  const dispatch = useDispatch();

  const {
    syncStart: firestoreReq,
    getPhotoFirestoreData,
    isLastReq: isLastFirestoreReq,
  } = useEditPhotoFirestoreReq();

  const {
    syncStart: workerReq,
    getIsNeedRequest: getIsNeedWorkerReq,
    isLastReq: isLastWorkerReq,
  } = useEditPhotoWorkerReq();

  const { start: getEditedPhotoReq } = useGetEditedPhotoReq();

  const { loading, error, prevPhoto, userUid, searchState } = useSelector<
    IGlobalState,
    {
      loading: boolean;
      error: boolean;
      prevPhoto: TPhotoData | undefined;
      userUid: string;
      searchState: ISearchState;
    }
  >(
    (state) => ({
      loading: state.photos.editLoading,
      error: state.photos.editError,
      prevPhoto: state.modal.photo,
      userUid: state.auth.user ? state.auth.user.uid : "",
      searchState: state.search,
    }),
    shallowEqual
  );

  const start = useCallback((photoFormData: IEditPhotoFormData) => {
    const isNeedWorkerReq = getIsNeedWorkerReq(photoFormData);

    if (!prevPhoto) throw new Error("No prev photo info");

    editPhoto(
      firestoreReq,
      workerReq,
      getEditedPhotoReq,
      getPhotoFirestoreData,
      isNeedWorkerReq,
      isLastFirestoreReq,
      isLastWorkerReq,
      dispatch,
      prevPhoto.id,
      userUid,
      photoFormData,
      searchState
    );
  }, []);

  return {
    start,
    loading,
    error,
  };
};

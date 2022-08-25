import {
   SAVE_PAYMENT_METHOD,
   SAVE_SCHOOL_SHIPPING,
   SAVE_USER_SHIPPING_DETAILS,
} from '../constants/shippingConstants';

export const saveShippingSchool = () => async (dispatch) => {
   try {
      dispatch({
         type: SAVE_SCHOOL_SHIPPING,
         payload: 'Ajayi Crowther University',
      });

      localStorage.setItem(
         'schoolShipping',
         JSON.stringify('Ajayi Crowther University')
      );
   } catch (err) {
      dispatch(returnErrors('An error occured!'));
   }
};

export const saveUserShippingDetails = (userDetails) => async (dispatch) => {
   try {
      dispatch({
         type: SAVE_USER_SHIPPING_DETAILS,
         payload: userDetails,
      });

      localStorage.setItem('userShippingDetails', JSON.stringify(userDetails));
   } catch (err) {
      dispatch(returnErrors('An error occured!'));
   }
};

export const savePaymentMethod = (payment) => async (dispatch) => {
   try {
      dispatch({
         type: SAVE_PAYMENT_METHOD,
         payload: payment,
      });

      localStorage.setItem('savePaymentMethod', JSON.stringify(payment));
   } catch (err) {
      dispatch(returnErrors('An error occured!'));
   }
};

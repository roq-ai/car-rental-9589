import * as yup from 'yup';

export const usageTrackingValidationSchema = yup.object().shape({
  usage_start_time: yup.date().required(),
  usage_end_time: yup.date().required(),
  total_miles: yup.number().integer().required(),
  vehicle_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});

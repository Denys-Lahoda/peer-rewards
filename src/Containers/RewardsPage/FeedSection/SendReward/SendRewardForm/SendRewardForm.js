import React from "react";
import "./styles.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { rewards } from "../../../../../api";
import processDataEntry from "../../utils/processDataEntry";
import { actions } from "../../dataReducer";
import { FeedSectionContext } from "../../FeedSection";

const schema = z.object({
  userFullName: z.string().nonempty({ message: "Required" }),
  amount: z.preprocess((val) => Number(val), z.number().min(5)),
  message: z.string().nonempty({ message: "Required" }),
});

// Required for reset
const defaultValues = {
  userFullName: "",
  amount: "",
  message: "",
};

function SendRewardForm() {
  const context = React.useContext(FeedSectionContext);
  const [submitting, setSubmitting] = React.useState(false);
  const { control, handleSubmit, reset } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    setSubmitting(true);

    const payload = { ...data };

    rewards
      .sendReward(payload)
      .then((response) => {
        if (response.status === 200) {
          const processedDataEntry = processDataEntry(response.data); // Add formattedDate
          context.dataDispatch(actions.addItem(processedDataEntry));
        }
      })
      .finally(() => {
        reset();
        setSubmitting(false);
      });
  };

  const checkKeyDown = (e) => {
    if (e.keyCode === 13) e.preventDefault(); // Prevent submit on pressing enter
  };

  return (
    <form
      className="send-reward-form"
      onSubmit={handleSubmit(onSubmit)}
      onKeyDown={(e) => checkKeyDown(e)}
    >
      <Controller
        name="userFullName"
        control={control}
        defaultValue=""
        render={({ field, fieldState: { error } }) => (
          <TextField
            required
            variant="outlined"
            label="To"
            placeholder="Alex Brown"
            className="send-reward-form__text-field"
            InputLabelProps={{ shrink: true }}
            InputProps={{ ...field }}
            disabled={submitting}
            {...(error
              ? {
                  error: true,
                  helperText: error.message,
                }
              : {})}
          />
        )}
      />
      <Controller
        name="amount"
        control={control}
        defaultValue=""
        render={({ field, fieldState: { error } }) => (
          <TextField
            required
            variant="outlined"
            label="Reward"
            placeholder="0"
            type="number"
            className="send-reward-form__text-field"
            InputLabelProps={{ shrink: true }}
            InputProps={{ ...field }}
            disabled={submitting}
            {...(error
              ? {
                  error: true,
                  helperText: error.message,
                }
              : {})}
          />
        )}
      />
      <Controller
        name="message"
        control={control}
        defaultValue=""
        render={({ field, fieldState: { error } }) => (
          <TextField
            required
            multiline
            variant="outlined"
            label="Reason"
            placeholder=""
            className="send-reward-form__text-field"
            InputLabelProps={{ shrink: true }}
            InputProps={{ ...field }}
            disabled={submitting}
            {...(error
              ? {
                  error: true,
                  helperText: error.message,
                }
              : {})}
          />
        )}
      />
      <Box sx={{ pt: 2 }}>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          disabled={submitting}
        >
          {submitting ? <CircularProgress size={24} /> : "Send Reward"}
        </Button>
      </Box>
    </form>
  );
}

export default SendRewardForm;

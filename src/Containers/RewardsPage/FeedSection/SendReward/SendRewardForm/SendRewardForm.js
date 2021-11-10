import React from "react";
import "./styles.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  to: z.string().nonempty({ message: "Required" }),
  rewardAmount: z.preprocess((val) => Number(val), z.number().min(5)),
  reason: z.string().nonempty({ message: "Required" }),
});

function SendRewardForm() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  const checkKeyDown = (e) => {
    if (e.keyCode === 13) e.preventDefault();
  };

  return (
    <form
      className="send-reward-form"
      onSubmit={handleSubmit(onSubmit)}
      onKeyDown={(e) => checkKeyDown(e)}
    >
      <Controller
        name="to"
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
        name="rewardAmount"
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
        name="reason"
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
        <Button color="primary" variant="contained" type="submit">
          Send Reward
        </Button>
      </Box>
    </form>
  );
}

export default SendRewardForm;

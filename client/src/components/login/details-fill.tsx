"use client";
import TextInput from "@/components/login/text-input";
import { User } from "@/gql/graphql";
import { getStorage, setStorage } from "@/hooks/use-local-storage";
import { DetailsFillSchemaType, detailsFillSchema } from "@/lib/validation/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import UserIcon from "@/assets/icons/details-form/User.svg";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { CustomDatePicker } from "@/theme/components/styled/DatePicker/datepicker";
import { Button, Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useMutation } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { client } from "@/lib/utils/request";
import { useRouter } from "next/navigation";

const DETAILS_FILL_QUERY = gql`
  mutation DataFill($username: String!, $dateOfBirth: String!) {
    dataFill(username: $username, dateOfBirth: $dateOfBirth) {
      dateOfBirth
      email
      isDataFilled
      password
      profilePicture
      userId
      username
    }
  }
`;

const DetailsFill = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const navigate = useRouter();

  useEffect(() => {
    const data = getStorage("user");
    setUserData(data);
  }, []);
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<DetailsFillSchemaType>({
    resolver: zodResolver(detailsFillSchema),
    defaultValues: {
      username: "",
    },
  });

  const mutation = useMutation({
    mutationKey: ["detailsFill"],
    mutationFn: async (data: DetailsFillSchemaType) =>
      client.request(DETAILS_FILL_QUERY, {
        username: data.username,
        dateOfBirth: data.dateOfBirth,
      }),
    onSuccess: (data: any) => {
       setStorage("user", JSON.stringify(data.dataFill));
       navigate.push('/')
       

    },
  });

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="flex-1 gap-8 flex h-full flex-col w-full ">
      <div className="flex flex-col  w-full text-center gap-2 just items-center">
        <p className="text-2xl font-semibold">You are logged in as,</p>
        <p className="border px-5 py-1 rounded-xl ">{userData.email}</p>
      </div>
      <div className="border flex flex-col gap-2 h-full rounded-2xl px-4 py-4  ">
        <p className="text-xl font-semibold">
          Please fill out the details below.
        </p>
        <form
          className="flex  flex-col justify-between gap-6"
          onSubmit={handleSubmit((data) => mutation.mutate(data))}
        >
          <div className="flex  flex-col gap-2 items-center ">
            <div className="w-full">
              <TextInput
                placeholder="Username"
                hookProps={{
                  control,
                  name: "username",
                }}
                icon={UserIcon}
                label="Username:"
              />
              {errors.username && (
                <Typography color={"red"}>{errors.username.message}</Typography>
              )}
            </div>
            <div className="w-full">
              <label>Date Of Birth:</label>
              <Controller
                name="dateOfBirth"
                control={control}
                render={({ field }) => (
                  <CustomDatePicker
                    className="w-full outline-none"
                    onChange={(value) => {
                      if (value) setValue("dateOfBirth", value.toDate());
                    }}
                  />
                )}
              />
              {errors.dateOfBirth && (
                <Typography color={"red"}>
                  {errors.dateOfBirth.message}
                </Typography>
              )}
            </div>
          </div>
          <Button
            variant="contained"
            className="bg-[#6372E5] w-full rounded-lg  py-3 text-base font-semibold mx-auto"
            type="submit"
            disabled={mutation.isPending}
          >
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DetailsFill;

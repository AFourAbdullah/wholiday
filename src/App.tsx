import { useEffect, useRef, useState } from "react";

import "./App.css";
import {
  Text,
  Spacer,
  Box,
  Flex,
  Button,
  Progress,
  Image,
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaArrowLeft } from "react-icons/fa";

import {
  FormLayout,
  NextButton,
  // FormValue,
  // Property,
  PrevButton,
} from "@saas-ui/react";
import { StepForm } from "@saas-ui/forms/zod";
import * as zod from "zod";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const steps = [
    {
      name: "start",
      schema: zod.object({}),
    },
    {
      name: "name",
      schema: zod.object({
        first_name: zod.string().nonempty(),
        last_name: zod.string().nonempty(),
      }),
    },
    {
      name: "revenue",
      schema: zod.object({
        revenue: zod.string().nonempty(),
        growth: zod.string().nonempty(),
      }),
    },

    {
      name: "company",
      schema: zod.object({
        company_name: zod.string().nonempty(),
        B2B: zod.string().nonempty(),
      }),
    },
    {
      name: "email",
      schema: zod.object({
        email: zod.string().nonempty(),
      }),
    },
    {
      name: "start",
      schema: zod.object({}),
    },
  ];
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const lasstNameRef = useRef<HTMLInputElement | null>(null);
  const companyNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  const handleInputFocus = () => {
    if (buttonRef.current && window.innerWidth < 768) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const buttonBottom = window.innerHeight - buttonRect.bottom;

      if (buttonBottom > 0 && lasstNameRef.current && firstNameRef.current) {
        buttonRef.current.style.transform = `translateY(-${36.6}vh)`;
        lasstNameRef.current.style.transform = `translateY(-${10}px)`;
        firstNameRef.current.style.transform = `translateY(-${10}px)`;
      }
      if (buttonBottom > 0 && companyNameRef.current) {
        buttonRef.current.style.transform = `translateY(-${34}vh)`;
        // companyNameRef.current.style.transform = `translateY(-${10}px)`;
      }
      if (buttonBottom > 0 && emailRef.current) {
        buttonRef.current.style.transform = `translateY(-${36.6}vh)`;
        // companyNameRef.current.style.transform = `translateY(-${10}px)`;
      }
    }
  };
  const handleInputBlur = () => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = "none";
    }
  };

  const [pregressBar, setProgressBar] = useState<number>(0);

  const onSubmit = async (params: any) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
      setIsLoading(false)
    );
    console.log(params);
    window.location.href = "/";
  };

  const isClassNameExist = (className: string) => {
    const elements = document.getElementsByTagName("*");
    // Iterate through each element
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (element.classList.contains(className)) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {}, []);

  return (
    <div className="App">
      <div className="App-content">
        <Box w="100%" maxW="100%" padding="0">
          <Box>
            <FaArrowLeft
              style={{
                position: "absolute",
                left: 20,
                top: 28,
                fontSize: 20,
                cursor: "pointer",
              }}
              onClick={() => {
                document.getElementById("previous-button")?.click();
              }}
            />
          </Box>
          <Box>
            <Box className="custom-header">
              <Flex
                as="header"
                py="2"
                pl={{ base: "5", md: "20" }}
                h="70px"
                align="center"
              >
                <FaArrowLeft
                  style={{
                    left: 20,
                    top: 0,
                    fontSize: 20,
                    cursor: "pointer",
                    color: "white",
                  }}
                  onClick={() => {
                    document.getElementById("previous-button")?.click();
                  }}
                />
                <Image
                  src="/logo.svg"
                  style={{ marginLeft: "20px", width: "80px" }}
                />
              </Flex>
              <Box>
                <Progress
                  value={pregressBar}
                  className="custom-progress"
                  size="xs"
                />
              </Box>
            </Box>
          </Box>
          <Box
            pt={{ base: "40px", md: "80px" }}
            px="20px"
            w={{ base: "100%", md: "80%", lg: "70%" }}
            m="0 auto"
            style={{ marginTop: "50px" }}
          >
            <Flex
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <Box w={{ base: "100%", md: "50%", lg: "30%" }}>
                <StepForm
                  steps={steps}
                  defaultValues={{
                    first_name: "",
                    last_name: "",
                    email: "",
                    revenue: "",
                    growth: "",
                    runway: "",
                    company_name: "",
                    B2B: "",
                  }}
                  noValidate
                  onSubmit={onSubmit}
                >
                  {({
                    Field,
                    FormStep,
                    isFirstStep,
                    isLastStep,
                    isCompleted,
                    nextStep,
                  }) => (
                    <FormLayout>
                      <Flex flexDirection="column" minHeight={{ md: "auto" }}>
                        <FormStep name="start">
                          <FormLayout>
                            <Flex justify="center">
                              <Flex
                                w="120px"
                                h="120px"
                                backgroundColor="#eefefe"
                                color="#bf4217"
                                borderRadius="50%"
                                align="center"
                                justify="center"
                              >
                                <ExternalLinkIcon boxSize={12} />
                              </Flex>
                            </Flex>
                            <Text fontSize="lg" align="left" mt="20px">
                              Find out how much you can extend your runway and
                              grow your revenue with Ensure Grow
                            </Text>
                            <Text fontSize="lg" align="left" mt="20px">
                              Input your business metrics to learn how much you
                              can decrease your netburn reate, extend cash
                              runway, and increase total revenue with
                              non-dilutive financing - no commitment required.
                            </Text>
                          </FormLayout>
                        </FormStep>

                        <FormStep name="name">
                          <FormLayout>
                            <Field
                              name="first_name"
                              label="Name"
                              placeholder="Name"
                              className="myInp"
                              size="lg"
                              ref={firstNameRef}
                              onFocus={handleInputFocus}
                              onBlur={handleInputBlur}
                              rules={{
                                required: true,
                              }}
                            />
                            <Field
                              name="last_name"
                              label="Last Name"
                              placeholder="Last Name"
                              ref={lasstNameRef}
                              onFocus={handleInputFocus}
                              onBlur={handleInputBlur}
                              size="lg"
                              rules={{
                                required: true,
                              }}
                            />
                          </FormLayout>
                        </FormStep>

                        <FormStep name="revenue">
                          <FormLayout>
                            <Field
                              type="select"
                              name="revenue"
                              size="lg"
                              label="What is your Annual recurring revenue?"
                              options={[
                                { value: "$ 0" },
                                { value: "$0-150k" },
                                { value: "$150k-300k" },
                                { value: "$300-1M" },
                                { value: "$1M-3M" },
                                { value: "$3M-6M" },
                                { value: "> 6M" },
                              ]}
                              defaultValue="$ 0"
                            />
                            <Field
                              type="select"
                              name="growth"
                              size="lg"
                              label="Year-over-year growth rate?"
                              options={[
                                { value: "% 0" },
                                { value: "< 0%" },
                                { value: "0-30%" },
                                { value: "30%-100%" },
                                { value: "> 100%" },
                              ]}
                              defaultValue="% 0"
                            />
                            <Field
                              type="select"
                              name="runway"
                              size="lg"
                              label="Months of runway?"
                              options={[
                                { value: "0 months" },
                                { value: "0-3 months" },
                                { value: "3-6 months" },
                                { value: "6-12 months" },
                                { value: "+12 months" },
                              ]}
                              defaultValue="0 months"
                            />
                          </FormLayout>
                        </FormStep>

                        <FormStep name="company">
                          <FormLayout>
                            <Field
                              name="company_name"
                              onFocus={handleInputFocus}
                              onBlur={handleInputBlur}
                              ref={companyNameRef}
                              size="lg"
                              label="Company name?"
                              rules={{
                                required: true,
                              }}
                            />
                            <Field
                              type="select"
                              onFocus={handleInputFocus}
                              onBlur={handleInputBlur}
                              name="B2B"
                              size="lg"
                              label="Are you a B2B company?"
                              options={[{ value: "Yes" }, { value: "No" }]}
                              defaultValue="Select an Option"
                            />
                          </FormLayout>
                        </FormStep>

                        <FormStep name="email">
                          <FormLayout>
                            <Field
                              type="email"
                              name="email"
                              onFocus={handleInputFocus}
                              onBlur={handleInputBlur}
                              ref={emailRef}
                              label="What's your business email address?"
                              placeholder="Email"
                              size="lg"
                              rules={{
                                required: true,
                              }}
                            />
                          </FormLayout>
                        </FormStep>

                        {/* <FormStep name="end">
                          <FormLayout>
                            <Flex justify="center">
                              <Flex
                                w="150px"
                                h="150px"
                                backgroundColor="#eefefe"
                                color="#bf4217"
                                borderRadius="50%"
                                align="center"
                                justify="center"
                              >
                                <EmailIcon boxSize={12} />
                              </Flex>
                            </Flex>
                            <Flex align="center" justify="center">
                              <Text
                                fontSize="xl"
                                align="left"
                                style={{
                                  fontWeight: "bold",
                                  marginRight: "10px",
                                }}
                              >
                                Hey
                              </Text>
                              <Text
                                fontSize="xl"
                                align="left"
                                style={{
                                  fontWeight: "bold",
                                }}
                              >
                                <Property
                                  value={<FormValue name="first_name" />}
                                />
                              </Text>
                            </Flex>
                            <Text fontSize="lg" align="center" mt="20px">
                              It's good to know that you are interested in
                              subscribing to our newsletter!
                            </Text>
                          </FormLayout>
                        </FormStep> */}

                        {isCompleted ? (
                          <></>
                        ) : (
                          <Box
                            position={{
                              base: "absolute",
                              md: "static",
                              sm: "inherit",
                            }}
                            bottom={{ base: "10px", md: "auto", sm: "500px" }}
                            width={{ base: "91%", md: "100%" }}
                            marginTop={{ base: "auto", md: "30px" }}
                          >
                            {isLastStep ? (
                              <Button
                                type="submit"
                                colorScheme="purple"
                                size="lg"
                                width="100%"
                                style={{
                                  width: "100%",
                                  background: "#BF4217",
                                  marginBottom: "100px",
                                }}
                                isLoading={isLoading}
                                ref={buttonRef}
                                onClick={() => {
                                  if (
                                    !isClassNameExist(
                                      "chakra-form__error-message"
                                    )
                                  ) {
                                    setProgressBar((prev) => prev + 20);
                                  }
                                }}
                              >
                                Submit
                              </Button>
                            ) : (
                              <>
                                {isFirstStep ? (
                                  <Button
                                    type="button"
                                    colorScheme="purple"
                                    size="lg"
                                    width="100%"
                                    style={{
                                      width: "100%",
                                      background: "#bf4217",
                                      marginBottom: "100px",
                                      //   position: "fixed",
                                      //   bottom: 0,
                                      //   left: 0,
                                      //   right: 0,
                                      //   marginBottom: "30px",
                                    }}
                                    onClick={() => {
                                      nextStep();
                                      setProgressBar((prev) => prev + 20);
                                    }}
                                  >
                                    Perfect, Let's Start
                                  </Button>
                                ) : (
                                  <>
                                    <NextButton
                                      style={{ display: "none" }}
                                      size="lg"
                                      onClick={() => {
                                        if (
                                          !isClassNameExist(
                                            "chakra-form__error-message"
                                          )
                                        ) {
                                          setProgressBar((prev) => prev + 20);
                                        }
                                      }}
                                      id="next-button"
                                    />
                                    <Button
                                      style={{
                                        width: "100%",
                                        background: "#bf4217",
                                        marginTop: "10px",
                                        fontSize: "16px",
                                        color: "white",

                                        marginBottom: "100px",
                                      }}
                                      ref={buttonRef}
                                      size="lg"
                                      onClick={() => {
                                        document
                                          .getElementById("next-button")
                                          ?.click();
                                      }}
                                    >
                                      Continue
                                    </Button>
                                    <Spacer />
                                    <PrevButton
                                      size="lg"
                                      onClick={() => {
                                        setProgressBar((prev) => prev - 20);
                                      }}
                                      id="previous-button"
                                      style={{
                                        width: "100%",
                                        marginTop: "10px",
                                        display: "none",
                                      }}
                                    />
                                  </>
                                )}
                              </>
                            )}
                          </Box>
                        )}
                      </Flex>
                    </FormLayout>
                  )}
                </StepForm>
              </Box>
              <Box
                w={{ base: "0%", md: "50%" }}
                display={{ base: "none", md: "block" }}
              >
                <Image src="/image.png" width="100%" />
              </Box>
            </Flex>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default App;

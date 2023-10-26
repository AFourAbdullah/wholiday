import { useEffect, useState } from 'react';
import './App.css';
import {
	// Container,
	Text,
	Spacer,
	Box,
	Flex,
	Button,
	Progress,
	Image
} from '@chakra-ui/react'
import {
	FormLayout,
	PrevButton,
	NextButton,
	// StepsCompleted,
	FormValue,
	// PropertyList,
	Property,
} from '@saas-ui/react'
import { StepForm } from '@saas-ui/forms/zod'
import * as zod from 'zod'

function App() {

	const [pregressBar, setProgressBar] = useState<number>(7.1418)

	useEffect(() => {
	}, [])


	const steps = [
		{
			name: 'name',
			schema: zod.object({
				first_name: zod.string().nonempty(),
				last_name: zod.string().nonempty(),
			}),
		},
		{
			name: 'revenue',
			schema: zod.object({
				revenue: zod.string().nonempty(),
			}),
		},
		{
			name: 'business_name',
			schema: zod.object({
				business_name: zod.string().nonempty(),
			}),
		},
		{
			name: 'locate',
			schema: zod.object({
				locate: zod.string().nonempty(),
			}),
		},
		{
			name: 'operating',
			schema: zod.object({
				operating: zod.string().nonempty(),
			}),
		},
		{
			name: 'what_trading',
			schema: zod.object({
				what_trading: zod.string().nonempty(),
			}),
		},
		{
			name: 'when_trading',
			schema: zod.object({
				when_trading: zod.string().nonempty(),
			}),
		},
		{
			name: 'industry',
			schema: zod.object({
				industry: zod.string().nonempty(),
			}),
		},
		{
			name: 'funding',
			schema: zod.object({
				funding: zod.string().nonempty(),
			}),
		},
		{
			name: 'reason',
			schema: zod.object({
				reason: zod.string().nonempty(),
			}),
		},
		{
			name: 'phone_number',
			schema: zod.object({
				phone_number: zod.string().nonempty(),
			}),
		},
		{
			name: 'email',
			schema: zod.object({
				email: zod.string().nonempty(),
			}),
		},
		{
			name: 'email',
			schema: zod.object({
				confirm_email: zod.string().nonempty(),
			}),
		},
		{
			name: 'password',
			schema: zod.object({
				password: zod.string().nonempty(),
			}),
		},
	]

	const onSubmit = (params: any) => {
		console.log(params)
		return new Promise((resolve) => {
			setTimeout(resolve, 1000)
		})
	}

	const isClassNameExist = (className: string) => {
		const elements = document.getElementsByTagName('*');
		// Iterate through each element
		for (let i = 0; i < elements.length; i++) {
			const element = elements[i];
			if (element.classList.contains(className)) {
				return true;
			}
		}

		return false;
	}

	return (
		<div className="App">
			<div className="App-content">
				<Box w='100%' maxW='100%' padding='0'>
					<Box>
						<Progress value={pregressBar} className='custom-progress' />
					</Box>
					<div
						style={{ textAlign: 'center', marginTop: '20px' }}
						className='logo'
					>
						<div
							style={{ margin: 'auto', width: '100px' }}
						>
							<Image src='/logo.svg' />
						</div>
					</div>
					<StepForm
						steps={steps}
						defaultValues={{
							first_name: '',
							last_name: '',
							email: '',
							confirm_email: '',
							business_name: '',
							locate: '',
							operating: '',
							what_trading: '',
							when_trading: '',
							industry: '',
							funding: '',
							reason: '',
							revenue: '',
							phone_number: '',
							password: ''
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
							// nextStep,
							// prevStep
						}) => (
							<FormLayout>
								<FormStep name="business_name">
									<Box pt={100} w='60%' m='0 auto'>
										<FormLayout>
											<Text
												fontSize='3xl'
												align='left'
												style={{
													fontWeight: '600'
												}}
												className='step-header'

											>
												What is your company name?
											</Text>
											<Field
												name="business_name"
												size='lg'
												rules={{
													required: true
												}}
											/>
										</FormLayout>
									</Box>
								</FormStep>
								<FormStep name="locate">
									<Box pt={100} w='60%' m='0 auto'>
										<FormLayout>
											<Text
												fontSize='3xl'
												align='left'
												style={{
													fontWeight: '600'
												}}
												className='step-header'

											>
												Where is your business located?
											</Text>
											<Field
												name="locate"
												size='lg'
												rules={{
													required: true
												}}
											/>
										</FormLayout>
									</Box>
								</FormStep>
								<FormStep name="operating">
									<Box pt={100} w='60%' m='0 auto'>
										<FormLayout>
											<Text
												fontSize='3xl'
												align='left'
												style={{
													fontWeight: '600'
												}}
												className='step-header'

											>
												Where is your business operating?
											</Text>
											<Field
												name="operating"
												size='lg'
												rules={{
													required: true
												}}
											/>
										</FormLayout>
									</Box>
								</FormStep>
								<FormStep name="what_trading">
									<Box pt={100} w='60%' m='0 auto'>
										<FormLayout>
											<Text
												fontSize='3xl'
												align='left'
												style={{
													fontWeight: '600'
												}}
												className='step-header'

											>
												What are you trading as?
											</Text>
											<Field
												name="what_trading"
												size='lg'
												rules={{
													required: true
												}}
											/>
										</FormLayout>
									</Box>
								</FormStep>
								<FormStep name="when_trading">
									<Box pt={100} w='60%' m='0 auto'>
										<FormLayout>
											<Text
												fontSize='3xl'
												align='left'
												style={{
													fontWeight: '600'
												}}
												className='step-header'

											>

												When did you start trading?
											</Text>
											<Field
												name="when_trading"
												size='lg'
												rules={{
													required: true
												}}
											/>
										</FormLayout>
									</Box>
								</FormStep>
								<FormStep name="revenue">
									<Box pt={100} w='60%' m='0 auto'>
										<FormLayout>
											<Text
												fontSize='3xl'
												align='left'
												style={{
													fontWeight: '600'
												}}
												className='step-header'

											>
												What was your company's revenue last year?
											</Text>
											<Field
												name="revenue"
												size='lg'
												rules={{
													required: true
												}}
											/>
										</FormLayout>
									</Box>
								</FormStep>
								<FormStep name="industry">
									<Box pt={100} w='60%' m='0 auto'>
										<FormLayout>
											<Text
												fontSize='3xl'
												align='left'
												style={{
													fontWeight: '600'
												}}
												className='step-header'

											>
												Which industry do you or will you work in?
											</Text>
											<Field
												name="industry"
												size='lg'
												rules={{
													required: true
												}}
											/>
										</FormLayout>
									</Box>
								</FormStep>
								<FormStep name="funding">
									<Box pt={100} w='60%' m='0 auto'>
										<FormLayout>
											<Text
												fontSize='3xl'
												align='left'
												style={{
													fontWeight: '600'
												}}
												className='step-header'

											>
												How much funding does your company need?
											</Text>
											<Field
												name="funding"
												size='lg'
												rules={{
													required: true
												}}
											/>
										</FormLayout>
									</Box>
								</FormStep>
								<FormStep name="reason">
									<Box pt={100} w='60%' m='0 auto'>
										<FormLayout>
											<Text
												fontSize='3xl'
												align='left'
												style={{
													fontWeight: '600'
												}}
												className='step-header'

											>
												What's the specific reason you need funding?
											</Text>
											<Field
												name="reason"
												size='lg'
												rules={{
													required: true
												}}
											/>
										</FormLayout>
									</Box>
								</FormStep>
								<FormStep name="name">
									<Box pt={100} w='60%' m='0 auto'>
										<FormLayout>
											<Text
												fontSize='3xl'
												align='left'
												style={{
													fontWeight: '600'
												}}
												className='step-header'
											>
												Tell us a little about yourself
											</Text>
											<Field
												name="first_name"
												label="Name"
												placeholder="Name"
												size='lg'
												rules={{
													required: true
												}}
											/>
											<Field
												name="last_name"
												label="Last Name"
												placeholder="Last Name"
												size='lg'
												rules={{
													required: true
												}}
											/>
										</FormLayout>
									</Box>
								</FormStep>
								<FormStep name="phone_number">
									<Box pt={100} w='60%' m='0 auto'>
										<FormLayout>
											<Text
												fontSize='3xl'
												align='left'
												style={{
													fontWeight: '600'
												}}
												className='step-header'

											>
												What's your phone number?
											</Text>
											<Field
												name="phone_number"
												size='lg'
												rules={{
													required: true
												}}
											/>
										</FormLayout>
									</Box>
								</FormStep>
								<FormStep name="email">
									<Box pt={100} w='60%' m='0 auto'>
										<FormLayout>
											<Text
												fontSize='3xl'
												align='left'
												style={{
													fontWeight: '600'
												}}
												className='step-header'

											>
												What's your business email address?
											</Text>
											<Field
												type="email"
												name="email"
												label="Email"
												placeholder="Email"
												size='lg'
												rules={{
													required: true
												}}
											/>
										</FormLayout>
									</Box>
								</FormStep>
								<FormStep name="confirm_email">
									<Box pt={100} w='60%' m='0 auto'>
										<FormLayout>
											<Text
												fontSize='3xl'
												align='left'
												style={{
													fontWeight: '600'
												}}
												className='step-header'

											>
												Please confirm your email address
											</Text>
											<Field
												type="email"
												name="confirm_email"
												label="Email"
												placeholder="Confirm Email"
												size='lg'
												rules={{
													required: true
												}}
											/>
										</FormLayout>
									</Box>
								</FormStep>
								<FormStep name="password">
									<Box pt={100} w='60%' m='0 auto'>
										<FormLayout>
											<Text
												fontSize='3xl'
												align='left'
												style={{
													fontWeight: '600'
												}}
												className='step-header'

											>
												Choose a password
											</Text>
											<Field
												name="password"
												size='lg'
												rules={{
													required: true
												}}
											/>
										</FormLayout>
									</Box>
								</FormStep>
								{
									isCompleted &&
									<Box pt={100} w='60%' m='0 auto'>
										<FormLayout>
											<Flex align='center'>
												<Text
													fontSize='5xl'
													align='left'
													color='#6e3dea'
													style={{
														fontWeight: 'bold',
														marginRight: '10px'
													}}
												>
													Hey
												</Text>
												<Text
													fontSize='5xl'
													align='left'
													color='#6e3dea'
													style={{
														fontWeight: 'bold'
													}}
												>
													<Property value={<FormValue name="first_name" />} />
												</Text>
											</Flex>
											<Text
												fontSize='4xl'
												align='left'
												style={{
													fontWeight: '600'
												}}
												className='step-header'

											>
												It's good to know that you're interested in subscribing to our newsletter!
											</Text>
										</FormLayout>
									</Box>
								}

								<div style={{ width: '60%', margin: '0 auto' }}>
									{
										isCompleted ?
											<></>
											:
											<>
												{
													isLastStep ?
														<Button
															type='submit'
															colorScheme='purple'
															size='lg'
															width='100%'
															style={{ width: '100%', background: '#bf4217', }}
															onClick={() => {
																if (!isClassNameExist("chakra-form__error-message")) {
																	setProgressBar((prev) => prev + 7.1418)
																}
															}}
														>
															Complete
														</Button>
														:
														<NextButton
															style={{ width: '100%', background: '#bf4217', marginTop: '10px' }}
															size='lg'
															onClick={() => {
																if (!isClassNameExist("chakra-form__error-message")) {
																	setProgressBar((prev) => prev + 7.1418)
																}
															}}
														/>
												}
												<Spacer />

												{
													isFirstStep ?
														<></>
														:
														<PrevButton
															size='lg'
															onClick={() => {
																setProgressBar((prev) => prev - 25)
															}}
															style={{ width: '100%', marginTop: '10px' }}


														/>
												}


											</>
									}
								</div>
							</FormLayout>
						)}
					</StepForm>
				</Box>
			</div>
		</div>
	);
}

export default App;

import { ReceiptText } from "lucide-react";

export default function TermsPage() {
	return (
		<main>
			<section className=" bg-accent-foreground p-6  rounded-xl flex flex-row gap-4 items-center">
				<ReceiptText className="min-h-8 min-w-8 aspect-square text-primary" />
				<h3 className="text-3xl font-bold">Terms & Conditions</h3>
			</section>
			<section className="py-6 rounded-xl">
				<div className="flex flex-col gap-6">
					<section id="introduction">
						<p className="text-primary leading-8">
							Dear customer, by booking a property of The Manzil agrees to abide by the following
							Conditions: The manzil (also referred to in these Terms and Conditions as “we”, “The
							Company”, “The manzil”) arrange bookings of accommodation (and other holiday related
							services). Any reference to either “us” or “we” in these Booking Conditions refers to
							The Manzil References to “you” or “your” are references to the person making the
							booking and all members of the holiday party Any reference to The "Owner(s)" means the
							owners and/or managers/ suppliers of the properties.
						</p>
					</section>
					<section id="payments">
						<h2 className="text-lg font-bold">Payments</h2>
						<ul className="">
							<li className="text-primary leading-8">
								The initial payment required to secure a reservation is 50 percent of the total
								rental price.
							</li>
							<li className="text-primary leading-8">
								The balance of 50 percent will be paid before handing of keys and signing of the
								Terms and conditions agreement.
							</li>
						</ul>
					</section>

					<section id="liability">
						<h2 className="text-lg font-bold">Limitation on Liability</h2>
						<p className="text-primary leading-8">
							Owner is not responsible for any accidents, injuries or illness that occur to any
							member of the Rental Party or Guest's visitors while in the Property or on the
							Property. Owner is not responsible for loss of personal belongings or valuables
							belonging to any member of the Rental Party or any of Guest's visitors. Guest agrees
							to assume the risk of any harm arising from use of the Property.
						</p>
						<p className="text-primary leading-8">
							UNDER NO CIRCUMSTANCES AND UNDER NO LEGAL THEORY, TORT, CONTRACT, STRICT LIABILITY, OR
							OTHERWISE, SHALL OWNER BE LIABLE TO GUEST OR ANY OTHER PERSON FOR ANY DAMAGES OF ANY
							NATURE WHATSOEVER INCLUDING ARISING OUT OF OR RELATING TO THIS AGREEMENT OR GUEST'S
							RENTAL OF THE PROPERTY OR USE OF THE PROPERTY.
						</p>
					</section>

					<section id="cancellation">
						<h2 className="text-lg font-bold">Cancellation</h2>
						<p className="text-primary leading-8">
							If Guest cancels the reservation less than 2 weeks before the Arrival Date, the Total
							deposited will be forfeited, upon discretion of the owner.
						</p>
					</section>

					<section id="behaviour">
						<h2 className="text-lg font-bold">Behaviour</h2>
						<p className="text-primary leading-8">
							You are responsible for keeping the property and all its contents and grounds in the
							same state of cleanliness order and condition as at the commencement of the holiday.
							You will be responsible for the payment for any breakages, loss or damage to the
							property caused by you. The Owner reserves the right to make deductions from the
							security deposit for any extra cleaning, over the number of hours committed to
							departure cleaning, and to claim against you for damage or loss, the cost of which
							exceeds the security deposit.
						</p>
						<p className="text-primary leading-8">
							The person signing the contract is responsible for the correct and decent behaviour of
							all members of the party. Should you or a member of the party not behave in such a
							manner, the Owner may use their absolute discretion to terminate the holiday of the
							person(s) concerned. In this situation, the person(s) concerned will be required to
							leave the accommodation. Neither the Owner nor we will have any further responsibility
							toward such person(s) including any return travel arrangements. No refunds will be
							made and neither the Owner nor we will pay any expenses or costs incurred as a result
							of the termination.
						</p>
						<p className="text-primary leading-8">
							Only the persons stated on the completed Booking Form may use the property unless
							otherwise agreed in advance by us and the Owner. The maximum numbers of people,
							including infants allowed at the property may not be exceeded. The Owner has the right
							to terminate hire without prior notice and without refund or compensation if the
							numbers are exceeded. A pro rata sum will automatically be deducted from your security
							deposit for any additional adults/children.
						</p>
						<p className="text-primary leading-8">
							The property is rented as holiday/short term accommodation. If you intend to organise
							a function (e.g. party, wedding, cocktail party) or any business activity at the
							property, you must seek prior permission from us and the property owner. Additional
							charges and/or an increased security deposit may be sought at the Owner's discretion.
						</p>
						<p className="text-primary leading-8">
							No smoking is allowed inside the property. Clients agree not to smoke, nor to allow
							smoking inside the property at any time. If this is not strictly adhered to and there
							is clear evidence that smoking has occurred (smoke smell, damage or burns) this may
							lead to a deduction from your security deposit.
						</p>
						<p className="text-primary leading-8">
							No Haram food is allowed into the premises, i.e.(Pork, alcohol). If found the Owner
							has the right to charge a heavy penalty upon guest.
						</p>
					</section>

					<section id="music">
						<h2 className="text-lg font-bold">Music</h2>
						<p className="text-primary leading-8">
							Strictly no loud music in the vicinity of The Manzil. The owner has a right to contact
							Guests to reduce music volume at any time of the day.
						</p>
						<p className="text-primary leading-8">
							Loud music is not allowed to respect neighbours and locals living in the area.
						</p>
						<p className="text-primary leading-8">
							If guests want to experience better sound quality and music, the game room may be
							used, to enhance the experience.
						</p>
					</section>

					<section id="insurance">
						<h2 className="text-lg font-bold">Insurance</h2>
						<p className="text-primary leading-8">
							It is highly recommended that all customers purchase comprehensive travel insurance
							prior to their trip, including cover for damage to the property and possible
							cancellation of your trip.
						</p>
						<p className="text-primary leading-8">
							For those who participate in sports and activities whilst on holiday, it should be
							understood that participation is at the individual's own risk and it is your
							responsibility to obtain the relevant insurance.
						</p>
						<p className="text-primary leading-8">
							We cannot be held responsible for any problems arising out of the organization of
							insurance.
						</p>
					</section>

					<section id="security">
						<h2 className="text-lg font-bold">Security and Valuables</h2>
						<p className="text-primary leading-8">
							Any valuables left at the property are left at your own risk. Neither the Owner nor we
							are responsible for any loss.
						</p>
					</section>

					<section id="access">
						<h2 className="text-lg font-bold">Access</h2>
						<p className="text-primary leading-8">
							The Owner or their representative shall be allowed access to inspect the property
							prior to your departure. They also have a right to access the property during your
							stay if urgent maintenance is required.
						</p>
					</section>

					<section id="arrival-departure">
						<h2 className="text-lg font-bold">Arrival and Departure</h2>
						<p className="text-primary leading-8">
							Check in to the property is normally between 3pm and 8pm local time unless previously
							agreed with The Manzil. If your arrival is delayed you must inform the person whose
							details will be provided to you upon payment of the balance.
						</p>
						<p className="text-primary leading-8">
							Earlier check-in times must be requested in advance but may not always be possible.
						</p>
						<p className="text-primary leading-8">
							Check out from the property is at 12.00 pm on the day of departure. Late check outs
							may be requested but are not always possible, as they are subject to the discretion of
							the property owner.
						</p>
					</section>

					<section id="swimming-pool">
						<h2 className="text-lg font-bold">Swimming Pool</h2>
						<p className="text-primary leading-8">
							Please note that swimming pools carry their own inherent risks. Upon arrival at the
							property you and all members of your party must take time to familiarize yourselves
							with the location, layout, and depths of any swimming pool at the property. Please
							take note of any pool warning, depth and other instructions for use, which may be
							displayed. Young children must not be allowed to wander unaccompanied in the grounds
							of any property where there is a swimming pool.
						</p>
						<p className="text-primary leading-8">
							There should be no littering in the pool. Any littering found in the pool may cause a
							reduction in the security deposit.
						</p>
						<p className="text-primary leading-8">
							POOLS ARE USED AT YOUR OWN RISK. ALL CHILDREN MUST BE PROPERLY SUPERVISED.
						</p>
					</section>

					<section id="pets">
						<h2 className="text-lg font-bold">Pets</h2>
						<p className="text-primary leading-8">No pets will be allowed on property.</p>
					</section>

					<section id="other">
						<p className="text-primary leading-8">
							Violation of Agreement. If Guest or any member of the Rental Party violates any of the
							terms of this Agreement, including but not limited to maximum occupancy, visitors and
							rental rules and restrictions, Owner may evict Guest and the Rental Party from the
							Property and Guest will forfeit all rent and security deposit paid.
						</p>
						<p className="text-primary leading-8">
							Entire Agreement. This Agreement represents the entire understanding and agreement
							between the Parties with respect to the subject matter of this Agreement and
							supersedes all other negotiations, understandings and representations (if any) made by
							and between the Parties.
						</p>
					</section>
				</div>
			</section>
		</main>
	);
}

import React from "react";
import "./HybridWorkArrPage.scss";
import { Link } from "react-router-dom";
import { FaAngleRight } from 'react-icons/fa';

function HybridWorkArrPage() {
  return (
    <section className="policy-document">
      <h2>Hybrid Work Arrangement</h2>
      <p>
        Hybrid work arrangements may be used to allow staff members to fulfill
        some or all of their duties from an off-premise location. Enabling
        remote and hybrid work is a strategic business decision, in addition to
        being a benefit for staff members, and is consistent with our
        institutional goals, including:
      </p>
      <ul>
        <li>
          Creating a highly engaged, equitable, diverse, and inclusive
          workforce.
        </li>
        <li>
          Attracting and retaining staff members by providing a work environment
          that is supportive, productive, and flexible.
        </li>
        <li>Sustaining a highly collaborative culture.</li>
        <li>
          Fostering an environment for continued productivity, improvement, and
          excellence.
        </li>
        <li>
          Empowering decisions that prioritize both business needs and staff
          member preferences.
        </li>
        <li>
          Reducing our environmental impact and aligning with the organization’s
          sustainability goals.
        </li>
      </ul>
      <p>
        For these reasons, our company encourages the use of remote and hybrid
        work arrangements and flexible scheduling when appropriate and when in
        alignment with the needs of the teams within business and work units.
        Approval for such arrangements is granted at the discretion of the
        business or work unit and is subject to ongoing and periodic review. The
        determination of staff member eligibility for remote and hybrid work
        will be made in accordance with this policy and the needs of the
        business or work unit.
      </p>
      <h2>This policy applies to</h2>
      <p>
        This policy applies only to staff from business and work units that
        participate in remote and hybrid work arrangements. It does not apply to
        staff from business or work units that do not participate in remote and
        hybrid work arrangements; nor does it apply to union members covered by
        a collective bargaining agreement.
      </p>
      <h2>Position eligibility</h2>
      <p>
        Business or work units are responsible for determining if positions are
        eligible to be remote or hybrid based on their operational and business
        needs.
      </p>
      <p>
        Typically, if all of the duties can be accomplished at an equal or
        higher level at an off-premise location, the position may be appropriate
        for either remote or hybrid work. If a significant portion (but not all)
        of the duties can be accomplished at an equal or higher level at an
        off-premise location, the position may be appropriate for hybrid work.
        The frequency of required on-premise work for a particular position will
        be decided by the appropriate manager.
      </p>
      <p>
        Expectations for timely completion of work, meeting attendance,
        responsiveness, and other performance criteria are the same for remote,
        hybrid, and on-premise staff members. Business or work units are
        expected to apply the same performance standards to staff members
        regardless of work location.
      </p>
      <h2>Staff member eligibility</h2>
      <p>
        Before determining if a staff member is eligible for remote and hybrid
        work, the business or work unit should first determine position
        eligibility (see Section II above). If a position is determined to be
        eligible, the business or work unit should next evaluate if a staff
        member can complete their job functions through a remote or hybrid work
        schedule. Consultation with HR is required when more than one staff
        member holds the same position but not all staff members have been
        determined to be eligible for remote and hybrid work.
      </p>
      <p>
        When evaluating remote or hybrid work eligibility, business or work
        units should consider specific position requirements, needs of the team,
        any existing performance concerns, and whether a staff member can
        optimally perform the job duties of the position while working
        off-premise. Additionally, business or work units must ensure that any
        proposed off-premise work arrangements are conducted consistent with
        applicable regulations and policies.
      </p>
      <p>
        Unless explicitly agreed to in writing, a remote or hybrid work staff
        member’s terms and conditions of employment are the same as those of
        on-premise staff, including required compliance with all company
        policies and applicable federal and state law while working off premise.
      </p>
      <p>
        Regardless of hybrid or remote work arrangements, staff members may be
        required to work from the office at any time at the sole discretion of
        their manager and managers should discuss such instances (e.g., hands-on
        training) with the staff member in advance whenever possible. Decisions
        regarding scheduling and attending meetings in person or virtually
        should be based on optimizing outcomes and not on personal preferences
        for remote work.
      </p>
      <h2>Additional Contacts</h2>
      <p className="policy-document_contact">Human Resources</p>
      <div className="related-documtes_container">
        <Link to="/hybrid-work-arrangements">
          <div className="related-documtes">
            <div>
              <p className="related-documtes_title">Data security - employee personal information </p>
              <p>Jan 24th, 2021</p>
            </div>
            <FaAngleRight />
          </div>
        </Link>
        <Link to="/hybrid-work-arrangements">
          <div className="related-documtes">
            <div>
              <p className="related-documtes_title">Sustainable commute and parking options </p>
              <p>Sept 13th, 2021</p>
            </div>
            <FaAngleRight />
          </div>
        </Link>
        <Link to="/hybrid-work-arrangements">
          <div className="related-documtes">
            <div>
              <p className="related-documtes_title">Health and wellness benifits for hybrid workers  </p>
              <p>Sept 13th, 2021</p>
            </div>
            <FaAngleRight />
          </div>
        </Link>
      </div>
    </section>
  );
}

export default HybridWorkArrPage;

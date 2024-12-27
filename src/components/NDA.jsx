import { LoaderCircle } from "lucide-react";
import React, { useState } from "react";
import { useSearchParams } from "react-router";

const NDADocument = () => {
  const [searchParams] = useSearchParams();
  const fullName = searchParams.get("name") || "[NAME]";
  const userEmail = searchParams.get("email") || "[EMAIL]";
  const discordId = searchParams.get("discord");
  const steamId = searchParams.get("steam");
  const currentDate = new Date().toLocaleDateString();

  const [loading, setLoading] = useState(false);
  const [apiMsg, setApiMsg] = useState();

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl mb-8 text-center">
          Non-Disclosure Agreement for Game Testing
        </h1>

        <p className="mb-6">
          This Non-Disclosure Agreement ("Agreement") is entered into as of{" "}
          {currentDate} ("Effective Date")
        </p>

        <div className="mb-12">
          <p>By and between:</p>
          <br />
          <p>Half Byte Games LLC</p>
          <p>Address: 325 Sunset Drive, Clyde, TX, 79510</p>
          <p>("Disclosing Party")</p>
          <br />
          <p>And:</p>
          <br />
          <p>{fullName}</p>
          <p>Email: {userEmail}</p>
        </div>

        <div className="space-y-6 mb-6">
          <section>
            <h2 className="text-xl mb-2">1. Purpose of Agreement</h2>
            <p>
              The purpose of this Agreement is to permit the Receiving Party to
              participate as a tester for the game "D.A.W.N: Darkness Awaits
              Withstand the Night" ("Game"), developed by the Disclosing Party.
              In the course of this participation, the Receiving Party may be
              provided with, or have access to, Confidential Information (as
              defined below).
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-2">
              2. Definition of Confidential Information
            </h2>
            <p>
              "Confidential Information" means all information disclosed by the
              Disclosing Party to the Receiving Party, whether orally, in
              writing, electronically, or in any other form, that relates to the
              Game, including but not limited to:
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Game concepts, mechanics, and design.</li>
              <li>
                Source code, algorithms, scripts, and any programming-related
                data.
              </li>
              <li>
                Game content, including artwork, audio, maps, and story
                elements.
              </li>
              <li>
                Any discussions regarding future plans, updates, or features of
                the Game.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl mb-2">
              3. Obligations of the Receiving Party
            </h2>
            <p>The Receiving Party agrees to:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                Hold and maintain the Confidential Information in strictest
                confidence, taking reasonable measures to protect it from
                unauthorized disclosure.
              </li>
              <li>
                Not disclose the Confidential Information to any third party
                without the prior written consent of the Disclosing Party.
              </li>
              <li>
                Use the Confidential Information solely for the purpose of
                testing the Game and providing feedback.
              </li>
              <li>
                Take all reasonable precautions to protect the confidentiality
                of the Confidential Information.
              </li>
              <li>
                Immediately notify the Disclosing Party if any unauthorized use
                or disclosure of the Confidential Information occurs.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl mb-2">
              4. Exclusions from Confidential Information
            </h2>
            <p>
              The obligations under this Agreement shall not apply to any
              information that the Receiving Party can demonstrate:
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                Is or becomes publicly known through no wrongful act of the
                Receiving Party.
              </li>
              <li>
                Is already known to the Receiving Party prior to receipt from
                the Disclosing Party.
              </li>
              <li>
                Is independently developed by the Receiving Party without using
                or referring to the Disclosing Party's Confidential Information.
              </li>
              <li>
                Is required to be disclosed by law, regulation, or a valid court
                order.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl mb-2">5. Term</h2>
            <p>
              The Receiving Party's obligation to maintain the confidentiality
              of the Confidential Information shall remain in effect until such
              time as the Confidential Information no longer qualifies as
              confidential or is no longer considered proprietary.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-2">6. Ownership</h2>
            <p>
              The Disclosing Party retains all ownership, title, and interest in
              and to the Game, including all related intellectual property
              rights. This Agreement grants no license, express or implied, to
              the Receiving Party under any intellectual property rights of the
              Disclosing Party.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-2">7. No Warranty</h2>
            <p>
              All Confidential Information is provided "as is." The Disclosing
              Party makes no warranties, express, implied, or otherwise,
              regarding the accuracy or completeness of the Confidential
              Information.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-2">8. Governing Law</h2>
            <p>
              This Agreement shall be governed by, and construed in accordance
              with, the laws of the State of Texas.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-2">9. Miscellaneous</h2>
            <ul className="list-disc ml-6 mt-2">
              <li>
                No Assignment: The Receiving Party shall not assign or transfer
                any rights or obligations under this Agreement without the prior
                written consent of the Disclosing Party.
              </li>
              <li>
                Entire Agreement: This Agreement constitutes the entire
                understanding between the parties with respect to the subject
                matter and supersedes all prior discussions, agreements, or
                understandings of any kind.
              </li>
              <li>
                Amendment: Any amendment or modification to this Agreement must
                be in writing and signed by both parties.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl mb-2">10. Acknowledgement and Acceptance</h2>
            <p>
              By signing this Agreement, the Receiving Party acknowledges that
              they have read and understood this Agreement and agree to be bound
              by its terms and conditions.
            </p>
          </section>

          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mt-10 space-y-8">
              <div>
                <p className="mb-4">Receiving Party:</p>
                <div className="border-b border-black w-64 py-2">
                  <p>{fullName}</p>
                </div>
                <p className="text-sm mt-1">Signature</p>
              </div>

              <div>
                <div className="border-b border-black w-64 py-2">
                  <p>{currentDate}</p>
                </div>
                <p className="text-sm mt-1">Date</p>
              </div>
            </div>

            <div className="md:w-[50%] mt-10 md:mt-0 flex justify-center items-end">
              <button
                className="btn mb-10 flex items-center justify-center gap-2"
                disabled={Boolean(loading || apiMsg)}
                onClick={async () => {
                  setLoading(true);

                  const url =
                    import.meta.env.VITE_API_URL ||
                    "https://hbg-watchtower.net";

                  const result = await fetch(url + "/confirmNDA", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      email,
                      discordId,
                      steamId,
                      fullName,
                    }),
                  });

                  setLoading(false);

                  if (result.ok) {
                    setApiMsg("You are in 🎉🎊");
                  } else {
                    setApiMsg("There's an error 😓");
                    setTimeout(() => {
                      setApiMsg();
                    }, 3000);
                  }
                }}
              >
                {loading ? (
                  <LoaderCircle className="animate-spin" />
                ) : apiMsg ? (
                  apiMsg
                ) : (
                  "Accept"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NDADocument;

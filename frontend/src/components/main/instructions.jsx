import React, { PureComponent } from 'react';

class Instructions extends PureComponent {
  render() {
    const { closeModal } = this.props;
    return (
      <div className="instructions-container">
        <h2 className="instructions-title">
          Welcome to KRMA. Let&#39;s get started!
        </h2>
        <ul className="instructions-steps">
          <li>
            1. Earn Karma by adding meaningful items to the universe.
            Other users will have the opportunity to redeem what you have added, so be thoughtful!
          </li>
          <li>
            2. You can redeem Karma to see what other users have added.
            Life is full of surprises, and we hope that the universe will send you something good!
          </li>
          <li>
            3. Head over to Collection to view all the Karma that you have redeemed.
            Each item is yours, and yours alone. If something doesn&#39;t inspire you, please
            feel free to return it so that others may have a chance to enjoy the good Karma.
          </li>
          <li>
            4. We believe that KRMA should be a safe space to find joy and inspiration. With that in
            mind, we ask that you report anything that may be inappropriate or offensive.
          </li>
          <li>
            And finally: Enjoy KRMA!
          </li>
        </ul>
        <div className="instructions-close-modal-container">
          <div className="instructions-close-modal-button" onClick={() => closeModal()}>
            Got it
          </div>
        </div>
      </div>
    );
  }
}

export default Instructions;

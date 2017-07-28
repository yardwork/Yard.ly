import React from 'react'

const CompletionModal = () => (

  <div
    className="modal fade modal-inverse"
    id="completion-modal"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="mySmallModalLabel"
  >
    <div className="modal-dialog modal-sm" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 className="modal-title" id="myModalLabel">
            Rate your worker!
          </h4>
        </div>
        <div className="modal-body">
          <input type="text" className="form-control" placeholder="Rating"/>
          <input type="text" className="form-control" placeholder="Completion"/>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-default"
            data-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default CompletionModal

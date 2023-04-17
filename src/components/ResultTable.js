import React from 'react'

export default function ResultTable() {
  return (
    <div className='table'>
        <table className='table'>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attempts</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody className='table-body'>
                <tr className='table-body'>
                    <td>Daily Tuition</td>
                    <td>1</td>
                    <td>10</td>
                    <td>Passed</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

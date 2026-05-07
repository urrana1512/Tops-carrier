import React, { useState } from "react";
import { LuUsers, LuUserPlus, LuSearch, LuEye, LuSquarePen, LuTrash2, LuX, LuImage, LuInfo, LuBriefcase, LuIndianRupee, LuCalendar, LuMail, LuPhone, LuChevronLeft, LuChevronRight, LuCircleCheck, LuCircleX, LuShieldCheck } from "react-icons/lu";

function ManageEmployee() {
  const allEmployees = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@example.com",
      phone: "+91 9876543210",
      role: "Manager",
      salary: "45000",
      joinDate: "2024-12-10",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya@gmail.com",
      phone: "+91 9865321470",
      role: "Cashier",
      salary: "25000",
      joinDate: "2025-01-15",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 3,
      name: "Amit Verma",
      email: "amitv@outlook.com",
      phone: "+91 9988776655",
      role: "Delivery Staff",
      salary: "18000",
      joinDate: "2025-02-01",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      id: 4,
      name: "Sneha Joshi",
      email: "sneha.joshi@yahoo.com",
      phone: "+91 9123456780",
      role: "Chef",
      salary: "30000",
      joinDate: "2025-03-20",
      image: "https://randomuser.me/api/portraits/women/26.jpg",
    },
    {
      id: 5,
      name: "Rohit Mehta",
      email: "rohit@example.com",
      phone: "+91 9345678123",
      role: "Support Staff",
      salary: "15000",
      joinDate: "2025-04-05",
      image: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
      id: 6,
      name: "Manisha Patel",
      email: "manisha@gmail.com",
      phone: "+91 9876543210",
      role: "Manager",
      salary: "40000",
      joinDate: "2025-05-10",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      id: 7,
      name: "Vikram Sharma",
      email: "vikram@example.com",
      phone: "+91 9876543210",
      role: "Cashier",
      salary: "25000",
      joinDate: "2025-06-15",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 8,
      name: "Sneha Joshi",
      email: "sneha.joshi@yahoo.com",
      phone: "+91 9123456780",
      role: "Chef",
      salary: "30000",
      joinDate: "2025-07-20",
      image: "https://randomuser.me/api/portraits/women/26.jpg",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEmployee, setSelectedEmployee] = useState(null); 
  const [editEmployee, setEditEmployee] = useState(null); 
  const employeesPerPage = 6;

  const filteredEmployees = allEmployees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);
  const indexOfLast = currentPage * employeesPerPage;
  const indexOfFirst = indexOfLast - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirst, indexOfLast);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = () => {
    console.log("Updated Employee Details:", editEmployee);
    alert("Professional profile updated successfully.");
    setEditEmployee(null);
  };

  const getRoleBadgeClass = (role) => {
    switch(role) {
      case 'Manager': return 'bg-primary text-white';
      case 'Chef': return 'bg-accent text-white';
      case 'Cashier': return 'status-active';
      default: return 'bg-surface text-secondary border';
    }
  };

  return (
    <div className="admin-page-content">
      {/* ✅ Premium Header */}
      <header className="admin-page-header d-flex justify-content-between align-items-end mb-5">
        <div>
          <h1 className="font-display">Guild Directory</h1>
          <p className="text-secondary small">Manage the professional artisans and staff of the Jayhind estate.</p>
        </div>
        <div className="d-flex gap-3 align-items-center">
           <div className="search-minimal-vessel">
              <LuSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Search by name or archive..." 
                className="search-input-minimal"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
           </div>
           <button className="btn-primary py-3 px-4 d-flex align-items-center gap-2">
              <LuUserPlus size={18} /> Add Professional
           </button>
        </div>
      </header>

      {/* ✅ Employee Table */}
      <div className="card-premium p-0 overflow-hidden slide-in-bottom shadow-sm border">
        <div className="table-minimal-wrapper">
          <table className="table-minimal mb-0">
            <thead>
              <tr>
                <th className="ps-4">#</th>
                <th>Artisan</th>
                <th>Position</th>
                <th>Remuneration</th>
                <th>Affiliation Date</th>
                <th className="text-end pe-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentEmployees.length > 0 ? currentEmployees.map((emp, index) => (
                <tr key={emp.id}>
                  <td className="ps-4"><span className="tiny text-tertiary mono">{indexOfFirst + index + 1}</span></td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <div className="avatar-vessel">
                        <img src={emp.image} alt={emp.name} className="avatar-img shadow-sm" />
                        <div className="avatar-ring"></div>
                      </div>
                      <div>
                        <span className="font-weight-600 text-primary d-block small">{emp.name}</span>
                        <span className="tiny text-tertiary">{emp.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`badge-pill ${getRoleBadgeClass(emp.role)} small`}>
                       {emp.role}
                    </span>
                  </td>
                  <td><span className="small text-secondary font-weight-500">₹{parseFloat(emp.salary).toLocaleString()}</span></td>
                  <td><span className="tiny text-tertiary uppercase">{emp.joinDate}</span></td>
                  <td className="text-end pe-4">
                    <div className="d-flex justify-content-end gap-2">
                      <button className="btn-ghost rounded-circle p-2" onClick={() => setSelectedEmployee(emp)}>
                        <LuEye size={18} />
                      </button>
                      <button className="btn-ghost rounded-circle p-2" onClick={() => setEditEmployee(emp)}>
                        <LuSquarePen size={18} />
                      </button>
                      <button className="btn-ghost rounded-circle p-2 text-danger opacity-50 hover-opacity-100">
                        <LuTrash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="6" className="text-center py-5 text-tertiary italic">No staff members found in this directory.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ✅ Pagination */}
      {totalPages > 1 && (
        <footer className="d-flex justify-content-between align-items-center mt-5">
           <span className="tiny text-tertiary uppercase tracking-widest">Directory Page {currentPage} of {totalPages}</span>
           <div className="pagination-minimal">
              <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}><LuChevronLeft /></button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button key={i} className={currentPage === i + 1 ? "active" : ""} onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
              ))}
              <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}><LuChevronRight /></button>
           </div>
        </footer>
      )}

      {/* ✅ Profile Dossier Modal (View) */}
      {selectedEmployee && (
        <div className="modal-overlay-custom" onClick={() => setSelectedEmployee(null)}>
          <div className="card-premium modal-content-custom slide-in-bottom p-0 overflow-hidden" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '450px' }}>
            <div className="profile-header-premium p-5 text-center position-relative bg-surface">
               <button className="btn-close-minimal position-absolute top-0 end-0 m-4" onClick={() => setSelectedEmployee(null)}><LuX /></button>
               <div className="avatar-vessel large mx-auto mb-4">
                  <img src={selectedEmployee.image} alt={selectedEmployee.name} className="avatar-img large shadow-lg" />
                  <div className="avatar-ring large"></div>
               </div>
               <h3 className="font-display mb-1">{selectedEmployee.name}</h3>
               <span className={`badge-pill ${getRoleBadgeClass(selectedEmployee.role)} mb-4`}>{selectedEmployee.role}</span>
            </div>
            
            <div className="p-5 bg-white border-top">
               <div className="row g-4">
                  <div className="col-12 border-bottom pb-3 d-flex justify-content-between align-items-center">
                     <span className="tiny uppercase text-tertiary tracking-widest d-flex align-items-center gap-2"><LuMail size={14} /> Electronic Mail</span>
                     <span className="small text-primary">{selectedEmployee.email}</span>
                  </div>
                  <div className="col-12 border-bottom pb-3 d-flex justify-content-between align-items-center">
                     <span className="tiny uppercase text-tertiary tracking-widest d-flex align-items-center gap-2"><LuPhone size={14} /> Contact Line</span>
                     <span className="small text-primary">{selectedEmployee.phone}</span>
                  </div>
                  <div className="col-12 border-bottom pb-3 d-flex justify-content-between align-items-center">
                     <span className="tiny uppercase text-tertiary tracking-widest d-flex align-items-center gap-2"><LuIndianRupee size={14} /> Monthly Stipend</span>
                     <span className="small font-weight-600 text-primary">₹{parseInt(selectedEmployee.salary).toLocaleString()}</span>
                  </div>
                  <div className="col-12 d-flex justify-content-between align-items-center">
                     <span className="tiny uppercase text-tertiary tracking-widest d-flex align-items-center gap-2"><LuCalendar size={14} /> Affiliation Start</span>
                     <span className="small text-primary">{selectedEmployee.joinDate}</span>
                  </div>
               </div>
            </div>
            
            <footer className="p-4 bg-surface border-top text-center">
               <button className="btn-primary w-100 py-3" onClick={() => setSelectedEmployee(null)}>Dismiss Dossier</button>
            </footer>
          </div>
        </div>
      )}

      {/* ✅ Profile Revision Modal (Edit) */}
      {editEmployee && (
        <div className="modal-overlay-custom" onClick={() => setEditEmployee(null)}>
          <div className="card-premium modal-content-custom slide-in-bottom p-0 overflow-hidden" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '550px' }}>
            <header className="modal-header-elegant p-4 border-bottom d-flex justify-content-between align-items-center bg-surface">
              <h4 className="card-title-elegant mb-0 d-flex align-items-center gap-2">
                <LuSquarePen size={20} className="text-accent" /> Profile Revision
              </h4>
              <button className="btn-close-minimal" onClick={() => setEditEmployee(null)}><LuX /></button>
            </header>
            
            <div className="modal-body-elegant p-5">
               <div className="row g-4">
                  <div className="col-12">
                     <label className="label-elegant mb-2 d-flex align-items-center gap-2"><LuInfo size={14} /> Artisan Name</label>
                     <input type="text" name="name" className="input-elegant" value={editEmployee.name} onChange={handleEditChange} />
                  </div>
                  <div className="col-md-6">
                     <label className="label-elegant mb-2 d-flex align-items-center gap-2"><LuMail size={14} /> Email Archive</label>
                     <input type="email" name="email" className="input-elegant" value={editEmployee.email} onChange={handleEditChange} />
                  </div>
                  <div className="col-md-6">
                     <label className="label-elegant mb-2 d-flex align-items-center gap-2"><LuPhone size={14} /> Contact Line</label>
                     <input type="text" name="phone" className="input-elegant" value={editEmployee.phone} onChange={handleEditChange} />
                  </div>
                  <div className="col-md-6">
                     <label className="label-elegant mb-2 d-flex align-items-center gap-2"><LuBriefcase size={14} /> Assigned Position</label>
                     <select name="role" className="input-elegant" value={editEmployee.role} onChange={handleEditChange}>
                        <option>Manager</option>
                        <option>Cashier</option>
                        <option>Chef</option>
                        <option>Delivery Staff</option>
                        <option>Support Staff</option>
                     </select>
                  </div>
                  <div className="col-md-6">
                     <label className="label-elegant mb-2 d-flex align-items-center gap-2"><LuIndianRupee size={14} /> Stipend (₹)</label>
                     <input type="number" name="salary" className="input-elegant" value={editEmployee.salary} onChange={handleEditChange} />
                  </div>
               </div>
            </div>

            <footer className="p-4 bg-surface border-top d-flex justify-content-end gap-3">
               <button className="btn-ghost px-4" onClick={() => setEditEmployee(null)}>Discard Changes</button>
               <button className="btn-primary px-5 py-3 d-flex align-items-center gap-2" onClick={handleSaveChanges}>
                  <LuShieldCheck size={18} /> Seal Changes
               </button>
            </footer>
          </div>
        </div>
      )}

      <style>{`
        .search-minimal-vessel { position: relative; width: 300px; }
        .search-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: var(--text-tertiary); }
        .search-input-minimal { width: 100%; padding: 12px 16px 12px 48px; border-radius: 100px; border: 1px solid var(--border-subtle); background: var(--bg-surface); font-size: 14px; outline: none; transition: var(--transition-smooth); }
        .search-input-minimal:focus { border-color: var(--accent-primary); box-shadow: 0 0 0 4px rgba(192, 98, 42, 0.05); }

        .avatar-vessel { position: relative; width: 40px; height: 40px; }
        .avatar-img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; position: relative; z-index: 2; }
        .avatar-ring { position: absolute; top: -3px; left: -3px; width: 46px; height: 46px; border: 1px solid var(--accent-primary); border-radius: 50%; opacity: 0.3; }
        
        .avatar-vessel.large { width: 100px; height: 100px; }
        .avatar-img.large { width: 100px; height: 100px; }
        .avatar-ring.large { width: 110px; height: 110px; top: -5px; left: -5px; }

        .hover-opacity-100:hover { opacity: 1 !important; }

      `}</style>
    </div>
  );
}

export default ManageEmployee;

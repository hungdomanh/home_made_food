<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Certificate;

use Auth;
use Log;

class CertificateController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->user()->email == 'admin@gmail.com')
        {
            Log::info('admin: get certificate');
            $certificate = Certificate::get();
            return response()->json(['result'=>true, 'data'=>$certificate], 200);
        }
        else
        {
            return redirect()->route('login');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->user()->email == 'admin@gmail.com')
        {
            Log::info('admin: post certificate');
            $certificate = Certificate::create($request->all());
            return response()->json(['result'=>true, 'data'=>$certificate], 201);
        }
        else
        {
            return redirect()->route('login');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        if ($request->user()->email == 'admin@gmail.com')
        {
            Log::info('admin: delete certificate');
            $certificate = Certificate::find($id);
            $certificate->delete();
            return response()->json(['result'=>true, 'data'=>$certificate], 203);
        }
        else
        {
            return redirect()->back();
        }
    }
}
